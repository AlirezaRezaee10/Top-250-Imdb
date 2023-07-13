import Container from 'react-bootstrap/Container';
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Search} from "../Search";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Authentication} from "../../Context/Authenticate";
import {GenresList} from "../Genres";
import {GetData} from "../../Services/Http";

export const Header = () => {
    const {isLogin, setIsLogin} = useContext(Authentication)
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        GetData(setLoading, "genres")
            .then(res => {
                console.log(res)
                setGenres(res)
                console.log(genres)
            })
            .then(error => console.log(error))
    },[])
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} sticky='top' bg="dark" variant='dark' expand={expand} className="">
                    <Container className='container' fluid>
                        <Navbar.Brand>
                            <Link to='/'
                                  className="bg-warning p-2 rounded text-decoration-none text-black fw-bolder">IMDb</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                        <Navbar.Offcanvas
                            className='bg-dark text-light'
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link to="/" className="nav-link">Home</Link>
                                    {/*<Nav.Link href="#">Genres</Nav.Link>*/}
                                    <GenresList
                                        genres={genres}
                                        loading={loading}
                                    />
                                    <Search/>
                                    <NavDropdown
                                        title="Profile"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        { !isLogin ?
                                            <Link to="/login" className="nav-link text-black text-center p-2">Log in / Register</Link>
                                            : <>
                                                <NavDropdown.Item className="end-0" href="#action3">
                                                    Action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider/>
                                                <NavDropdown.Item href="#action5" onClick={() => setIsLogin(false)}>
                                                    Log Out
                                                </NavDropdown.Item>
                                            </>
                                        }
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
