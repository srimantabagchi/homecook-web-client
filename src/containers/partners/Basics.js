import React, { useState } from 'react';
import { Form, Button, FormGroup, Row, PageHeader, Col, ControlLabel, FormControl } from 'react-bootstrap';
import { API } from "aws-amplify";

export default function Basics(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {

            await createPartner({ firstName, lastName, aboutMe });
            props.history.push("/partner/about");
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }
    function createPartner(partner) {
        return API.post("homecook", "/partners", {
            body: partner
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <PageHeader>
                            <small>Let's start with some basic details of yourself</small>
                        </PageHeader>
                        <FormGroup controlId="firstName">
                            <ControlLabel>First Name</ControlLabel>{' '}
                            <FormControl type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </FormGroup>{' '}
                        <FormGroup controlId="lastname">
                            <ControlLabel>Last Name</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </FormGroup>{' '}
                        <FormGroup controlId="aboutme">
                            <ControlLabel>About Me</ControlLabel>{' '}
                            <FormControl type="text" placeholder="About Me" value={aboutMe} componentClass="textarea" onChange={e => setAboutMe(e.target.value)} />
                        </FormGroup>{' '}
                        <Button type="submit">Next</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}