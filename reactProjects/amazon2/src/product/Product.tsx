import React, { useContext } from "react";
import "../App.css";
import ThemeContext from "../ThemeContext";
import { useParams } from "react-router-dom";

function Product() {
  const theme: any = useContext(ThemeContext);
  const { id } = useParams();
  return (
    <div>
      <p>New File {id}</p>
      <button
        style={{
          background: theme?.light?.background,
          color: theme.light.foreground,
        }}
      >
        I am styled by theme context!
      </button>
    </div>
  );
}

export default Product;
