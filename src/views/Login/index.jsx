import './login.css'
import { useState } from 'react'
import axios from 'axios'

export function Login() {
  const url = "https://api-vercel-virid.vercel.app/users";
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const  Inserir = () => {
    axios.get(url, {
      nome,
      email,
      senha
    })
    .then( () => {
      setNome('')
      setEmail('')
      setSenha('')
    })
    .catch( (error) => {
        console.log('error: ' + error)
    })
  }

  const LoginEntrar = (e) => {
    e.preventDefault();
    if( email === '') {
      alert('Precisa preencher campo email')
      return false;
    }else if( senha === ''){
      alert('Precisa preencher campo senha')
      return false;
    }
    alert('Sistema indisponivel, verificar versão código 7003 :<')
  }
  
  return (
    <>
      <div className="area-login-background"></div>
      <div className="area-form">
          <form className='w-100' onSubmit={LoginEntrar}>
            <h1>Bem vindo,</h1>
                <input type="text" className='input-form form-control' placeholder='email'
                  value={email} onChange={ e => setEmail(e.target.value)}
                />
                <input type="password" className='input-form form-control' placeholder='senha'
                  value={senha} onChange={ e => setSenha(e.target.value)} 
                />
            <div className="group-btn d-flex gap-3 justify-content-center">
              <button type='submit' className='btn btn-primary mobile'>Entrar</button>
              <button type='submit' className='btn btn-success mobile'>Cadastro</button>
            </div>      
          </form>
          <p className="footer"> <span>copy 2024</span> | Desenvolvendo <span>Seb App</span> </p>
      </div>
    </>
  )
}
