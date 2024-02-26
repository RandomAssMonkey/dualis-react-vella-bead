import React, { useState } from 'react';
import CategoryFilter from './Category Filter/CatergoryFilter';
import CreateItem from './Create Item/CreateItem';
import Item from './Item/Item'; // Import Item component
import SearchBar from './Search Bar/SearchBar';
import './App.css';
import { ItemInterface } from './Item/ItemInterface';
import Clock from "./Clock/Clock";

const initialItems: ItemInterface[] = [
  { id: '1', name: 'Laptop', category: 'Electronics', imageUrl: 'https://hovege.hu/wp-content/uploads/2023/09/laptop.jpg' },
  { id: '2', name: 'Headphones', category: 'Electronics', imageUrl: 'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/533735/17338439_800.jpg' },
  { id: '3', name: 'Keyboard', category: 'Electronics', imageUrl: 'https://images-cdn.ubuy.co.in/6353198387ddfd723241eb2a-88-keys-split-mechanical-keyboard.jpg' },
  { id: '4', name: 'Sneakers', category: 'Fashion', imageUrl: 'https://snkrdunk.s3.ap-northeast-1.amazonaws.com/en/magazine/wp-content/uploads/2023/07/28163423/Feature-Img-1.jpg' },
  { id: '5', name: 'T-shirt', category: 'Fashion', imageUrl: 'https://s3-eu-west-1.amazonaws.com/resources.jhktshirt.com/pictures/catalogue/jhktshirt_tsra150_0.jpg' },
  { id: '6', name: 'Jeans', category: 'Fashion', imageUrl: 'https://cdn-images.farfetch-contents.com/19/67/22/73/19672273_44060281_600.jpg' },
  { id: '7', name: 'Backpack', category: 'Accessories', imageUrl: 'https://www.tonerpartners.hu/userdata/products/539/1555694_0c-282e082d7bfd91.jpg' },
  { id: '8', name: 'Watch', category: 'Accessories', imageUrl: 'https://content.propertyroom.com/listings/sellers/seller1/images/ctrimgs/mens-limited-edition-scooby-doo-fossil-watch-1_29920162146587270258.jpg' },
  { id: '9', name: 'Sunglasses', category: 'Accessories', imageUrl: 'https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/0528c081-bb53-462e-97a6-d37112dadf52/cd0afb6a-e9ed-41e3-983a-70123e874274/media._SL480_.jpeg' },
];

const App: React.FC = () => {
  const [items, setItems] = useState<ItemInterface[]>(initialItems);
  const [filteredItems, setFilteredItems] = useState<ItemInterface[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Initialize selectedCategory state
  const categories = Array.from(new Set(items.map(item => item.category)));
  const [showImage, setShowImage] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateItem = (name: string, category: string, imageUrl: string) => {
    const newItem: ItemInterface = {
      id: Math.random().toString(),
      name,
      category,
      imageUrl,
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
    setSelectedCategory(category);
    if (category === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  const handleSearch = (text: string) => {
    const filtered = items.filter((item) => {
      const isNameMatch = item.name.toLowerCase().includes(text.toLowerCase());
      const isCategoryMatch = selectedCategory === '' || item.category.toLowerCase() === selectedCategory.toLowerCase();
      return isNameMatch && isCategoryMatch;
    });
    setFilteredItems(filtered);
  };

  const toggleCreate = () => {
    setShowCreate(!showCreate);
  };

  const handleImageClick = (imageUrl: string) => {
    setShowImage(true);
    setSelectedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setShowImage(false);
    setSelectedImage('');
  };


  return (
      <div className="container">
        <div >
          <Clock/>
        </div>
        {!showImage && (
            <div>
              <div className="header">
                <h1>Item Management System</h1>
                <button className="toggle-create-button" onClick={toggleCreate}>
                  {showCreate ? 'Cancel' : 'Create'}
                </button>
              </div>
              {showCreate && <CreateItem onCreate={handleCreateItem} />}
              <div>
                <CategoryFilter categories={[...categories, '']} onSelectCategory={handleSelectCategory} />
                <button className="reset-button" onClick={() => handleSelectCategory('')}>Show All</button>
                <SearchBar onSearch={handleSearch} selectedCategory={selectedCategory} />
                {filteredItems.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        imageUrl={item.imageUrl}
                        onDelete={handleDeleteItem}
                        onImageClick={handleImageClick}
                    />
                ))}
              </div>
            </div>
        )}
        {showImage && (
            <div className="image-viewer" onClick={handleCloseImage}>
              <img src={selectedImage} alt="Selected item" />
              <button className="close-button">X</button>
            </div>
        )}
      </div>
  );
};

export default App;
