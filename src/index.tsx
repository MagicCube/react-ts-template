import * as React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

class Henry {
  public func(): void {
    const a = new Map();
    console.info(a);
  }
}

const henry = new Henry();
console.info(henry);

render(<App />, document.getElementById('react-mount-point'));
