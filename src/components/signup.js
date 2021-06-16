import React from 'react';
import { Button, Icon, Form, Grid, Header, Message, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import styles from './styles/signup.module.css';

export default function Signup({ _ }) {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Join Us !
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Second Name' />
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
            <Button color='teal' fluid size='large' className={styles.btn}>Sing Up</Button>
          </Segment>
        </Form>
        <Message>
          Already Have an Account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}