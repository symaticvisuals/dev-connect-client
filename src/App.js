import { Box, ThemeProvider } from "@material-ui/core";
import { createContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import theme from "./styles";
let User = createContext();
function App() {
  let [user, setUser] = useState();
  return (
    <Box>
      <Router>
        <ThemeProvider theme={theme}>
          <User.Provider value={{ user, setUser }}>
            <Navbar />
            {/* //dont' directly add pages route them in routes.js */}
            <Routes />
            <Footer />
          </User.Provider>
        </ThemeProvider>
      </Router>
    </Box>
  );
}

export { App, User };