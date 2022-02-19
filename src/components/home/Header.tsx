import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <Text>감귤마켓 피드</Text>
        <Link href="/research">
          <a>
            <span className="sr-only">계정 검색 페이지로 이동</span>
            <SearchIcon className="icon" />
          </a>
        </Link>
      </Section>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
`;

const Section = styled.section`
  border-bottom: 0.5px solid #dbdbdb;
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 48px;
  .icon {
    color: #767676;
    width: 28px;
    height: 28px;
  }
`;

const Text = styled.h1`
  line-height: 25px;
  font-weight: 500;
  font-size: 18px;
`;
