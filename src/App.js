import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Header.js";
import {Provider} from 'react-redux'
import appStore from "./appStore.js"
import Body from "./Body.js";
import { createRoot } from 'react-dom/client';

import './output.css'

const Title = () => {
  return (
    <>
      <Provider store = {appStore}>
      <Body /> 
      </Provider>  
    </>
  );
};

export default Title;

const container = document.getElementById('root');
const roots = createRoot(container);
roots.render(<Title />);  {/* Render the Title component, which includes Header and Body */}
