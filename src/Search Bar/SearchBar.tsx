// SearchBar.tsx
import React from 'react';
import {SearchBarProps} from "./SearchBarProps";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, selectedCategory }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        onSearch(text);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by name"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
