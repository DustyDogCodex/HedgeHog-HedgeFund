import { Container } from "react-bootstrap" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"

function Footer(){
    return(
        <footer className="p-2 bg-secondary text-white text-center position-relative">
            <Container>
                <p 
                    className="lead text-warning text-sm"
                >
                    Created with ❤️ by &copy; Varun Malaviya 2023
                </p>

                {/* button to return to the top/home section */}
                <a 
                    href="#home" 
                    className="position-absolute bottom-0 end-0 p-2"
                >
                    <FontAwesomeIcon 
                        icon={faArrowAltCircleUp} 
                        style={{ color:'gold', height:"40px" }} 
                    />
                </a>
            </Container>
        </footer>
    )
}

export default Footer