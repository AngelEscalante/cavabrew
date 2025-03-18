<?php
require '../config/config.php';

// Registrar Empresa (POST)
function registrar_empresa($data) {
    global $mysqli;
    $query = "CALL registrar_empresa(?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param(
        "ssssssi",
        $data['nombre_comercial'],
        $data['razon_social'],
        $data['rfc'],
        $data['telefono'],
        $data['correo'],
        $data['direccion'],
        $data['estatus']
    );
    $stmt->execute();
    return $stmt->affected_rows > 0;
}

// Obtener todas las Empresas (GET)
function obtener_empresas() {
    global $mysqli;
    $query = "SELECT * FROM empresa";
    $result = $mysqli->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Actualizar Empresa (PATCH)
function actualizar_empresa($id, $data) {
    global $mysqli;
    $query = "CALL actualizar_empresa(?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param(
        "issssssii",
        $id,
        $data['nombre_comercial'],
        $data['razon_social'],
        $data['rfc'],
        $data['telefono'],
        $data['correo'],
        $data['direccion'],
        $data['estatus']
    );
    $stmt->execute();
    return $stmt->affected_rows > 0;
}

// Desactivar Empresa (PUT)
function desactivar_empresa($id) {
    global $mysqli;
    // Verificar si existen registros relacionados
    $check_query = "SELECT COUNT(*) FROM clientes WHERE empresa = ?";
    $stmt = $mysqli->prepare($check_query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();

    if ($count == 0) {
        $query = "UPDATE empresa SET estatus = 0 WHERE id = ?";
        $stmt = $mysqli->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->affected_rows > 0;
    }

    return false; // No puede desactivarse si tiene registros
}
?>
