import React, { useState } from 'react';
import { Form, Button, FormGroup, Row, PageHeader, Col, ControlLabel, FormControl } from 'react-bootstrap';

export default function Basics(props) {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [aboutme, setAboutme] = useState("");


    return (
        <div>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                    <PageHeader>
                        <small>Let's start with some basic details of yourself</small>
                    </PageHeader>
                    <Form>
                        <FormGroup controlId="firstname">
                            <ControlLabel>First Name</ControlLabel>{' '}
                            <FormControl type="text" placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} />
                        </FormGroup>{' '}
                        <FormGroup controlId="lastname">
                            <ControlLabel>Last Name</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} />
                        </FormGroup>{' '}
                        <FormGroup controlId="aboutme">
                            <ControlLabel>About Me</ControlLabel>{' '}
                            <FormControl type="text" placeholder="About Me" value={aboutme} componentClass="textarea" onChange={e => setAboutme(e.target.value)} />
                        </FormGroup>{' '}
                        <Button type="submit">Next</Button>
                    </Form>
                </Col>
            </Row>

        </div>
    );
}