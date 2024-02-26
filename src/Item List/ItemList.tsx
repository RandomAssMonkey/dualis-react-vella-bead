import React from 'react';
import Item from '../Item/Item';
import {ItemListProps} from "./ItemListProps";


const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} id={item.id} name={item.name} category={item.category} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ItemList;
