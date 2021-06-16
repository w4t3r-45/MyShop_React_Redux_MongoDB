import React from 'react';
import { Container, Card, Button, Image, Divider, Input } from 'semantic-ui-react';
import styles from './styles/ProductDetails.module.css'


export default function ProductDetails({ _ }) {
  return (
    <>
      <Container className={styles.container}>
        <Card className={`${styles.Card} ${styles.c_left}`} >
          <Image src='http://dummyimage.com/229x100.png/5fa2dd/ffffff' className={styles.Image} ui={false} />
        </Card>

        <Card className={`${styles.Card} ${styles.c_right}`}>
          <Card.Content className={styles.overFlw}>
            <Card.Header>Product Name</Card.Header>
            <Divider horizontal>Description</Divider>
            <Card.Description>
            A product description is the marketing copy 
            used to describe a product's value proposition to potential customers
            . A compelling product description provides
             customers with details around features, problems it solves and other
              benefits to help generate a sale. ... A “good” product description will not do.
            </Card.Description>
            <Divider horizontal>Buy</Divider>
            <Card.Meta>
              <span className={styles.avail_span}>More Then 10 Available</span>
            </Card.Meta>
            <Container className={styles.btm_container}>
              <Input
                className={styles.inp}
                size='mini'
                action={{
                  color: 'teal',
                  labelPosition: 'left',
                  icon: 'cart',
                  content: 'Add to Cart',
                }}
                actionPosition='left'
                placeholder='Qte'
                defaultValue='1'
              />
              <p className={styles.text}><span>350</span> &euro;</p>

            </Container>
          </Card.Content>
        </Card>

      </Container>

    </>
  );
}