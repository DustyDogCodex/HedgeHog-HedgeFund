//component for small newsletter section

import { Container,InputGroup,Form,Button } from "react-bootstrap";

function Newsletter(){
    return(
        <section className="bg-primary text-light p-5">
            <Container>
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="newsletter">Sign Up For Our Newsletter</h3>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="dark" size="lg" id="button-addon2">
                        Subscribe
                        </Button>
                    </InputGroup>
                </div>                
            </Container>
        </section>
    )
}

export default Newsletter