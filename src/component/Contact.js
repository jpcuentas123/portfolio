import React, { useEffect, useState } from 'react'
import background from '../assets/img/BackgroundContact.jpg'

import {
    Row,
    Col,
} from 'antd';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const Contact = () => {
    const classes = useStyles();
    
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
                            <form action="" className={classes.root} ></form>
                            <TextField required id="standard-basic" label="Nombre" />
                            <TextField required id="standard-basic" label="Email" />
                            <TextField id="standard-basic" label="Teléfono" />
                            <TextField required id="standard-basic" label="Asunto" />
                            <TextField multiline required id="standard-basic" label="Mensaje" />

                        </Col>
                    </Row>
                </Col>
            </Row>
        );

}

export default Contact