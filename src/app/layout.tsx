import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "@/styles/globals.css";
import * as React from "react";
export const metadata = {
  title: "Students` Zone",
  description: "Students` Zone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <>{children}</>
        </ThemeRegistry>
      </body>
    </html>
  );
}
