import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { Breadcrumb, Button } from 'react-bootstrap'

export default function PartnerOnboardingForm(props) {
    return (
        <div>
            <h1>Let's get you cooking</h1>
            <br></br>
            <Breadcrumb>
                <Breadcrumb.Item active>Basic Details</Breadcrumb.Item>&nbsp;&nbsp;
                <Button variant="dark">Start</Button>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Photos and About Me</Breadcrumb.Item>&nbsp;&nbsp;
                <Button variant="dark">Start</Button>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Location</Breadcrumb.Item>&nbsp;&nbsp;
                <Button variant="dark">Start</Button>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Payment Details</Breadcrumb.Item>&nbsp;&nbsp;
                <Button variant="dark">Start</Button>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Foods I can Prepare</Breadcrumb.Item>&nbsp;&nbsp;
                <Button variant="dark">Start</Button>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item active>Calendar</Breadcrumb.Item>&nbsp;&nbsp;
                <Button variant="dark">Start</Button>
            </Breadcrumb>
        </div>
    )
}