import React from 'react';
import { CategoryFilterProps } from "./CategoryFilterProps";

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
    // Filter out empty strings or null values from the categories array
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
