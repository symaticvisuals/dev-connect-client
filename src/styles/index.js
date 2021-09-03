import { createTheme } from "@material-ui/core";
//Customization ways: https://material-ui.com/customization/globals/#css
const theme = createTheme({
  overrides: {
        type: "dark",
      //Sample code to override the default button Style

            //Component name from https://material-ui.com/api/
      
      MuiButton: {
            // MuiButton: {
            //   text: {
            //     // Some CSS
            //     background: "linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
            //     borderRadius: 4,
            //     border: 0,
            //     color: "white",
            //     fontFamily: "Montserrat",
            //     fontWeight: "bold",
            //     textTransform: "none",
            //     width: "15em",
            //     height: "50px",
            //     "&:hover": {
            //       background: "linear-gradient(135deg,#FF4160 30%,#FF4B20 100% )",
            //     },
            //   },
            // },
  },
    }});
export default theme;
