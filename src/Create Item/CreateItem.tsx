import React, { useState } from 'react';
import {CreateItemProps} from "./CreateItemProps";

const CreateItem: React.FC<CreateItemProps> = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleCreate = () => {
        onCreate(name, category);
        setName('');
        setCategory('');
    };

    return (
        <div className="create-item">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default CreateItem;
