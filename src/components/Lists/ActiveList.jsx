import ListGroup from 'react-bootstrap/ListGroup';
import '../../index.css';

function ActiveList() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        This is super active!
      </ListGroup.Item>
      <ListGroup.Item as="li">This isn't really active at all.</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Neither is this one.
      </ListGroup.Item>
      <ListGroup.Item as="li">This one is so not active, it's lazy.</ListGroup.Item>
    </ListGroup>
  );
}

export default ActiveList;