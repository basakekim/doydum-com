import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from "react-i18next";

import { useForm } from '../util/hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: '',
    restaurantName: ''
  });
  const { t } = useTranslation();

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.body = '';
    }
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>{t("Crate:")}</h2>
        <Form.Field>
          <Form.Input
            placeholder={t("Restoran Name")}
            name="restaurantName"
            onChange={onChange}
            value={values.restaurantName}
            error={error ? true : false}
          />
          <Form.TextArea
            placeholder={t("What is your favorite restaurant and your think!")}
            name="body"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button type="submit" color="teal">
            {t("save")}
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <div className="ui error message" style={{ marginBottom: 20 }}>
          <ul className="list">
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
    </>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String! , $restaurantName: String!) {
    createPost(body: $body , restaurantName: $restaurantName) {
      id
      body
      createdAt
      restaurantName
      restaurantImage
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;
