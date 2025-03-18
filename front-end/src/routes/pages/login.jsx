// src/routes/page/login.jsx
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import LogoLogin from '../../components/logo_login';
import '../../styles/login.css'; // Importa los estilos
import api from '../../utils/axiosConfig';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!usuario || !password) {
            Swal.fire({
                title: 'Error!',
                text: 'Por favor, completa todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        try {
            // Consumo del servicio de login
            const response = await api.post('/api.php?resource=login', { usuario, password });
            console.log(response);
            console.log("hubo login")
            // Si el login es exitoso
            if (response.data.success) {
                // Guardar la información del usuario en localStorage
                localStorage.setItem('user', JSON.stringify(response.data.user));

                // Redirigir al dashboard
                navigate('/dashboard');
            } else {
                // Mostrar mensaje de error del backend
                Swal.fire({
                    title: 'Error!',
                    text: response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        } catch (error) {
            // Manejo de errores de red o del servidor
            Swal.fire({
                title: 'Error!',
                text: 'Error al conectarse con el servidor. Inténtalo de nuevo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-light">Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    placeholder="Usuario"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-light">Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña"
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