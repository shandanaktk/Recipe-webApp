import { useState } from "react";
import Search from "./Components/Search";
import "./App.css";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setfoodId] = useState("715415");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList
            setfoodId={setfoodId}
            foodData={foodData}
            setFoodData={setFoodData}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
