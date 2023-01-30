import {
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Hyperlink,
} from "@spark-design/react";

export const HiBlock = () => {
  return (
    <div className="block">
      <div style={{ width: "80%", textAlign: "left" }}>
        <Heading semanticLevel={3} size="xl">
          <Icon artworkStyle="solid" icon="cpu" /> Processors
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          bibendum tincidunt laoreet. Aenean eget auctor felis, eget
          pellentesque nibh. Etiam dui dolor, feugiat sed tempus eget, vehicula
          vel mi. Cras augue mauris, consequat vitae congue id, pellentesque nec
          turpis. Duis tincidunt varius ligula, eu laoreet elit sodales a. Donec
          sodales semper libero at pellentesque. Donec egestas et quam in
          sollicitudin. Etiam lacinia volutpat magna ac facilisis. Morbi dictum,
          lacus
        </p>
        <Hyperlink as="span" skin="quiet" variant="secondary">
          More information <Icon icon="arrow-right" />
        </Hyperlink>
      </div>
      <ButtonGroup orientation="vertical">
        <Button
          variant="primary"
          endSlot={<Icon icon="play" />}
          style={{ color: "white", width: "100%" }}
        >
          Go to Application
        </Button>
        <Button
          variant="primary"
          endSlot={<Icon icon="play" />}
          style={{ color: "white", width: "100%" }}
        >
          Go to Cluster
        </Button>
        <Button
          variant="primary"
          endSlot={<Icon icon="play" />}
          style={{ color: "white", width: "100%" }}
        >
          Go to Infrastructure
        </Button>
        <Button
          variant="primary"
          endSlot={<Icon icon="play" />}
          style={{ color: "white", width: "100%" }}
        >
          Go to ..........
        </Button>
      </ButtonGroup>
    </div>
  );
};
