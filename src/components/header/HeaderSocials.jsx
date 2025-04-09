import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kris-tantinirundr" target={"_blank"} rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/kurissu" target={"_blank"} rel="noreferrer"><BsGithub/></a>
        <a href="mailto:kris.ttr.dev@gmail.com" target={"_blank"} rel="noreferrer" ><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials