import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import { Home, Post } from "./screens";

function LegacyPostRedirect() {
  const { date } = useParams();
  return <Navigate to={date ? `/cyber/${date}` : "/cyber"} replace />;
}

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:section" element={<Post />} />
          <Route path="/:section/:slug" element={<Post />} />
          <Route path="/blog/post" element={<LegacyPostRedirect />} />
          <Route path="/blog/post/:date" element={<LegacyPostRedirect />} />
        </Routes>
      </Router>
  );
}

export default App;
