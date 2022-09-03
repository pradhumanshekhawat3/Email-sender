import './App.css';
import React, {useState} from 'react';
import { sendEmail } from './utils/email';

function App() {
  const [contact, setContact] = useState({});

  // {
  //   "email":"shekhawatpradhuman19@gmail.com",
  //   "name":"pradhuman",
  //   "desc":" hello this is the email form my side"
  // }
  const sendMail = async(e) =>{

    e.preventDefault();
    console.log(contact)
    const formData = {
      name: contact?.name,
      email: contact?.email,
      desc: contact?.desc
    }

    const res = await sendEmail(formData);

    // if()

    // console.log(res)
  }
  // function myalert(){
  //   alert("Email Sent!")
  // }
  return (
    <div className="App">
      <h1>Mail Sender</h1>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">Name</label>
          <input 
            type="text" 
            id="form2Example1" 
            className="form-control"
            value={contact.name}
            onChange={(e)=>{
              setContact({...contact, name: e.target.value});
            }}
             />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">Email address</label>
          <input type="emai;" id="form2Example2" className="form-control" 
          value={contact.email}
          onChange={(e)=>{
            setContact({...contact, email: e.target.value});
          }}/>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">Description</label>
          <input type="textarea" id="form2Example1" className="form-control" 
          value={contact.desc}
          onChange={(e)=>{
            setContact({...contact, desc: e.target.value});
          }} />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={sendMail}>Send</button>
      </form >
    </div >
  );
}

export default App;
