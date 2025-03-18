<?php
require '../config/config.php';

// Registrar Usuario (POST)
function registrar_usuario($data) {
    global $mysqli;
    $query = "CALL registrar_usuario(?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $password_hash = password_hash($data['password'], PASSWORD_BCRYPT);
    $stmt->bind_param(
        "ssssii",
        $data['nombre'],
        $data['usuario'],
        $password_hash,
        $data['rol'],
        $data['permisos'],
        $data['empresa']
    );
    $stmt->execute();
    return $stmt->affected_rows > 0;
}

// Obtener todos los Usuarios (GET)
function obtener_usuarios() {
    global $mysqli;
    $query = "SELECT * FROM usuarios";
    $result = $mysqli->query($query);
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Actualizar Usuario (PATCH)
function actualizar_usuario($id, $data) {
    global $mysqli;
    $query = "CALL actualizar_usuario(?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $password_hash = password_hash($data['password'], PASSWORD_BCRYPT);
    $stmt->bind_param(
        "issssssii",
        $id,
        $data['nombre'],
        $data['usuario'],
        $password_hash,
        $data['rol'],
        $data['permisos'],
        $data['empresa']
    );
    $stmt->execute();
    return $stmt->affected_rows > 0;
}

// Desactivar Usuario (PUT)
function desactivar_usuario($id) {
    global $mysqli;
    $query = "UPDATE usuarios SET estatus = 0 WHERE id = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    return $stmt->affected_rows > 0;
}

// Iniciar Sesión (LOGIN)
function login_usuario($usuario, $password) {
    global $mysqli;
    $query = "SELECT id, nombre, usuario, password, rol, permisos, empresa, estatus FROM usuarios WHERE usuario = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verificar si el usuario está activo
        if ($user['estatus'] == 0) {
            return ["success" => false, "message" => "Usuario inactivo."];
        }

        // Verificar la contraseña
        if (password_verify($password, $user['password'])) {
            return [
                "success" => true,
                "message" => "Inicio de sesión exitoso.",
                "user" => [
                    "id" => $user['id'],
                    "nombre" => $user['nombre'],
                    "usuario" => $user['usuario'],
                    "rol" => $user['rol'],
                    "permisos" => $user['permisos'],
                    "empresa" => $user['empresa']
                ]
            ];
        } else {
            return ["success" => false, "message" => "Contraseña incorrecta."];
        }
    } else {
        return ["success" => false, "message" => "Usuario no encontrado."];
    }

?>
