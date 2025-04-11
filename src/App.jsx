import "./App.css";
import Nav from "./Components/Routing/Nav";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <>
      <div className="container mx-auto w-full  flex flex-col gap-5">
        <Nav />
        <Routing />
      </div>
    </>
  );
}

export default App;
