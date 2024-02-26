import React, { ChangeEvent } from 'react';
import {SearchBarProps} from "./SearchBarProps";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <input className="search-bar" type="text" placeholder="Search" onChange={handleChange} />
    );
};

export default SearchBar;
