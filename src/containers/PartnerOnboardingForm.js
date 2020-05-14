import React from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function PartnerOnboardingForm(props) {
    return (
        <div>
            <h1>Let's get you cooking</h1>
            <br></br>
            <Breadcrumb>
                <Breadcrumb.Item active>Basic Details</Breadcrumb.Item>&nbsp;&nbsp;
                <LinkContainer to="/partner/basics">
                    <Button variant="dark">Start</Button>
                </LinkContainer>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Upload Photo</Breadcrumb.Item>&nbsp;&nbsp;
                <LinkContainer to="/partner/about">
                    <Button variant="dark">Start</Button>
                </LinkContainer>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Location</Breadcrumb.Item>&nbsp;&nbsp;
                <LinkContainer to="/partner/location">
                    <Button variant="dark">Start</Button>
                </LinkContainer>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Foods I can Prepare</Breadcrumb.Item>&nbsp;&nbsp;
                <LinkContainer to="/partner/foods">
                    <Button variant="dark">Start</Button>
                </LinkContainer>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Calendar</Breadcrumb.Item>&nbsp;&nbsp;
                <LinkContainer to="/partner/calendar">
                    <Button variant="dark">Start</Button>
                </LinkContainer>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Payment Details</Breadcrumb.Item>&nbsp;&nbsp;
                <LinkContainer to="/partner/payment">
                    <Button variant="dark">Start</Button>
                </LinkContainer>
            </Breadcrumb>
        </div>
    );
}