import React from "react";
import { ThemeProvider } from "styled-components";
import Pageroutes from "./Routes/Pageroutes";

const App = () => {
  const theme = {
    Greenbg: "#217C2C",
    Faqbg: "#406A3A",
    whiteColor: "#FFFFFF",
    inputColor: "#F2F2F2",
    buttonBg: "#FFDD00",
    featureBg: "#FFFDE6",
    textColor: "#333333",
    PBg: "#EFFBF0",
    mobile: {
      minLap: "1080px",
      optionminLap: "1175px",
      tab: "902px",
      tab2: "982px",
      phone: "768px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Pageroutes />
      </>
    </ThemeProvider>
  );
};

export default App;
