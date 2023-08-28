import Link from "next/link";
import Meta from "../meta";
import React from "react";
import SessionCheck from "../component/sessioncheck";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const TourGuidList = () => {


  const [jsonData, setJsonData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      const respons = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL + '/alltourguid', { withCredentials: true });
      const jsonData = respons.data;
      setJsonData(jsonData);
      console.log(jsonData);
      //console.log(respons)
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <React.Fragment >
      <Meta title="Tourguid List" keywords="fahad" description="Fahad" />

      <SessionCheck />
      <div className="text-white">
        <h1 className="text-center mt-1  text-black p-4 text-2xl texts bg-slate-100">All Traveller Profile</h1>

        {jsonData !== null && (
          <div>
            {Array.isArray(jsonData) ? (
              <div>

                <p className="mt-6 ml-6" >All Tourguid List your under : </p>
                <ol>
                  {jsonData.map((item, index) => (
                    <li key={index}>

                      <Link className="w-40 ml-6 h-auto bg-slate-500 block text-center mt-6" href={"" + item.id}>Nmae : {item.fastname} {item.lastname}  <p className="text-red-600">More info</p></Link>

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
           <br></br> <Link className=" ml-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" href="/tourguid/add_tourguid">Add More Traveller</Link><br></br><br></br>
          </div>
        )}
      </div>

    </React.Fragment>
  );
}

export default TourGuidList