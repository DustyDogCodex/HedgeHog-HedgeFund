import { Col, Container, Row, Card, Button } from "react-bootstrap";

function News(){
    return (
        <section className="p-5" style={{margin:'50px 50px 200px 50px'}}>
            <h2 className="text-center mb-4">News & Insights</h2>
            <Container className="d-flex flex-column align-items-center justify-content-between">
                <Row lg={3} md={1} sm={1} xs={1}>
                    <Col>
                        <Card className="bg-dark text-white">                            
                            <Card.Img src="../images/handshake.jpg" alt="presidents shaking hands" />
                            <Card.ImgOverlay>
                            <Container className="bg-light text-dark p-2" style={{position:'relative', top:'140px', border:'1px solid black'}}>
                                <Card.Title>HHF solves Middle-East</Card.Title>
                                    <Card.Text>
                                        After years of multilateral conversations, HedgeHog Hedge Fund was finally able to bring all parties to cease hostilities and usher in a new yea of peace for all countries in the Middle-East.
                                    </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Container>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">                            
                            <Card.Img src="../images/nuclear-fusion.jpg" alt="nuclear fusion" />
                            <Card.ImgOverlay>
                            <Container className="bg-light text-dark p-2" style={{position:'relative', top:'140px', border:'1px solid black'}}>
                                <Card.Title>HHF makes nuclear fusion a reality</Card.Title>
                                    <Card.Text>
                                        The International Thermonuclear Experimental Reactor (ITER) project was able to achieve sustained nuclear fusion reactions, decades ahead of most people's expectations.
                                    </Card.Text>
                                <Card.Text>Last updated 8 mins ago</Card.Text>
                            </Container>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">                            
                            <Card.Img src="../images/handshake.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                            <Container className="bg-light text-dark p-2" style={{position:'relative', top:'140px', border:'1px solid black'}}>
                                <Card.Title>Cancer solved!</Card.Title>
                                    <Card.Text>
                                        Big Pharma, a wholly owned subsidiary of HHF, brought to market Panacea &#169; this week, finally getting rid of cancer and saving billions of lives.
                                    </Card.Text>
                                <Card.Text>Last updated 8 mins ago</Card.Text>
                            </Container>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Button variant="primary" className="text-light p-3" style={{marginTop:'120px', alignItems:'center', width:'250px'}}>Browse More HHF News</Button>
            </Container>
        </section>
    )
}

export default News