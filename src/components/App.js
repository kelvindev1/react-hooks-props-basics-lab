import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import User from "../data/user";
import Links from "./Links";
console.log(User);

function App() {
  return (
    <div>
      <NavBar />
      <About
        bio={User.bio}
        github={User.links.github}
        linkedin={User.links.linkedin}
      />
      <Home name={User.name} city={User.city} color={User.color} />
      <Links />
    </div>
  );
}

export default App;
