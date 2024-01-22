// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
// import Main1 from '../asset/main1.jpeg';

// const LandingPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     industry: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   const { firstName, lastName, email, industry } = formData;

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-indigo-400">
//       <nav className="flex p-8 items-center justify-between w-full">
//         <Link to="/" className="text-lg ml-4 text-black font-bold">BLOWP INC</Link>
//         <div className="flex space-x-4">
//           <a href="#" className="text-black">
//             <FaFacebook />
//           </a>
//           <a href="#" className="text-black">
//             <FaTwitter />
//           </a>
//           <a href="#" className="text-black">
//             <FaEnvelope />
//           </a>
//           <a href="#" className="text-black">
//             <FaInstagram />
//           </a>
//         </div>
//       </nav>
//       <hr className="border-t-1 border-[#4A5476] w-11/12 mx-auto" />

//       <div className="flex mt-2 justify-around p-6 flex-grow">
//         <div className="text-left md:w-1/2 p-4">
//           <h1 className="text-4xl text-[#2E3D2F] font-bold mb-2">
//             Not rewarded enough <br />for your creativity?
//           </h1>
//           <p className="text-white mb-4 text-3xl">
//             Join the Waitlist
//           </p>
//           <p className="text-[#2E3D2F] text-lg mb-4">
//             Sign up now and be amongst the first to take advantage of the biggest creator marketplace in Africa.
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-4 mt-2">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name:</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={firstName}
//                   onChange={handleChange}
//                   required
//                   className="input-field rounded-md p-2 mt-2 w-full"
//                   placeholder="John"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name:</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={lastName}
//                   onChange={handleChange}
//                   required
//                   className="input-field rounded-md p-2 mt-2 w-full"
//                   placeholder="Doe"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Industry:</label>
//               <input
//                 type="text"
//                 name="industry"
//                 value={industry}
//                 onChange={handleChange}
//                 required
//                 className="input-field rounded-md p-2 mt-2 w-full"
//                 placeholder="Niche"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 required
//                 className="input-field rounded-md p-2 mt-2 w-full"
//                 placeholder="john.doe@example.com"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
//             >
//               Join Waitlist
//             </button>
//           </form>
//         </div>
//         <div className="md:w-1/2 mt-9 p-4 h-90">
//           <img src={Main1} alt="creative person" className="w-full h-auto object-cover" />
//         </div>
//       </div>

//       {/* ===========Footer========= */}
//       <footer className="bg-black text-white p-4 w-full">
//         <small>Terms & Support</small>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, useAnimation } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
// import Main1 from '../asset/main1.jpeg';

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     industry: '',
//   });

//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0 });
//   }, [controls]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);

//     // Navigate to the ThankYouPage
//     navigate('/thankyou');
//   };

//   const { firstName, lastName, email, industry } = formData;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={controls}
//       className="flex flex-col items-center min-h-screen bg-indigo-400"
//     >
//       <motion.nav
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className='flex p-8 items-center justify-between w-full'
//       >
//         <Link to='/' className='text-xl  ml-4 text-black font-bold"'>BLOWP INC</Link>
//         <div className="flex space-x-4">
//           <a href="#" className="text-black">
//             <FaFacebook />
//           </a>
//           <a href="#" className="text-black">
//             <FaTwitter />
//           </a>
//           <a href="#" className="text-black">
//             <FaEnvelope />
//           </a>
//           <a href="#" className="text-black">
//             <FaInstagram />
//           </a>
//         </div>
//       </motion.nav>
//       <hr className="border-t-1 border-[#4A5476] w-11/12 mx-auto" />

//       <div className="flex mt-2 justify-around p-6 flex-grow">
//         <div className="text-left md:w-1/2 p-4">
//           <h1 className="text-4xl text-[#2E3D2F] font-bold mb-2">
//             Not rewarded enough <br />for your creativity?
//           </h1>
//           <p className="text-white mb-4 text-3xl">Join the Waitlist</p>
//           <p className="text-[#2E3D2F] text-lg mb-4">
//             Sign up now and be amongst the first to take advantage of the biggest creator marketplace in Africa.
//           </p>
//           <motion.form
//             initial={{ y: '100%' }}
//             animate={{ y: 0 }}
//             transition={{ duration: 1 }}
//             onSubmit={handleSubmit}
//             className=" space-y-4 mt-2 md:w-1/2 p-4"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name:</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={firstName}
//                   onChange={handleChange}
//                   required
//                   className="input-field rounded-md p-2 mt-2 w-full"
//                   placeholder="John"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name:</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={lastName}
//                   onChange={handleChange}
//                   required
//                   className="input-field rounded-md p-2 mt-2 w-full"
//                   placeholder="Doe"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Industry:</label>
//               <input
//                 type="text"
//                 name="industry"
//                 value={industry}
//                 onChange={handleChange}
//                 required
//                 className="input-field rounded-md p-2 mt-2 w-full"
//                 placeholder="Niche"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 required
//                 className="input-field rounded-md p-2 mt-2 w-full"
//                 placeholder="john.doe@example.com"
//               />
//             </div>
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
//             >
//               Join Waitlist
//             </motion.button>
//             {/* </form> */}
//           </motion.form>
//         </div>
//         <motion.div
//           initial={{ y: '-100%' }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1 }}
//           className='md:w-1/2 mt-9 p-4 h-90'
//         >
//           <img src={Main1} alt="creative person" className='w-full h-auto object-cover' />
//         </motion.div>
//         {/* <div className="md:w-1/2 mt-9 p-4 h-90">
//           <img src={Main1} alt="creative person" className="w-full h-auto object-cover" />
//         </div> */}
//       </div>

//       {/* ===========Footer========= */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-black text-white p-4 w-full"
//       >
//         <small>Terms & Support</small>
//       </motion.footer>
//     </motion.div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Main1 from '../asset/main1.jpeg';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    industry: '',
  });

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);

    // Navigate to the ThankYouPage
    navigate('/thankyou');
  };

  const { firstName, lastName, email, industry } = formData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center min-h-screen bg-indigo-400"
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex p-8 items-center justify-between w-full'
      >
        <Link to='/' className='text-xl ml-4 text-black font-bold"'>BLOWP INC</Link>
        <div className="flex space-x-4">
          <a href="#" className="text-black">
            <FaFacebook />
          </a>
          <a href="#" className="text-black">
            <FaTwitter />
          </a>
          <a href="#" className="text-black">
            <FaEnvelope />
          </a>
          <a href="#" className="text-black">
            <FaInstagram />
          </a>
        </div>
      </motion.nav>
      <hr className="border-t-1 border-[#4A5476] w-11/12 mx-auto" />

      <div className="flex flex-col-reverse md:flex-row justify-around p-6 flex-grow">
        {/* <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className='md:w-1/2 mt-9 p-4 h-90'
        >
          <img src={Main1} alt="creative person" className='w-full h-auto object-cover' />
        </motion.div> */}
        
        <div className="text-left md:w-1/2 p-4">
          <h1 className="text-4xl text-[#2E3D2F] font-bold mb-2">
            Not rewarded enough <br />for your creativity?
          </h1>
          <p className="text-white mb-4 text-3xl">Join the Waitlist</p>
          <p className="text-[#2E3D2F] text-lg mb-4">
            Sign up now and be amongst the first to take advantage of the biggest creator marketplace in Africa.
          </p>
          <motion.form
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className=" space-y-4 mt-2 md:w-1/2 p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  required
                  className="input-field rounded-md p-2 mt-2 w-full"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                  className="input-field rounded-md p-2 mt-2 w-full"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Industry:</label>
              <input
                type="text"
                name="industry"
                value={industry}
                onChange={handleChange}
                required
                className="input-field rounded-md p-2 mt-2 w-full"
                placeholder="Niche"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="input-field rounded-md p-2 mt-2 w-full"
                placeholder="john.doe@example.com"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
            >
              Join Waitlist
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className='md:w-1/2 mt-9 p-4 h-90'
        >
          <img src={Main1} alt="creative person" className='w-full h-auto object-cover' />
        </motion.div>
        
      </div>

      {/* ===========Footer========= */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white p-4 w-full"
      >
        <small>Terms & Support</small>
      </motion.footer>
    </motion.div>
  );
};

export default LandingPage;
