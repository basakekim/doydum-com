import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY_SEARCH = gql`
 query($search: String!){
    getPostsSearch (search:$search)
    {
      id
      body
      createdAt
      username
      likeCount
      restaurantName
      restaurantImage
      likes {
        id
        username
        createdAt
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
