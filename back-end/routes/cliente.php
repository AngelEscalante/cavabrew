<?php
// routes/clientes.php
require_once '../config/database.php';

function crear_cliente($data) {
    global $db;
    $stmt = $db->prepare("INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)");
    return $stmt->execute([$data['nombre'], $data['email'], $data['telefono']]);
}

function obtener_clientes() {
    global $db;
    return $db->query("SELECT * FROM clientes")->fetchAll(PDO::FETCH_ASSOC);
}

function actualizar_cliente($id, $data) {
    global $db;
    $stmt = $db->prepare("UPDATE clientes SET nombre=?, email=?, telefono=? WHERE id=?");
    return $stmt->execute([$data['nombre'], $data['email'], $data['telefono'], $id]);
}

function eliminar_cliente($id) {
    global $db;
    $stmt = $db->prepare("DELETE FROM clientes WHERE id=?");
    return $stmt->execute([$id]);
}

