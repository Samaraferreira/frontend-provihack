import React from 'react'
import './styles/global.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { Home } from './pages'

function App () {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      primary: {
        light: '#7E69E9',
        main: '#6045E4',
        dark: '#A08DFA',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
