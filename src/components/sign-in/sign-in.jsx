import './sign-in.css'
import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignIn = ({setUserSignedIn}) => {

  const [userList, setUserList] = useState("")
  const [signInUsername, setSignInUsername] = useState("")
  const [logInFail, setLoginFail] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(`/`);

  useEffect(() => {
    api.getUsers().then(users => {
      setUserList(users)
      console.log(users)
    })
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(userList.some(e => e.username === signInUsername)){
      setUserSignedIn(true)
      setIsActive(true)
      onNavigateHandler()
    } else {
      setLoginFail(true)
    }
  }

  return (
    <form className={isActive ? 'log-in-form-hidden' : 'log-in-form'} onSubmit={handleSubmit}>
      <input 
        type="text"
        value={signInUsername}
        className="user-sign-in"
        placeholder='Type in your username'
        required
        onChange={(e) => setSignInUsername(e.target.value)}
      />
      <br/>
      <button className='sign-in-button'
      >SIGN IN</button>
      <>{logInFail ? <p className='log-in-failed'>Wrong Username</p> : ''}</>
    </form>
  )
}

export default SignIn
