import {useContext} from "react";
import {themeContext} from "./Context";
import "./index.css";
import Home from "./page/Home";
import Navbar from "./page/Navbar";
import RouterApp from "./router/RouterApp";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#111" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar />

      <RouterApp />
      
    </div>
  );
}
  
export default App;
