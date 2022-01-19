import styled from "@emotion/styled";
import WifiIcon from "@mui/icons-material/Wifi";
import Battery80Icon from "@mui/icons-material/Battery80";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

export const StatusBar = () => {
  return (
    <Header>
      <Container>
        <h2 className="sr-only">상태바</h2>
        <StatusContainer>
          <Time>18:35 PM</Time>
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
