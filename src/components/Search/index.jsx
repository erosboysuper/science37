import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";

import './style.scss';

const Search = () => {
    return ( 
    <section className="search-area">
        <input type="text" className="search-area__input" placeholder="Search by keyword" />
        <button className="search-area__button">
            <HiOutlineSearch/>
        </button>
    </section> 
    );
}
 
export default Search;