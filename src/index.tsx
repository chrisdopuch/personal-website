import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="The Chris Dopuch Zone" />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
