import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/index.js'
import Work from '../pages/Work/index.js'
import Enjoy from '../pages/Enjoy/index.js'
import Point from '../pages/Point/index.js'

function router() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/work" element={<Work/>}></Route>
          <Route path="/Enjoy" element={<Enjoy/>}></Route>
          <Route path="/Point" element={<Point/>}></Route>
          {/* 指定默认主页 */}
          {/* <Route path="/" component={Home}></Route> */}
        </Routes>
      </Router>
    );
}

export default router;