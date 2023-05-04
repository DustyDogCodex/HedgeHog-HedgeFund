//the first section of the website seen by users
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useState } from "react";

function Showcase(){

    //state for toggling modals
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <section className="bg-dark text-light p-5 text-center text-sm-start" >
            <Container className="p-3">
                <div className="d-md-flex align-items-center justify-content-between">
                    <div className="p-2">
                        <h1>Let Your Money <span className="text-success">Make You Money</span></h1>

                        <p className="lead my-4">Each investor has a different story, and we are steadfast partners to our clients in the US because we listen to every one of them. Our full range of funds is one way we’re helping more investors build solid financial futures.</p>

                        <Button variant="primary" size="lg" onClick={handleShow}>Contact The Hogs</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Contact Us</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Please leave your information below and we will contact you in between making preposterous amounts of money and spinning on our wheels.</p>
                               <Form>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your full name"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email address"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Phone:</Form.Label>
                                        <Form.Control type="phone" placeholder="Enter your phone number"></Form.Control>
                                    </Form.Group>
                               </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <img className="img-fluid w-55 d-none d-sm-block" src="../images/stocks.jpg" alt="stocks going up" />
                </div>
            </Container>
        </section>
    )
}

export default Showcase