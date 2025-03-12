import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  const items = ["Home", "About", "Services", "Blog", "More", "Contact"];
  const social = ["Linkedin", "GitHub", "Instagram", "Facebook"];
  return (
    <div>
      <Header items={items} />
      <Home social={social} />
    </div>
  );
}

export default App;
