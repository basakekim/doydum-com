import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../util/MyPopup";
import { useTranslation } from "react-i18next";

function PostCard({
  post: {
    body,
    createdAt,
    id,
    username,
    likeCount,
    commentCount,
    likes,
    restaurantName,
    restaurantImage,
  },
}) {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <Card as={Link} to={`/posts/${id}`} fluid>
      <Image   src={restaurantImage} wrapped ui={false} />
      <Card.Content>
        {/* <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        /> */}
        <Card.Header as={Link} to={`/posts/${id}`}>{restaurantName}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
