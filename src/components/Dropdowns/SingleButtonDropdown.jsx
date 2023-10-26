import '../../index.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SingleButtonDropdown(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Drop it like it's a dropdown!!
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/first-drop">First Drop</Dropdown.Item>
                <Dropdown.Item href="#/second-drop">Second Drop</Dropdown.Item>
                <Dropdown.Item href="#/third-drop">Third Drop</Dropdown.Item>
                <Dropdown.Item href="#/fourth-drop">Fourth Drop</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};