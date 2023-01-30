import {
  TextField,
  Checkbox,
  Heading,
  Icon,
  Button,
  RadioButton,
  RadioGroup,
} from "@spark-design/react";

export const HiForm = () => {
  return (
    <div className="block">
      <form style={{ width: "60%" }}>
        <TextField
          aria-label="Text field aria label"
          inputMode="text"
          placeholder="text"
          startIcon="comment"
          type="text"
        />
        <br />
        <TextField
          aria-label="Text field aria label"
          inputMode="tel"
          placeholder="tel"
          startIcon="gpu"
          type="tel"
        />
        <br />
        <TextField
          aria-label="Text field aria label"
          placeholder="url"
          startIcon="globe-pointer"
          type="url"
        />
        <br />
        <TextField
          aria-label="Text field aria label"
          autoComplete="email"
          placeholder="email"
          startIcon="email"
          type="email"
        />
        <br />
        {/* <br />
        <Combobox
          label="Combobox"
          name="combobox"
          placeholder="Select a type"
          size="m"
          variant="primary"
        >
          <SelectItem>Food</SelectItem>
          <SelectItem>Drink</SelectItem>
        </Combobox> */}
        {/* <Dropdown
          label=""
          name="dropdown"
          placeholder="Type"
          size="l"
          variant="primary"
        >
          <SelectItem>Internal</SelectItem>
          <SelectItem>External</SelectItem>
        </Dropdown>
        <br /> */}
        <RadioGroup
          isRequired
          label="Group label"
          orientation="horizontal"
          size="l"
        >
          <RadioButton value="Option one">Option one</RadioButton>
          <RadioButton value="Option two">Option two</RadioButton>
          <RadioButton isDisabled value="Option disabled">
            Option disabled
          </RadioButton>
        </RadioGroup>
        <Checkbox size="l" className="hi-block-text">
          I'm Not a Robot
        </Checkbox>
        <Button variant="primary" endSlot={<Icon icon="comment" />}>
          Send
        </Button>
      </form>
      <div style={{ width: "40%", textAlign: "right" }}>
        <Heading semanticLevel={3} size="xl">
          <Icon artworkStyle="solid" icon="comment" /> We need your suggestion
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          bibendum tincidunt laoreet. Aenean eget auctor felis, eget
          pellentesque nibh. Etiam dui dolor, feugiat sed tempus eget, vehicula
          vel mi. Cras augue mauris, consequat vitae congue id, pellentesque nec
          turpis. Duis tincidunt varius li
        </p>
      </div>
    </div>
  );
};
