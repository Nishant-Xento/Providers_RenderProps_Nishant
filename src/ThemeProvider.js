import React from 'react'

const themes = {
  light: {
    background: 'white',
    color: '#666666',
    name: 'light'
  },
  dark: {
    background: '#222222',
    color: 'white',
    name: 'dark'
  }
}

export const ThemeContext = React.createContext()

class ThemeProvider extends React.Component {
  state = {
    theme: 'dark'
  }

  changeTheme = theme => {
    this.setState({ theme })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          changeTheme: this.changeTheme,
          theme: themes[this.state.theme]
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
