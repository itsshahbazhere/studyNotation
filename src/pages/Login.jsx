import React from 'react'
import Templates from '../components/Templates'
import loginImg from '../assets/login.png'

const Login = ({setLoggedIn}) => {
  return (
    <div>
      <Templates 
        setLoggedIn={setLoggedIn}
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formType="login"
      />
    </div>
  )
}

export default Login
