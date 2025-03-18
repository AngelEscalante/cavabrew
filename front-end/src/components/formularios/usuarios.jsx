import SelectedData from "../list";
import Form from 'react-bootstrap/Form';

const perfiles = [
    { value: '1', label: 'Administrador' },
    { value: '2', label: 'Cajero' },
    { value: '3', label: 'Perfil 3' }
];

function FormUsuarios() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre Real</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirmación de Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Confirmación" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Perfil</Form.Label>
                <SelectedData lista={perfiles} />
            </Form.Group>
            <div className="text-end">
                
            </div>
        </Form>
    );
}

export default FormUsuarios;
