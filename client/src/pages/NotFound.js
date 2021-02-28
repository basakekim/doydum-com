import React from "react";
import { Card, Container, Icon, Image } from "semantic-ui-react";
import Footer from "../components/Footer";

import "../custom/site.css";
import { useTranslation } from "react-i18next";
import {  Header } from "semantic-ui-react";
import notfound from "../images/404.jpg";


function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
      <Header as="h2" icon textAlign="center">
              <Header.Content style={{ margin: 50 }}> {t("notfound")} </Header.Content>
            </Header>
                
            <Image src={notfound} size='huge' centered />
            
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default NotFound;










