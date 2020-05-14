import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Form, Button, FormGroup, Row, PageHeader, Col, ControlLabel, FormControl } from 'react-bootstrap';
import config from "../../config";
import { API } from "aws-amplify";
import { s3Upload } from "../../libs/awsLib";
import './About.css';

export default function About(props) {
    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    };

    const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 250,
        height: 250,
        padding: 4,
        boxSizing: 'border-box'
    };

    const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    };

    const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
    };
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            if (acceptedFiles.length !== 1) {
                alert(
                    'You are only allowed to upload 1 file'
                );
                return;
            }
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            acceptedFiles.map(file => uploadFile(file));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    async function uploadFile(file) {
        try {
            console.log("I am here");
            console.log(file);
            const attachment = file ? await s3Upload(file) : null;

            await createPartner({ attachment });
        } catch (e) {
            alert(e);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        props.history.push("/partner/location");
    }


    function createPartner(partner) {
        return API.post("homecook", "/partners", {
            body: partner
        });
    }

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                    <PageHeader>
                        <small>Please upload a photo</small>
                    </PageHeader>
                    <section className="container">
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside style={thumbsContainer}>
                            {thumbs}
                        </aside>
                    </section>
                    <Button type="submit">Next</Button>
                </Col>
            </Row>
        </Form>
    );
}