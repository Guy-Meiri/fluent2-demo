import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import "./App.css";
import BackgroundImage from "./BackgroundImage";
import CopilotCard from "./CopilotCard";

function App() {
  return (
    <>
      <BackgroundImage />
      <FluentProvider theme={webLightTheme}>
        <CopilotCard />
      </FluentProvider>
    </>
  );
}

export default App;
