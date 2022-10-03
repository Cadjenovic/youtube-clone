import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../state/slices/searchTermSlice";
import { RootState } from "../../state/store";
import { setSearchedVideos } from "../../state/slices/videoSlice";
import { searchWithTerm } from "../../api/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = () => {
    const { searchTerm } = useSelector((state: RootState) => state.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.currentTarget.value));
    };

    const onSearch = () => {
        searchWithTerm(searchTerm).then((res) =>
            dispatch(setSearchedVideos(res.data.items))
        );
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e)}
            />
            <FontAwesomeIcon
                className="search-btn"
                onClick={() => console.log("Search")}
                icon={faSearch}
            />
            {/* <button onClick={() => onSearch()}>Search</button> */}
        </div>
    );
};

export default SearchBar;
