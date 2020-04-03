import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ItemForm from "./ItemForm";
import "./Names.css";

const Names = ({ setForm, formData, navigation }) => {
    const { firstName, lastName, nickName } = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <FormGroup controlId="email" bsSize="large">
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={firstName}
                    onChange={setForm}
                />
            </FormGroup>
            <ItemForm
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={setForm}
            />
            <ItemForm
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={setForm}
            />
            <ItemForm
                label="Nick Name"
                name="nickName"
                value={nickName}
                onChange={setForm}
            />
            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Names;