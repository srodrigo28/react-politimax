import './styles.css'
import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import axios from 'axios'

export function Gestor(props) {
  const url_offline = "http://localhost:3000/gestores";
  const url = "https://api-vercel-virid.vercel.app/gestores";

  const [nome, setNome] = useState('')
  const [sexo, setSexo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  const columns = [
    { name: "id", label: "id" },
    { name: "nome", label: "nome" },
    { name: "sexo", label: "sexo" },
    { name: "email", label: "email" },
    { name: "telefone", label: "telefone" },
]

  // 1 - hooks
  const [afiliadosData, setAfiliadosData] = useState([]);

  // 2 - hooks
  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {
      await axios.get(url).then((response) => {
          const data = response.data
          setAfiliadosData(data)
          console.log(data)
      })
  }

  const validar = () =>{
    getData()
    alert("Todos os campos são obrigatórios!")
  }

  const  Inserir = (e) => {
    e.preventDefault();
    axios.post(url, {
      nome,
      sexo,
      email,
      telefone,
      senha
    })
    .then( () => {
      alert( nome + ' Cadastrado com sucesso')
      setNome(''), setSexo(''), setEmail(''), setTelefone(''),  setSenha('')
      window.location.reload(true)
    })
    .catch( (error) => {
        alert( nome + ' Cadastrado com sucesso')
        // alert(' error:( ' + error.message)
        console.log('error: ' + error)
        window.location.reload(true)
    })
  }
  return (
    <div className='container'>
      <form onSubmit={Inserir}>
        <div className="d-flex justify-content-between">
        <h1>Cadastro Gestores</h1> <h2> Hello { props.email }</h2>
        </div>
        <div className="row">
          <div className="col">
            <input type="text" className='form-control' placeholder='nome' 
              value={nome} onChange={ e => setNome(e.target.value)}
            />
          </div>
          <div className="col">
          <select className='form-control mt-2' value={sexo} onChange={e => setSexo(e.target.value)}>
              <option value="feminino">Sexo</option>
              <option value="feminino">feminino</option>
              <option value="masculino">masculino</option>
          </select>
          </div>
          <div className="col">            
            <input type="text" className='form-control' placeholder='email' value={email} onChange={ e => setEmail(e.target.value)}/>
          </div>
          <div className="col">            
            <input type="text" className='form-control' placeholder='Telefone'
              value={telefone} onChange={ e => setTelefone(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
        <div className="col">            
            <input type="password" className='form-control' placeholder='**************'
              value={senha} onChange={ e => setSenha(e.target.value)}
            />
          </div>
        </div>
        <div className='btn-group mb-5'>
          <button className='btn btn-outline-warning'>Cadastra</button>
        </div>      
        <MUIDataTable
          title="filtrar por"
          data={afiliadosData}
          columns={columns}
      />
      <Link to="/" className="btn btn-danger mt-3 w-25">Sair</Link>
      <Link to="/afiliados" className="btn btn-primary mt-3 w-25">Afiados</Link>
      </form>

      
    </div>
  )
}
