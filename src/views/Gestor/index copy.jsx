import './styles.css'
import { useState } from 'react'
import axios from 'axios'
// import Select from 'react-select'

export function Gestor() {
  const url = "https://api-vercel-virid.vercel.app/gestores";
  const [nome, setNome] = useState('')
  const [sexo, setSexo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  
  // const SelectApp = () => (
  //   <Select options={options} />
  // )

  const  Inserir = () => {
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
    // .catch( (error) => {
    //     console.log('error: ' + error)
    // })
  }
  return (
    <div className='container'>
      <form>
        <h1>Cadastro Gestor</h1>
        <div className="row">
          <div className="col">
            <input type="text" className='form-control' placeholder='nome' 
              value={nome} onChange={ e => setNome(e.target.value)}
            />
            <select className='form-control' value={sexo} onChange={ e => setSexo(e.target.value)}>
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
          <button className='btn btn-outline-warning' onClick={ Inserir }>Cadastra</button>
        </div>      
      </form>

    </div>
  )
}
