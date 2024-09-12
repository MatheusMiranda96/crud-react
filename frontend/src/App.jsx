import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify";
import Form from './components/Form';
import Grid from './components/Grid';


function App() {
  
  return (
     <>
       <div className="container">
          <h2>USUÁRIOS</h2>
       </div>
       <Form />
       <Grid />
       <ToastContainer autoClose={3000} position="bottom-left"/>
     </>
  )
}

export default App
