import React, { Component } from 'react';
import NavBar from './navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import WebContent from './webContent';
import NotFound from './notFound';
import LinuxContent from './linuxContent';

class App extends Component {
    state = {  } 
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/linux' element={<Linux></Linux>}></Route>
                        <Route path='/django' element={<Django id='wzy'></Django>}></Route>
                        <Route path='/web' element={<Web></Web>}></Route>
                        <Route path='/web/content' element={<WebContent></WebContent>}></Route>
                        {/* <Route path='/web/content/:chapter/:section' element={<WebContent></WebContent>}></Route> */}
                        <Route path='/linux/content/:chapter' element={<LinuxContent></LinuxContent>}></Route>
                        <Route path='/404' element={<NotFound></NotFound>}></Route>
                        <Route path='*' element={<Navigate replace to='/404'></Navigate>}></Route>
                    </Routes>
                </div>
                
            </React.Fragment>
        ); 
    }
}
 
export default App;