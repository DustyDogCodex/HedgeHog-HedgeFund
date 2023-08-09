/* Accordion FAQ section */
import { Container, Accordion } from "react-bootstrap";

function FAQAccordion(){
    return(
        <section className="p-5 bg-info">
            <Container>
                <h1 className="text-light mb-4">Frequently Asked Questions</h1>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5>Is this a real hedge fund?</h5></Accordion.Header>
                            <Accordion.Body>
                                No, this website is an idea I came up with because I was looking for a way to practice my bootstrap/designing skills. But after creating this website ... not a day goes by where I am wishing for these hedge hogs to be the hedgendary financial hogs that I know they can be.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h5>Wow this website is so cool! How do I hire the guy who built this super awesome, completely hireable project?</h5></Accordion.Header>
                            <Accordion.Body>
                                You can contact me via <a href="https://github.com/DustyDogCodex">Github</a>, on<a href="https://twitter.com/VarunMalaviya2">this chaotic bird zoo</a> or by sending me a message through my <a href="https://dustydogcodex.github.io/personal-portfolio/">portfolio</a>! I look forward to hearing from you :)
                            </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h5>Were any hedgehogs harmed in the making of this website?</h5></Accordion.Header>
                            <Accordion.Body>
                                While I did not have PETA watching over me as I coded this website, I can definitely asure you that I did not physically, emotionally, financially or spiritually harm any hedgehogs while making this website. The images used here were generated using an AI.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    )
}

export default FAQAccordion