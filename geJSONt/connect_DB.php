<?php
session_start(); 
//error_reporting(0); 
header("Content-Type:text/html; charset=utf-8");
$dsn = "mysql:host=localhost;port=3306;dbname=ncsc_ntu;charset=utf8";
$user = "root";
$password = "root";
$options = array (PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo= new PDO($dsn, $user,$password,$options);
?>