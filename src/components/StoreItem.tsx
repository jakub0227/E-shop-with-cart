import { FC } from "react";
import { Card, CardImg } from "react-bootstrap";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="350px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price} PLN</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
