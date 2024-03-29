import React from "react";
import BrandName from "./BrandName.jsx";
import SearchBar from "./SearchBar.jsx";

const Header = ({ openSearchHandler, searchBar }) => {
    const header = searchBar.isOpen ? (
        // If the search bar is open, render the brand name followed by the search bar
        <header className="header">
            <BrandName />
            <SearchBar
                openSearchHandler={openSearchHandler}
                searchBar={searchBar}
            />
        </header>
    ) : (
        // If the search bar is not open, render the brand name and search icon
        <header className="header">
            <BrandName />
            <div className="search-icon" onClick={openSearchHandler}>
                <ion-icon name="search"></ion-icon>
            </div>
        </header>
    );
    return <>{header}</>;
};

export default Header;