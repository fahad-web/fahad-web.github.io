import Link from "next/link";
import Meta from "../meta";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import SessionCheck from "../component/sessioncheck";

const UpdateTourguid = () => {

    const [error, setError] = useState('');
    const router = useRouter();

    const [user, setUser] = useState({
        fastname: "",
        lastname: "",
        email: "",
        contact: Number,
        password: "",
        photoFileName: "",
        id: Number,
    })
    const { fastname, lastname, email, contact, password, photoFileName, id } = user;

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
        user.adminID = parseInt(user.adminID);
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

                const response = await axios.put(process.env.NEXT_PUBLIC_MAIN_URL + '/updatetourguidinfo', user, {

                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true

                });

                console.log(response.data);

                alert("Tourguid Update Successful!");
                //router.push('/admin/admin_log');

            } catch (error) {

                console.error('Error Admin Signing Up:', error);

                alert("Tourguid Update Failed!");

            }

        }
    };


    return (
        <>
            <Meta title="Update Tourguid" keywords="fahad" description="Fahad" />
            <SessionCheck />
            <form className="text-black formcsstravelleradd" onSubmit={handleSubmit}>
                <h1 className="mt-5 mb-5 font-semibold text-lg texts">
                    Update Tourguid
                </h1>

                <label className="texts">ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="number" className="text-xs rounded-lg" name="id" id="number" onChange={handleChange} value={id} />
                </label><br></br>

                <label className="texts">
                    Fast Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="text-black rounded-lg mt-2 text-xs" type="text" id="fastname" name="fastname" onChange={handleChange} value={fastname} />
                </label><br></br>

                <label className="texts ">
                    last Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="text-black rounded-lg mt-2 text-xs" type="text" id="lastname" name="lastname" onChange={handleChange} value={lastname} />
                </label><br></br>

                <label className="texts">
                    Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="text-black mt-2 text-xs rounded-lg" type="text" id="email" name="email" onChange={handleChange} value={email} />
                </label><br></br>

                <label className="texts">
                    Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="text-black mt-2 text-xs rounded-lg" type="number" id="contact" name="contact" onChange={handleChange} value={contact} />
                </label><br></br>

                <label className="texts">
                    Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="text-black mt-2 text-xs rounded-lg" type="text" id="password" name="password" onChange={handleChange} value={password} />
                </label><br></br>

                <label className="texts">Image
                    <input className="mt-2" type="file" name="photoFileName" onChange={handleChange} value={photoFileName} />
                </label><br></br>

                {error && <p className="text-red-700 absolute mt-3 left-0 right-0  mr-auto ">{error}</p>}
                <button type="submit" className="bts text-center mt-12 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-5/6">Submit</button>
            </form>
            {/* <Link href="manager_all_data">Manager List</Link><br></br><br></br><br></br>
            <Link href="/home">Home</Link> */}

        </>
    );
}

export default UpdateTourguid;