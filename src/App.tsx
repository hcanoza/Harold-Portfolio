import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  const items = ["Home", "About", "Services", "Blog", "More", "Contact"];
  // const handler = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Header items={items} />
      <Home />
    </div>
  );
}

export default App;
