import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

// URL中传递参数, Search Params传递参数：类组件写法
class WebContent extends Component {
    state = {
        searchParams: this.props.params[0], // 获取某个参数(？chapter= 传参)
        setSearchParams: this.props.params[1], // 设置链接中的参数，然后重新渲染当前页面
    }; 
    render() {
        // console.log(useParams()); // 类组件无法直接调用useParams()
        // console.log(this.props.params); //
        return (
            <React.Fragment>
                {/* <h1>Web - {this.props.params.chapter}</h1> // url传参 */}
                <h1>Web - {this.state.searchParams.get('chapter')}</h1> 
                <div>
                    内容
                </div>
            </React.Fragment>
        );
    }
} 
 
// 类组件中无法直接调用useParams()和useSearchParams()，但是在类之前可以调用
// 使用以下匿名函数返回一个组件, 本质上还是在函数组件中调用，只是在类组件里套用一下
export default (props) => (
    <WebContent
        {...props}
        // 将这两个函数作为参数传入即可
        // params={useParams()}>
        params={useSearchParams()}> 
    </WebContent>
);