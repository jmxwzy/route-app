import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Linux extends Component {
    state = {
        linuxs: [
            {id: 1, title: 'file'},
            {id: 2, title: 'tmux'},
        ],
    } 
    render() { 
        return (
            <React.Fragment>
                <h1>Linux</h1>
                <hr />
                <div>
                    {this.state.linuxs.map(linux => (
                        <div key={linux.id}>
                            <Link to={`/linux/content/${linux.id}`}>{linux.id + '.' + linux.title}</Link>                                
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
 
export default Linux;