import './styles.css'
import { useState } from 'react'
import axios from 'axios'

export function Gestor() {
  const url = "https://api-vercel-virid.vercel.app/gestores";
  const [nome, setNome] = useState('')
  const [sexo, setSexo] = useState('m')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const  Inserir = (e) => {
    e.preventDefault()

    if( nome == '') { 
      setErro('Precisa preencher campo nome')
      alert('Precisa preencher campo nome');
      return false;
    } else if( sexo == '') { 
      setErro('Precisa preencher campo sexo')
      alert('Precisa preencher campo sexo');
      return false;
    } else if( email == '') { 
      setErro('Precisa preencher campo email')
      alert('Precisa preencher campo email');
      return false;
    } else if( telefone == '') { 
      setErro('Precisa preencher campo telefone')
      alert('Precisa preencher campo telefone');
      return false;
    } else if( senha == '') { 
      setErro('Precisa preencher campo senha')
      alert('Precisa preencher campo senha');
      return false;
    }

    // console.log(
    //   "nome: " + nome, 
    //   "sexo: " + sexo,   "\n" + 
    //   "email: " + email,  "\n" + 
    //   "tel: " + telefone,  "\n" + 
    //   "senha: " + senha
    // )

    axios.post(url, {
      nome,
      sexo,
      email,
      telefone,
      senha
    })
    .then( () => {
      alert( nome + ' Cadastrado com sucesso')
    })
    .catch( (error) => {
        console.log('error: ' + error)
    })
  }
  return (
    <div className='container'>
      <form>
        <h1>Cadastro Gestor</h1>
        {erro}
        <div className="row">
          <div className="col">
            <input type="text" className='form-control' placeholder='nome' 
              value={nome} onChange={ e => setNome(e.target.value)}
            />

            <select className='form-control' value={sexo} name="sexo" onChange={ e => setSexo(e.target.value)} >
              <option defaultValue='Sexo' disabled>Sexo</option>
              <option value={'m'}>Masculino</option>
              <option value={'f'}>Feminino</option>
              <option value={'x'}>Não declarado</option>
            </select>

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
          <button className='btn btn-outline-warning' > Voltar</button>
        </div>      
      </form>

    </div>
  )
}
