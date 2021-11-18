import React from 'react';
import './style.scss';

const Filter = () => {
    return (  
        <div className="filter-area">
            <h2 className="filter-area__title">Filter by hashtag</h2>
            <div className="filter-area__items">
                <a className="filter-area__item">#coding</a>
                <a className="filter-area__item">#Phyton</a>
                <a className="filter-area__item">#ComputerScience</a>
                <a className="filter-area__item">#gitmergememes</a>
                <a className="filter-area__item">#coding</a>
                <a className="filter-area__item">#Engineering</a>
            </div>
        </div>
    );
}
 
export default Filter;