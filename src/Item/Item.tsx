import React, { useState } from 'react';
import {ItemProps} from "./ItemProps";

const Item: React.FC<ItemProps> = ({ id, name, category, imageUrl, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
    };

    const handleAccept = () => {
        onDelete(id);
    };

    const handleCancel = () => {
        setIsDeleting(false);
    };

    return (
        <div className="item">
            <img src={imageUrl} alt={name} />
            <div className="details">
                <span className="name">{name}</span>
                <span className="category">{category}</span>
            </div>
            {isDeleting ? (
                <div>
                    <button className="accept-delete-button" onClick={handleAccept}>Accept</button>
                    <button className="delete-button" onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            )}
        </div>
    );
};

export default Item;
