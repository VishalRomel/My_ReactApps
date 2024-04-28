function ListGroup() {
  let items = ["Merc", "Lambo", "Ferari", "Nsx"];
  items = [];

  return (
    <>
      <h1>hello List</h1>
      {items.length == 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
