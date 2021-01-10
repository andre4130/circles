import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';


const Input = ({ handleEdit, handleReset, disabled, brokenCounter, handleCounter }) => {

    return (
        <div>
            <div className="d-flex">
                <Form>
                    <Form.Label>Name of the Circle</Form.Label>
                    <div className=''>
                        <Form.Control
                            style={{ 'width': '250px' }}
                            name="name"
                            as='input'
                            type='text'
                            placeholder='set the name of the circle'
                            onChange={handleEdit}
                            disabled={disabled}
                        />
                        <br />
                        <div className="d-flex pt-3 pb-1">
                            <Form.Label>Number of Broken States</Form.Label>
                        </div>

                        <div className="d-inline-flex pb-3">
                            <Button className="mr-1"  name="decreaseBroken" onClick={handleCounter}>-</Button>
                            <Button name="increaseBroken" onClick={handleCounter}>+</Button>
                            <div className="d-flex bg-light align-items-center ml-2 mr-2 pl-3 pr-3 border-2">{brokenCounter}</div>
                        </div>

                        <div className="d-flex pt-3 pb-3">
                            <Button className="btn" onClick={handleReset}>Reset</Button>
                        </div>

                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Input;