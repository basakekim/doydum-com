import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY_SORT = gql`
  {
    getPostsSortLikeCount {
      id
      body
      createdAt
      username
      likeCount
      restaurantName
      restaurantImage
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
