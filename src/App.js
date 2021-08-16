import { useState } from "react";
import "./App.css";
import CategoriesPage from "./Components/Categories Page/CategoriesPage";
import HomePage from "./Components/Homepage/HomePage";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  const [slugName, setSlugName] = useState("");
  const [position, setPosition] = useState(0);
  const handleClick = (slug, pos) => {
    setSlugName(slug);
    setPosition(pos);
  };
  return (
    <div className="App">
      <TopBar />
      <CategoriesPage handleClick={handleClick} position={position} />
      <HomePage slug={slugName} />
    </div>
  );
}

export default App;
