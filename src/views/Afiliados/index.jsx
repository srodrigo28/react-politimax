import './styles.css'
import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import { Link } from 'react-router-dom';

export function Afiliados() {
  const url = "https://api-vercel-virid.vercel.app/afiliados";
  const url_offline = "http://localhost:3000/afiliados";
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [sexo, setSexo] = useState('')
  const [titulo, setTitulo] = useState('')
  const [zona, setZona] = useState('')
  const [secao, setSecao] = useState('')
  const [gestorId, setGestorId] = useState('')

  const columns = [
    { name: "id", label: "id" },
    { name: "nome", label: "nome" },
    { name: "email", label: "email" },
    { name: "telefone", label: "telefone" },
    { name: "cpf", label: "cpf" },
    { name: "sexo", label: "sexo" },
    { name: "titulo", label: "titulo" },
    { name: "zona", label: "zona" },
    { name: "secao", label: "secao" },
    { name: "gestorId", label: "Gestor" }
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
          // console.log(data)
          setAfiliadosData(data)
      })
  }

  const validar = () =>{
    alert("Todos os campos são obrigatórios!")
  }

  const  Inserir = (e) => {
    e.preventDefault();
    axios.post(url, {
      nome,
      email,
      telefone,
      cpf,
      sexo,
      titulo,
      zona,
      secao,
      gestorId
    })
    .then( () => {
      alert( nome + ' Cadastrado com sucesso')
      setNome(''), setEmail(''), setTelefone(''), setCpf(''), setTitulo(''), setZona(''), setSecao(''), setGestorId('')
      window.location.reload(true)
    })
    .catch( (error) => {
        alert('Cadastrado com sucesso')
        window.location.reload(true)
        // alert(' error:( ' + error.message)
        console.log('error: ' + error)
    })
  }
  return (
    <div className='container'>
      <form onSubmit={Inserir}>
        <h1>Cadastro Afiliados</h1>
        <div className="row">
          <div className="col">
            <select type="text" className='form-control' 
              value={gestorId} onChange={ e => setGestorId(e.target.value)}>
                <option value="Henrique">Gestor</option>
                <option value="Henrique">Henrique</option>
                <option value="Alan">Alan</option>
                <option value="Matheus">Matheus</option>
                <option value="Daniel">Daniel</option>
              </select>
          </div>
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
            <input type="text" className='form-control' placeholder='CPF'
              value={cpf} onChange={ e => setCpf(e.target.value)}
            />
          </div>
          <div className="col">            
            <input type="text" className='form-control' placeholder='Titulo'
              value={titulo} onChange={ e => setTitulo(e.target.value)}
            />
          </div>
          <div className="col">            
            <input type="text" className='form-control' placeholder='Zona'
              value={zona} onChange={ e => setZona(e.target.value)}
            />
          </div>
          <div className="col">            
            <input type="text" className='form-control' placeholder='Seção'
              value={secao} onChange={ e => setSecao(e.target.value)}
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
      </form>

      
    </div>
  )
}
