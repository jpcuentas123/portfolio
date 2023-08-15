import { t } from "i18next";
import React from "react";
import { FooterContent, FooterSection, LineFooter } from "../ui/Home/S_Footer";

export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <section>
          <p>{t("Social Networks")}</p>
          <LineFooter></LineFooter>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jorge-perez-cuentas-a26917157/"
                target="_blanck"
                tabIndex={0}
              >
                Linkeding
              </a>
            </li>
            <li>
              <a href="#a" target="_blanck">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jpcuentas" target="_blanck">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jpcuentas123/" target="_blanck">
                Instagram
              </a>
            </li>
          </ul>
        </section>
        <section>
          <p>{t("Contact")}</p>
          <LineFooter></LineFooter>
          <ul>
            <li>
              <a href="mailto:jpcuentas123@gmail.com">
                Email: <u>contact@jpcuentas.tech</u>
              </a>
            </li>
            <li>
              <a href="tel:+573024112312">Tel: <u>+57 302 411 2312</u></a>
            </li>
          </ul>
        </section>
      </FooterContent>
    </FooterSection>
  );
}
