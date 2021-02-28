import React from "react";
import { Card, Container, Icon, Image } from "semantic-ui-react";
import Footer from "../components/Footer";
import enes from "../images/enes.jpg";
import basak from "../images/basak.jpeg";
import mahmut from "../images/mahmut.jpg";
import "../custom/site.css";
import { useTranslation } from "react-i18next";
import {  Header } from "semantic-ui-react";


function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <Container>

      <Header as="h2" icon textAlign="center">
              <Header.Content style={{ margin: 50 }}>{t("our team")}</Header.Content>
            </Header>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src={enes} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Enes ATEŞ</Card.Header>
              <Card.Meta>
                <span
                  className="date"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Front End Developer
                </span>
              </Card.Meta>
              <Card.Description>
                <a href="https://github.com/enessaatess">
                  <Icon name="github" size="large" />
                </a>

                <a href="https://www.linkedin.com/in/atesenes/">
                  <Icon name="linkedin" size="large" />
                </a>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                0(542) 472 4263
              
            </Card.Content>
          </Card>

          <Card>
            <Image src={basak} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Başak EKİM</Card.Header>
              <Card.Meta>
                <span
                  className="date"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Front End Developer
                </span>
              </Card.Meta>
              <Card.Description>
                <a href="https://github.com/basakekim">
                  <Icon name="github" size="large" />
                </a>

                <a href="https://www.linkedin.com/in/basakekim/">
                  <Icon name="linkedin" size="large" />
                </a>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                0(544) 550 4333
            
            </Card.Content>
          </Card>

          <Card>
            <Image src={mahmut} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Mahmut ARSLAN</Card.Header>
              <Card.Meta>
                <span
                  className="date"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    paddingTop: "5px",
                  }}
                >
                  .Net Developer(Fulltime MS Software) and Backend Developer
                  (Node js , Express , Graphql ect)
                </span>
              </Card.Meta>
              <Card.Description>
                <a href="https://github.com/mahmutrsln">
                  <Icon name="github" size="large" />
                </a>
                <a href="https://www.linkedin.com/in/mahmut-arslann/">
                  <Icon name="linkedin" size="large" />
                </a>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
           
                0(541) 373 3868
              
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Contact;





