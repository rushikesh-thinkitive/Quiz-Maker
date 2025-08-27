import { useEffect, useState } from "react";
import { Container, Row, Col, Form, FloatingLabel, Button, Card } from "react-bootstrap";
import { toast } from 'react-toastify';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        number: '',
        gender: '',
        role: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        })
        )
    };

    const handleSubmit = () => {
        console.log('submit:', formData);
    
        // Destructure for cleaner validation checks
        const { firstName, lastName, email, password, confirmPassword, number, gender, role } = formData;
    
        // Check if any field is empty
        if (!firstName || !lastName || !email || !password || !confirmPassword || !number || !gender || !role) {
            toast.error('All fields are required');
            return;
        }
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email');
            return;
        }
    
        // Validate mobile number (must be exactly 10 digits)
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(number)) {
            toast.error('Mobile number must be exactly 10 digits');
            return;
        }
    
        // Validate password match
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
    
        // If all validations pass, show success message and reset form
        toast.success('User Created Successfully');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            number: '',
            gender: '',
            role: ''
        });
    };    

    useEffect(()=>{
        console.log('formData:', formData);
    }, [formData]);

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-lg rounded-lg" style={{ width: "50rem" }}>
                <Card.Body>
                    <h3 className="text-center mb-4">Create an Account</h3>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="firstName" label="First Name">
                                    <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={(e)=>handleChange(e)} required />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="lastName" label="Last Name">
                                    <Form.Control type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={(e)=>handleChange(e)} required />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="email" label="Email Address">
                                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={(e)=>handleChange(e)} required />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="password" label="Password">
                                    <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={(e)=>handleChange(e)} required />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="confirmPassword" label="Confirm Password">
                                    <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={(e)=>handleChange(e)} required />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel controlId="phone" label="Phone Number">
                                    <Form.Control type="tel" placeholder="Phone Number" name="number" value={formData.number} onChange={(e)=>handleChange(e)} required />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="gender" label="Gender">
                                    <Form.Select name="gender" value={formData.gender} onChange={(e)=>handleChange(e)} >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col>
                                <FloatingLabel controlId="role" label="Role">
                                    <Form.Select name="role" value={formData.role} onChange={(e)=>handleChange(e)} >
                                        <option value="">Select Role</option>
                                        <option value="quizmaker">Quiz Maker</option>
                                        <option value="quiztaker">Quiz Taker</option>
                                        <option value="admin">Admin</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <div className="text-center">
                            <Button size="lg" className="w-100 bg-primary text-white" onClick={handleSubmit}>
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SignUp;