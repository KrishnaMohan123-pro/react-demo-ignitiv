import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from '../../pages/Home';
import Questions from '../../pages/Questions'
import Dashboard from '../../pages/Dashboard'
import Sidebar from '../Sidebar'
import { Container, Grid } from '@material-ui/core';
import './index.css'

export default function Body() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(()=>{
    if (currentPath === '/questions' || currentPath === '/dashboard') {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [currentPath]);
    return <div className="body">
      <Container>
        <Grid container direction='row'>
          <Grid item xs={showSidebar ?  3 : false}>
            <Sidebar/>
          </Grid>
          <Grid item xs={showSidebar ? 9 : 12} className='body-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/questions' element={<Questions />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </div>
}