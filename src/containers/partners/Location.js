import React, { useState } from 'react';
import { Form, Button, HelpBlock, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Geocode from "react-geocode";
import { useFormFields } from "../../libs/hooksLib";

export default function Location(props) {
    const locationSettings = {
        enableHighAccuracy: false,
        timeout: Infinity,
        maximumAge: 0,
    };

    Geocode.setApiKey("DUMMY_KEY");
    let pointSet = false;
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function locationSet() {
        pointSet = true;
    }

    async function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        const response = await Geocode.fromLatLng(position.coords.latitude, position.coords.longitude);
        let address = response.results[0].formatted_address.split(",");
        const country = address[address.length - 1];
        const stateAndPostalCode = address[address.length - 2];
        const city = address[address.length - 3];
        const streetNumber = address[address.length - 4];
        console.log(response);
        setAddress(response.results[0].formatted_address);
    }

    function getCurrentAddress() {
        navigator.geolocation.getCurrentPosition(success, error, locationSettings);
    }


    return (
        <div>
            <Form>
                <Button onClick={getCurrentAddress}>Get Current Location</Button>
                <br></br>
                <br></br>
                <FormGroup controlId="streetNumber">
                    <ControlLabel>Address</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                </FormGroup>{' '}
                <FormGroup controlId="latitude">
                    <ControlLabel>Latitude</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Latitude" value={latitude} onChange={e => setLatitude(e.target.value)} />
                </FormGroup>{' '}
                <FormGroup controlId="longitude">
                    <ControlLabel>Longitude</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Longitude" value={longitude} onChange={e => setLongitude(e.target.value)} />
                </FormGroup>{' '}
                <Button type="submit">Next</Button>
            </Form>
        </div>
    );
}