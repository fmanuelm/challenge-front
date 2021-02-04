import { Fragment, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContext } from "../../UserContext";

export default function Header() {
    const {text, setText} = useContext(UserContext); // Declara Los hooks que manejan el estado

    // funcion asincrona para leer la ruta al api que hice en nodejs
    async function sendAPI () {
        const urlAPI = `http://localhost:7000/iecho?text=${text}`;
        const response = await fetch(urlAPI);
        const responseJSON = await response.json(); // convierte en json
        setText(responseJSON.text); // lo guarda en el hook
    }

    return (
        <Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto ml-auto">
                <Form inline>
                    <FormControl type="text" placeholder="Input Text" className="mr-sm-2" onChange={text => setText(text.target.value)}/>
                    <Button variant="primary" onClick={() => sendAPI()}>Send</Button>
                </Form>
            </Nav>
            
        </Navbar>
        </Fragment>
    );
}