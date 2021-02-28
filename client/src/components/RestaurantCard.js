import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../util/MyPopup";

function RestaurantCard({
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
      <Image  src={restaurantImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header as={Link} to={`/posts/${id}`}>{restaurantName}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content={t("Comment on post")}>
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

export default RestaurantCard;
