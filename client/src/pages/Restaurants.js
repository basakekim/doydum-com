import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";
import Footer from "../components/Footer";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import { useTranslation } from "react-i18next";
import {  Header } from "semantic-ui-react";


function Restaurants() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);
  const { t } = useTranslation();
  return (
    <div>
      <Grid columns={3}>
      <Header as="h1" icon textAlign="center">
              <Header.Content style={{ margin: 50 }}>{t("All Restaurants")}</Header.Content>
            </Header>
      
        <Grid.Row>
          {user && (
            <Grid.Column computer={5} mobile={12} tablet={9}>
              <PostForm />
            </Grid.Column>
          )}
          {loading ? (
            <h1> {t("loading_post")}</h1>
          ) : (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column
                    computer={5}
                    mobile={12}
                    tablet={9}
                    key={post.id}
                    style={{ marginBottom: 20 }}
                  >
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default Restaurants;
