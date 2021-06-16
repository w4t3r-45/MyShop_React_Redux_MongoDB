import React from 'react';
import { Header, Divider, Image, Table ,Container} from 'semantic-ui-react';
import styles from './styles/HistoryItemDetails.module.css';

export default function HistoryItemDetails({ _ }) {
  return (
    <>
      <Header as="h2" textAlign="center">
        <Header.Content>ItemListName Details:</Header.Content>
        <Divider horizontal>Payed For</Divider>
        <Header.Content><span className={styles.header_Price}>350</span> Euros</Header.Content>
        <Divider horizontal>Content</Divider>
      </Header>
{/* i will wrap my table inside a Container which will be centered */}  
      <Container className={styles.container}>
      <Table basic='very' celled collapsing textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Image</Table.HeaderCell>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Total Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
                <Image src='http://dummyimage.com/183x100.png/cc0000/ffffff' rounded size='tiny' />
            </Table.Cell>
            <Table.Cell>Adidas Shows 42" sa/22</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
                <Image src='http://dummyimage.com/183x100.png/cc0000/ffffff' rounded size='tiny' />
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
      </Container>
    </>
  );
}