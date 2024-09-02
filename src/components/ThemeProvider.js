"use client";

import { ThemeProvider as Theme } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Theme attribute={"class"} enableSystem={false}>
      <NextNProgress
        color="#e11d48"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease-in-out", speed: 500 }}
      />
      <Navbar />
      {children}
      <ScrollTop />
      <Footer />
    </Theme>
  );
};

export default ThemeProvider;
