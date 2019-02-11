import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';
const SideBarView = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark pl-0" id="sidebar" role="navigation">
            <Nav defaultActiveKey="/home" className="flex-column" >
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/table">Table</Link></li>
                    <li><Link to="/layouts">Layouts</Link></li>
                    <li><Link to="/masonry">Masonry</Link></li>
                </ul>
                <Nav.Link href="/home">Getting Started</Nav.Link>
                <Nav.Link eventKey="Charts">Charts</Nav.Link>
                <Nav.Link eventKey="News">News</Nav.Link>
                <Nav.Link eventKey="Tables"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link eventKey="Tables"><Link to="/table">Tables</Link></Nav.Link>
                <Nav.Link eventKey="Menus">Menus</Nav.Link>
                <Nav.Link eventKey="Typography">Typography</Nav.Link>
                {/* <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link> */}
                <NavDropdown title="Others" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
}

export default SideBarView
