import React, { useState } from 'react';
import CategoryFilter from "./Category Filter/CatergoryFilter";
import CreateItem from './Create Item/CreateItem';
import ItemList from './Item List/ItemList';
import SearchBar from './Search Bar/SearchBar';
import './App.css';

const initialItems = [
  { id: '1', name: 'Laptop', category: 'Electronics' },
  { id: '2', name: 'Headphones', category: 'Electronics' },
  { id: '3', name: 'Keyboard', category: 'Electronics' },
  { id: '4', name: 'Sneakers', category: 'Fashion' },
  { id: '5', name: 'T-shirt', category: 'Fashion' },
  { id: '6', name: 'Jeans', category: 'Fashion' },
  { id: '7', name: 'Backpack', category: 'Accessories' },
  { id: '8', name: 'Watch', category: 'Accessories' },
  { id: '9', name: 'Sunglasses', category: 'Accessories' },
];

const App: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState(initialItems);
  const categories = Array.from(new Set(items.map(item => item.category)));
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateItem = (name: string, category: string) => {
    const newItem = {
      id: Math.random().toString(),
      name,
      category,
    };
    setItems([...items, newItem]);
    setFilteredItems([...items, newItem]);
    setShowCreate(false);
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setFilteredItems(updatedItems);
  };

  const handleSelectCategory = (category: string) => {
    if (category === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
      console.log(filtered);
    }
  };

  const handleSearch = (text: string) => {
    const filtered = items.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredItems(filtered);
  };

  const toggleCreate = () => {
    setShowCreate(!showCreate);
  };

  return (
      <div className="container">
        <div className="header">
          <h1>Item Management System</h1>
          <button className="toggle-create-button" onClick={toggleCreate}>
            {showCreate ? 'Cancel' : 'Create'}
          </button>
        </div>
        {showCreate && <CreateItem onCreate={handleCreateItem} />}
        <CategoryFilter categories={categories} onSelectCategory={handleSelectCategory} />
        <button className="reset-button" onClick={() => handleSelectCategory('')}>Show All</button>
        <SearchBar onSearch={handleSearch} />
        <ItemList items={filteredItems} onDelete={handleDeleteItem} />
      </div>
  );
};

export default App;
