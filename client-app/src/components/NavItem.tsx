import React, {useEffect, useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import http from "../http-common"

const NavLine = () => {

    const[navItems, setNavItems] = useState([])

    useEffect(() => {
        const get_header_blocks = async() => {
            await http.get('/api/get-nav-item')
            .then((result:any) => {
                console.log("ЭТООО", result.data)
                setNavItems(result.data)
            })
        }
        get_header_blocks()
    }, [])

    return(
        <Navbar expand="lg">
            <Navbar.Brand href="#home"><img src="./media/logo.png" alt="img"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home" id="home_link">Главная</Nav.Link>
                    {navItems &&
                        navItems.map((Item, idx) => (
                            <Nav.Link href="#" id="home_link" key={idx}>{Item['title']}</Nav.Link>
                    ))} 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavLine