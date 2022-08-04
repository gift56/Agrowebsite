import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";

const App = () => {
  const theme = {
    Greenbg: "#217C2C",
    whiteColor: "#FFFFFF",
    inputColor: "#F2F2F2",
    buttonBg: "#FFDD00",
    featureBg: "#FFFDE6",
    textColor: "#333333",
    mobile: {
      minLap: "1080px",
      tab: "902px",
      phone: "768px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Home />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
