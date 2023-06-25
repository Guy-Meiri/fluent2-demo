
import { FluentProvider, teamsDarkTheme, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import './App.css'
import Card from './Card'
import BackgroundImage from './BackgroundImage'
import { Loader } from './Loader'

function App() {

  return (
    <>
      <BackgroundImage />
      <FluentProvider theme={webLightTheme}>
        <Loader />
      </FluentProvider >
    </>
  )
}

export default App
