import React from 'react';
import s from './App.module.scss';
import {Header} from "./components/Header/Header";



export function App() {
  return (
    <div className={s.wrapper}>
        <Header/>

        {/*<Main/>*/}
        {/*<Rules/>*/}
        {/*<Slider/>*/}
        {/*<Footer/>*/}
    </div>
  );
}

