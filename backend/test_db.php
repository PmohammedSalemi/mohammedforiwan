<?php
header('Content-Type: text/plain; charset=utf-8');

// Basic DB connectivity and simple read test
require __DIR__ . '/db.php'; // provides $mysqli

// Check database name
if (!$mysqli->select_db('ewan_site')) {
    http_response_code(500);
    echo "تعذر تحديد قاعدة البيانات ewan_site";
    exit;
}

// Ensure table exists (read-only verification)
$res = $mysqli->query("SHOW TABLES LIKE 'inquiries'");
if (!$res || $res->num_rows === 0) {
    http_response_code(500);
    echo "جدول inquiries غير موجود";
    exit;
}

// Read a simple count
$count = 0;
$q = $mysqli->query('SELECT COUNT(*) AS c FROM inquiries');
if ($q) {
    $row = $q->fetch_assoc();
    $count = (int)($row['c'] ?? 0);
}

// Success output
echo "اتصال قاعدة البيانات ناجح.\n";
echo "قاعدة البيانات: ewan_site\n";
echo "الجدول: inquiries\n";
echo "عدد السجلات الحالية: {$count}\n";

$mysqli->close();
