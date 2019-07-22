import React from 'react'
import { render } from 'react-dom'
import ThemeProvider, { ThemeContext } from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import './style.css'

const baseStyle = {
  padding: '40px',
  height: '100vh'
}

const styleWrapper = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <div style={styleWrapper}>
          <ThemeSwitcher />
          <ThemeContext.Consumer>
            {({ theme: { name, ...style } }) => (
              <div style={{ ...baseStyle, ...style }}>
                <p>This is some text styled by the theme.</p>
              </div>
            )}
          </ThemeContext.Consumer>
        </div>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('root'))
