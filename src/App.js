import NavBar from "./components/navBar/Navbar";
import Home from "./components/Home/Home";
import Posts from "./features/Posts/Posts";
import Search from "./components/Search/Search";
import { Route, Routes } from "react-router-dom"
import { useState } from "react";


function App() {

  const [subreddit, setSubreddit] = useState('/r/popular')

  function handleInputChange(event) {
    setSubreddit(event.target.value)
  }

  return (
  <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts subreddit={subreddit} onChange={(e) => handleInputChange(e)}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  </>
  )
}

export default App