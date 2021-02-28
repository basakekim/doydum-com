const { AuthenticationError, UserInputError } = require('apollo-server');

const Post = require('../../models/Post');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getPostsSortLikeCount() {
      try {
        const posts = await Post.find().sort({ likeCount: -1 }).limit(3);
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPostsSearch(_, search) {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts.filter(value => value.restaurantName.includes(search.search))
      } catch (err) {
        throw new Error(err);
      }
    },

    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('Hata !');
        }
      } catch (err) {
        throw new Error(err);
      }
    },


  },
  Mutation: {
    async createPost(_, { body, restaurantName }, context) {
      const user = checkAuth(context);

      if (body.trim() === '') {
        throw new Error('Boş geçilemez!');
      }

      if (restaurantName.trim() === '') {
        throw new Error('Boş geçilemez!');
      }

      const newPost = new Post({
        body,
        restaurantName,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()

      });

      const post = await newPost.save();

      context.pubsub.publish('NEW_POST', {
        newPost: post
      });

      return post;
    },
    async deletePost(_, { postId }, context) {
      const user = checkAuth(context);

      try {
        const post = await Post.findById(postId);
        if (user.username === post.username) {
          await post.delete();
          return 'Silme işlemi başarılı';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async likePost(_, { postId }, context) {
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);
      if (post) {
        if (post.likes.find((like) => like.username === username)) {
          // Post already likes, unlike it
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          // Not liked, like post
          post.likes.push({
            username,
            createdAt: new Date().toISOString()
          });
        }

        await post.save();
        return post;
      } else throw new UserInputError('Hata!');
    }
  },
  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
    }
  }
};
