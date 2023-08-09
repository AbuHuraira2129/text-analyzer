import "./App.css";
// import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div className="container my-5">
        <p>App By - Muhammad Abu Huraira</p>
        <TextForm heading="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;