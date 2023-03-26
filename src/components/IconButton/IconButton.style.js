// material styles
import { IconButton } from "@mui/material";

// import styled-components package
import styled from "styled-components";

export const IconButtonStyled = styled(IconButton)`
  & svg {
    color: rgba(25, 118, 210, 0.7);
    font-size: 25px;
  }

  & :hover {
    color: rgb(25, 118, 210);
  }
`;
