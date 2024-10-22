// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoIcon from "../assets/alertcircle.png";
import WarningIcon from "../assets/alert-triangle.png";
import SuccessIcon from "../assets/check-circle.png";
import FrownIcon from "../assets/frown.png";

const eColor = "#F9C8C8";
const wColor = "#F9D9C8";
const iColor = "#F9EBC8";
const sColor = "#CEF7CD";

function Alert(props) {
  let bgColor = iColor;
  let AlertIcon = InfoIcon;

  if (props.type === "error") {
    bgColor = eColor;
    AlertIcon = FrownIcon;
  } else if (props.type === "warning") {
    bgColor = wColor;
    AlertIcon = WarningIcon;
  } else if (props.type === "success") {
    bgColor = sColor;
    AlertIcon = SuccessIcon;
  }

  return (
    <div
      css={css`
        box-sizing: border-box;
        background-color: ${bgColor};
        width: 650px;
        height: 76px;
        padding: 20px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
        font-family: Kanit;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom:20px;
      `}
    >
      <img src={AlertIcon} alt={props.type} />
      {props.message}
    </div>
  );
}

export default Alert;
