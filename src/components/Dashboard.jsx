import React from "react";
import { Container } from "./styled/Container.styled";
import { DashboardCon } from "./styled/Dashboard.styled";
import { ServiceCon } from "./styled/Service.styled";

const Dashboard = () => {
  return (
    <ServiceCon>
      <Container>
        <DashboardCon>
          <LeftSideDash></LeftSideDash>
        </DashboardCon>
      </Container>
    </ServiceCon>
  );
};

export default Dashboard;
