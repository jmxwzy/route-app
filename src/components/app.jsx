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
import DjangoContent from './djangoContent';

class App extends Component {
    state = {  } 
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/linux' element={<Linux></Linux>}>
                            <Route path='homework' element={<h4>homework</h4>}></Route>
                            <Route path='terminal' element={<h4>terminal</h4>}></Route>
                            <Route path='*' element={<h4>other</h4>}></Route>
                        </Route>
                        <Route path='/django' element={<Django id='wzy'></Django>}></Route>
                        <Route path='/web' element={<Web></Web>}></Route>
                        <Route path='/web/content' element={<WebContent></WebContent>}></Route>
                        {/* <Route path='/web/content/:chapter/:section' element={<WebContent></WebContent>}></Route> */}
                        <Route path='/linux/content/:chapter' element={<LinuxContent></LinuxContent>}></Route>
                        <Route path='/django/content' element={<DjangoContent></DjangoContent>}></Route>
                        <Route path='/404' element={<NotFound></NotFound>}></Route>
                        <Route path='*' element={<Navigate replace to='/404'></Navigate>}></Route>
                    </Routes>
                </div>
                
            </React.Fragment>
        ); 
    }
}
 
export default App;