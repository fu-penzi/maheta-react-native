import React from "react";
import PropTypes from "prop-types";
const ThemeContext = React.createContext();
function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
const useTheme = () => React.useContext(ThemeContext);
ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.element,
};
export { ThemeProvider, useTheme };
