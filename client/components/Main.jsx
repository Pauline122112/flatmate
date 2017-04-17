
import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBar from './ProfileBar'

const Main = () => (

  <div className="container">
    <ProfileBar />
    <div className="row">
      <div className='six columns'>
        <Link to='/shoppinglist'><img src='../../css/images/shoppingList.png' alt='link to shopping list' /></Link>
      </div>
      <div className='six columns'>
        <Link to='/calendar'><img
        src='../../css/images/calendar11.png' alt='link to calendar'
        /></Link>
      </div>
    </div>
    <div className= "row">
       <div className='six columns'>
        <div id='roster'>
        <Link to='/roster'><img id='rosterImage' src='../../css/images/Roster123.png' alt='link to roster' width='250px' height='250px' /></Link>
        </div>
      </div>
      <div className='six columns'>
        <div id='bills' >
          <Link to='/bills'><img src='../../css/images/bills111.png' alt='link to bills'/></Link>
        </div>
      </div>
    </div>
    <Link to='/settings'>Settings</Link>
  </div>
)

export default Main
