import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
    <div>
        <FormGroup controlId={type} bsSize="large">
            {type === "text" ? (
                <>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl
                        autoFocus
                        type={type}
                        {...otherProps}
                    />
                </>
            ) : (
                    <>
                        <ControlLabel />
                        <FormControl
                            autoFocus
                            type={type}
                            {...otherProps}
                        />
                        {label}
                    </>
                )}
        </FormGroup>
    </div>
);

export default ItemForm;