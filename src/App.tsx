import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Post } from "./screens";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/post" element={<Post />} />
          <Route path="/blog/post/:date" element={<Post />} />
        </Routes>
      </Router>
  )
}

export default App
