import React from 'react';
import '../styles/globals.css';

export default function SideBar({categories, selectedCategory, setSelectedCategory}) {
    return (
        <div>
            <h3>Categories</h3>
            <ul className="sidebar-list" style={{padding: 0, margin: 0, listStyle: 'none'}}>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`sidebar-list-item${selectedCategory === category ? ' active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                        style={{ cursor: 'pointer' }}
                    >
                        {category}
                    </li>
                ))}
            </ul>

        </div>
    );
}
