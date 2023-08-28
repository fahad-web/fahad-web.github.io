import Link from "next/link";
import Meta from "../meta";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const AdminReg = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    fastname: "",
    lastname: "",
    email: "",
    contact: Number,
    password: "",
    filename: ""
  });
  const { fastname, lastname, email, contact, password, filename } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const isValidFastName = (fastname) => {
    return fastname.length >= 2;
  }
  const isValidLastName = (lastname) => {
    return lastname.length >= 4;
  }
  const isValidLastNameM = (lastname) => {
    const machName = /^[a-zA-Z]+[a-zA-Z]+$/;
    return machName.test(lastname)
  }

  


  const handleSubmit = async (event) => {
    event.preventDefault()
    user.contact = parseInt(user.contact);
    if (!email || !password || !fastname || !lastname || !contact) {
      setError('All Field required');
    }else if (!isValidFastName(fastname)){
      setError("Fast Name must be 2 bit")
    }
    else if (!isValidLastName(lastname) ){
      setError(" Name must be 3 bit")
    }
    else if (!isValidLastNameM(lastname) ){
      setError("Last Name not suppourt Number")
    }
     else {
      const res = await doSignUp(user)
      console.log(res);
    }
  }
  const doSignUp = async (event) => {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_MAIN_URL + '/register', user, {

        headers: {

          'Content-Type': 'application/json',
  
        },
        withCredentials: true

      });

      console.log(response.data);

      alert("Admin Registration Successful!");
      router.push('/admin/admin_log');

    } catch (error) {

      console.error('Error Manager Signing Up:', error);

      alert("Admin Registration Failed!");

    }

  };


  return (
    <>
      <Meta title="Admin Registration" keywords="fahad" description="Fahad" />
      <center>


        <div className=" formcssr p-1">
          <h1 className="text-black texts mb-5 mt-5">This is Admin Registration Page</h1>
          <form onSubmit={handleSubmit} className=" text-black ">
            <label className="texts ">Enter first name&nbsp;&nbsp;&nbsp;
              <input type="text"  maxLength="5" className="text-xs rounded-lg " id="fastname" name="fastname" onChange={handleChange} value={fastname} />
            </label><br></br>

            <label className="texts">Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
              <input className=" text-xs mt-2 rounded-lg" type="text"   id="lastname" name="lastname" onChange={handleChange} value={lastname} />
            </label><br></br>
            

            <label className="texts">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2 text-xs rounded-lg" type="email"  id="email" name="email" onChange={handleChange} value={email} />
            </label><br></br>

            <label className="texts">Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2 text-xs rounded-lg"  minLength="10" type="number" id="contact" name="contact" onChange={handleChange} value={contact} />
            </label><br></br>

            <label className="texts">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="mt-2 text-xs rounded-lg" type="password"  minLength="4" id="password" name="password" onChange={handleChange} value={password} />
            </label><br></br>


            <label className="texts">Image
              <input className="mt-2 text-xs" type="file" name="filename" onChange={handleChange} value={filename} />
            </label><br></br>

            {error && <p className="text-red-700 absolute mt-3 left-0 right-0  mr-auto ">{error}</p>}
            <button className="bts w-10/12 mt-12 mb-6 bts focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Registration</button>
            <p>Already you have a Account! <Link className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 bts" href="admin_log">Log in</Link></p>
          </form>
        </div>

        {/* <p>Already you have a Account! <Link href="admin_log">Log in</Link></p>
        <Link href="/home">Home</Link> */}

      </center>

    </>
  );
}

export default AdminReg