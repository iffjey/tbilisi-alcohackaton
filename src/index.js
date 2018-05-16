import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import App from './components/App';

injectGlobal`
  @font-face {
    font-family: "Stem";
    src: url("http://cdn.evilmartians.com/front/fonts/subset-StemText-Regular.woff") format("woff")
  }

  * {
    font-family: Stem;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));
