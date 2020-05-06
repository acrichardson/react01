import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import NewsList from './components/news_list';
import './styles.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const App = () => {
  return (
    <div>
      <Header/>
      <NewsList/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
