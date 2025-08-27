import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, Navbar, Nav, Modal } from "react-bootstrap";
import { Checkmark } from 'react-checkmark';

const CreateQuizCard = ({ question, setQuestion, format, setFormat, option, setOption, handleAddQuestion }) => {
    const [options, setOptions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleFormatChange = (event) => {
        console.log("clicked format event:", event.target.value);
        const selectedFormat = event.target.value;
        setFormat(selectedFormat);

        if (selectedFormat === "radio" || selectedFormat === "checkbox") {
            console.log("inside if");
            setShowModal(true);
        }
        else
            setOption(['True', 'False']);
    };

    // Handle input change for options
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Add new option field
    const addOptionField = () => {
        setOptions([...options, ""]);
    };

    const saveOptions = () => {
        // remove empty or whitespace-only options
        const cleanedOptions = options.filter(opt => opt.trim() !== "");

        if (cleanedOptions.length === 0) {
            alert("Please enter at least one option before saving.");
            return;
        }

        setOption(cleanedOptions);
        setShowModal(false);
        setOptions([]);
    };

    useEffect(() => {
        console.log("option:", option);
    }, [showModal]);

    useEffect(() => {
        console.log("option:", option);
    }, [option]);

    return (
        <>
            <Container>
                <h1 className="text-center pt-5 mt-3 pb-4 shadow-sm bg-gray rounded">Create Your Customize Quiz</h1>
                <Row className="" style={{ marginTop: "100px" }}>
                    <Col
                        lg={20}
                        md={8}
                        sm={12}
                        className="px-5 pb-5 border m-auto shadow-sm rounded-lg"
                    >
                        <Form>
                            <Form.Group className="mb-3 mt-5" controlId="title">
                                <Form.Label>Enter Question :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="question"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder="Enter Question"
                                />
                            </Form.Group>

                            <Form.Group className="mt-4">
                                <Form.Label>Select Quize Type</Form.Label>
                                <Form.Select
                                    value={format}
                                    onChange={handleFormatChange}
                                >
                                    <option value="" disabled>
                                        Please select question option format
                                    </option>
                                    <option value="radio">Radio Button</option>
                                    <option value="true/false">True/False</option>
                                    <option value="checkbox">Checkbox</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-2 mt-3 d-flex align-items-center gap-3">
                                <Button
                                    onClick={handleAddQuestion}
                                    className="mt-4"
                                    variant="dark secondary btn-block"
                                >
                                    + Add Question
                                </Button>
                                {option.length > 0 && <p style={{ color: "green", marginTop: '15px', marginLeft: "15px" }}> <Checkmark size='medium' /> Choice options saved temparary.</p>}
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {options.map((option, index) => (
                        <Form.Group key={index} className="mb-3">
                            <Form.Control
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${index + 1}`}
                            />
                        </Form.Group>
                    ))}
                    <Button variant="outline-primary" onClick={addOptionField}>+ Add Option</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={saveOptions}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateQuizCard;