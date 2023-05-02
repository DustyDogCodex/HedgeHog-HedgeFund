import { Container, Nav, NavItem, NavLink, Navbar} from "react-bootstrap";

function NavbarComponent(){
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <a href="#home" style={{textDecoration: 'none'}}><Navbar.Brand>HedgeHog Hedge Fund</Navbar.Brand></a>

                <Navbar.Toggle aria-controls="navmenu"></Navbar.Toggle>

                <Navbar.Collapse id="navmenu">
                    <Nav className="ms-auto">
                        <NavItem>
                            <NavLink href="#funds">Funds</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#strategies">Investments</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#about'>About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent