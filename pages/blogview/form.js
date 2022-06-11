import react from "react";
import Link from "next/link";

const form =()=>{

return(<>
<Link href={"../"}><a className="inner-link" style={{"color":"black", "backgroundColor":"white","border":"2px solid lightgray","margin":"5px","border-radius": "30px"}}>Back</a></Link>

<div className=".body" suppressHydrationWarning>

<div className="contact-box" suppressHydrationWarning>

<h1 className="formh1">Details of Article</h1>

<form>

<input type="text" className="input-field" placeholder="Enter title"/>

<input type="text" className="input-field" placeholder="Enter description"/>

<input type="text" className="input-field" placeholder="Published date and time"/>

<input type="text" className="input-field" placeholder="Author"/>

<input type="text" className="input-field" placeholder="URL to original source"/>

<input type="text" className="input-field" placeholder="URL to image"/>

<textarea type="text" className="input-field textarea" placeholder="content"></textarea>

<button className="btn" type="submit">Send</button>

</form>

</div>

</div>

</>)

}

export default form;