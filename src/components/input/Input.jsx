import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Input = ({text, handleEdit, handleReset, disabled, brokenCounter, handleCounter, litCounter }) => {

    
    return (
        <div className="" >
            <div className="d-flex mt-4 justify-content-end text-align-end">
         
                <Form className="">
                    <Form.Label>Name of the Circle</Form.Label>
                    <div className=''>
                        <Form.Control
                            style={{ 'width': '250px' }}
                            value={text}
                            name="name"
                            as='input'
                            type='text'
                            placeholder='set the name of the circle'
                            onChange={handleEdit}
                            disabled={disabled}
                        />
                        <br />
                        <div className="d-flex pt-3 pb-1 justify-content-end">
                            <Form.Label>Number of Broken States</Form.Label>
                        </div>

                        <div className="d-inline-flex pb-3 w-100 justify-content-end">
                            <Button name="increaseBroken" onClick={handleCounter}>+</Button>
                            <div className="d-flex bg-light align-items-center ml-2 mr-2 pl-3 pr-3 border-2">{brokenCounter}</div>
                        </div>
                        <br />
                        <div className="d-flex pt-3 pb-1 justify-content-end">
                            <Form.Label>Number of Lit States</Form.Label>
                        </div>

                        <div className="d-inline-flex pb-3 w-100 justify-content-end">
                            <Button name="increaseLit" onClick={handleCounter}>+</Button>
                            <div className="d-flex bg-light align-items-center ml-2 mr-2 pl-3 pr-3 border-2">{litCounter}</div>
                        </div>
                        <div className="d-flex pt-3 pb-3 justify-content-end">
                            <Button className="btn" onClick={handleReset} type="reset">Reset</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Input;