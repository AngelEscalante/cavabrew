<?php
// routes/apertura.php
require_once '../config/database.php';

function registrar_apertura($data) {
    global $db;
    $stmt = $db->prepare("INSERT INTO aperturas (cliente_id, fecha_apertura) VALUES (?, NOW())");
    return $stmt->execute([$data['cliente_id']]);
}

function obtener_aperturas($filtro = null) {
    global $db;
    $query = "SELECT * FROM aperturas";
    if ($filtro) {
        $query .= " WHERE fecha_apertura >= ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$filtro]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    return $db->query($query)->fetchAll(PDO::FETCH_ASSOC);
}

function cerrar_apertura($id) {
    global $db;
    $stmt = $db->prepare("UPDATE aperturas SET fecha_cierre=NOW() WHERE id=?");
    return $stmt->execute([$id]);
}

