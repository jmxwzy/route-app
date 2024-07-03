import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const LinuxContent = () => {
    console.log(useParams()); // 函数组件可以直接调用
    return (
        <React.Fragment>
            <h1>Linux - {useParams().chapter}</h1>
        </React.Fragment>
    );
};

export default LinuxContent;