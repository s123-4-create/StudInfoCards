
import React from "react";
import ReactDOM from "react-dom/client";
import './Home/Home.css';
import { BG_COLOR } from "./components/configs/app";
import Home from './Home/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div  style={{backgroundColor: BG_COLOR , 
    minHeight:"100vh",
    margin:0,
    padding:0,
    }}>
    <Home/>

    
    </div>
    
    );
