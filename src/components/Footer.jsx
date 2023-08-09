import { Container } from "react-bootstrap" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"

function Footer(){
    return(
        <footer className="p-2 bg-secondary text-white text-center position-relative">
            <Container>
                <p 
                    className="lead text-warning"
                >
                    Copyright &copy; Varun Malaviya 2023
                </p>

                <a 
                    href="#home" 
                    className="position-absolute bottom-0 end-0 p-2"
                >
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleUp} 
                        style={{height:"40px", color: "#1c71d8",}} 
                    />
                </a>
            </Container>
        </footer>
    )
}

export default Footer