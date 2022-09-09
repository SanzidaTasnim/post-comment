import './App.css';
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import PostDetail from './components/PostDetail/PostDetail';
import Comment from './components/Comment/Comment';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/post/:id" element = {<PostDetail />} />
        <Route path="/comments/:postId" element = {<Comment />} />
        <Route path="*" element = {<Nomatch />} />
      </Routes>
    </Router>
  );
}

export default App;
