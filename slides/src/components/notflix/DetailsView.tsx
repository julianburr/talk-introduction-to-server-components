import "./like-button.css";

import { keyframes, styled } from "@/utils/styling";
import Icon from "feather-icons-react";

import { HeartSvg } from "./HeartSvg";

const pulse = keyframes({
  "0%": { background: "rgba(0,0,0,.25)" },
  "50%": { background: "rgba(0,0,0,.1)" },
  "100%": { background: "rgba(0,0,0,0.25)" },
});

const Window = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
});

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: "$grey-100",
  color: "$white",
  padding: "3vh",
});

const Inner = styled("div", {
  width: "100%",
  height: "100%",
  borderRadius: "1rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  background: "$grey-200",
  maxWidth: "104vh",
  margin: "0 auto",
});

const Poster = styled("div", {
  display: "flex",
  flexShrink: 0,
  width: "50%",
  height: "100%",
  position: "relative",
  background: "rgba(0,0,0,.2)",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity .2s",
  },

  variants: {
    loading: {
      true: {
        animation: `${pulse} infinite 2s`,

        "& img": {
          opacity: 0,
        },
      },
    },
  },
});

const Details = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  width: "50%",
  height: "100%",
  padding: "2.4vh",
  textAlign: "left",

  "& > *": {
    transition: "opacity .2s",
  },

  "& h2": {
    fontSize: "1.8vh",
    margin: "2vh 0 0",
    padding: 0,
    opacity: 0.5,

    "& ~ p, & ~ div > p:first-child": {
      marginTop: 0,
    },
  },

  "& p": {
    margin: "1vh 0",
    padding: 0,
    fontSize: "1.8vh",
  },
});

const Content = styled("main", {
  display: "flex",
  flexDirection: "column",
  transition: "opacity .2s",

  variants: {
    loading: {
      true: {
        opacity: 0,
      },
    },
  },
});

const Header = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "2vh",
});

const Button = styled("div", {
  height: "5vh",
  width: "5vh",
  borderRadius: "50%",
  background: "rgba(255,255,255,.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255,255,255,.8)",
  transition: "background .2s",

  "& label": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& svg": {
    width: "auto",
    height: "2vh",
  },

  "&:last-child svg": {
    height: "4.4vh",
  },

  variants: {
    active: {
      true: {
        background: "$white",
      },
    },
  },
});

const Title = styled("div", {
  paddingBottom: "1.4vh",

  "& h1": {
    margin: 0,
    padding: "0 0 .4vh",
    fontSize: "4vh",
    lineHeight: "1.1",
    textWrap: "balance",
  },

  "& span": {
    display: "flex",
    fontSize: "2.4vh",
    opacity: 0.5,
  },
});

export function DetailsView({ status, devtools }: any) {
  return (
    <Window>
      <Container>
        <Inner>
          <Poster loading={status === "loading"}>
            <img src="https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg" />
          </Poster>
          <Details>
            <Header>
              <Button>
                <Icon icon="arrow-left" />
              </Button>
              <Button className="like-button" active={status === "liked"}>
                <input
                  id="like"
                  type="checkbox"
                  className="checkbox"
                  checked={status === "liked"}
                  readOnly
                />
                <label htmlFor="like">
                  <HeartSvg />
                </label>
              </Button>
            </Header>

            <Content loading={status === "loading"}>
              <Title>
                <h1>The Unbearable Weight of Massive Talent</h1>
                <span>2022, 1h 47m</span>
                <span>Action, Comedy, Crime</span>
              </Title>

              <p className="sans">
                Moviestar Nick Cage is channeling his iconic characters as he’s
                caught between a superfan and a CIA agent.
              </p>

              <h2>Director</h2>
              <p className="sans">Tom Gormican</p>

              <h2>Cast</h2>
              <p className="sans">
                Nicolas Cage, Pedro Pascal, Tiffany Haddish
              </p>

              <h2>Review: I did not expect that!!!</h2>
              <div className="sans">
                <p>
                  It’s fair to say I haven’t always been the biggest fan of
                  Nicholas Cage, but it’s not the talent, it’s often the film
                  choices, similar to Michael Cain, he really has made some
                  shockers. What this film does however is poke a little fun at
                  his past, it’s tongue in cheek, but it’s a cracking movie.
                </p>
                <p>
                  It’s funny, it’s energetic, it zips along, there isn’t a
                  single dull moment here, you don’t need to be a fan or a
                  critic, this movie is just really worth your time.
                </p>
                <p>
                  Loaded with irony, it’s plain to see that Cage has a sense of
                  humour, this really is a winner for him.
                </p>
              </div>
            </Content>
          </Details>
        </Inner>
      </Container>
      {devtools}
    </Window>
  );
}
