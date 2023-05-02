//the first section of the website seen bby users

import { Button, Container } from "react-bootstrap";

function Showcase(){
    return(
        <section className="bg-dark text-light p-5 text-center text-sm-start" >
            <Container>
                <div className="d-md-flex align-items-center justify-content-between">
                    <div>
                        <h1>Let Your Money <span className="text-success">Make You Money</span></h1>
                        <p className="lead my-4">Each investor has a different story, and we are steadfast partners to our clients in the US because we listen to every one of them. Our full range of funds is one way we’re helping more investors build solid financial futures.</p>
                        <Button variant="primary" size="lg">Contact The Hogs</Button>
                    </div>
                    <img className="img-fluid w-50 d-none d-sm-block" src="../images/stocks.jpg" alt="stocks going up" />
                </div>
            </Container>
        </section>
    )
}

export default Showcase