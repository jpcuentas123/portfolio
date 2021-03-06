import React from 'react'
import { Row, Col } from 'antd'
import { FooterContent, FooterSection, LineFooter } from '../Style_Components/Home/S_Footer'



export default function Footer() {
    return (
        <FooterSection>
            <FooterContent>
                <p>Social Networks</p>
                <LineFooter></LineFooter>
                <ul>
                    <li><a href="https://www.linkedin.com/in/jorge-perez-cuentas-a26917157/" target="_blanck">Linkeding</a></li>
                    <li><a href="#a" target="_blanck">Github</a></li>
                    <li><a href="https://twitter.com/jpcuentas" target="_blanck">Twitter</a></li>
                    <li><a href="https://www.instagram.com/jpcuentas123/" target="_blanck">Instagram</a></li>
                </ul>
            </FooterContent>
        </FooterSection>
    )
}
