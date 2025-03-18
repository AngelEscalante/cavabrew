<?php
// routes/productos.php
require_once '../config/database.php';

function crear_producto($data) {
    global $db;
    $stmt = $db->prepare("INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)");
    return $stmt->execute([$data['nombre'], $data['descripcion'], $data['precio']]);
}

function obtener_productos() {
    global $db;
    return $db->query("SELECT * FROM productos")->fetchAll(PDO::FETCH_ASSOC);
}

function actualizar_producto($id, $data) {
    global $db;
    $stmt = $db->prepare("UPDATE productos SET nombre=?, descripcion=?, precio=? WHERE id=?");
    return $stmt->execute([$data['nombre'], $data['descripcion'], $data['precio'], $id]);
}

function eliminar_producto($id) {
    global $db;
    $stmt = $db->prepare("DELETE FROM productos WHERE id=?");
    return $stmt->execute([$id]);
}

