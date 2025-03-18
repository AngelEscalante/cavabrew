<?php
// routes/cli_pro_cava.php
require_once '../config/database.php';

function asignar_producto_a_cava($data) {
    global $db;
    $stmt = $db->prepare("INSERT INTO cli_pro_cava (cliente_id, producto_id, cantidad) VALUES (?, ?, ?)");
    return $stmt->execute([$data['cliente_id'], $data['producto_id'], $data['cantidad']]);
}

function obtener_asignaciones() {
    global $db;
    return $db->query("SELECT * FROM cli_pro_cava")->fetchAll(PDO::FETCH_ASSOC);
}

function eliminar_asignacion($id) {
    global $db;
    $stmt = $db->prepare("DELETE FROM cli_pro_cava WHERE id=?");
    return $stmt->execute([$id]);
}
