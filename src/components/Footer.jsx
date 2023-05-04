import { Container } from "react-bootstrap" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

function Footer(){
    return(
        <footer className="p-5 bg-dark text-white text-center position-relative">
            <Container>
                <p className="lead">Copyright &copy; Varun Malaviya 2023</p>
                <a href="#" className="position-absolute bottom-0 end-0 p-5">
                    <FontAwesomeIcon icon={faArrowUp} style={{height:"40px", color: "#1c71d8",}} />
                </a>
            </Container>
        </footer>
    )
}

export default Footer