import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Web extends Component {
    state = {
        webs: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "JAVASCRIPT"},
            {id: 4, title: "KOF"},
            {id: 5, title: "REACT"},
        ],
    }; 
    render() { 
        return (
            <React.Fragment>
                <h1>Web</h1>
                <hr />
                <div>
                    {this.state.webs.map(web => (
                        <div key={web.id}>
                            {/* <Link to={`/web/content/${web.id}`}>{web.id + "." + web.title}</Link> // URL中传递参数 */}
                            <Link to={`/web/content?chapter=${web.id}`}>{web.id + "." + web.title}</Link> {/* // Search Params传递参数 */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
 
export default Web;