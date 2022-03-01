import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { Dispatch, SetStateAction } from "react";
import { BackButton } from "../BackButton";

interface Props {
  setResearchValue: Dispatch<SetStateAction<string>>;
}

export const Header = ({ setResearchValue }: Props) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResearchValue(e.target.value);
  };

  return (
    <HeaderCont>
      <Section>
        <h1 className="sr-only">계정검색 페이지</h1>
        <BackButton />
        <SearchInp
          type="text"
          onChange={onChangeInput}
          placeholder="계정검색"
        />
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
  padding: 0 16px 0 10px;
  border-bottom: 0.5px solid #dbdbdb;
  .arrow {
    cursor: pointer;
  }
`;

const SearchInp = styled.input`
  width: 100%;
  height: 32px;
  padding: 7px 16px;
  margin-left: 14px;
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
  &::placeholder {
    color: #c4c4c4;
  }
`;
