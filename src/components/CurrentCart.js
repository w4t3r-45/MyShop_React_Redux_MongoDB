import React from 'react';
import { Header, Divider, Card, Image , Button ,Icon } from 'semantic-ui-react'
import styles from './styles/CurrentCart.module.css';
export default function CurrentCart({ _ }) {
  return (
    <>
      <Header as='h1' textAlign='center' size='medium'>Current Shopping List</Header>
      <Divider horizontal>Details</Divider>
      <Header as='h1' textAlign='center' size='medium'>Total Items : 03</Header>
      <Header as='h1' textAlign='center' size='medium'>Total Price : <span className={styles.price}>200</span> Euro</Header>
      <Divider horizontal>Content</Divider>
      <Card.Group centered itemsPerRow={1} className={styles.card_container} >
        <Card  fluid>
          <Card.Content>
            <Image
              floated='left'
              size='medium'
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg'
            />
            <Card.Header className={styles.Headers}>Adidas Zx FLux 3 </Card.Header>
            <Card.Header className={styles.Headers}>Price : 200 &euro;</Card.Header>
            <Card.Header className={styles.Headers}>
              Quantity : 
              <Button circular color='teal' size='mini' icon='plus' className={styles.btn}/>
              <p className={styles.qte}>02</p>
              <Button circular color='teal' size='mini' icon='minus'  className={styles.btn} />              
            </Card.Header>            
            <Card.Meta>More then 10 Available</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <Button negative fluid>Delete Item</Button>
            </Card.Content>
        </Card>
        
        <Card  fluid>
          <Card.Content>
            <Image
              floated='left'
              size='medium'
              src='http://dummyimage.com/232x100.png/ff4444/ffffff'
            />
            <Card.Header className={styles.Headers}>Adidas Zx FLux 3 </Card.Header>
            <Card.Header className={styles.Headers}>Price : 200 &euro;</Card.Header>
            <Card.Header className={styles.Headers}>
              Quantity : 
              <Button circular color='teal' size='mini' icon='plus' className={styles.btn}/>
              <p className={styles.qte}>02</p>
              <Button circular color='teal' size='mini' icon='minus'  className={styles.btn} />              
            </Card.Header>            
            <Card.Meta>More then 10 Available</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <Button negative fluid>Delete Item</Button>
            </Card.Content>
        </Card>

        <Card  fluid>
          <Card.Content>
            <Image
              floated='left'
              size='medium'
              src='http://dummyimage.com/232x100.png/ff4444/ffffff'
            />
            <Card.Header className={styles.Headers}>Adidas Zx FLux 3 </Card.Header>
            <Card.Header className={styles.Headers}>Price : 200 &euro;</Card.Header>
            <Card.Header className={styles.Headers}>
              Quantity : 
              <Button circular color='teal' size='mini' icon='plus' className={styles.btn}/>
              <p className={styles.qte}>02</p>
              <Button circular color='teal' size='mini' icon='minus'  className={styles.btn} />              
            </Card.Header>            
            <Card.Meta>More then 10 Available</Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <Button negative fluid>Delete Item</Button>
            </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}