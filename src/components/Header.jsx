import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return(
    <div>
      <style jsx global>{`
        .columns {
          display: inline;
          grid-template-columns: repeat(1fr);
        }
          
      `}</style>
      <h1 className="nav">JOY</h1>
      <Link to="/"><button>TOURS</button></Link>
      <Link to="/newticket"><button>ADD TOUR</button></Link>
      <Link to="/admin"><button>--</button></Link>
    </div>
  );
}

export default Header;