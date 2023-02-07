import React from "react"


  function  Form(){
    return(
        <div className="form">
  <h1>Ragistration Form</h1>
  <form action="">
  <label htmlFor="">First Name:</label>
  <input type="text" /> <br /> <br />
  <label htmlFor="">Last Name:</label>
  <input type="text" /> <br /> <br />
  <label htmlFor="">Mobile:</label>
  <input type="number" /> <br /> <br />
  <label htmlFor="">DOB:</label>
  <input type="date" /> <br /> <br />
  <label htmlFor="">Email id:</label>
  <input type="email" /> <br /> <br />
  <label htmlFor="">Upload picture</label>
  <input type="file" /> <br /> <br />
  <label htmlFor="">Adress:</label>
  <input type="text" /> <br /> <br />
  <label htmlFor="">Pincode:</label>
  <input type="number" /> <br /> <br />
  <label htmlFor="">City:</label>
  <input type="text" /> <br /> <br />
  <label htmlFor="">State:</label>
  <input type="text" /> <br /> <br />
<button id="submit"> Submit</button>
  
</form>
        </div>
    )
}
export default Form 