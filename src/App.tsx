
import { FluentProvider, teamsDarkTheme, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import './App.css'
import BackgroundImage from './BackgroundImage'
import { LoadingTextShimmer } from './LoadingTextShimmer'

function App() {
  const widths = [
    25,
    35,
    0,
    100,
    100,
    100,
    67,
    0,
    100,
    100,
    100,
    67,
    0,
    100,
    100,
    100,
    67,
    0,
    25,
    35,
  ];
  return (
    <>
      <BackgroundImage />
      <FluentProvider theme={webLightTheme}>
        <div style={{ width: "320px", overflow: "hidden", padding: "0px" }}>

          <LoadingTextShimmer lineWidths={widths} />
        </div>
      </FluentProvider >
    </>
  )
}

export default App
