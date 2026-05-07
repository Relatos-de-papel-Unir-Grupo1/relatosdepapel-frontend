import { Card } from "react-bootstrap";
import { Button }  from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";

export default function CardView({ title, price, imgSrc, subtitle }) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img  variant="top" src={imgSrc} style={{ height: '30vh'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle style={{ fontWeight: 'normal', color: 'gray' }}>{subtitle}</Card.Subtitle>
        <Card.Text style={{ fontWeight: 'bold' }}>${price.toFixed(2)}</Card.Text>
        <div className="d-grid gap-1">
        <Button className="d-flex align-items-center justify-content-center gap-2" variant="secondary" size="lg"><TiShoppingCart  /> Añadir al carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}