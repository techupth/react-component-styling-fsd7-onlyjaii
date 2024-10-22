// Start coding here

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const pColor = "#074EE8";
const sColor = "#07A4E8";

const color = "white"; //Declare Variable ก่อน

function Button(props) {
  return (
    <div>
      {props.type === "primary" ? (
        <button
          css={css`
            width: 172px;
            height: 50px;
            background-color: ${pColor};
            font-family: sarabun;
            font-weight: 400;
            color: white;
            border-radius: 4px;
            margin: 10px;
          `}
        >
          {props.type}
        </button>
      ) : (
        <button
          css={css`
            width: 172px;
            height: 50px;
            background-color: ${sColor};
            font-family: sarabun;
            font-weight: 400;
            color: white;
            border-radius: 4px;
            margin: 10px;
          `}
        >
          {props.type}
        </button>
      )}
    </div>
  );
}

export default Button;
