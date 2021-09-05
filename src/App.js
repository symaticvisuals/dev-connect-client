import { Box, ThemeProvider } from "@material-ui/core";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import theme from "./styles";
let User = createContext();
function App() {
  let [user, setUser] = useState();
  let [roles, setRoles] = useState([]);
  let [people, setPeople] = useState(null);
  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getRoles");
    const responseBody = await response.json();
    setRoles(responseBody.data.roles.values);
  };

  const fetchPeople = async () => {
    const response = await fetch("/.netlify/functions/getPeople", {
      method: "POST",
      body: JSON.stringify({ role: "Backend Developer" }),
    });
    const responseBody = await response.json();
    setPeople(responseBody.data.users_by_roles.values);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchPeople();
  }, []);

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
