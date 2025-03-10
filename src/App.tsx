import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const items = ["home", "about", "services", "blog", "more"];
  const handler = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Header />
      <Home items={items} onSelectItem={handler} />
    </div>
  );
}

export default App;
