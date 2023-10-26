import '../../index.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function SimpleTooltip(){
    const LinkTooltip = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href="#">{children}</a>
        </OverlayTrigger>
    );

    return(
        <p>
            Oh rad, it's a <LinkTooltip title="OMG here it is!" id="t-1">tooltip</LinkTooltip>!
        </p>
    );
};