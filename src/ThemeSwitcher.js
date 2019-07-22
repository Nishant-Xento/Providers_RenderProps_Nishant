import React from 'react'
import { ThemeContext } from './ThemeProvider'

const style = {
  borderBottom: '1px solid #cccccc',
  padding: '8px 40px',
  textAlign: 'center'
}

const ThemeSwitcher = () => (
  <ThemeContext.Consumer>
    {({ theme, changeTheme }) => (
      <div style={style}>
        <label>Theme:</label>
        <select
          value={theme.name}
          onChange={event => changeTheme(event.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default ThemeSwitcher
