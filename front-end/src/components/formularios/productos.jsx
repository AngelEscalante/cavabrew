import Form from 'react-bootstrap/Form';
import SelectedData from "../list";

const grupos = [
    { value: '1', label: 'Vino' },
    { value: '2', label: 'Tequila' },
    { value: '3', label: 'Whisky' }
];
const cantidad = [
    { value: '1', label: '0%' },
    { value: '2', label: '25%' },
    { value: '3', label: '50%' },
    { value: '4', label: '75%' },
    { value: '5', label: '100%' }
];


function FormProductos(){
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" id='nombre'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Grupos</Form.Label>
                <SelectedData lista={grupos} id='nombre'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="0.00" id='precio'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" placeholder="0" id='cantidad'/>
            </Form.Group>
        </Form>
    );
}
export default FormProductos;