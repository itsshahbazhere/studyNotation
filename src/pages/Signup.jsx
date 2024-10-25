import React from 'react'
import Templates from '../components/Templates'
import signupImg from '../assets/signup.png'


const Signup = ({setLoggedIn}) => {
  return (
    <div>
      <Templates 
        setLoggedIn={setLoggedIn}
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formType="signup"
      />
    </div>
  )
}

export default Signup
