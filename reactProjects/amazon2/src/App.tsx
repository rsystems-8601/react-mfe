import React, { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import ThemeContext from "./ThemeContext";
import ErrorBoundary from "./ErrorBoundary";
import { useTheme } from "./context/theme";
// import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import store from "./package/storechat/store";

const themes = {
  light: {
    foreground: "red",
    background: "#red",
  },
  dark: {
    foreground: "blue",
    background: "blue",
  },
  themecolor: "yellow",
};

const themesConfig = {
  light: {
    color: "white",
    backgroundColor: "red",
  },
  dark: {
    color: "white",
    backgroundColor: "blue",
  },
  themecolor: "yellow",
};
const App = () => {
  const { theme, onChangeTheme } = useTheme();

  const fallbackRender = ({ error, resetErrorBoundary }: any) => {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    // resetErrorBoundary();
    // alert(88)

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  };

  function ErrorFallback(): JSX.Element {
    return <div>Something went wrong2</div>;
  }

  const RemoteWrapper = ({ children }: any) => (
    <div
      style={{
        border: "1px solid red",
        background: "white",
      }}
    >
      <ErrorBoundary fallbackComponent={ErrorFallback}>
        <div>77777777</div>
        {children}
      </ErrorBoundary>
    </div>
  );

  return (
    <div className="App">
      <button style={themesConfig[theme]} onClick={onChangeTheme}>
        change theme - {theme}
      </button>
      <header className="App-header">
        <Link to="/product/5"> Conetext </Link>
        <Link to="/reducer"> Reducer</Link>
        <Link to="/forward"> ProductForward </Link>
        <Link to="/lazy"> Lazy </Link>
        <Link to="/memo"> memo </Link>
        <Link to="/usememo"> usememo </Link>
        <Link to="/login"> Login </Link>
        <Link to="/statelogin"> State Login </Link>
        <Link to="/loggedinuser"> LoggedInuser</Link>
        <Link to="/MainChat"> MainChat </Link>
        <Link to="/ExampleComponent"> ExampleComponent </Link>
      </header>
      <ThemeContext.Provider value={themes}>
        <div>
          <Toolbar />
          <h3>
            <RemoteWrapper>
              <Provider store={store}>
                <Nav />
              </Provider>
            </RemoteWrapper>
          </h3>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme: any = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme?.dark?.background,
        color: theme?.dark?.foreground,
      }}
    >
      Welcome In Amazone
    </button>
  );
};

export default App;
