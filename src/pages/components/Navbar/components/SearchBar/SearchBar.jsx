import { BiSearch } from "react-icons/bi";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { GrFormClose } from "react-icons/gr";
import "./searchbar.css";

export function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchVideoText = searchParams.get("search");

  useEffect(() => {
    if (searchVideoText) {
      setSearchText(searchVideoText);
    }
  }, [searchVideoText]);


  function clearSearchResult() {
    setSearchText("");
    if (searchParams.has("search")) {
      const token = searchParams.get("search");
      if (token) {
        searchParams.delete("search");
        setSearchParams(searchParams);
      }
    }
  }

  return (
    <div className="search-bar">
      <div className="search__input-container">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="search__input"
          type="text"
          placeholder={searchText || "Search"}
        />
        {searchText.length > 0 && (
          <GrFormClose
            onClick={() => clearSearchResult()}
            className="clear-search__icon"
            size={"1.6rem"}
          />
        )}
      </div>
      <Link
        to={`/?${createSearchParams({ search: searchText })}`}
        style={{ paddingLeft: ".5rem" }}
        className="search__button"
      >
        <BiSearch />
      </Link>
    </div>
  );
}
