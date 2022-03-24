import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import WifiIcon from "@mui/icons-material/Wifi";
import Battery80Icon from "@mui/icons-material/Battery80";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

export const StatusBar = () => {
  const [timer, setTimer] = useState("00:00");
  const currentTimer = () => {
    const today = new Date();
    const hours = ("0" + today.getHours()).slice(-2);
    const minutes = ("0" + today.getMinutes()).slice(-2);
    setTimer(`${hours}:${minutes} ${parseInt(hours) >= 12 ? "PM" : "AM"}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };
  useEffect(() => {
    startTimer();
  }, [timer]);

  return (
    <Header>
      <Container>
        <h2 className="sr-only">상태바</h2>
        <StatusContainer>
          <Time>{timer}</Time>
          <IconContainer>
            <li>
              <SignalCellularAltIcon className="icon" />
            </li>
            <li>
              <WifiIcon className="icon" />
            </li>
            <li>
              <Battery80Icon className="icon" />
            </li>
          </IconContainer>
        </StatusContainer>
      </Container>
    </Header>
  );
};

const Header = styled.header`
  height: 24px;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #d4d4d4;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  margin: 0 8px;
`;

const Time = styled.span`
  font-size: 12px;
  color: #fff;
  line-height: 15px;
`;

const IconContainer = styled.ul`
  display: flex;
  gap: 6px;

  .icon {
    width: 18px;
    height: 18px;
    color: #fff;
  }
  & > li:last-child {
    transform: rotate(-90deg);
  }
`;
