
import axios from "axios"
export default function Home() {
  const test =()=>{ axios.get('http://localhost:8134/java/produto/335',{
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtYXJjb3MtYXBpIiwic3ViIjoibWFyY29zIiwiZXhwIjoxNjg4Njc3MDE5fQ.4eElyOZiCBKElSISR6T0n92e02tCe-rp7lI_Uz8qfcY'},

  }).then(Response=>{
    alert("marcos")

  }
  ).catch(
    Response=>{
      alert("gay")
  
    }
  )
  }
  return (
    <div>
      <button style={{ margin: "20px" }}
        onClick={() => test()}
        className="btn btn-outline-primary">
        Deletar
      </button>
    </div>
  )
}