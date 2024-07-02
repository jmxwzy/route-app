import React, { Component } from 'react';
import NavBar from './navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';

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
                        <Route path='/django' element={<Django></Django>}></Route>
                        <Route path='/web' element={<Web></Web>}></Route>
                        <Route path='/web/content/:chapter' element={<Web></Web>}></Route>
                    </Routes>
                </div>
                
            </React.Fragment>
        ); 
    }
}
 
export default App;