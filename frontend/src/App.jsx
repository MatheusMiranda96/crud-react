import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify";
import Form from './components/Form';


function App() {
  
  return (
     <>
       <div className="container">
          <h2>USUÁRIOS</h2>
       </div>
       <Form />
       <ToastContainer autoClose={3000} position="bottom-left"/>
     </>
  )
}

export default App
