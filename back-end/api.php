<?php
require '/routes/empresa.php';
require '/routes/usuario.php';
require '/routes/producto.php';
require '/routes/cliente.php';
require '/routes/apertura.php';
require '/routes/cli_pro_cava.php';

header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_GET['resource'] ?? '', '/'));
$resource = $request[0] ?? '';
$id = $request[1] ?? null;

try {
    $data = json_decode(file_get_contents('php://input'), true) ?? [];
    switch ($method) {
        case 'POST':
            handlePost($resource, $data);
            break;
        case 'GET':
            handleGet($resource, $id);
            break;
        case 'PATCH':
            handlePatch($resource, $id, $data);
            break;
        case 'DELETE':
            handleDelete($resource, $id);
            break;
        default:
            http_response_code(405);
            echo json_encode(['message' => 'Método no permitido']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Error interno', 'error' => $e->getMessage()]);
}

function handlePost($resource, $data) {
    switch ($resource) {
        case 'empresas':
            respond(registrar_empresa($data), 'Empresa registrada', 'Error al registrar la empresa');
            break;
        case 'usuarios':
            respond(registrar_usuario($data), 'Usuario registrado', 'Error al registrar el usuario');
            break;
        case 'productos':
            respond(registrar_producto($data), 'Producto registrado', 'Error al registrar el producto');
            break;
        case 'clientes':
            respond(registrar_cliente($data), 'Cliente registrado', 'Error al registrar el cliente');
            break;
        case 'aperturas':
            respond(registrar_apertura($data), 'Apertura registrada', 'Error al registrar la apertura');
            break;
        case 'asignaciones':
            respond(asignar_producto_cava($data), 'Asignación realizada', 'Error en la asignación');
            break;
        case 'login':
            echo json_encode(login_usuario($data));
            break;
        default:
            http_response_code(400);
            echo json_encode(['message' => 'Recurso no válido']);
    }
}

function handleGet($resource, $id) {
    switch ($resource) {
        case 'empresas':
            echo json_encode(obtener_empresas());
            break;
        case 'usuarios':
            echo json_encode(obtener_usuarios());
            break;
        case 'productos':
            echo json_encode(obtener_productos());
            break;
        case 'clientes':
            echo json_encode(obtener_clientes());
            break;
        case 'aperturas':
            echo json_encode(obtener_aperturas($id));
            break;
        case 'asignaciones':
            echo json_encode(obtener_asignaciones($id));
            break;
        default:
            http_response_code(400);
            echo json_encode(['message' => 'Recurso no válido']);
    }
}

function handlePatch($resource, $id, $data) {
    switch ($resource) {
        case 'empresa':
            respond(actualizar_empresa($id, $data), 'Empresa actualizada', 'Error al actualizar la empresa');
            break;
        case 'usuario':
            respond(actualizar_usuario($id, $data), 'Usuario actualizado', 'Error al actualizar el usuario');
            break;
        case 'producto':
            respond(actualizar_producto($id, $data), 'Producto actualizado', 'Error al actualizar el producto');
            break;
        case 'cliente':
            respond(actualizar_cliente($id, $data), 'Cliente actualizado', 'Error al actualizar el cliente');
            break;
        default:
            http_response_code(400);
            echo json_encode(['message' => 'Recurso no válido']);
    }
}

function handleDelete($resource, $id) {
    switch ($resource) {
        case 'empresa':
            respond(desactivar_empresa($id), 'Empresa desactivada', 'No se puede desactivar la empresa');
            break;
        case 'usuario':
            respond(desactivar_usuario($id), 'Usuario desactivado', 'Error al desactivar el usuario');
            break;
        case 'producto':
            respond(eliminar_producto($id), 'Producto eliminado', 'Error al eliminar el producto');
            break;
        case 'cliente':
            respond(eliminar_cliente($id), 'Cliente eliminado', 'Error al eliminar el cliente');
            break;
        default:
            http_response_code(400);
            echo json_encode(['message' => 'Recurso no válido']);
    }
}

function respond($success, $successMsg, $errorMsg) {
    if ($success) {
        echo json_encode(['message' => $successMsg]);
    } else {
        http_response_code(400);
        echo json_encode(['message' => $errorMsg]);
    }
}
