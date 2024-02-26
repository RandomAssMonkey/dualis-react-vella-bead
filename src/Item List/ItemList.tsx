import React from 'react';
import {ItemListProps} from "./ItemListProps";
import Item from "../Item/Item";

const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} id={item.id} name={item.name} category={item.category} imageUrl={item.imageUrl} onDelete={onDelete} /> // Pass onDelete function
            ))}
        </div>
    );
};

export default ItemList;
