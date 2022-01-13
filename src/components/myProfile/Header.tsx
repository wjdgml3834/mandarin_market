import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const MyProfileHeader = () => {
  return (
    <Nav>
      <HeaderBtn>
        <ArrowBackIcon />
      </HeaderBtn>
      <HeaderBtn>
        <MoreVertIcon />
      </HeaderBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #dbdbdb;
`;
const HeaderBtn = styled.button``;
