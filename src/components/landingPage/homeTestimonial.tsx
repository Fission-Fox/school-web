"use client";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FC, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import TestimonialItem from "./LandingHeader/testimonialITem";

interface SliderArrowArrow {
  onClick?: () => void;
  type: "next" | "prev";
  className?: "string";
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;

  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: { xs: "-28px !important", md: "64px !important" },
        left: "unset !important",
        right: type === "prev" ? "90px !important" : "30px !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};

const StyledSlickContainer = styled("div")(() => ({
  position: "relative",

  "& .slick-list": { marginLeft: "-30px", marginBottom: "24px" },
}));

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null);

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <SliderArrow type="prev" />,
    // nextArrow: <SliderArrow type="next" />,
  };
  const data: any = [
    {
      id: 1,
      title: "Detailed learning materials",
      content:
        "I am grateful for the holistic education I received here, where innovative teaching methods and real-world applications have prepared me to navigate the complexities of the modern world.",
      user: {
        id: 1,
        name: "Muneeb parkar",
      },
    },
    {
      id: 2,
      title: "Best Quality Online Course!",
      content:
        "The online courses provided by our school are top-notch, offering engaging content and interactive learning experiences that cater to diverse learning styles I appreciate, the high-quality instruction and well-structured curriculum.",
      user: {
        id: 1,
        name: "Shayan mehdi",
      },
    },
    {
      id: 3,
      title: "Very complete class",
      content:
        "The class has a perfect balance between theoretical concepts and practical applications, allowing us to develop both a deep understanding of the subject matter and the skills needed in our future careers. It's a truly enriching educational experience.",
      user: {
        id: 1,
        name: "Muhammad Maaz",
      },
    },
    {
      id: 4,
      title: "Great Quality!",
      content:
        "The exceptional quality of education at our school has truly transformed my learning experience. The dedicated teachers and cutting-edge curriculum have equipped me with the skills and knowledge needed for success in today's competitive world.",
      user: {
        id: 1,
        name: "Anus shams",
      },
    },
    {
      id: 5,
      title: "Detailed learning materials",
      content:
        "The school's emphasis on holistic development goes beyond academics, promoting character-building, leadership skills, and a sense of social responsibility. I am proud to be associated with an institution that prioritizes both academic excellence and the overall growth of its students.",
      user: {
        id: 1,
        name: "Muhib khan",
      },
    },
  ];

  return (
    <Box
      id="testimonial"
      sx={{ pb: { xs: 6, md: 10 }, backgroundColor: "background.paper" }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: "relative",
                fontSize: { xs: 36, md: 46 },
                mt: { xs: 0, md: 7 },
                mb: 4,
                lineHeight: 1,
                fontWeight: "bold",
              }}
            >
              Testimonial What our{" "}
              <Typography
                component="mark"
                sx={{
                  position: "relative",
                  color: "#074886",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  backgroundColor: "unset",
                }}
              >
                Students{" "}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 30, md: 60 },
                    left: 2,
                    "& img": { width: { xs: 130, md: 175 }, height: "auto" },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
              Say
            </Typography>

            <StyledSlickContainer>
              <Slider ref={sliderRef} {...sliderConfig}>
                {data.map((item: any, index: any) => (
                  <TestimonialItem key={String(index)} item={item} />
                ))}
              </Slider>
            </StyledSlickContainer>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ width: { xs: "100%", md: "90%" } }}>
              <Image
                src="/images/home-testimonial.png"
                width={520}
                height={540}
                quality={97}
                alt="Testimonial img"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeTestimonial;
