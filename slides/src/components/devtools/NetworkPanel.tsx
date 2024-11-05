import { Devtools } from "@/components/devtools";
import { styled } from "@/utils/styling";

const Row = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottom: "1px solid #efedeb",
  fontSize: "2.2vh",
  transition: "opacity .2s",

  variants: {
    header: {
      true: {
        fontSize: "1.4vh",
        textTransform: "uppercase",
        padding: ".4vh 0",
      },
    },
    unhighlighted: {
      true: {
        opacity: 0.2,
      },
    },
  },
});

const Name = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  padding: ".4vh 1.2vh",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  gap: ".8vh",
});

const Size = styled("div", {
  display: "flex",
  padding: ".4vh 1.2vh",
  width: "9vh",
  textAlign: "right",
  justifyContent: "flex-end",
  flexShrink: 0,
});

const Type = styled("div", {
  display: "flex",
  flexShrink: 0,
  height: "1vh",
  width: "1vh",
  borderRadius: ".2vh",
  marginTop: ".1vh",
  opacity: 0.5,

  variants: {
    type: {
      document: {
        background: "blue",
      },
      font: {
        background: "teal",
      },
      stylesheet: {
        background: "purple",
      },
      script: {
        background: "orange",
      },
    },
  },
});

const Truncate = styled("span", {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const Total = styled("div", {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#efedeb",
  fontSize: "2.2vh",
  padding: ".8vh 1.2vh",
  textAlign: "left",
  transition: "opacity .2s",

  variants: {
    unhighlighted: {
      true: {
        opacity: 0.2,
      },
    },
  },
});

export function NetworkPanel({ items, highlightItems = [] }: any) {
  const total =
    items?.reduce?.((all: number, item: any) => all + item.size, 0) || 0;
  return (
    <Devtools selected="network">
      <Row header unhighlighted={!!highlightItems.length}>
        <Name>Name</Name>
        <Size>Size</Size>
      </Row>
      {items?.map?.((item: any, i: number) => (
        <Row
          key={i}
          unhighlighted={highlightItems.length && !highlightItems.includes(i)}
        >
          <Name>
            <Type type={item.type} />
            <Truncate>{item.label}</Truncate>
          </Name>
          <Size>
            {item.size > 1_000 ? `${item.size / 1_000}kB` : `${item.size}B`}
          </Size>
        </Row>
      ))}
      <Total unhighlighted={!!highlightItems.length}>
        {total > 1_000_000
          ? `${Math.ceil(total / 1_000_000)}MB`
          : `${Math.ceil(total / 1_000)}kB`}{" "}
        transferred
      </Total>
    </Devtools>
  );
}
