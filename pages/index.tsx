import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <div className="container" >
      <form onSubmit={handleSubmit} >
        <div className="card" >
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="card">
          <label htmlFor="password">Senha</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        
        <button type="submit" >Entrar</button>
      </form>
    </div>
    
  )
}
