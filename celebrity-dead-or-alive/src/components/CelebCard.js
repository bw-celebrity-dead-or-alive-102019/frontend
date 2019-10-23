import React from "react";
import {Card, Image, Button} from 'semantic-ui-react';

const CelebCard = (props) => {
    return (
      <Card>
        <Image src={props.data.image_url} alt={props.data.name} />
        <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>{props.data.info}</Card.Meta>
            <h4>Birth Year: {props.data.born}</h4>
            <Button.Group>
                <Button color='red'>Dead</Button>
                <Button.Or />
                <Button color='blue'>Alive</Button>
            </Button.Group>
        </Card.Content>
      </Card>
    )
  }
  
  export default CelebCard