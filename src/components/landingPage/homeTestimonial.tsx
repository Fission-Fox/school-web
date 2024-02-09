"use client";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
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
      // title: "Detailed learning materials",
      img: "/images/Alishbah.png",
      content:
        "With dreams in my eyes,determination,dedication and goaI to become a future doctor, I entered Students’ Zone in 2014 and stayed with them till 2018.With all my hardwork and with help of subject experts provided by students‘ zone I proudly announce that, yes I am just an year away from achieving my MBBS degree. If you know you want to work hard for your dream then all you need to achieve it, is proper guidance,support and a system to train you for that and Students’ Zone is that platform.",
      user: {
        id: 1,
        name: "Alishabah",
      },
    },
    {
      id: 2,
      // title: "Best Quality Online Course!",
      img: "/images/Edhwa.png",
      content:
        "It is with great pleasure that I write this testimonial for Student’s Zone. The skills and knowledge I gained from this institution were invaluable. From study guides to mock exams, everything was designed to help students achieve their goals and succeed academically. I would highly recommend Student’s Zone to anyone looking for their academic pursuits and I am grateful for the skills and knowledge I gained during my time as a student here",
      user: {
        id: 1,
        name: "Edhwa khan",
      },
    },
    {
      id: 3,
      // title: "Very complete class",
      img: "/images/Shujaat.png",
      content:
        " I was just a simple student like you all. The reason behind my  success  is resilience and consistency that I learned through my days here in Students’ Zone. After my ﬁrst interaction with Sir Ali Dilshad as our physics teacher, after my whole concept toward studies took a u-turn. His concepts and well directed teaching have brought the  Students‘ Zone, where it is today. I'm pretty sure if you have the current to grow, Students’ Zone will make sure to direct that current in the right path of success.",
      user: {
        id: 1,
        name: "Shujaat Abbas",
      },
    },
    {
      id: 4,
      // title: "Great Quality!",
      img: "/images/Hunain.png",
      content:
        "I am currently working as Equity Fund Specialist at Faysal Funds and am a CFA Charter Holder. I have also done my BBA and MBA in Finance from Institute of Business Management. I was a student of the Students’ Zone in 2008-2009. I highly recommend Students’ Zone to students as the institute is one of the pioneers and most experienced in the preparation for Aga Khan Board Exams. The teachers are highly experienced and skilled and provide rigorous teaching and guidance to students to help them outshine.",
      user: {
        id: 1,
        name: "Muhammad Hunain",
      },
    },
    {
      id: 5,
      // title: "Detailed learning materials",
      img: "/images/Hadi.png",
      content:
        "During the crucial stages of my academic life, specifically in 9th and 10th grade, I made the decision to enroll in Students’ Zone, an educational institution that played a pivotal role in shaping my future. Fortunately, I had the privilege of being taught by exceptional teachers at Students’ Zone, particularly Sir Ali Dilshad for Physics and Sir Kashif for Chemistry. Their dedication and passion for their subjects made the learning process not only engaging but also fostered a deeper understanding of the material.",
      user: {
        id: 1,
        name: "Dr. Hadi Hassan",
      },
    },
  ];

  return (
    <Box
      id="testimonial"
      sx={{ pb: { xs: 6, md: 10 }, backgroundColor: "background.paper" }}
    >
      <Container>
        <div className="w-[95%] md:w-[80%] m-auto">
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
        </div>
        {/* <Grid
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
          </Grid> */}
      </Container>
    </Box>
  );
};

export default HomeTestimonial;
