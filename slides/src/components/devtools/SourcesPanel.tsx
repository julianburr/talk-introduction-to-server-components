import { Devtools } from "@/components/devtools";
import { styled } from "@/utils/styling";
import Icon from "feather-icons-react";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  padding: ".4vh 0",
});

const Items = styled("div", {
  width: "100%",
});

const Item = styled("div", {
  width: "100%",
  transition: "opacity .2s",

  variants: {
    unhighlighted: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

const Label = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".6vh",
  textAlign: "left",
  padding: ".4vh 1.6vh",
  fontSize: "2.2vh",

  "& svg": {
    height: "1.8vh",
    width: "auto",
    color: "$windowTopDark",
  },

  variants: {
    level: {
      1: {
        paddingLeft: "3.6vh",
      },
      2: {
        paddingLeft: "5.6vh",
      },
    },
  },
});

function List({ items, highlightItems = [], focused, level = 0 }: any) {
  return (
    <Items className="sans">
      {items?.map?.((item: any, i: number) => (
        <Item
          key={i}
          unhighlighted={highlightItems.length && !highlightItems.includes(i)}
        >
          <Label level={level}>
            <Icon icon={item.icon} />
            <span>{item.label}</span>
          </Label>
          {item.items && (
            <List items={item.items} focused={focused} level={level + 1} />
          )}
        </Item>
      ))}
    </Items>
  );
}

export function SourcesPanel({ items, focused }: any) {
  return (
    <Devtools selected="sources">
      <Container>
        <List items={items} focused={focused} />
      </Container>
    </Devtools>
  );
}
