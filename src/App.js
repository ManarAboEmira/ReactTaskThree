import logo from './logo.svg';
import './App.css';
import AuthComponent from './component/task2/AuthComponent'
import Products from './component/task1/Product.jsx'
import ComponentOne from './component/task3/ComponentOne';
import { MyProvider } from './component/task3/ContexFile';
import GetPosts from './component/task4/GetPost';
import PostnumPosts from './component/task4/PostnumPosts';


function App() {
  return (
    <div className="App">
    <AuthComponent></AuthComponent>
    <Products></Products>
    <MyProvider value="Hi This is Manar">
    <ComponentOne></ComponentOne>
    </MyProvider>
    <GetPosts></GetPosts>
    <PostnumPosts></PostnumPosts>
    </div>
  );
}

export default App;
