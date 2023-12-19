import * as React from "react";
import event from "@/assets/images/event.jpg";
import girls from "@/assets/images/girls.jpg";
import youtube from "@/assets/images/studentzone.jpg";
import image1 from "@/assets/images/image 1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";
import image6 from "@/assets/images/image6.jpg";
import image7 from "@/assets/images/image7.jpg";
import image8 from "@/assets/images/image8.jpg";
import image9 from "@/assets/images/image9.jpg";
import image10 from "@/assets/images/image10.jpg";
import image11 from "@/assets/images/image11.jpg";
import image12 from "@/assets/images/image12.jpg";
import image13 from "@/assets/images/image13.jpg";
import image14 from "@/assets/images/image14.jpg";
import image15 from "@/assets/images/image15.jpg";
import image16 from "@/assets/images/image16.jpg";
import image17 from "@/assets/images/image17.jpg";
import image18 from "@/assets/images/image18.jpg";
import image19 from "@/assets/images/image19.jpg";
import image20 from "@/assets/images/image20.jpg";
import child from "@/assets/images/child.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import line from "@/assets/images/line.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

export default function StandardImageList() {
  const itemData = [
    {
      img: youtube,
      title: "youtube",
    },
    {
      img: event,
      title: "event ",
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
      img: image2,
      title: "image2",
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
      img: image5,
      title: "image5",
    },
    {
      img: image6,
      title: "image6",
    },
    {
      img: image7,
      title: " image7",
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
      img: image10,
      title: "image10",
    },
    {
      img: image11,
      title: "image11",
    },
    {
      img: image12,
      title: "image12",
    },
    {
      img: image13,
      title: " image13",
    },
    {
      img: image14,
      title: "image14",
    },
    {
      img: image15,
      title: "image15 ",
    },
    {
      img: image16,
      title: "image16 ",
    },
    {
      img: image17,
      title: "image17 ",
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
