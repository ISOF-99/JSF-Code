
import React, { useState } from 'react'

const ContactForm = () => {
const[name,setName] =useState("")
const[email,setEmail] =useState("")
const[Message,setMessage] =useState("")
const[errorMessage, setErrorMessage] = useState("")
const [isSent,setIsSent] = useState (false);
const handleSubmit = async (e) => {
   e.preventDefault()
   setErrorMessage('')

   if (!name || !email || !Message) {
    setErrorMessage('Alla fält måste fyllas i');
    return;
  }

   const user = {name, email, Message}
   const json = JSON.stringify(user)
   const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform',{
       method: 'post',
       headers:  {
       'content-type':'application/json'
       },
       body : json
   })

   clearForm()
      switch (result.status){
      case 200:
      setIsSent(true);
      setTimeout(() => {
           setIsSent(false);
         }, 2000)
      console.log('Meddelandet har skickats')
      break
      case 400:
      setErrorMessage( "Något gick fel. vänligen kontrollera värdern")
      break
      case 409:
      setErrorMessage(`E-postadressen är upptagen`)
          break
        }
      }

const clearForm  = () => {
   setName('')
   setEmail('')
   setMessage('')
}

     return (
         <div>
           <section className="contact-body">
           <form className="ct-body-bottom" onSubmit={handleSubmit} id="contact-form" noValidate>
                     <h5>Leave us a message for any information.</h5>
                     <p className="errormessage">{errorMessage}</p>
                     <div className="Name-a ">
                     <input type="text" value={name} onChange={ (e)=> setName(e.target.value)} id="name" placeholder="Name" required/>
                     </div>
                     <div className="Name-b">
                     <input type="email" value={email} onChange={ (e)=> setEmail(e.target.value)} id="email" placeholder="Email" required/>
                     </div>
                     <div className="Name-c">
                      <textarea type="text" value={Message} onChange={ (e)=> setMessage(e.target.value)}  placeholder="Your Message" cols="30" required rows="6" ></textarea>
                     </div>
                     <div className="isSent">
                    {
                        isSent &&
                        <>
                            <div className='isSent'>Tack för ditt meddelande :)</div>
                        </>
                    }
                </div>
                <button type="submit">Send Message<i className="fa-solid fa-arrow-right"></i></button>
           </form>
           </section>
           </div>

     )

}
export default ContactForm