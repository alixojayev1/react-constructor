const Filter = ({ filter, onFilterSelect }) => {
  const butons = [
    { id: 'all', lable: "All products" },
    { id: 'completed', lable: "Completed" },
    { id: 'big-size', lable: "Big size" },
  ];
  return (
    <div className="filter">
      <div className="btns">
        {  butons.map((item) => (
          <button
            key={item.id}
            className={`${filter === item.id && "active"} `}
            onClick={()=> onFilterSelect(item.id)}
          >
            {item.lable}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
