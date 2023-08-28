import { Forum, Linden_Hill } from "next/font/google";
import Link from "next/link";
import Meta from "../meta";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import SessionCheck from "../component/sessioncheck";


const UpdateManager = () => {

  const [error, setError] = useState('');
  const router = useRouter();

  const [user, setUser] = useState({
    id: Number,
    fastname: "",
    lastname: "",
    email: "",
    contact: Number,
    password: ""
  });


  const { fastname, lastname, email, contact, password, id } = user;


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    user.id = parseInt(user.id);
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

        const response = await axios.put(process.env.NEXT_PUBLIC_MAIN_URL + '/updatemanagerinfo', user, {

          headers: { 'Content-Type': 'application/json' },
          withCredentials: true

        });

        console.log(response.data);
        alert("manager Update Successful!");
        //router.push('/admin/admin_log');

      } catch (error) {

        console.error('Error Admin Signing Up:', error);

        alert("manager Update Failed!");

      }

    }
  };


  return (
    <>
      <Meta title="Update Manager" keywords="fahad" description="Fahad" />
      <SessionCheck />
      <form className="text-black formcssmanageradd22" onSubmit={handleSubmit}>
        <h1 className="mt-4 mb-4 font-semibold text-lg texts">
          UPDATE MANAGER
        </h1>
        <label>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="mt-2 text-xs rounded-lg " type="number" id="number" name="id" onChange={handleChange} value={id} />
        </label><br></br>

        <label>Enter first name&nbsp;&nbsp;&nbsp;
          <input className="mt-2 text-xs rounded-lg" type="text" id="fastname" name="fastname" onChange={handleChange} value={fastname} />
        </label><br></br>

        <label>Enter last name&nbsp;&nbsp;&nbsp;
          <input className="mt-2 text-xs rounded-lg" type="text" id="lastname" name="lastname" onChange={handleChange} value={lastname} />
        </label><br></br>

        <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="mt-2 text-xs rounded-lg" type="email" id="email" name="email" onChange={handleChange} value={email} />
        </label><br></br>

        <label>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="mt-2 text-xs rounded-lg" type="number" id="contact" name="contact" onChange={handleChange} value={contact} />
        </label><br></br>

        <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="mt-2 text-xs rounded-lg" type="text" id="password" name="password" onChange={handleChange} value={password} />
        </label><br></br>

        {error && <p className="text-red-700 absolute mt-3 left-0 right-0  mr-auto ">{error}</p>}
        <button className="bts text-center mt-14 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-5/6" type="submit">Submit</button>
      </form>
      {/* <Link href="manager_all_data">Manager List</Link><br></br><br></br><br></br>
      <Link href="/home">Home</Link> */}

    </>
  );
}

export default UpdateManager;