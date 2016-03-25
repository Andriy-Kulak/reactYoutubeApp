import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDEkMhJrsf2f595cIc9r9oYnPIztzW0BJM';

// Create a new component. This component should produce some html

const App = () => {
	return  <div>Hi </div>;
}

// Take this components generates html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));


