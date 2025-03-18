//src/routes/page/login.jsx
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import LogoLogin from '../../components/logo_login';
import '../../styles/login.css'; // Importa los estilos
import api from '../../utils/axiosConfig';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!usuario || !password) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        try {
            // Consumo del servicio de login
            const response = await api.post('/auth/login', { usuario, password });

            // Si el login es exitoso, guarda el token y redirige al usuario
            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
                navigate('/dashboard'); // Redirige al dashboard o a la página principal
            }
        } catch (error) {
            // Manejo de errores
            setError('Error al iniciar sesión. Verifica tus credenciales.');
            console.error('Error en el login:', error.response?.data || error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="login-container">
                <Card className="login-card bg-secondary">
                    <Card.Body className="login-body">
                        <div className="logo-container">
                            <LogoLogin />
                            <h4 className="login-title text-light">CAVABREW SISTEM</h4>
                            <p className="login-subtitle text-light">Powered by Nexuzglobal</p>
                        </div>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario</Form.Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    placeholder="Usuario"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña"
                                    required
                                />
                            </Form.Group>

                            <div className="text-end">
                                <Button variant="dark" type="submit">Login</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
