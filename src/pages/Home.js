import React from 'react'
import { useNavigate } from 'react-router-dom'
import withLayout from './withLayout'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
    <div className='banner' >
    <h1>Welcome to my webpage</h1>
    <p>I am a developer and a plumber as well wishing
     to advance in the outside world.</p>
     <div className='actions-wrap'></div>
     <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
     <button className='btn-contain'onClick={()=>navigate("./blog")}>Read Blogs</button>
</div>
    </div>
  )
}

export default withLayout(Home)