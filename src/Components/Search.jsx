import styles from "./Search.module.css";
import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "121da9be97f64558aa1fa3a438578624";

export default function Search({ foodData, setFoodData }) {
  const [query, setquery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.box}>
      <input
        className={styles.input}
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        placeholder="Enter Query ..."
      />
    </div>
  );
}
