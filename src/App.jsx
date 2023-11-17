
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit/Edit';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import SinglePage from './components/SinglePage/SinglePage';

function App() {
  return (
    <div className="App">
    <div className="navbar">
     <Link to={'/'}>Home</Link>
     <Link to={'post'}>Post</Link>


    </div>
     <Routes>
      
      <Route index element={<Home/>}/>
      <Route path='/news/:id'element={ <SinglePage/>}/>
      <Route path='/edit/:id'element={ <Edit/>}/>
      <Route path='/post'element={ <Post/>}/>
     </Routes>
    </div>
  );
}

export default App;
