import React from "react";
import DashboardPages from "./DashboardPages";
import { Container } from "./styled/Container.styled";
import { DashboardCon, LeftSideDash } from "./styled/Dashboard.styled";
import { ServiceCon } from "./styled/Service.styled";

const Dashboard = () => {
  return (
    <ServiceCon>
      <Container>
        <DashboardCon>
          <LeftSideDash></LeftSideDash>
          <DashboardPages />
        </DashboardCon>
      </Container>
    </ServiceCon>
  );
};

export default Dashboard;
