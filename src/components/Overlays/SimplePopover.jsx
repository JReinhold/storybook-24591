import '../../index.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function SimplePopover({trigger, placement}){
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Make it Pop</Popover.Header>
            <Popover.Body>
                This is some really cool popover text.  It's like a poptart, only not.
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger={trigger} placement={placement} overlay={popover}>
            <Button variant="success">Click me to pop</Button>
        </OverlayTrigger>
    );
};