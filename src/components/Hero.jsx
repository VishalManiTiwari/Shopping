import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative xl:mt-[8rem] md:mt-[8rem] sm:mt-[4rem] mt-[3rem] mx-4 md:mx-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative"
      >
        <motion.img
          src='https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
          alt="Hero Banner"
          className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl
             font-extrabold text-red-500"
          >
            Discover Amazing Deals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl 
             text-red-900 mt-2 xl:flex md:flex 
             hidden"
          >
            Shop the latest products at unbeatable prices.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 px-6 py-3 bg-yellow-500
             text-black font-semibold rounded-lg 
             shadow-lg hover:bg-yellow-400 
             transition-colors duration-300"
          >
            Shop Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
