import './styles.css'
import { useState } from 'react'
import axios from 'axios'

export function Login() {
  // const url = "https://api-vercel-virid.vercel.app/users";
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // const  Inserir = () => {
  //   axios.post(url, {
  //     nome,
  //     email,
  //     telefone,
  //     senha
  //   })
  //   .then( () => {
  //     alert( nome + ' Cadastrado com sucesso')
  //     setNome('')
  //     setEmail('')
  //     setTelefone('')
  //     setSenha('')
      
  //     alert('Sucesso')
  //   })
  //   // .catch( (error) => {
  //   //     console.log('error: ' + error)
  //   // })
  // }
  const LoginEntrar = (e) => {
    e.preventDefault();
    if( email == '') {
      alert('Precisa preencher campo email')
      return false;
    }else if( senha == ''){
      alert('Precisa preencher campo senha')
      return false;
    }
    alert('Sistema indisponivel, verificar versão código 7003 :<')
  }
  return (
    <div className='container'>
      <form onSubmit={LoginEntrar}>
        <h1>Bem vindo,</h1>
        <div className="row">
          <div className="col">
            <input type="text" className='form-control' placeholder='email'
              value={email} onChange={ e => setEmail(e.target.value)}
            />
            <input type="password" className='form-control' placeholder='senha'
              value={senha} onChange={ e => setSenha(e.target.value)} 
            />
          </div>
        </div>
        <div className='btn-group'>
          <button type='submit' className='btn btn-outline-primary'>Entrar</button>
        </div>      
      </form>

    </div>
  )
}
