import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify";
import Form from './components/Form';
import Grid from './components/Grid';
import { useEffect, useState } from 'react';
import axios from "axios"


function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try{
      const res = await axios.get("http://localhost:3000");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

    useEffect(() => {
      getUsers();
    }, [setUsers]);
  
  return (
     <>
       <div className="container">
          <h2>USUÁRIOS</h2>
       </div>
       <Form />
       <Grid users={users}/>
       <ToastContainer autoClose={3000} position="bottom-left"/>
     </>
  )
}

export default App
