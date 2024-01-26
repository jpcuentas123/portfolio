import { t } from 'i18next'
import React from 'react'
import { FooterContent, FooterSection, LineFooter } from '../ui/Home/S_Footer'

export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <section>
          <p>{t('Social Networks')}</p>
          <LineFooter></LineFooter>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jorge-perez-cuentas-a26917157/"
                target="_blanck"
                title="LinkedIn Profile"
                tabIndex={0}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jpcuentas123"
                target="_blanck"
                title="Github repository"
              >
                Github
              </a>
            </li>
          </ul>
        </section>
        <section>
          <p>{t('Contact')}</p>
          <LineFooter></LineFooter>
          <ul>
            <li>
              <a href="mailto:jpcuentas123@gmail.com" title="Contact Email">
                Email: <u>jpcuentas123@gmail.com</u>
              </a>
            </li>
            <li>
              <a href="tel:+573024112312" title="My phone number">
                Tel: <u>+57 323 991 2702</u>
              </a>
            </li>
          </ul>
        </section>
      </FooterContent>
    </FooterSection>
  )
}
