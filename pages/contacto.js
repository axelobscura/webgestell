import React from "react";
import Layout from './components/Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contacto() {
  return (
    <Layout>
      <div className="component second-component">
        <h2 className="titularG">Comunícate con nosotros</h2>
        <hr />
        <Form className="contacto">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="NOMBRE COMPLETO" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="APELLIDOS" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="EMAIL" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="EMPRESA" />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ background: '#000', border: 'none'}}>
            ENVIAR DATOS
          </Button>
        </Form>
      </div>
      <style jsx>{`
        .second-component {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100vh;
        }
        .second-component form.contacto {
          width: 90%;
        }
      `}</style>
    </Layout>
  )
}
