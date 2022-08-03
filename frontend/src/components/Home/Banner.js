import React from "react";
import logo from "../../imgs/logo.png";
//import { Items } from "../../agent";
import agent from "../../agent";

const SearchBox = () => {
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
    </>
  );
};

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <SearchBox></SearchBox>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
