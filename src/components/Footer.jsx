import { Container } from "react-bootstrap"

function Footer(){
    return(
        <footer className="p-5 bg-success text-white text-center position-relative">
            <Container>
                <p className="lead">Copyright &copy; Varun Malaviya 2023</p>
                <a href="#" className="position-absolute bottom-0 end-0 p-5">
                    <i className="bi bi-arrow-up-circle h1 color-primary" style={{background:'blue'}}></i>
                </a>
            </Container>
        </footer>
    )
}

export default Footer