import { Navbar , Container } from "react-bootstrap";
import { useState ,useEffect } from "react";
export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const[scolled,seScrolled]=useState('false');

    useEffect(()=>{
        const onScroll =() => {
            if (window.scrollY > 50){
                seScrolled(true);
            } else { 
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateactiveLink = (value) => {
        setActiveLink(value);
    }
return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateactiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateactiveLink('skills')}>Skills</Nav.Link> 
            <Nav.Link href="#projects"className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateactiveLink('projects')}>Projects</Nav.Link>      
          </Nav>
          <span className="navbar-text"> 
            <div className="navbar-text">
                <a href="#"> <img src={} alt=""/> </a>
                <a href="#"> <img src={} alt=""/> </a>
                <a href="#"> <img src={} alt=""/> </a>
                <a href="#"> <img src={} alt=""/> </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect </span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}