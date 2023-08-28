import Link from "next/link";
import Meta from "../meta";
import axios from "axios";
import { useState, useEffect } from "react";
import SessionCheck from "../component/sessioncheck";
import { useRouter } from "next/router";

const ManagerAllData = ({ data }) => {

  const [jsonData, setJsonData] = useState([]);
  const router = useRouter();

  //  const [email, setEmail] = useState('')

  useEffect(() => {
    loadAllData();
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
  //   {
  //       const session = sessionStorage.getItem('email');
  //       if (session) {
  //         setEmail(sessionStorage.getItem('email'));

  //       }         
  //   }

  //   }, []);

  // const deleteData = async () => {
  //   try {
  //     const managerId = window.prompt("Enter Manager ID :");
  //     const response = await axios.delete(process.env.NEXT_PUBLIC_MAIN_URL+'/delete/manager/'+managerId);
  //     console.log(response);
  //   } catch (error) {
  //   console.error(error);
  //   }
  // }

  const loadAllData = async () => {
    try {
      const respons = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL + '/allmanager', { withCredentials: true });
      const jsonData = respons.data;
      setJsonData(jsonData);
      console.log(jsonData);
      //console.log(respons)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="text-white">
      <SessionCheck />

      <Meta title="Manager List" keywords="fahad" description="Fahad" />


      <h1 className="text-center mt-1  text-black p-4 text-2xl texts bg-slate-100">All Manager Profile</h1>

      {jsonData !== null && (
        <div>
          {Array.isArray(jsonData) ? (
            <div>

              <p className="mt-6 ml-6" >All Manager List your under : </p>
              <ol>
                {jsonData.map((item, index) => (
                  <li key={index}>

                    <Link className="w-48 ml-6 h-auto bg-slate-500 block text-center mt-6" href={"" + item.id}>Nmae : {item.fastname} {item.lastname}  <p className="text-red-600">More info</p></Link>

                    <br></br>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div>
              <p>Response is an object:</p>
              <p>{jsonData}</p>
            </div>
          )}
          <Link className=" ml-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" href="add_manager">Add More Manager</Link><br></br><br></br>
        </div>
      )}


    </div>
  )
}

export default ManagerAllData;