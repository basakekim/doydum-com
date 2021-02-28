import React from "react";
import { Grid, Image, Header, Button, Input } from "semantic-ui-react";

import { useQuery } from "@apollo/react-hooks";
import RestaurantCard from "../components/RestaurantCard";
import { FETCH_POSTS_QUERY_SORT } from "../util/graphqlsort";
import Hero from "../images/hero.jpg";
import DoyHero from "../images/doyhero.png";
import "../custom/site.css";
import { Link, useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";


function Home() {
  const history = useHistory();
  const {
    loading,
    data: { getPostsSortLikeCount: posts },
  } = useQuery(FETCH_POSTS_QUERY_SORT);

  function handleItemClick(e) {
    history.push("/search?q=");
  }
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Grid>
          <Grid.Row doubling columns={2}>
            <Grid.Column computer={8} mobile={12} tablet={9}>
              <Image src={DoyHero} className="image-hero" />
              <div className="dummyDiv">
                <Header as="h2" icon textAlign="center" className="dummy1">
                  <Header.Content>{t("for_adana")}</Header.Content>
                  <Header.Content>{t("best_food_header")}</Header.Content>
                  <Header.Content>{t("The best in the city")}</Header.Content>
                  <Button primary as={Link} onClick={handleItemClick} to="/search?q=" fluid>Search Restaurants..</Button>
                </Header>
             
              </div>
            </Grid.Column>
            <Grid.Column computer={8} mobile={12} tablet={9}>
              <Image src={Hero} className="image-left" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header as="h2" icon textAlign="center">
              <Header.Content style={{ marginBottom: 20 }}>{t("best_restaurants")}</Header.Content>
            </Header>
          </Grid.Row>

          <Grid.Row >
            {posts &&
              posts.map((post) => (
                <Grid.Column
                  computer={5}
                  mobile={12}
                  tablet={9}
                  key={post.id}
                  style={{ marginBottom: 20 }}
                >
                  <RestaurantCard post={post} />
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
