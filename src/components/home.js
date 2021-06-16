import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './styles/card.module.css';
import data from '../SERVER_SIMULATION/products';

export default function Home({ _ }) {
  return (
    <>
      <Card.Group itemsPerRow={4} stackable className={styles.Container}>
        {data.map(item => {
          return(
            <Card className={styles.Crd}>
            <Image src={item.image} ui={false} className={styles.Image} />
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Description>lorem lorem epsum lorem epsum lorem epsum  epsum </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to="/product/details/:id" color='tail' compact={true} size='small' floated='right'>
                Show Details
              </Button>
              <Card.Meta className={styles.price}><span>{item.price}</span> Euro</Card.Meta>
            </Card.Content>
          </Card>
          )          
        })}
      </Card.Group>
    </>
  );
}