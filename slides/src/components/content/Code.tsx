import { styled } from "@/utils/styling";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  background: "#2b2b2b",
  fontSize: "2.8vh",
  display: "flex",
  flexDirection: "column",
});

const Top = styled("div", {
  width: "100%",
  background: "#111",
  display: "flex",
  flexDirection: "row",
});

const Tab = styled("div", {
  padding: "1.3vh 2vh .7vh",
  color: "$white",
  opacity: 0.5,
  transition: "opacity .2s",

  variants: {
    active: {
      true: {
        opacity: 1,
        background: "#2b2b2b",
      },
    },
  },
});

const Content = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "1vh",

  "& .language-jsx > span": {
    transition: "opacity .2s",
  },

  "& .linenumber": {
    width: "3.25em",
  },
});

function Code({ code, tabs, highlightLines, language = "jsx" }: any) {
  return (
    <Container>
      <Top>
        {tabs?.map((tab: any) => (
          <Tab key={tab.label} active={tab.active}>
            {tab.label}
          </Tab>
        ))}
      </Top>
      <Content
        css={
          highlightLines?.length
            ? {
                "& .language-jsx > span": {
                  opacity: 0.2,

                  [`${highlightLines
                    .map((line: number) => `&:nth-child(${line})`)
                    .join(", ")}`]: {
                    opacity: 1,
                  },
                },
              }
            : {}
        }
      >
        <SyntaxHighlighter
          style={a11yDark}
          language={language}
          showLineNumbers
          wrapLines
        >
          {code.trimEnd()}
        </SyntaxHighlighter>
      </Content>
    </Container>
  );
}

export { Code };
