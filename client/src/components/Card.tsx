import { Card, Button } from "@spark-design/react";
import example from "../example.jpeg";

export interface HiCardProps {
  title: string;
  content: string;
  footerContent: string;
}

export const HiCard = ({ title, content, footerContent }: HiCardProps) => {
  return (
    <Card
      checkboxOverlay={false}
      hasCheckbox={false}
      orientation="vertical"
      variant="normal"
    >
      <img src={example} alt="example" width="300px" />
      <h2 style={{ textAlign: "left", padding: "1rem", margin: 0 }}>{title}</h2>
      <p style={{ textAlign: "left", padding: "1rem", margin: 0 }}>{content}</p>
      <p
        style={{
          left: "1rem",
          position: "absolute",
          bottom: "1rem",
          margin: 0,
          color: "#525252",
        }}
      >
        {`v${footerContent}`}
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          right: "1rem",
          position: "absolute",
          bottom: "1rem",
        }}
      >
        <Button variant="action">Action</Button>
        <Button variant="primary">Primary</Button>
      </div>
    </Card>
  );
};
