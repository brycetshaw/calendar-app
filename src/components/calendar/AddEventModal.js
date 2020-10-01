import React, { useState } from 'react';
// import Modal, {Button} from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/cjs/Button';
function AddEventModal({ start, end }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`start: ${start}, end: ${end}`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<AddEventModal/>);

export default AddEventModal;
