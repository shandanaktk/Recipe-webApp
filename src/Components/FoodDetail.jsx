import styles from "./FoodDetail.module.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "121da9be97f64558aa1fa3a438578624";
  const [food, setfood] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setfood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.card}>
      <div>
        <h1 className={styles.title}>
          . ݁₊ ⊹ . ݁˖ . ݁Food Information. ݁₊ ⊹ . ݁˖ . ݁
        </h1>
        <img
          className={styles.img}
          src={food.image}
          alt="image unable to fetch"
        ></img>

        <div className={styles.minor}>
          <span>Food Ready in Minutes: {food.readyInMinutes}</span>
          <span>Serves: {food.servings}</span>
          <span>: {food.vegetarian ? "Vegeration" : "Non-vegatarian"}</span>
          <span>{food.pricePerServing}$ per serve</span>
        </div>

        <h2 className={styles.p2}>
          . ݁₊ ⊹ . ݁˖ . ݁ Ingredients . ݁₊ ⊹ . ݁˖ . ݁
        </h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2 className={styles.p2}>
          . ݁₊ ⊹ . ݁˖ . ݁ Instructions . ݁₊ ⊹ . ݁˖ . ݁
        </h2>
        <div className={styles.steps}>
          <ol>
            {isLoading ? (
              <p>Loading ...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
