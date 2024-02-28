import React from 'react';
import { CategoryFilterProps } from "./CategoryFilterProps";
import './Category.css'

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
    const filteredCategories = categories.filter(category => category.trim() !== "");

    return (
        <div className="category-buttons">
            {filteredCategories.map((category) => (
                <button key={category} onClick={() => onSelectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
