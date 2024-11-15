import { styled } from "@/utils/styling";
import { useServerSlide } from "@/utils/useServerSlide";

const Book = styled("div", {
  position: "absolute",
  bottom: "-70vh",
  borderRadius: "1.4vh",
  transition: "all .6s",

  "& svg": {
    width: "100%",
    height: "auto",
  },

  "& span": {
    position: "absolute",
    transformOrigin: "center",
    rotate: "-90deg",
    translate: "-50% -50%",
    left: "50%",
    top: "50%",
    width: "24vh",
    textAlign: "center",
    lineHeight: 1,
    fontSize: "2.5vh",
    color: "$black",
    opacity: 0.2,
  },

  '&[data-visible="true"]': {
    bottom: "13.5vh",
  },
});

const BookLeft = styled(Book, {
  width: "8vh",
  height: "43vh",
  background: "#B1A2DA",
  left: "calc(50% - 86.6vh)",
  transformOrigin: "bottom right",
  transform: "rotate(5deg)",

  "&:before": {
    content: '" "',
    position: "absolute",
    bottom: "10%",
    left: "50%",
    translate: "-50%",
    width: "20%",
    height: "50%",
    borderRadius: "20vh",
    background: "$black",
    opacity: 0.05,
  },

  '&[data-left="partial"]': {
    left: "calc(50% - 94.6vh)",
  },

  '&[data-left="full"]': {
    left: "-50%",
  },
});

const BookMiddle = styled(Book, {
  left: "calc(50% - 75vh)",
  width: "10vh",
  height: "50vh",
  background: "#96BCCD",

  "&:before": {
    content: '" "',
    position: "absolute",
    bottom: "2.5vh",
    width: "4.5vh",
    height: "4.5vh",
    borderRadius: "1vh",
    background: "$black",
    opacity: 0.05,
    left: "50%",
    translate: "-50%",
  },

  "& span": {
    textAlign: "left",
    top: "59%",
  },

  '&[data-left="partial"]': {
    left: "calc(50% - 83vh)",
    width: "8vh",
  },

  '&[data-left="full"]': {
    left: "-50%",
    width: "8vh",
  },
});

const BookRight = styled(Book, {
  left: "calc(50% - 65vh)",
  width: "14vh",
  height: "46vh",
  background: "#C9DB97",

  "&:before, &:after": {
    content: '" "',
    position: "absolute",
    left: 0,
    width: "100%",
    height: "6vh",
    background: "$black",
    opacity: 0.05,
  },

  "&:before": {
    bottom: "4vh",
  },

  "&:after": {
    top: "4vh",
  },

  '&[data-left="partial"]': {
    left: "calc(50% - 75.1vh)",
    width: "10vh",
  },

  '&[data-left="full"]': {
    left: "-50%",
    width: "10vh",
  },
});

const titles = {
  html: {
    middle: "How to use <marquee> absolutely everywhere",
    right: "HTML for beginners",
  },
  ajax: {
    middle: "Wordpress & Magento",
    right: "The magic of jQuery",
  },
  spa: {
    middle: "Tutorial — Building a button component in 300+ ways",
    right: "React for dummies",
  },
};

type Props = {
  slide?: string;
};

function Books({ slide }: Props) {
  const { era } = useServerSlide(slide);

  const visible = !["sponsors", "title"].includes(era);
  const left = ["ssr", "rsc"].includes(era)
    ? "full"
    : ["ajax", "spa"].includes(era)
    ? "partial"
    : undefined;

  const titleMiddle = titles[era as keyof typeof titles]?.middle || null;
  const titleRight = titles[era as keyof typeof titles]?.right || null;

  return (
    <>
      <BookLeft data-visible={visible} data-left={left} />
      <BookMiddle data-visible={visible} data-left={left}>
        <span>{titleMiddle}</span>
      </BookMiddle>
      <BookRight data-visible={visible} data-left={left}>
        <span>{titleRight}</span>
      </BookRight>
    </>
  );
}

export { Books };
