import React, { useEffect } from 'react'
import background from '../../assets/img/BackgroundContact.jpg'

import {
    Row,
    Col,
    Form,
    Space,
} from 'antd';

import validationsSchema from './validationSchema.ts';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';


const initialValues = {
    name: '',
    email: '',
    message: '',
    subject: '',
    tel: '',
}


const Contact = () => {

    useEffect(() => {
        document.querySelector("body").style.backgroundImage = `url(${background})`;
    }, [])

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Row type="flex" align="top" justify="center" className="Contact Home-row">
            <Col xs={24} sm={24} md={24} lg={12} className="Contact-header">
                <Row type="flex" align="top" justify="center" >
                    <Col span={24}>
                        <h2>Contact</h2>
                    </Col>
                    <Col sm={18} xs={20} md={12}>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationsSchema}>
                            {({ errors, touched, handleChange, handleBlur }) => (
                                <Form>
                                    <Row type="flex" align="top" justify="space-between">
                                        <Col md={11}>
                                            <TextField
                                                onBlur={handleBlur}
                                                error={errors.name} helperText={errors.name} id='name' name="name" label="Name" required onChange={handleChange} />
                                        </Col>
                                        <Col md={11}>
                                            <TextField onChange={handleChange}
                                                error={errors.email}
                                                helperText={errors.email}
                                                onBlur={handleBlur}
                                                required id="email" name="email" label="Email" />
                                        </Col>
                                        <Col md={11}>
                                            <TextField onChange={handleChange}
                                                error={errors.tel}
                                                helperText={errors.tel}
                                                onBlur={handleBlur}
                                                name="tel"
                                                id="tel" label="Tel" />
                                        </Col>
                                        <Col md={11}>
                                            <TextField onChange={handleChange}
                                                error={errors.subject}
                                                helperText={errors.subject}
                                                onBlur={handleBlur}
                                                required id="subject" label="Subject" />
                                        </Col>
                                        <Col md={24}>
                                            <TextField onChange={handleChange}
                                                onBlur={handleBlur}
                                                multiline id="message" error={errors.message}
                                                helperText={errors.message} name="message" required label="Message" />
                                        </Col>
                                        <Col span={24}>
                                            <Row type="flex" justify="center" style={{ marginTop: '4vh' }}>
                                                <Button type="submit" variant="contained" color="primary" >Send</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>

                        <Col></Col>

                    </Col>
                </Row>
            </Col>
        </Row>
    );

}

export default Contact