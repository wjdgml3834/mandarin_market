import styled from "@emotion/styled";
import { BackButton } from "../BackButton";

export const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <BackButton />
        <h1>Followers</h1>
      </Section>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  z-index: 10;
  background-color: #fff;
  min-width: 390px;
  box-sizing: border-box;
`;

const Section = styled.section`
  box-sizing: border-box;
  border-bottom: 0.5px solid #dbdbdb;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 10px;
  h1 {
    font-size: 14px;
    position: absolute;
    top: 16px;
    left: 47px
  }
  .arrow {
    cursor: pointer;
  }
`;
