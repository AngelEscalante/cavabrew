import SelectedData from "../list";
import Form from 'react-bootstrap/Form';

const membresia = [
    { value: '1', label: 'Bronce' },
    { value: '2', label: 'Plata' },
    { value: '3', label: 'Oro' }
];

function FormClientes() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control type="text" placeholder="Apellido Paterno" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control type="text" placeholder="Apellido Materno" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Dirección" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Telefono" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Membresia</Form.Label>
                <SelectedData lista={membresia} />
            </Form.Group>
            <div className="text-end">
                
            </div>
        </Form>
    );
}

export default FormClientes;