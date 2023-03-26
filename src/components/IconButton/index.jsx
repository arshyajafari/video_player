// material style
import { Tooltip } from "@mui/material";

// styled components
import { IconButtonStyled } from "./IconButton.style";

const IconButtonCM = (props) => {
  return (
    <Tooltip title={props.title} placement="top">
      <IconButtonStyled onClick={props.onClick}>
        {props.children}
      </IconButtonStyled>
    </Tooltip>
  );
};

export default IconButtonCM;
