import {
  Heading,
  Icon,
  ProgressLoader,
  List,
  ListItem,
  Tooltip,
} from "@spark-design/react";

export const HiAbout = () => {
  return (
    <div className="about">
      <Heading semanticLevel={5} size="m" style={{ display: "flex" }}>
        Contact us
        <div>
          <Tooltip content="This is a tooltip" size="m">
            <Icon
              altText="Information"
              icon="information-circle"
              style={{ color: "white", marginLeft: "1rem" }}
            />
          </Tooltip>
        </div>
      </Heading>
      <List size="m">
        <ListItem>
          <span style={{ color: "white" }}>877-811-2574</span>
        </ListItem>
        <ListItem>
          <span style={{ color: "white" }}>1800-145-795</span>
        </ListItem>
        <ListItem>
          <span style={{ color: "white" }}>800-90-3406</span>
        </ListItem>
      </List>
      <br />
      <br />
      <ProgressLoader
        style={{
          inlineSize: "100%",
        }}
        variant="bar"
      />
    </div>
  );
};
