import React from 'react'

const MainArea = () => {
  return (
    <div id="main">
     <article>
        <label htmlFor="">Title</label><input type="text" /><br />
        <br />
        <label htmlFor="">Text</label><input type="text" /><br/>

        <button onClick={"submit"} style={{backgroundColor:"red"}} >publish</button>
     </article>


    </div>
  )
}

export default MainArea