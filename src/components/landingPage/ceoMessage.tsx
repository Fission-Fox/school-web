import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function CeoMessage() {
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
              mt: { xs: 0, md: 4 },
              mb: 4,
              lineHeight: 1,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Message From{" "}
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
              CEO
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
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/ceo.jpg"
              style={{ borderRadius: "50%", maxWidth: "100%" }}
              width={300}
              height={540}
              quality={97}
              alt="Testimonial img"
            />
            <h2 className="font-bold">Sir Ali Dilshad</h2>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <p>
              My sacrifice of not going abroad and staying in Pakistan to do
              something good with this country resulted in formation of
              Students’ Zone. I feel very privileged to be the CEO of this
              amazing institute working tirelessly on this nation's kids and
              furnishing them to become leaders of tomorrow. I feel so honored
              when I see how my dream is living and breathing everyday when
              these gems secure highest positions in AKU-EB federal board. My
              aim is to provide this nation with pioneers of future; Leaders of
              our country with great academics, amazing ethics, empathy,
              mental/physical strength and remarkable challenge accepting
              capabilities and my institute along with the efforts of my faculty
              is successfully achieving these milestone.
            </p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
