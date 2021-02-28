import React from "react";
import { Card, Container, Icon, Image } from "semantic-ui-react";
import Footer from "../components/Footer";

import "../custom/site.css";
import { useTranslation } from "react-i18next";
import {  Header } from "semantic-ui-react";
import tekno from "../images/tekno.PNG";


function About() {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
      <Header as="h2" icon textAlign="center">
              <Header.Content style={{ margin: 50 }}>{t("about proje")}</Header.Content>
            </Header>
      <p  style={{textAlign: "center"}}>  {t("about_page")} </p>
                        <Header as="h2" icon textAlign="center">
              <Header.Content style={{ margin: 50 }}>{t("teknoloji")}</Header.Content>
            </Header>
            <Image src={tekno} size='huge' centered />
            
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default About;










