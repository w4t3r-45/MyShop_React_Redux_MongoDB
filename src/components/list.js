import React from 'react';
import { Header, List } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import styles from './styles/list.module.css';

export default function ItemsList({ _ }) {
  return (
    <>
      <Header as='h2' className={`${styles.container} ${styles.hdr}`} >Shopping Lists History :</Header>
      <List divided relaxed className={styles.container}>
        <List.Item as={Link} to="/list/:id"> 
          <List.Icon name='calendar minus' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>List Name 1 : </List.Header>
            <List.Description as='a'>Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>

        <List.Item  as={Link} to="/list/:id">
          <List.Icon name='calendar minus' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>List Name  2 :</List.Header>
            <List.Description as='a'>Updated 22 mins ago</List.Description>
          </List.Content>
        </List.Item>

        <List.Item  as={Link} to="/list/:id">
          <List.Icon name='calendar minus' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>List Name  3 :</List.Header>
            <List.Description as='a'>Updated 34 mins ago</List.Description>
          </List.Content>
        </List.Item>

      </List>
    </>

  );
}