import '../../index.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Fade from 'react-bootstrap/Fade';

export default function AnimatedTooltip(){
    const LinkTooltip = ({ id, children, title }) => (
        <Fade in="true">
            <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
                <a href="#">{children}</a>
            </OverlayTrigger>
        </Fade>
    );

    return(
        <p>
            Oh rad, it's a <LinkTooltip title="OMG here it is!" id="t-1">tooltip</LinkTooltip>!
        </p>
    );
};