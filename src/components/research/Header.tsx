import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Header = () => {
  return (
    <HeaderCont>
      <Section>
        <h1 className="sr-only">계정검색 페이지</h1>
        <BackBtn>
          <ArrowBackIcon />
        </BackBtn>
        <SearchInp type="text" placeholder="계정검색" />
      </Section>
    </HeaderCont>
  );
};

const HeaderCont = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  min-width: 390px;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const BackBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
`;

const SearchInp = styled.input`
  width: 100%;
  height: 32px;
  padding: 7px 16px;
  margin-left: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: #000000;
  border: none;
  background-color: #f2f2f2;
  border-radius: 32px;
  &:focus {
    outline: none;
  }
`;
