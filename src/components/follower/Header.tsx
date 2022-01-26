import styled from "@emotion/styled";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <Link href="/myprofile">
          <a>
            <ArrowBackIcon />
            <span className="sr-only">돌아가기 버튼</span>
          </a>
        </Link>
        <h1>Followers</h1>
      </Section>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  min-width: 390px;
`;

const Section = styled.section`
  padding: 13px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  margin: 0 auto;
  .icon {
    color: #767676;
    width: 28px;
    height: 28px;
  }
`;
