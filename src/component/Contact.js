import React, { useEffect, useState } from 'react'
import background from '../assets/img/BackgroundContact.jpg'

import {
    Form,
    Input,
    Row,
    Col,
    Button,
    AutoComplete,
} from 'antd';

const Textarea = Input.TextArea

const Contact = () => {

    const initialstate = {
        dataSource: [],
        loading: false,
        iconLoading: false,
    };
    const [state, setState] = useState(initialstate)


    const enterLoading = () => {

        setState({
            loading: true
        })
    };

    const enterIconLoading = () => {
        setState({
            ...state,
            iconLoading: true
        })
    };

    const handleChange = value => {
        setState({
            ...state,
            dataSource:
                !value || value.indexOf('@') >= 0
                    ? []
                    : [`${value}@gmail.com`, `${value}@outlook.com`, `${value}@hotmail.com`, `${value}@yahoo.com`],
        });
    };

    useEffect(() => {
        document.querySelector("body").style.backgroundImage = `url(${background})`;
    }, [])

        return (
            <Row type="flex" align="top" justify="center" className="Contact Home-row">
                <Col span={12} className="Contact-header">
                    <Row type="flex" align="top" justify="center">
                        <Col md={24}>
                            <h2>Contact</h2>
                        </Col>
                        <Col md={12}>
                            <Input placeholder="Name" key="name" name="name" id="name" />
                            <Input placeholder="Last name" key="lastname" name="lastname" id="lastname" />
                            <AutoComplete
                                style={{ width: 100 + "%" }}
                                dataSource={state.dataSource}
                                onChange={handleChange}
                                placeholder="Email"
                                key="email" name="email" id="email"
                            />
                            <Input placeholder="Subject" key="subject" name="subject" id="subject" />
                            <Textarea placeholder="Menssage" key="menssage" name="menssage" id="menssage">
                            </Textarea>
                            <div className="Contact-buttonContainer">
                                <Button type="primary" loading={state.loading} onClick={enterLoading}>
                                    Send
                                </Button>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        );

}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Contact);
export default WrappedRegistrationForm