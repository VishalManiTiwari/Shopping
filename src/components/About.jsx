// import React, { useContext } from 'react';
// import { CartContext } from '../contexts/CartContext';

// const About = () => {
//   const { mode } = useContext(CartContext);

//   return (
//     <div
//       className={`p-8 relative top-[4rem] md:top-[10rem] xl:top-[10rem] mb-[9rem] min-h-screen ${
//         mode === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'
//       }`}
//     >
//       <h1
//         className={`text-5xl font-extrabold mb-10 text-center ${
//           mode === 'light' ? 'text-gray-900' : 'text-gray-100'
//         }`}
//       >
//         About Us
//       </h1>

//       <div className="max-w-4xl mx-auto space-y-16">
//         {/* Introduction Section */}
//         <section className="text-center">
//           <p
//             className={`text-xl md:text-2xl ${
//               mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//             }`}
//           >
//             Welcome to [Your Company Name], where passion meets innovation. Our
//             goal is to transform ideas into reality through cutting-edge
//             technology and exceptional service. We are committed to empowering
//             our clients and making a positive impact on the world.
//           </p>
//         </section>

//         {/* Mission Section */}
//         <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
//           <div className="md:w-1/2">
//             <img
//               src="https://imgs.search.brave.com/r5ti3cD5Ge9oz3HdKbgG6tI-RXHyIqJbbveEoWpBqZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE0LzI0Lzc5/LzM2MF9GXzgxNDI0/Nzk3OF9qcTMyMDF1/OFhrTUJtdWR3QjBW/UDVDSFFzU1ZxVVdT/Vy5qcGc"
//               alt="Our Mission"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="md:w-1/2">
//             <h2
//               className={`text-3xl font-semibold mb-4 ${
//                 mode === 'light' ? 'text-gray-800' : 'text-gray-200'
//               }`}
//             >
//               Our Mission
//             </h2>
//             <p
//               className={`text-lg ${
//                 mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//               }`}
//             >
//               Our mission is to deliver high-quality solutions that empower
//               individuals and organizations to achieve their goals. We strive
//               for excellence in every project and are committed to innovation
//               and customer satisfaction.
//             </p>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section>
//           <h2
//             className={`text-3xl font-semibold mb-8 ${
//               mode === 'light' ? 'text-gray-800' : 'text-gray-200'
//             }`}
//           >
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
//               <img
//                 src="https://imgs.search.brave.com/g_ngm9hiLxCiN917SyVCF3QtP5zesyMTGeXQR6sB20s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI4/NjIzODA4L3Bob3Rv/L25ldy15b3JrLW55/LWFjdG9yLWVtaWxl/LWhpcnNjaC12aXNp/dHMtYnVpbGQtc2Vy/aWVzLXRvLWRpc2N1/c3MtdGhlLWF1dG9w/c3ktb2YtamFuZS1k/b2UtYXQtYW9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0z/UjM2STZwVDlIb19G/MWJHQXpfMU1Gai1N/aE04X3ZqZTl2WmxN/RWRQeUNRPQ"
//                 alt="Jane Doe"
//                 className="rounded-full mb-4 w-24 h-24"
//               />
//               <h3
//                 className={`text-xl font-semibold mb-2 ${
//                   mode === 'light' ? 'text-gray-900' : 'text-gray-100'
//                 }`}
//               >
//                 Jane Doe
//               </h3>
//               <p className={`text-gray-600 dark:text-gray-400`}>
//                 CEO & Founder
//               </p>
//               <p
//                 className={`mt-2 text-center ${
//                   mode === 'light' ? 'text-gray-700' : 'text-gray-300'
//                 }`}
//               >
//                 Jane leads the company with over 15 years of experience in the
//                 industry. Her vision and leadership drive our success.
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
//               <img
//                 src="https://imgs.search.brave.com/ocfJswfgX3ASMmqnyB1TEuh9SVjcrwyy1Ct8Y_cNWG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmdy/LWFzc2V0cy5jb20v/aW1hZ2VzL1MvY29t/cHJlc3NlZC5waG90/by5nb29kcmVhZHMu/Y29tL3VzZXJzLzE0/MTY3MDc3MTlpLzI0/NTM4Ny5fVVgyMDBf/Q1IwLDAsMjAwLDIw/MF8uanBn"
//                 alt="John Smith"
//                 className="rounded-full mb-4 w-24 h-24"
//               />
//               <h3
//                 className={`text-xl font-semibold mb-2 ${
//                   mode === 'light' ? 'text-gray-900' : 'text-gray-100'
//                 }`}
//               >
//                 John Smith
//               </h3>
//               <p className={`text-gray-600 dark:text-gray-400`}>
//                 CTO & Lead Developer
//               </p>
//               <p
//                 className={`mt-2 text-center ${
//                   mode === 'light' ? 'text-gray-700' : 'text-gray-300'
//                 }`}
//               >
//                 John oversees our technical projects and ensures that we stay at
//                 the forefront of technology and innovation.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section>
//           <h2
//             className={`text-3xl font-semibold mb-4 ${
//               mode === 'light' ? 'text-gray-800' : 'text-gray-200'
//             }`}
//           >
//             Our Core Values
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="flex flex-col space-y-4">
//               <p
//                 className={`text-lg ${
//                   mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//                 }`}
//               >
//                 Integrity: We uphold the highest standards of integrity in all
//                 of our actions.
//               </p>
//               <p
//                 className={`text-lg ${
//                   mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//                 }`}
//               >
//                 Excellence: We strive for excellence and continuous improvement
//                 in everything we do.
//               </p>
//             </div>

//             <div className="flex flex-col space-y-4">
//               <p
//                 className={`text-lg ${
//                   mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//                 }`}
//               >
//                 Innovation: We embrace innovation and creativity to solve
//                 problems and add value.
//               </p>
//               <p
//                 className={`text-lg ${
//                   mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//                 }`}
//               >
//                 Customer Focus: We are committed to understanding and meeting
//                 the needs of our customers.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Vision Section */}
//         <section className="text-center">
//           <h2
//             className={`text-3xl font-semibold mb-4 ${
//               mode === 'light' ? 'text-gray-800' : 'text-gray-200'
//             }`}
//           >
//             Our Vision
//           </h2>
//           <p
//             className={`text-lg ${
//               mode === 'light' ? 'text-gray-700' : 'text-gray-400'
//             }`}
//           >
//             To be a global leader in our industry, known for our unwavering
//             commitment to quality, innovation, and customer satisfaction. We
//             envision a future where our solutions make a significant impact on
//             the world.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const About = () => {
  const { mode } = useContext(CartContext);

  return (
    <div
      className={`p-8 relative top-[4rem] md:top-[10rem] xl:top-[10rem] mb-[9rem] min-h-screen ${
        mode === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'
      }`}
    >
      <h1
        className={`text-5xl font-extrabold mb-10 text-center ${
          mode === 'light' ? 'text-gray-900' : 'text-gray-100'
        }`}
      >
        About Us
      </h1>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Introduction Section */}
        <section className="text-center">
          <p
            className={`text-xl md:text-2xl ${
              mode === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            Welcome to [Your Company Name], where passion meets innovation. Our
            goal is to transform ideas into reality through cutting-edge
            technology and exceptional service. We are committed to empowering
            our clients and making a positive impact on the world.
          </p>
        </section>

        {/* Mission Section */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="https://imgs.search.brave.com/r5ti3cD5Ge9oz3HdKbgG6tI-RXHyIqJbbveEoWpBqZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE0LzI0Lzc5/LzM2MF9GXzgxNDI0/Nzk3OF9qcTMyMDF1/OFhrTUJtdWR3QjBW/UDVDSFFzU1ZxVVdT/Vy5qcGc"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-semibold mb-4 ${
                mode === 'light' ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              Our Mission
            </h2>
            <p
              className={`text-lg ${
                mode === 'light' ? 'text-gray-700' : 'text-gray-400'
              }`}
            >
              Our mission is to deliver high-quality solutions that empower
              individuals and organizations to achieve their goals. We strive
              for excellence in every project and are committed to innovation
              and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2
            className={`text-3xl font-semibold mb-8 ${
              mode === 'light' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center ${
                mode === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-100'
              }`}
            >
              <img
                src="https://imgs.search.brave.com/g_ngm9hiLxCiN917SyVCF3QtP5zesyMTGeXQR6sB20s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI4/NjIzODA4L3Bob3Rv/L25ldy15b3JrLW55/LWFjdG9yLWVtaWxl/LWhpcnNjaC12aXNp/dHMtYnVpbGQtc2Vy/aWVzLXRvLWRpc2N1/c3MtdGhlLWF1dG9w/c3ktb2YtamFuZS1k/b2UtYXQtYW9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0z/UjM2STZwVDlIb19G/MWJHQXpfMU1Gai1N/aE04X3ZqZTl2WmxN/RWRQeUNRPQ"
                alt="Jane Doe"
                className="rounded-full mb-4 w-24 h-24"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className={`text-gray-600 dark:text-gray-400`}>CEO & Founder</p>
              <p className={`mt-2 text-center`}>
                Jane leads the company with over 15 years of experience in the
                industry. Her vision and leadership drive our success.
              </p>
            </div>

            <div
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center ${
                mode === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-100'
              }`}
            >
              <img
                src="https://imgs.search.brave.com/ocfJswfgX3ASMmqnyB1TEuh9SVjcrwyy1Ct8Y_cNWG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmdy/LWFzc2V0cy5jb20v/aW1hZ2VzL1MvY29t/cHJlc3NlZC5waG90/by5nb29kcmVhZHMu/Y29tL3VzZXJzLzE0/MTY3MDc3MTlpLzI0/NTM4Ny5fVVgyMDBf/Q1IwLDAsMjAwLDIw/MF8uanBn"
                alt="John Smith"
                className="rounded-full mb-4 w-24 h-24"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className={`text-gray-600 dark:text-gray-400`}>CTO & Lead Developer</p>
              <p className={`mt-2 text-center`}>
                John oversees our technical projects and ensures that we stay at
                the forefront of technology and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2
            className={`text-3xl font-semibold mb-4 ${
              mode === 'light' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <p
                className={`text-lg ${
                  mode === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}
              >
                Integrity: We uphold the highest standards of integrity in all
                of our actions.
              </p>
              <p
                className={`text-lg ${
                  mode === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}
              >
                Excellence: We strive for excellence and continuous improvement
                in everything we do.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <p
                className={`text-lg ${
                  mode === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}
              >
                Innovation: We embrace innovation and creativity to solve
                problems and add value.
              </p>
              <p
                className={`text-lg ${
                  mode === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}
              >
                Customer Focus: We are committed to understanding and meeting
                the needs of our customers.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="text-center">
          <h2
            className={`text-3xl font-semibold mb-4 ${
              mode === 'light' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Our Vision
          </h2>
          <p
            className={`text-xl ${
              mode === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            To be a global leader in providing innovative and sustainable
            solutions that empower our clients and make a positive impact on
            society.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
