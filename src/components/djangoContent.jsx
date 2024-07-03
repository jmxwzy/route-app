import React, { Component } from 'react';
import Django from './django';
import { useSearchParams } from 'react-router-dom';

const DjangoContent = () => {
    console.log(useSearchParams());
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('chapter'));
    return (
        <h1>Django - {searchParams.get('chapter')}</h1>
    );
};

export default DjangoContent;