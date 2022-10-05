import { useEffect, useState } from 'react';
// @ts-ignore
import background from '../../assets/img/BackgroundContact.jpg';
import { Row, Col, Form } from 'antd';

import validationsSchema from './validationSchema';
import { Formik } from 'formik';
import Api from '../../firebase/http/index';
import { LoadStates, SendEmailProps } from '../../firebase/types';
import FormFields from './FormFields';
import { t } from 'i18next';

const initialValues = {
    name: '',
    email: '',
    message: '',
    subject: '',
    tel: '',
};

const Contact = () => {
    const [loadState, setLoadState] = useState<LoadStates>(
        LoadStates.NOT_LOADED
    );
    const handleSubmit = (values: SendEmailProps, resetForm: () => void) => {
        sendEmail(values, resetForm);
    };
    const sendEmail = async (values: SendEmailProps, resetForm: () => void) => {
        if (loadState !== LoadStates.NOT_LOADED) return;
        setLoadState(LoadStates.LOADING);
        Api.emails
            .sendEmail(values)
            .then(() => {
                setLoadState(LoadStates.LOADED);
                resetForm();
                setTimeout(() => {
                    setLoadState(LoadStates.NOT_LOADED);
                }, 2000);
            })
            .catch(() => {
                setLoadState(LoadStates.ERROR);
                setTimeout(() => {
                    setLoadState(LoadStates.NOT_LOADED);
                }, 2000);
            });
    };

    useEffect(() => {
        // @ts-ignore
        document.querySelector(
            'body'
        ).style.backgroundImage = `url(${background})`;
    }, []);

    return (
        <Row align="top" justify="center" className="Contact Home-row">
            <Col
                xs={24}
                sm={24}
                md={24}
                xl={14}
                xxl={12}
                className="Contact-header"
            >
                <Row align="top" justify="center">
                    <Col span={24}>
                        <h2>{t('Contact')}</h2>
                    </Col>
                    <Col xs={20} sm={18} md={12}>
                        <Formik
                            onSubmit={(values, { resetForm }) =>
                                handleSubmit(values, resetForm)
                            }
                            initialValues={initialValues}
                            validationSchema={validationsSchema}
                        >
                            {({
                                errors,
                                handleChange,
                                handleBlur,
                                isValid,
                                isSubmitting,
                                values,
                                resetForm,
                            }) => (
                                <Form>
                                    <FormFields
                                        errors={errors}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        isValid={isValid}
                                        isSubmitting={isSubmitting}
                                        values={values}
                                        handleSubmit={handleSubmit}
                                        resetForm={resetForm}
                                        loadState={loadState}
                                    />
                                </Form>
                            )}
                        </Formik>

                        <Col></Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Contact;
