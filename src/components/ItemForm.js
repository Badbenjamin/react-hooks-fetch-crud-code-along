import React, { useState } from "react";

function ItemForm({addNewItem}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  // const [formData, setFormData] = useState({
  //     "name": "",
  //     "category": "",
  //     "isInCart": true
  // })

  

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      name: name,
      category: category,
      isInCart: false
    }
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(newItemData => addNewItem(newItemData))
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={handleSubmit} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
