import React from 'react'
import { StylesNotFonud } from './StylesNotFound';
import notFound from '../../00 RECURSOS PROYECTO SPRINT 2/images/404.gif';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <StylesNotFonud>
      <img src={notFound} alt="" />
      <div>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    </StylesNotFonud>
  )
}

export default NotFound