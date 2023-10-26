import '../../index.css';
import Accordion from 'react-bootstrap/Accordion';

function CollapsedAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion To Jim</Accordion.Header>
        <Accordion.Body>
          You won't believe how many words are here!  I mean, I guess you would believe it 
          if you took the time to count up each of these words.  I'm not sure why you 
          would do that though; what kind of thing would drive a person to manually count 
          each word in an example to figure out whether or not they believe that there 
          really are that many words?  Anyways, please help me find the words to describe 
          that thing.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" data-testid="second">
        <Accordion.Header>Another pun!</Accordion.Header>
        <Accordion.Body>
          These are some more words that are here to help you learn what words look like.  
          Specifically here.  On this app thing.  Sometimes there are a lot of words and 
          other times there are not so many words. But one thing is certain...there are 
          words.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CollapsedAccordion;