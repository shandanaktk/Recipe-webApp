import styles from "./FoodDetail.module.css";
import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.steps}>
          {food.extendedIngredients.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
