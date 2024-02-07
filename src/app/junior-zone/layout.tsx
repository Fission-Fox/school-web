import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "@/styles/globals.css";
import * as React from "react";
import JuniorLayout from "./components/Layout";

export const metadata = {
  title: "Juniors` Zone",
  description: "Juniors` Zone",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <JuniorLayout>
            <>{children}</>
          </JuniorLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
