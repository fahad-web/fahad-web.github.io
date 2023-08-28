import Link from "next/link";
import Meta from "../meta";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SessionCheck from "../component/sessioncheck";
import { useEffect } from "react";


const UpdateAdmin = () => {

  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
    {
      const session = sessionStorage.getItem('email');

    }

  }, []);

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
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append('filename', file);


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    console.log(user)
    if (!email || !password || !fastname || !lastname || !contact) {
      setError('All Field required');
    } else if (!isValidFastName(fastname)) {
      setError("Fast Name must be 2 bit")
    }
    else if (!isValidLastName(lastname)) {
      setError(" Name must be 3 bit")
    }
    else if (!isValidLastNameM(lastname)) {
      setError("Last Name not suppourt Number")
    }
    else {
      try {

        const response = await axios.put(process.env.NEXT_PUBLIC_MAIN_URL + '/updateadmininfo', user, {

          headers: {

            'Content-Type': 'application/json'

          },
          withCredentials: true
          


        });
        const responseFile = await axios.put(process.env.NEXT_PUBLIC_MAIN_URL + '/upload', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
      });

        console.log(response.data);

        alert("Admin Update Successful!");
        //router.push('/admin/admin_log');

      } catch (error) {

        console.error('Error Admin Signing Up:', error);

        alert("Admin Update Failed!");

      }

    }
  };




  return (
    <React.Fragment>
      <Meta title="Update Admin Info" keywords="fahad" description="Fahad" />
      <SessionCheck />
      <center className="">

        <h3 className="bg-slate-700 p-3 text-white">Update Profile</h3>
        <form onSubmit={handleSubmit} className="formcsstravelleradd text-black">

          <h1 className="mt-4 mb-4 font-semibold text-lg texts text-center">
            UPDATE ADMIN
          </h1>

          {/* <label>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="id" name="id"onChange={handleChange}  value={id} />
                </label><br></br><br></br> */}

          <label className="texts">Enter first name&nbsp;&nbsp;&nbsp;
            <input className="text-black text-xs mt-3 rounded-lg" type="text" id="fastname" name="fastname" onChange={handleChange} value={fastname} />
          </label><br></br>

          <label className="texts">Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="text-black text-xs mt-3 rounded-lg" type="text" id="lastname" name="lastname" onChange={handleChange} value={lastname} />
          </label><br></br>

          <label className="texts">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="text-black text-xs mt-3 rounded-lg" type="email" id="email" name="email" onChange={handleChange} value={email} />
          </label><br></br>

          <label className="texts">Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="text-black text-xs mt-3 rounded-lg" type="number" id="contact" name="contact" onChange={handleChange} value={contact} />
          </label><br></br>

          <label className="texts">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" className="text-xs mt-3 rounded-lg" id="password" name="password" onChange={handleChange} value={password} />
          </label><br></br>

          <label className="texts">Image
            <input className="text-black mt-3" type="file" name="filename" onChange={handleFileChange} value={filename} />
          </label><br></br>

          {error && <p className="text-red-700 absolute mt-3 left-0 right-0  mr-auto ">{error}</p>}
          <button className="bts text-center mt-14 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-5/6" type="submit">Update</button>
        </form>
        {/* <Link href="admin_profile">Admin Profile</Link><br></br><br></br>
        <Link href="/home">Home</Link> */}
      </center>

    </React.Fragment>
  );
}
export default UpdateAdmin;