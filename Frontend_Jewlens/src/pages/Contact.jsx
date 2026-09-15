import{useState} from 'react'

function Contact() {
  
const [formdata, setFormdata] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  e.preventDefault();
  console.log(formdata);
  setFormdata({
  name: "",
  email: "",
  message: ""
  });

}

  return (
<>
<form onSubmit={handleChange}>
<label htmlFor="name">Name:</label>
<input 
type="text"
value={formdata.name}
onChange={(e)=> setFormdata({...formdata, name: e.target.value})}
required/>
<label htmlFor="email">Email:</label>
<input 
type="email"
value={formdata.email}
onChange={(e)=> setFormdata({...formdata, email: e.target.value})}
/>

<label htmlFor="message">Message:</label>
<textarea
  value={formdata.message}
  onChange={(e)=> setFormdata({...formdata, message: e.target.value})}
/>

<button type="submit">Submit</button>


   
</form>



    </>
  )
}

export default Contact