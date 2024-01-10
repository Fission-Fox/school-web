import { theme } from "@/utils/theme";
import { Box, ListItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppButton } from "../Button";

type Props = {
  href: string;
  icon?: JSX.Element;
  title: string;
};

export function NavItem(props: Props) {
  const router = usePathname();

  const { href, icon, title } = props;

  const active = href ? router === href : false;

  return (
    <ListItem disableGutters>
      <AppButton
        fullWidth
        startIcon={icon}
        sx={{
          backgroundColor: active ? "rgba(255,255,255, 0.08)" : "transparent",
          color: active
            ? theme.palette.secondary.main
            : theme.palette.text.secondary,
          fontWeight: active ? "fontWeightBold" : "fontWeightSemiBold",
          textAlign: "left",
          "& .MuiButton-startIcon": {
            color: active
              ? theme.palette.secondary.main
              : theme.palette.text.secondary,
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        }}
      >
        <Link href={href} passHref>
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Link>
      </AppButton>
    </ListItem>
  );
}
