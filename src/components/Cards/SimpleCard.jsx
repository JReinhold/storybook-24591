import '../../index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SimpleCard({ cardWidth, title, text, variant, buttonLabel }){
    return(
    <Card style={{ width: cardWidth }}>
        <Card.Img variant="top" src="https://placehold.co/280x180" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            <Button variant={variant}>{buttonLabel}</Button>
        </Card.Body>
    </Card>
    );
};