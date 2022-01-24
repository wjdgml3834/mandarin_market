import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <Text>감귤마켓 피드</Text>
        <a href="/search">
          <span className="sr-only">계정 검색 페이지로 이동</span>
          <SearchIcon className="icon" />
        </a>
      </Section>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  top: 0;
`;

const Section = styled.section`
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
