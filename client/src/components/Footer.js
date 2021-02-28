import React from "react";
import logo from "../images/doyhero.png";
import { useTranslation } from "react-i18next";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Segment vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
        <Container textAlign="center">
          <Grid divided stackable>
            <Grid.Column width={3}>
              <Header as="h4" content={t("Quick Links")} />
              <List link>
                <List.Item as="a">Have a questions?</List.Item>
                <List.Item as="a">Privacy policy</List.Item>
                <List.Item as="a">Quick help?</List.Item>
                <List.Item as="a">Live chat</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content={t("For Restaurant")} />
              <List link>
                <List.Item as="a">Add restaurant</List.Item>
                <List.Item as="a">Own your business</List.Item>
                <List.Item as="a">Application</List.Item>
                <List.Item as="a">Restaurant add-ons</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content={t("Learn More")} />
              <List link>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Careers</List.Item>
                <List.Item as="a">Reviews</List.Item>
                <List.Item as="a">Security</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" content={t("footer")} />
              <p>
                Lorem ipsum dolor sit amet, consectet. Lorem ipsum dolor sit amet, consectet.
              </p>
            </Grid.Column>
          </Grid>

          <Divider section />
          <Image centered size="small" src={logo} />
          <List horizontal divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
