import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Questions from '../../pages/Questions'
import Dashboard from '../../pages/Dashboard'
export default function Body() {
    return <div className="body">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
}