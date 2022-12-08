import NavBar from "./components/navBar/Navbar";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Search from "./components/Search/Search";
import { Route, Routes } from "react-router-dom"



function App() {
  return (
  <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </div>
  </>
  )
}

export default App