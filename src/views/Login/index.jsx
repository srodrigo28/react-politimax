import './login.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login() {
  const url = "https://api-vercel-virid.vercel.app/users";
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

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
            <div className="group-btn d-flex gap-3 justify-content-center">
              <Link className='btn btn-primary mobile' onClick={LoginEntrar}>
                Entrar
              </Link>
              <button className='btn btn-success mobile'>Cadastro</button>
            </div>      
          </form>
          <p className="footer"> <span>copy 2024</span> | Desenvolvendo <span>Seb App</span> </p>
      </div>
    </>
  )
}
