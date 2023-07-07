
import axios from "axios"
import { useState } from "react"
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

export default function Home() { 
  const navigate = useNavigate();


  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [token,setToken] = useState("");
  const test = (a) => {
    axios.get('http://localhost:8134/java/produto/335', {
      headers: { 'Authorization': `Bearer ${a}` },
    }).then(Response => {
      alert(Response.data);
      navigate('/gay');

    }
    ).catch(
      Response => {
        alert("gay")

      }
    )
  }
  const login = () => {
    axios.post('http://192.168.2.181:8134/auth/login', {
      login: usuario,
      password: senha
    }).then(Response => {
     const a = Response.data.token;
      test(a);
    }
    ).catch(Response => {
      alert('Usuario e/ou a senha estão incorretas')
    })
  }
  return (
    <div>
      <div>
        <Form.Label htmlFor="inputText">Usuario</Form.Label>
        <Form.Control
          type="Text"
          id="inputText"
          value={usuario}
          onChange={(txt) => setUsuario(txt.target.value)}
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Seu Usuario Não Pode conter espaços
        </Form.Text>
      </div>
      <div>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          value={senha}
          onChange={(txt) => setSenha(txt.target.value)}
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Sua Senha deve conster entre 8-20 caracteres, contendo letras maiusculas, minusculas, numeros e caracteres especiais.
        </Form.Text>
      </div>
      <button style={{ margin: "20px" }}
        onClick={() => login()}
        className="btn btn-outline-primary">
        Login
      </button>
    </div>
  )
}