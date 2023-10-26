import '../../index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FeatureCard({ title, text, buttonVariant, buttonLabel }){
    return(
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Img src="https://placehold.co/800x200" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant={buttonVariant}>{buttonLabel}</Button>
            </Card.Body>
        </Card>
    );
};