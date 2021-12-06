import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs';

import './Navbar.css';

export default function App() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand href="#">Genshin Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarContent" />
        <Navbar.Collapse id="navbarContent">
          <Nav className="ms-auto">
            <Nav.Link href="#">Início</Nav.Link>
            <Nav.Link href="#">Tarefas</Nav.Link>
            <NavDropdown title="Artefatos" id="artifacts-dropdown">
              <NavDropdown.Item href="#">Meus artefatos</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Artefatos recomendados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Lista completa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cálculos" id="calculations-dropdown">
              <li className="text-muted ps-3">Preço para evoluir:</li>
              <div className="ps-2">
                <NavDropdown.Item href="#">Personagens</NavDropdown.Item>
                <NavDropdown.Item href="#">Armas</NavDropdown.Item>
                <NavDropdown.Item href="#">Talentos</NavDropdown.Item>
                <NavDropdown.Item href="#">Artefatos</NavDropdown.Item>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Ganho de Gemas Essenciais
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Probabilidades no Gacha
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Calendário</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              className="text-warning d-flex align-items-center"
              href="#"
            >
              <BsPersonCircle className="" />
              <span className="ps-2">Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
