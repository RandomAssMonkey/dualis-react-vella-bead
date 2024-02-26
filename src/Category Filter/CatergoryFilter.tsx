import React from 'react';
import {CategoryFilterProps} from "./CategoryFilterProps";

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
    return (
        <div className="category-buttons">
            {categories.map((category) => (
                <button key={category} onClick={() => onSelectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
