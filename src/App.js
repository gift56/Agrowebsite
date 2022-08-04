import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";

const App = () => {
  const theme = {
    Greenbg: "#217C2C",
    whiteColor: "#FFFFFF",
    inputColor: "#F2F2F2",
    buttonBg: "#FFDD00",
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
        <Container>Hello World</Container>
      </>
    </ThemeProvider>
  );
};

export default App;
