import React, { useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CartContext } from '../contexts/CartContext';

const ContactUs = () => {
  const { mode } = useContext(CartContext);

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 28.7041, // Replace with your latitude
    lng: 77.1025, // Replace with your longitude
  };

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
        Contact Us
      </h1>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Contact Information Section */}
        <section className="text-center">
          <h2
            className={`text-3xl font-semibold mb-4 ${
              mode === 'light' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Get in Touch
          </h2>
          <p
            className={`text-xl ${
              mode === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            We would love to hear from you! Please fill out the form below or
            contact us using the following information:
          </p>
          <div className="mt-8">
            <p className="text-lg">
              <strong>Email:</strong> contact@yourcompany.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-lg">
              <strong>Address:</strong> 123 Your Street, Your City, Your Country
            </p>
          </div>
        </section>

        {/* Map Location Section */}
        <section className="mt-16">
          <h2
            className={`text-3xl font-semibold mb-8 ${
              mode === 'light' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Our Location
          </h2>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2
            className={`text-3xl font-semibold mb-4 ${
              mode === 'light' ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-lg">Name</label>
              <input
                type="text"
                className={`w-full p-3 rounded-lg ${
                  mode === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-100'
                }`}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Email</label>
              <input
                type="email"
                className={`w-full p-3 rounded-lg ${
                  mode === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-100'
                }`}
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Message</label>
              <textarea
                className={`w-full p-3 rounded-lg ${
                  mode === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-100'
                }`}
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-lg font-semibold ${
                mode === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'
              }`}
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
