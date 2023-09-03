
import { Body1, Button, FluentProvider, Label, teamsDarkTheme, webDarkTheme, webLightTheme, ProgressBar, Field } from '@fluentui/react-components'
import './App.css'
import BackgroundImage from './BackgroundImage'
import { LoadingTextShimmer, ZeroToHundred } from './LoadingTextShimmer'
import { ProgressSection } from './ProgressSection';
import { Star16Filled, StarOff20Filled, StarOff20Regular, bundleIcon } from '@fluentui/react-icons';
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { useState } from 'react';
import { CopilotProvider, LatencyLoader, LatencyWrapper, } from '@fluentai/react-copilot';
import { AnimatedTextLoader } from './components/AmimatedTextLoader';
import { defaultLineWidths } from './components/AmimatedTextLoader.styles';


export const useStyles = makeStyles({
  container: {
    marginLeft: "20px",
    marginRight: "20px",
    paddingTop: "12px",
    paddingBottom: "8px",
    marginBottom: "16px",
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke2),
  },
  title: {
    display: "flex",
    flexDirection: "row",



  },
  description: {
    WebkitLineClamp: 3,
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    paddingTop: "8px",
    color: tokens.colorNeutralForeground2,
    ...shorthands.overflow("hidden"),
    ":hover": {
      color: "green"
    },
    ":focus": {

    },
    ":active": {
      color: "pink"
    }
  },
  boton: {
    display: "none",
  },
  bottonParentHover: {
    display: "block"
  },
  parent: {
    backgroundColor: "red",
    transform: ["translateY(330px)"],
  },
  child: {
    width: "calc(100% + 52px)",
    backgroundColor: "blue",
    transform: ["translateY(-4px)"],
  }
});


function App() {

  return (
    <>
      {/* <BackgroundImage /> */}
      <FluentProvider theme={webDarkTheme}>
        <div>hey</div>
        <div style={{ width: "400px", height: "600px" }}>
          <AnimatedTextLoader widths={defaultLineWidths} />
        </div>
        <div>bye</div>
      </FluentProvider >
    </>
  )
}

export default App
