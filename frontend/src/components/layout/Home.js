import React from 'react';

const Home = () => {
return (
    <Fragment>
      <div className="home">
      
      <MetaData title={'Dream Beyond Drugs'}/>
      <div className='gifContainer'>
        <img src="images/giphy.gif" className='gif' />         
        {isHovered && (
          <div style={{zIndex:'1',marginLeft:'1000px',marginTop:'260px'}}>
            <img src="images/bot.png" alt="Popup Image" style={{height:'400px',width:'350px'}}/>
          </div>
        )} 
        <div className="opt" >
          <h3 style={{fontSize:'2.5rem'}}><strong >Lets Communicate Over...</strong></h3>     
          <a href="/user" className="bt bt-color bt-animation-1" ><img src="images/site.png" alt=""/> Site</a> 
          <a href="https://t.me/codeToGive_bot" target="_blank" className="bt bt-color bt-animation-1" onMouseEnter={handleHover}
          onMouseLeave={handleHover}><img src="images/telegram.png" alt="" /> Telegram</a>        

          <a href="/volunteer" className="bt bt-color bt-animation-1" ><img src="/images/site.png" alt=""/> Volunteer</a>  
        </div>      
      </div>
      <div className='moto'>
        <h2>Dream Beyond Drugs</h2>
      </div>
    </div>
      
    </Fragment>

  )
}

export default Home