import React from 'react';
import { Button,Icon, Form, Grid, Header, Message, Segment , Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import styles from './styles/login.module.css';

export default function Login({ _ }) {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large' className={styles.btn}>
              Login
          </Button>
          <Divider horizontal >Or</Divider>
          <Button color='facebook' fluid size='large' className={styles.btn}>
            <Icon name="facebook square"/>
              Facebook Login
          </Button>
          <Button color='red' fluid size='large' className={styles.btn}>
              <Icon name="google"/>
              Gmail Login
          </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}