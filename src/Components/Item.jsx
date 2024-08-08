export default function Item({ item }) {
  return (
    <li>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt={item.name}
      />
      {item.name}
    </li>
  );
}
