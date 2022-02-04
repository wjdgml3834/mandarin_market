import styled from "@emotion/styled";

import TableRowsIcon from "@mui/icons-material/TableRows";
import AppsIcon from "@mui/icons-material/Apps";
import { CardContainer } from "../home/CardContainer";
import { useState } from "react";
import { Select } from "@mui/material";
import { ProfileAppPost } from "./ProfileAppPost";

export const ProfilePost = () => {
  const [select, setSelect] = useState(true);
  const tableClick = () => {
    if (select === false) setSelect(!select);
  };
  const appClick = () => {
    if (select === true) setSelect(!select);
  };

  return (
    <div>
      <IconContainer>
        <button type="button" onClick={tableClick}>
          <TableRowsIcon className={`${select}`} />
        </button>
        <button type="button" onClick={appClick}>
          <AppsIcon className={`${!select}`} />
        </button>
      </IconContainer>
      {select === true ? <CardContainer /> : <ProfileAppPost />}
    </div>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #dbdbdb;
  padding: 12px 0px 12px 15px;
  margin-bottom: 20px;

  .true {
    opacity: 0.7;
    cursor: pointer;
  }
  .false {
    opacity: 0.2;
    cursor: pointer;
  }
`;
