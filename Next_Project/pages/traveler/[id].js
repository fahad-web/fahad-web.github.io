import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Meta from "../meta";

//https://youtu.be/Un3gQmTik4o


const managerData = ({ data }) => {

  const [jsonData, setJsonData] = useState(null);

  const router = useRouter();
  const traveller = router.query.id;






  useEffect(() => {
    loadAllData();
  }, []);

  const deleteData = async () => {
    try {

      const response = await axios.delete(process.env.NEXT_PUBLIC_MAIN_URL + '/delete/traveler/' + traveller, { withCredentials: true });
      console.log(response);
      // window.location.reload();
      router.push("/traveler/traveler_list")

    } catch (error) {
      console.error(error);
    }
  }


  const loadAllData = async () => {
    try {
      const respons = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL + '/gettraveller/' + traveller);
      const jsonData = respons.data;
      setJsonData(jsonData)
      console.log(jsonData)
    } catch (error) {
      console.log(error);
    }
  }

  const printObject = () => {

    if (jsonData) {
      return (
        <React.Fragment>
          <Meta title="Traveller Profile" keywords={jsonData.email} description={jsonData.id} />
          <div className=" gf mt-8">

            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-end px-4 pt-4">


              </div>
              <div class="flex flex-col items-center pb-10">
                <Link className="text-black text-left bts" href="manager_all_data"> Back</Link>
                <h1 className="text-black p-2 text-2xl">Manager Profile</h1>
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/coxbazar.jpg" alt="Bonnie image" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{jsonData.fastname} {jsonData.lastname}</h5>

                <div className="cardcss">
                  <p>ID : {jsonData.id}</p>
                  <p>Email: {jsonData.email}</p>
                  <p>Phone: {jsonData.contact}</p>
                  <p>Admin Add: {jsonData.adminID}</p>
                </div>
                <div class="flex mt-4 space-x-3 md:mt-6">

                  <Link href="/traveler/update_traveller" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>

                  <button onClick={() => deleteData()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                </div>
              </div>
            </div>

            {/* <img src={process.env.NEXT_PUBLIC_MAIN_URL + '/getimage/' + jsonData.filename} /> */}

          </div>

        </React.Fragment>
      )
    } else {
      return <p>Loading...Data Scaning</p>;

    }

  }




  return (
    <React.Fragment>
      <div className="text-white">

        {printObject()}
      </div>
    </React.Fragment>
  )
}
export default managerData