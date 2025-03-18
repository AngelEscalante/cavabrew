import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import LogoLogin from '../../components/logo_login';
import '../../styles/login.css'; // Importa los estilos

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulación de autenticación
    navigate("/dashboard");
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
                            <Form.Control type="text" placeholder="Usuario" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>

                        <div className="text-end">
                            <Button variant="dark" type="submit" onClick={handleLogin}>Login</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    </div>
  );
}
