import './styles.css'
import { useState } from 'react'
import axios from 'axios'

export function Users() {
  const url = "https://api-vercel-virid.vercel.app/users";
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  const  Inserir = () => {
    axios.post(url, {
      nome,
      email,
      telefone,
      senha
    })
    .then( () => {
      alert( nome + ' Cadastrado com sucesso')
      setNome('')
      setEmail('')
      setTelefone('')
      setSenha('')
      
      alert('Sucesso')
    })
    // .catch( (error) => {
    //     console.log('error: ' + error)
    // })
  }
  return (
    <div className='container'>
      <form>
        <h1>Cadastro Usuário</h1>
        <div className="row">
          <div className="col">
            <input type="text" className='form-control' placeholder='nome' 
              value={nome} onChange={ e => setNome(e.target.value)}
            />
            <input type="text" className='form-control' placeholder='email'
              value={email} onChange={ e => setEmail(e.target.value)}
            />
            <input type="text" className='form-control' placeholder='telefone' 
              value={telefone} onChange={ e => setTelefone(e.target.value)} 
            />
            <input type="text" className='form-control' placeholder='senha'
              value={senha} onChange={ e => setSenha(e.target.value)} 
            />
          </div>
        </div>
        <div className='btn-group'>
          <button className='btn btn-outline-primary' onClick={ Inserir }>Entrar</button>
          <button className='btn btn-outline-warning' onClick={ Inserir }>Cadastra</button>
        </div>      
      </form>

    </div>
  )
}
