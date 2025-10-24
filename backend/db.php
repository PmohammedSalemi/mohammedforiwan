<?php
// Database connection settings for XAMPP (MySQL)
// Adjust these if you changed the defaults in XAMPP/phpMyAdmin
$DB_HOST = '127.0.0.1';
$DB_USER = 'root';
$DB_PASS = '';
$DB_NAME = 'ewan_site';
$DB_CHARSET = 'utf8mb4';

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($mysqli->connect_errno) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'فشل الاتصال بقاعدة البيانات: ' . $mysqli->connect_error;
    exit;
}

if (!$mysqli->set_charset($DB_CHARSET)) {
    // Continue but warn
}
