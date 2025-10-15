import "./searchbox.css";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faHistory
} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import MobileSearch from "./mobileSearch";
import { Content } from "../data/content";

const SearchBox = (props) => {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = "";
  if (arr) {
    val = arr[0];
  }

  const history = useHistory();
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);

  // State management
  const [searchValue, setSearchValue] = useState(val);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(props.options);

  const imgStyle = {
    verticalAlign: "middle",
    marginRight: 10,
    fontSize: "13px",
    color: "#aaa"
  };

  const removeBtnStyle = {
    verticalAlign: "middle",
    marginRight: 10,
    fontSize: "13px",
    color: "#555",
    border: "0",
    outline: "none",
    background: "transparent",
    float: "right",
    padding: "10px",
    cursor: "pointer"
  };

  // Handle clicks outside the search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle mobile search visibility
  useEffect(() => {
    if (isMobileSearchVisible) {
      document.querySelector("body").style.height = "100vh";
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.height = "";
      document.querySelector("body").style.overflow = "";
    }
  }, [isMobileSearchVisible]);

  // Trigger search on Enter key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    };

    const inputField = searchInputRef.current;
    if (inputField) {
      inputField.addEventListener("keyup", handleKeyPress);
      return () => {
        inputField.removeEventListener("keyup", handleKeyPress);
      };
    }
  }, [searchValue]);

  const showOptions = () => {
    if (window.innerWidth < 768) {
      setIsMobileSearchVisible(true);
      setIsDropdownVisible(false);
    } else {
      setIsDropdownVisible(true);
    }
  };

  const hideOptions = () => {
    // Small delay to allow link clicks to register
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  };

  const removeOption = (index) => {
    setVisibleOptions(prev => prev.filter((_, i) => i !== index));
  };

  const clearSearchInput = () => {
    setSearchValue("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // "Search" Website
  const searchWebsite = () => {
    if (searchValue) {
      history.push(searchValue);
      setIsDropdownVisible(false);
    }
  };

  // I'm Feeling Lucky search
  const feelingLucky = () => {
    // Route to random page if search input is empty
    if (!searchValue) {
      const randomOption = visibleOptions[Math.floor(Math.random() * visibleOptions.length)];
      history.push(`/${randomOption.value}`);
      setIsDropdownVisible(false);
      return;
    }

    // Get all elements matching the search term
    const item = Content.filter((item) => item.category === searchValue);
    
    // Redirect to first match, if it exists
    if (item[0]) {
      window.location.href = item[0].link;
    } else if (searchValue) {
      history.push(searchValue);
    }
    setIsDropdownVisible(false);
  };

  // Handle option click - navigate immediately
  const handleOptionClick = (optionValue) => {
    history.push(`/${optionValue}`);
    setIsDropdownVisible(false);
  };

  return (
    <div>
      <div>
        <MobileSearch />
      </div>
      <div className="search-box" ref={searchBoxRef}>
        <div className="search-cont">
          <FontAwesomeIcon className="fa fa-search" icon={faSearch} />

          <div className="search">
            <div className="search-value">
              <input
                ref={searchInputRef}
                placeholder=" "
                autoComplete="on"
                className="search-input"
                value={searchValue}
                onFocus={showOptions}
                onBlur={hideOptions}
                onChange={handleSearchChange}
                style={{
                  boxShadow: searchValue ? '1px 1px 6px rgba(0,0,0,0.2)' : 'none'
                }}
              />
            </div>
            
            {isDropdownVisible && (
              <div className="search-select" style={{ display: 'block' }}>
                <div className="search-options">
                  {visibleOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className="search-option" 
                      type="button"
                    >
                      <span>
                        <FontAwesomeIcon
                          className="fas"
                          icon={faHistory}
                          style={imgStyle}
                        />
                        <span
                          style={{ cursor: 'pointer' }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleOptionClick(option.value);
                          }}
                        >
                          {option.name}
                        </span>
                        <span>
                          <button
                            className="remove-btn"
                            style={removeBtnStyle}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              removeOption(index);
                            }}
                          >
                            Remove
                          </button>
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="search-btns"
                  style={{ paddingTop: "20px", paddingBottom: "30px" }}
                >
                  <input
                    className="search-btn sw"
                    type="button"
                    value="Search Website"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      searchWebsite();
                    }}
                  />
                  <input
                    className="search-btn ifl"
                    type="button"
                    value="I'm Feeling Lucky"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      feelingLucky();
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          
          {searchValue && (
            <FontAwesomeIcon
              className="fa fa-times clear-icon"
              icon={faTimes}
              title="Clear"
              onClick={clearSearchInput}
              style={{ display: 'inline-block' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;