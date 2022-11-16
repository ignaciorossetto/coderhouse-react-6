import "./App.css";
import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
