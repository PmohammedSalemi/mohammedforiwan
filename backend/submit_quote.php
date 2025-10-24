<?php
// Simple form handler to insert inquiries into MySQL (XAMPP)
// Usage: point your HTML form action to this file with method="POST"

// Ensure POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Method Not Allowed';
    exit;
}

// Collect inputs
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');
// Optional service identifier
$serviceId = trim($_POST['service_id'] ?? '');

// Basic validation
$errors = [];
if ($name === '')   $errors[] = 'الاسم مطلوب';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'البريد الإلكتروني غير صالح';
if ($phone === '')  $errors[] = 'رقم الهاتف مطلوب';
if ($message === '') $errors[] = 'الرسالة مطلوبة';

if ($errors) {
    http_response_code(400);
    header('Content-Type: text/html; charset=utf-8');
    echo '<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><title>خطأ</title><body>';
    echo '<h3>تعذر إرسال الطلب</h3><ul>';
    foreach ($errors as $e) echo '<li>' . htmlspecialchars($e, ENT_QUOTES, 'UTF-8') . '</li>';
    echo '</ul><p><a href="../index.html">العودة للصفحة الرئيسية</a></p></body></html>';
    exit;
}

// Connect to DB
require __DIR__ . '/db.php'; // provides $mysqli

// Prepare insert (include service_id if provided)
if ($serviceId !== '') {
    $sql = 'INSERT INTO inquiries (name, email, phone, message, service_id) VALUES (?,?,?,?,?)';
    $stmt = $mysqli->prepare($sql);
} else {
    $sql = 'INSERT INTO inquiries (name, email, phone, message) VALUES (?,?,?,?)';
    $stmt = $mysqli->prepare($sql);
}
if (!$stmt) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'فشل تجهيز الاستعلام';
    exit;
}
$types = '';
if ($serviceId !== '') {
    $types = 'sssss';
    $stmt->bind_param($types, $name, $email, $phone, $message, $serviceId);
} else {
    $types = 'ssss';
    $stmt->bind_param($types, $name, $email, $phone, $message);
}
$ok = $stmt->execute();

if (!$ok) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'فشل إدخال البيانات: ' . $stmt->error;
    exit;
}

$stmt->close();
$mysqli->close();

// Success HTML
header('Content-Type: text/html; charset=utf-8');
?>
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>تم استلام الطلب</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;display:grid;place-items:center;min-height:100vh;background:#f7f7f7;color:#222;margin:0}
    .card{background:#fff;padding:24px 28px;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,.08);max-width:520px}
    .card h1{font-size:20px;margin:0 0 8px}
    .card p{margin:6px 0}
    .btn{display:inline-block;margin-top:14px;padding:10px 14px;background:#111;color:#fff;text-decoration:none;border-radius:8px}
  </style>
</head>
<body>
  <div class="card">
    <h1>شكرًا لك!</h1>
    <p>تم استلام طلب عرض السعر بنجاح.</p>
    <p>سنقوم بالتواصل معك قريبًا.</p>
    <a class="btn" href="../index.html">العودة للصفحة الرئيسية</a>
  </div>
</body>
</html>
