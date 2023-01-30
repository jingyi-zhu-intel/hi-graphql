import { Tabs, SelectItem, Shadow, Tag } from "@spark-design/react";

export const HiTabs = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <Tabs
        aria-label="Tabs all features"
        isCloseable={false}
        keyboardActivation="manual"
        labels={["Heart", "Time", "Star"]}
        size="l"
        tabsCount={3}
        variant="ghost"
      >
        <SelectItem title="Heart">
          <Shadow
            style={{
              padding: "1rem",
              textAlign: "left",
            }}
          >
            <Tag label="Blue" size="small" />
            &nbsp;
            <Tag label="Orange" theme="rust" size="small" />
            <br />
            Sed a nunc lorem. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Donec finibus lobortis fermentum. Sed iaculis ipsum non
            nunc lacinia, et viverra enim gravida. Mauris eget erat ut diam
            venenatis euismod. Fusce velit erat, congue in ipsum et, hendrerit
            tristique libero. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec vitae est at enim
            malesuada molestie non vel lorem. Fusce rutrum lorem vitae augue
            auctor volutpat. Ut ut velit vel odio varius ullamcorper id
            fermentum odio. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Morbi a sem ut purus
            volutpat commodo. Nunc condimentum tellus eget elementum auctor.
            Integer rutrum odio nec sapien consectetur posuere. Aliquam erat
            volutpat. Curabitur vitae ex eu nibh fringilla commodo ut ac lacus.
            Vestibulum nec lacus nibh. Quisque sed est lorem. Sed vitae lobortis
            justo, non sodales lorem. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nulla blandit ex vel elementum porta. Proin
            viverra mollis ante ut cursus. Aenean pharetra sapien in pharetra
            viverra. Aenean at mi eros. Duis pretium turpis et arcu pharetra,
            quis placerat est molestie. Mauris facilisis faucibus pretium.
            Pellentesque at pretium risus, ornare rutrum mi. Praesent dolor
            arcu, ultricies nec leo in, euismod facilisis massa.
          </Shadow>
        </SelectItem>
        <SelectItem title="Time">
          <Shadow
            style={{
              padding: "1rem",
              textAlign: "left",
            }}
          >
            <Tag label="Coral" theme="coral" size="small" />
            &nbsp;
            <Tag label="Green" theme="moss" size="small" />
            <br />
            Sed a nunc lorem. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Donec finibus lobortis fermentum. Sed iaculis ipsum non
            nunc lacinia, et viverra enim gravida. Mauris eget erat ut diam
            venenatis euismod. Fusce velit erat, congue in ipsum et, hendrerit
            tristique libero. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec vitae est at enim
            malesuada molestie non vel lorem. Fusce rutrum lorem vitae augue
            auctor volutpat. Ut ut velit vel odio varius ullamcorper id
            fermentum odio. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Morbi a sem ut purus
            volutpat commodo. Nunc condimentum tellus eget elementum auctor.
            Integer rutrum odio nec sapien consectetur posuere. Aliquam erat
            volutpat. Curabitur vitae ex eu nibh fringilla commodo ut ac lacus.
            Vestibulum nec lacus nibh. Quisque sed est lorem. Sed vitae lobortis
            justo, non sodales lorem. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nulla blandit ex vel elementum porta. Proin
            viverra mollis ante ut cursus. Aenean pharetra sapien in pharetra
            viverra. Aenean at mi eros. Duis pretium turpis et arcu pharetra,
            quis placerat est molestie. Mauris facilisis faucibus pretium.
            Pellentesque at pretium risus, ornare rutrum mi. Praesent dolor
            arcu, ultricies nec leo in, euismod facilisis massa.
          </Shadow>
        </SelectItem>
        <SelectItem title="Star">
          <Shadow
            style={{
              padding: "1rem",
              textAlign: "left",
            }}
          >
            Sed a nunc lorem. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Donec finibus lobortis fermentum. Sed iaculis ipsum non
            nunc lacinia, et viverra enim gravida. Mauris eget erat ut diam
            venenatis euismod. Fusce velit erat, congue in ipsum et, hendrerit
            tristique libero. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec vitae est at enim
            malesuada molestie non vel lorem. Fusce rutrum lorem vitae augue
            auctor volutpat. Ut ut velit vel odio varius ullamcorper id
            fermentum odio. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Morbi a sem ut purus
            volutpat commodo. Nunc condimentum tellus eget elementum auctor.
            Integer rutrum odio nec sapien consectetur posuere. Aliquam erat
            volutpat. Curabitur vitae ex eu nibh fringilla commodo ut ac lacus.
            Vestibulum nec lacus nibh. Quisque sed est lorem. Sed vitae lobortis
            justo, non sodales lorem. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nulla blandit ex vel elementum porta. Proin
            viverra mollis ante ut cursus. Aenean pharetra sapien in pharetra
            viverra. Aenean at mi eros. Duis pretium turpis et arcu pharetra,
            quis placerat est molestie. Mauris facilisis faucibus pretium.
            Pellentesque at pretium risus, ornare rutrum mi. Praesent dolor
            arcu, ultricies nec leo in, euismod facilisis massa.
          </Shadow>
        </SelectItem>
      </Tabs>
    </div>
  );
};
