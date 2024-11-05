import { keyframes, styled } from "@/utils/styling";
import Icon from "feather-icons-react";

const movies = [
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
    title: "The Unbearable Weight of Massive Talent",
    year: "2022",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDg1ZjliMWYtZDlkZi00YjE5LWJkODMtOTM3Y2RlODUyNGUxXkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_.jpg",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDBjYmM2NzAtMWI3YS00YmMxLWJjNmEtNjA2OWNkZjkzMTcyXkEyXkFqcGdeQXVyMTM2MTU3MjMz._V1_.jpg",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTc2ZTNkODgtMjVmMy00MzdmLTk5NDUtYTUzMDA0M2NjNWMyXkEyXkFqcGdeQXVyNTQ1MDQzMzU@._V1_.jpg",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BODA3NDhiZjYtYTk2NS00ZWYwLTljYTQtMjU0NzcyMGEzNTU2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjYwZTYwMmEtODVjOC00MWU3LThmZWMtYWQ5ZTA2NDZmYjVlXkEyXkFqcGdeQXVyNTYzNDU0MzY@._V1_.jpg",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2M3NWQxZWMtNmU0NS00MTY2LTkxNDAtN2EzODY4NTY5ZTVhXkEyXkFqcGdeQXVyNDA1OTM4MjM@._V1_.jpg",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDkzMTM0MzIxMl5BMl5BanBnXkFtZTcwODU0MjUyMQ@@._V1_.jpg",
  },
];

const pulse = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.7 },
  "100%": { opacity: 1 },
});

const cursor = keyframes({
  "0%": { borderRight: "1px solid rgba(255,255,255,0)" },
  "40%": { borderRight: "1px solid rgba(255,255,255,1)" },
  "60%": { borderRight: "1px solid rgba(255,255,255,1)" },
  "100%": { borderRight: "1px solid rgba(255,255,255,0)" },
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
});

const Inner = styled("div", {
  width: "100%",
  maxWidth: "90vh",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});

const Header = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "3vh 3vh 1vh",
  gap: "6vh",
});

const Logo = styled("h1", {});

const Search = styled("div", {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  gap: "1vh",
  padding: "1.5vh",
  background: "$grey-200",
  borderRadius: ".4rem",
});

const SearchTerm = styled("span", {
  paddingRight: ".1vh",

  variants: {
    placeholder: {
      true: {
        opacity: 0.5,
      },
    },
    loading: {
      true: {
        animation: `${cursor} infinite 1s`,
      },
    },
  },
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "1vh",
});

const Poster = styled("div", {
  width: "100%",
  aspectRatio: 11 / 16,
  borderRadius: ".4rem",
  overflow: "hidden",
  background: "$grey-200",
  transition: "transform .2s",
  position: "relative",

  "&:first-child": {
    zIndex: 10,
  },

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "flex",
    transition: "opacity .2s",
  },

  "& > div": {
    opacity: 0,
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
    focused: {
      true: {
        transform: "scale(1.1)",

        "& > div": {
          opacity: 1,
        },
      },
    },
    unfocused: {
      true: {
        "& img": {
          opacity: 0.3,
        },
      },
    },
  },
});

const Overlay = styled("div", {
  position: "absolute",
  left: "-.1vh",
  right: "-.1vh",
  bottom: "-.1vh",
  padding: "10vh 1.6vh 1.6vh",
  textAlign: "left",
  background: "linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%)",

  "& h2": {
    fontSize: "2.4vh",
    margin: 0,
    padding: 0,
  },

  "& span": {
    fontSize: "1.8vh",
    opacity: 0.8,
  },
});

export function ListView({ status = "idle", devtools }: any) {
  return (
    <Window>
      <Container>
        <Inner>
          <Header>
            <Logo>Notflix</Logo>
            <Search className="sans">
              <Icon icon="search" />
              <SearchTerm
                placeholder={status === "idle"}
                loading={status === "loading"}
              >
                {status === "idle" ? "Search movies..." : "Talent"}
              </SearchTerm>
            </Search>
          </Header>
          {status !== "idle" && (
            <Grid>
              {movies.map((movie, i) => (
                <Poster
                  key={movie.poster}
                  loading={status === "loading"}
                  focused={status === "focused" && i === 0}
                  unfocused={status === "focused" && i !== 0}
                >
                  <img src={movie.poster} />
                  {movie.title && (
                    <Overlay>
                      <h2>{movie.title}</h2>
                      <span>{movie.year}</span>
                    </Overlay>
                  )}
                </Poster>
              ))}
            </Grid>
          )}
        </Inner>
      </Container>
      {devtools}
    </Window>
  );
}
