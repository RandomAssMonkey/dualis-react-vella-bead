import React from 'react';
import {ItemProps} from "./ItemProps";

const Item: React.FC<ItemProps> = ({ id, name, category, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="item">
            <span className="name">{name}</span>
            <span className="category">{category}</span>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Item;
