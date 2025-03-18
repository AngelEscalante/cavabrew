<?php
$host = 'localhost';
$dbname = 'cava_brew';
$username = 'root';
$password = '';

// Crear conexión
$mysqli = new mysqli($host, $username, $password, $dbname);

// Comprobar la conexión
if ($mysqli->connect_error) {
    die("Error de conexión: " . $mysqli->connect_error);
}
?>
