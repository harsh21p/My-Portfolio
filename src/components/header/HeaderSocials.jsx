import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {ImBook} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/harshad-pachore-4437271a1/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/harsh21p" target="_blank"><FaGithub/></a>
        <a href="https://eportfolio.mygreatlearning.com/harshad-r--pachore" target="_blank"><ImBook/></a>
    </div>
  )
}

export default HeaderSocials