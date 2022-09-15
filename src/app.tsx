import { css, Global } from "@emotion/react";
import { Router } from "./router";
import { globalStyle, resetCss } from "./styles/global";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${resetCss}
          ${globalStyle}
        `}
      />
      <Router />
    </>
  );
}

export default App;
