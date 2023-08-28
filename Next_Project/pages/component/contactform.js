import React, { useState } from 'react';

import axios from 'axios';

import SessionCheck from './sessioncheck';

import Meta from '../meta';



const SendMailForm = () => {

   const [mail, setMail] = useState({

      receiver: "",

      subject: "",

      message: "",

   });


   const handleChange = (e) => {

      setMail({ ...mail, [e.target.name]: e.target.value });

   };



   const handleSubmit = async (e) => {

      e.preventDefault();

      console.log(mail);



      try {

         const response = await axios.post(process.env.NEXT_PUBLIC_MAIN_URL + '/sent/manager', mail, {

            headers: {

               'Content-Type': 'application/json'

            },

            withCredentials: true

         });



         console.log(response.data);

         alert("Mail Sent Manager");

      } catch (error) {

         console.error('Error Traveller Mail:', error);

         alert("Mail Sent to Traveller Failed!");

      }

   };



   return (

      <>

         <SessionCheck />
         <Meta title="Contact Page" keywords="fahad" description="Fahad" />
         <div class="flex flex-wrap justify-center">

            <div class="pl-4 pr-4 formcssmail11">



               <h3 class="text-center mb-2 text-2xl mt-8 font-bold text-white">Mail </h3>

               <form class="mt-4" onSubmit={handleSubmit}>

                  <div class="mb-6">

                     <label for="receiver" class="block text-start mb-2 text-sm font-medium text-white">To</label>

                     <input type="text" placeholder='Enter sent mail' id="receiver" name="receiver" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />

                  </div>

                  <div class="mb-6">

                     <label for="subject" class="block text-start mb-2 text-sm font-medium text-white">Subject</label>

                     <input type="text" id="subject" placeholder='Wite your Subject' name="subject" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />

                  </div>

                  <div class="mb-6">

                     <label for="message" class="block text-start mb-2 text-sm font-medium text-white">Message</label>

                     <textarea rows="4" id="message" placeholder='Wite your Message' name="message" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />

                  </div>



                  <center>

                     <button type="submit" name="send_mail" class="text-white bts bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND</button>

                  </center>

               </form>

            </div>

         </div>

      </>

   )

};



export default SendMailForm;