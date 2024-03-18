"use client";
// import image10 from "../assets/images/image10.jpeg";
import gallery1 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.30 PM.jpeg";
import gallery2 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.32 PM.jpeg";
import gallery3 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.34 PM (1).jpeg";
import gallery4 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.45 PM.jpeg";
import gallery5 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.35 PM.jpeg";
import gallery6 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.36 PM.jpeg";
import gallery7 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.37 PM.jpeg";
import gallery8 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.38 PM (1).jpeg";
import gallery9 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.39 PM (1).jpeg";
import image20 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.41 PM.jpeg";
import image3 from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.42 PM.jpeg";
import line from "@/assets/images/line.png";
import youtube from "@/assets/images/WhatsApp Image 2024-03-14 at 4.58.43 PM (1).jpeg";
import { useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function JuniorImageList() {
  const itemData = [
    {
      img: youtube,
      title: "youtube",
    },
    {
      img: gallery1,
      title: " gallery1 ",
    },
    {
      img: gallery2,
      title: "gallery2",
    },
    {
      img: gallery3,
      title: " gallery3",
    },
    {
      img: image3,
      title: "image3",
    },
    {
      img: gallery4,
      title: "gallery4",
    },
    {
      img: gallery5,
      title: "gallery5",
    },
    {
      img: gallery6,
      title: "gallery6",
    },

    {
      img: gallery7,
      title: "gallery7",
    },
    {
      img: gallery8,
      title: "gallery8 ",
    },
    {
      img: gallery9,
      title: "gallery9  ",
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
