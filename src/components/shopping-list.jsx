import ShopingListItem from "./shoping-item";

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
  return (
    <div className="shopping-list">
      {data.length ? (
        data.map((item) => (
          <ShopingListItem
            item={item}
            key={item.id}
            onDeleteItem={() => onDelete(item.id)}
            onToggleActiveItem={() => onToggleActive(item.id)}
          />
        ))
      ) : (
        <div>
          <h1 style={{ textAlign: "center", color: "white" }}>
            Not found data
          </h1>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
