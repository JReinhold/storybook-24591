import '../../index.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export default function NumberBadges({ variant, buttonLabel, bg, badgeNumber }){
    if(badgeNumber >= 100){
        return(
            <Button variant={variant}>
                {buttonLabel} <Badge bg={bg}>99+</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
        );
    } else{
        return(
            <Button variant={variant}>
                {buttonLabel} {badgeNumber > 0 && <Badge bg={bg}>{badgeNumber}</Badge>}
                <span className="visually-hidden">unread messages</span>
            </Button>
        );
    };
};