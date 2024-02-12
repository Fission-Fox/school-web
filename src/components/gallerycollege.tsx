"use client";
import child from "@/assets/images/child.jpeg";
import girls from "@/assets/images/girls.jpeg";
// import image10 from "../assets/images/image10.jpeg";
import image14 from "@/assets/images/image14.jpeg";
import image18 from "@/assets/images/image18.jpeg";
import image19 from "@/assets/images/image19.jpeg";
import image20 from "@/assets/images/image20.jpeg";
import image3 from "@/assets/images/image3.jpeg";
import image4 from "@/assets/images/image4.jpeg";
import image8 from "@/assets/images/image8.jpeg";
import image9 from "@/assets/images/image9.jpeg";
import image1 from "@/assets/images/image_1.jpeg";
import line from "@/assets/images/line.png";
import youtube from "@/assets/images/studentzone.jpg";
import { useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function StandardImageListCollege() {
  const itemData = [
    {
      img: youtube,
      title: "youtube",
    },
    {
      img: child,
      title: " child  ",
    },
    {
      img: girls,
      title: "girls",
    },
    {
      img: image1,
      title: " image1",
    },
    {
      img: image3,
      title: "image3",
    },
    {
      img: image4,
      title: "image4",
    },
    {
      img: image8,
      title: "image8",
    },
    {
      img: image9,
      title: "image9",
    },

    {
      img: image14,
      title: "image14",
    },
    {
      img: image18,
      title: "image18 ",
    },
    {
      img: image19,
      title: "image19 ",
    },
    {
      img: image20,
      title: "image20 ",
    },
  ];
  const isMobile = useMediaQuery("(max-width:600px)"); // Define mobile screen size breakpoint
  const isTablet = useMediaQuery("(max-width:768px)"); // Define mobile screen size breakpoint

  const getCols = () => {
    if (isMobile) {
      return 2;
    } else if (isTablet) {
      return 4;
    } else {
      return 6;
    }
  };
  return (
    <div className="">
      <div className="mb-10">
        <div className="flex justify-center ">
          <h1 className="text-[50px] font-sans font-bold mt-6  text-[#00306E]">
            Gallery
          </h1>{" "}
        </div>
        <div className="flex justify-center">
          <Image src={line} alt="" />
        </div>
      </div>

      <ImageList
        sx={{ width: "80%", margin: "auto" }}
        cols={getCols()}
        rowHeight={200}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <Zoom>
              <Image
                loading="lazy"
                src={item.img}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
                alt="img"
              />
            </Zoom>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
