import { BsInstagram ,  BsGithub } from 'react-icons/bs'
import { GrLinkedin } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className='app__social'>
          <a href='https://www.linkedin.com/in/ajay-das-cj' target='_blank'> 
          <GrLinkedin />  
          </a>
          <a href='https://github.com/ajaydascj-dev' target='_blank'>
          <BsGithub />
          </a>
          <a href='#'>
            <BsInstagram/>
          </a>
    </div>
  )
}

export default SocialMedia