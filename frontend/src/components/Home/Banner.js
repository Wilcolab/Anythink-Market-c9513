import React from "react";
import logo from "../../imgs/logo.png";
//import { Items } from "../../agent";
import agent from "../../agent";

const SearchBox = (props) => {
  const [title, setTitle] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setTitle(value);

    if (title.length >= 3) {
      agent.Items.term(title, 500);
    }
  };

  return (
    <>
      <input
        type="text"
        id="search-box"
        onChange={handleChange}
        value={title}
      ></input>
      {!props.items && <p id="empty">No items found for {title}</p>}
    </>
  );
};

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <SearchBox items={props.items}></SearchBox>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
