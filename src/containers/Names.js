import React from "react";
import ItemForm from "./ItemForm";
import LoaderButton from "../components/LoaderButton";
import "./Names.css";

const Names = ({ setForm, formData, navigation }) => {
    const { firstName, lastName, nickName } = formData;

    const { next } = navigation;

    return (
        <div className="form">
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
            <LoaderButton
                block
                type="submit"
                bsSize="large"
                onClick={next}
            >
                Next
        </LoaderButton>
        </div>
    );
};

export default Names;