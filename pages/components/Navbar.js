import Link from "next/link";
import react from "react";

const Navbar =()=>{

  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();

    return(<nav>
        <h4 align="center"> 🕐 {showTime}</h4>
        <h2>Cogo News Application</h2>
        <ul>
          <Link href={'blogview/form'}><a>Add Article</a></Link>
          <li><a href="#">Favorite</a></li>
          <li><a href="#">profile</a></li>
        </ul>
      </nav>)
}
export default Navbar