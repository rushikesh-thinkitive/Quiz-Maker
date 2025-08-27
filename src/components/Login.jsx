import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./css/login.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { FaCheckCircle } from "react-icons/fa";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleRoleChange = (e) => {
        console.log("event:",e.target.value);
        setRole(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`username:${username} password: ${password} role:${role}`);
        if(username!=='' && password!=='' && role!=='') {
            toast.success('Login Successful!');
            localStorage.setItem("user",JSON.stringify({username:username, role:role}));
            navigate('/createquiz');
        }
    }

    return (
        <div className="login-page">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={5} md={6} sm={12} className="p-5 login-card">
                        <h3 className="login-title">Login Page</h3>
                        <Form method="POST" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter Your Email"
                                    className="input-field"
                                />
                            </Form.Group>

                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Your Password"
                                    className="input-field"
                                />
                            </Form.Group>
                            
                            <Form.Group className="mt-4" controlId="formBasicPassword">
                                <Form.Label>Select Role</Form.Label>
                                <Form.Select
                                    value={role}
                                    onChange={(e)=>handleRoleChange(e)}
                                    style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}
                                >
                                    <option value="" disabled>
                                        Please Select Role :
                                    </option>
                                    <option value="quizMaker">Quiz Maker</option>
                                    <option value="quizTaker">Quiz Taker</option>
                                    <option value="admin">Admin</option>
                                </Form.Select>
                            </Form.Group>

                            <Button className="mt-4 login-btn" type="submit">
                                User Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
