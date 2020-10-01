import React, { useState } from 'react';
// import Modal, {Button} from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/cjs/Button';
const useModal = (label, defaultState, options) =>  {
    const [state, setState] = useState(defaultState);
    const id = `use-modal-${label.replace(" ","").toLowerCase()}`;

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const cust
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
