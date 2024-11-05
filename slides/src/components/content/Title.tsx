import { styled } from "@/utils/styling";

export const Title = styled("h1", {
  fontSize: "20vh",
  lineHeight: 1.1,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "relative",

  variants: {
    small: {
      true: {
        fontSize: "8vh",
        color: "$blue",
        padding: "0 10vh",
      },
    },
  },
});
