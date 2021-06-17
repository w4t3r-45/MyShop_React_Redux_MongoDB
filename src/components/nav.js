import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu,Container,Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from './styles/nav.module.css';

export default function Nav({ _ }) {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }
  return (
    <>
      <Menu pointing secondary className={styles.hrd}>
        <Menu.Item as={Link} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item as={Link} to="/list"
          name='history'
          active={activeItem === 'history'}
          onClick={handleItemClick}
        />
        <Menu.Item as={Link} to="/shop"
          name='shop'
          active={activeItem === 'shop'}
          onClick={handleItemClick}
        />
        <Container position='right'></Container>
        <Menu.Item position='right' 
            name="Ait Chabane Said"
        />
        <Menu.Item  
            as={Link} to="/shop/current/:id"
            icon='cart'
            name="Cart  0"
        />
        <Menu.Item position='right' as={Link} to="/logout"
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu>
    </>
  );
}