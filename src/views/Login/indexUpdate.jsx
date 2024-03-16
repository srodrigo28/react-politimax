import { Password } from '@mui/icons-material';
import './login.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login() {
  const url = "http://localhost:3000/gestores";
  const url1 = "https://api-vercel-virid.vercel.app/gestores";
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  /**
      const api = axios.create({ baseURL: url})

      const useApi = () => {
        signin: async (email, senha) => {
          const response = await api.post(url, {email, senha})
          return response.data
        }
        logout: async () => {
          const response = await api.post(url, {email, senha})
          return response.data
        }
      }
  */
  
  const handleAxios = (e) => {
    e.preventDefault();

      
  }

  const handleFeach = (e) => {
    e.preventDefault();

      fetch("http://localhost:3000/gestores1" + email).then((res) => {
        return res.json();
    }).then((resp) => {
      // console.log(resp);
      if(Object.keys(resp).length === 0){
        alert("Caso 0")
      }else{
        if(resp.senha === senha){
          alert("Sucesso")
        }else{
          alert("Não aceito")
        }
      }
      
    }).catch((err) => {
      alert("Login com erro : " + err.message)
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, senha)
    /*** */
    try {
      const response = await axios.post(url,
        JSON.stringify({email, senha}), 
          { 
            headers: { 'Content-Type': 'application/json' } 
          }
        );
        return console.log(response.data)
      // alert('Sucesso')
    } catch (error) {
      if(!error?.response){
        setError('Erro ao acessar o servidor')
      }else if( error.response.status == 401) {
          setError("Usuário ou senha Inválidos")
      }
    }
    
    // navigate("/gestores");
  };

  const LoginEntrar = async (e) => {
    e.preventDefault();
    
    if (email == 'admin@gmail.com' & senha == '123456'){
      alert('Sucesso Login')
      navigate("/gestores");

    }else{
      alert('Error usuário ou senha')
    }  
  }
  
  return (
    <>
      <div className="area-login-background"></div>
      <div className="area-form">
          <form className='w-100'>
            <h1>Bem vindo,</h1>
                <input type="text" className='input-form form-control' placeholder='email'
                  value={email} onChange={ e => setEmail(e.target.value)}
                />
                <input type="password" className='input-form form-control' placeholder='senha'
                  value={senha} onChange={ e => setSenha(e.target.value)} 
                />
                <h3>{error} { email }</h3>
            <div className="group-btn d-flex gap-3 justify-content-center">
              <Link className='btn btn-primary mobile' onClick={LoginEntrar}>
                Entrar
              </Link>
              <button className='btn btn-success mobile' onClick={ (e) => handleLogin(e) }>Validar</button>
              <button className='btn btn-danger mobile' onClick={ handleAxios }>Validar</button>
            </div>      
          </form>
          <p className="footer"> <span>copy 2024</span> | Desenvolvendo <span>Seb App</span> </p>
      </div>
    </>
  )
}
