import React, { useState } from 'react';
import {CreateItemProps} from "./CreateItemProps";

const CreateItem: React.FC<CreateItemProps> = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleCreate = () => {
        onCreate(name, category, image);
        setName('');
        setCategory('');
        setImage('');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) { // Check if files are selected
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="create-item">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default CreateItem;
