import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Blog from './component/Blog';
import NewBlog from './component/NewBlog';
import FormValidation from './component/FormValidation';
import Creat from './component/Creat';
import ShowData from './component/ShowData';

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Creat />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/employee" element={<FormValidation />} />
        <Route path="/showdata" element={<ShowData />} />
      </Routes>
    </>

  );
}

export default App;
