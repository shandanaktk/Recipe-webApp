import styles from "./FoodItem.module.css";

export default function FoodItem({ setfoodId, food }) {
  return (
    <div className={styles.cont}>
      <img className={styles.img} src={food.image} alt="image failed to load" />
      <h1>{food.title}</h1>
      <button
        onClick={() => {
          console.log(food.id);
          setfoodId(food.id);
        }}
        className={styles.btn}
      >
        View Recipe
      </button>
    </div>
  );
}
