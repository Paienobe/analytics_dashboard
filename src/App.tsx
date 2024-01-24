import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Main />
    </>
  );
}

export default App;
