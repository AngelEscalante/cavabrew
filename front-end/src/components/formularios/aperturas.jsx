import Form from 'react-bootstrap/Form';
import SelectedData from "../list";
const clientes = [
    { value: '1', label: 'Cliente 1' },
    { value: '2', label: 'Cliente 2' },
    { value: '3', label: 'Cliente 3' }
];
const producto = [
    { value: '1', label: 'Producto 1' },
    { value: '2', label: 'Producto 2' },
    { value: '3', label: 'Producto 3' }
];
function FormAperturas(){
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Cliente</Form.Label>
                <SelectedData lista={clientes} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Acompañantes</Form.Label>
                <Form.Control type="number" placeholder="0" id='acompañantes'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Producto</Form.Label>
                <SelectedData lista={producto} />
            </Form.Group>
            <Form.Group>
                <table className='table data-table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th><button className='btn btn-outline-danger btn-sm'>Eliminar</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input type='checkbox'></input></th>
                            <td>Vino xd</td>
                            <td>50%</td>
                        </tr>
                    </tbody>
                </table>
            </Form.Group>
            
        </Form>
    );
}
export default FormAperturas;