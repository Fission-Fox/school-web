import logo from "@/assets/images/bluelogo.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const pageMenu: any = [
  {
    label: "Home",
    path: "#", // '/',
  },
  {
    label: "Testimonial ",
    path: "#testimonial",
  },
  {
    label: "Student Zone",
    path: "/student-zone",
  },
  {
    label: "Junior Zone",
    path: "/junior-zone",
  },
];
const FooterSectionTitle: FC<{ title: string }> = ({ title }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 2,
      }}
    >
      <Typography
        component="p"
        variant="h5"
        sx={{ color: "primary.contrastText", fontWeight: "700" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <p
        style={{
          display: "block",
          marginBottom: "1px",
          color: "white",
        }}
      >
        {label}
      </p>
    </Link>
  );
};

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }: any, index: any) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={4}>
                <FooterSectionTitle title="About" />
                {companyMenu.map(({ label, path }: any, index: any) => (
                    <NavigationItem key={index + path} label={label} path={path} />
                ))}
            </Grid> */}
    </Grid>
  );
};

const LandingFooter: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        py: { xs: 6, md: 10 },
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: "100%", md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Image
                src={logo}
                alt=""
                style={{
                  width: "100px",
                  height: "70px",
                }}
              />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Our institution boasts a team of the most experienced & highly
                qualified teachers who are dedicated to foster a dynamic
                learning environment.
              </Typography>
              {/* <FooterSocialLinks /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingFooter;
