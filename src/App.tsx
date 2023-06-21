
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components'
import './App.css'
import CardDemo from './CardDemo'
import BackgroundImage from './BackgroundImage'

function App() {

  return (
    <>
      <BackgroundImage />
      <FluentProvider theme={teamsLightTheme}>
        <CardDemo />
      </FluentProvider>
    </>
  )
}

export default App
