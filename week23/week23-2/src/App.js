import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Container from "./components/first/Container";
import SimpleComponent from "./components/second/SimpleComponent";
import Combine from "./components/third/Combine";
import Counter from "./components/fourth/Counter";
import PokemonData from "./components/fourth/PokemonData";
import PokemonComparison from "./Fifth/PokemonComparisons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/test1" element={<Container></Container>}></Route>
        <Route
          path="/test2"
          element={
            <SimpleComponent text="This is a simple component with HOCs!"></SimpleComponent>
          }
        ></Route>
        <Route path="/test3" element={<Combine></Combine>}></Route>
        <Route path="/test4" element={<Counter></Counter>}></Route>
        <Route path="/test5" element={<PokemonData></PokemonData>}></Route>

        <Route path='/pokemonComparison' element={<PokemonComparison></PokemonComparison>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
