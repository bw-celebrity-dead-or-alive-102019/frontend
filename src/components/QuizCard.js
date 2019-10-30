import React, { useState } from "react";
import { Card, Image, Header, Button, Icon } from "semantic-ui-react";
import { TweenMax, Linear } from "gsap";

const QuizCard = ({ name, info, imageURL, isDead, captureResponse }) => {
  const [cardState, setCardState] = useState({
    icon: null,
    isClicked: false,
    points: 0
  });
  const handleClick = e => {
    let response;
    if (cardState.isClicked) return;
    else if (e.target.value === String(isDead)) {
      response = 1;
      setCardState({ icon: "check", isClicked: true });
    } else {
      response = 0;
      setCardState({ icon: "close", isClicked: true });
    }

    TweenMax.allTo([".card-button"], 0.75, {
      backgroundColor: "#999",
      color: "#333",
      ease: Linear.easeOut
    });

    setTimeout(() => captureResponse(response), 1000);
    // captureResponse(response);
  };

  return (
    <div className="card-container">
      <Card>
        {cardState.icon && (
          <Icon
            className={`card-icon ${cardState.icon}`}
            name={cardState.icon}
          />
        )}
        {cardState.icon && <div className="dimmer" />}

        <Image src={imageURL} alt={name} className="card-image" />
        <Card.Content>
          <Header as="h2">{name}</Header>
          <p>{info}</p>
        </Card.Content>
        <Card.Content className="button-container">
          <Button
            className="dead-btn card-button"
            value={true}
            onClick={handleClick}
            style={{ borderRight: "1px solid #444" }}
          >
            Dead
          </Button>
          <Button
            className="alive-btn card-button"
            value={false}
            onClick={handleClick}
          >
            Alive
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default QuizCard;
