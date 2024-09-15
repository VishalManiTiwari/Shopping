import React,{useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const SliderComponent = () => {
  const { addToCart, mode } = useContext(CartContext);
  const data = [
    {
      name: 'Men Clothing',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/h/o/l-st-mens-staylist-chex-strecheble-shirt-sti-original-imahffmergjsfjdh.jpeg?q=70'
    },
    {
      name: 'Jewelry',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/g/x/3/cultured-na-2-tm237-lucentarts-jewellery-original-imah2qhhpqy8nrny.jpeg?q=70'
    },
    {
      name: 'Electronics',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/c/q/h/aqua-punch-kinsco-original-imaghhyvb9fkk3pq.jpeg?q=70'
    },
    {
      name: 'Women Clothing',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/8/9/p/s-1-no-fw21ak063jkpl-and-original-imaghyz3q6zsygrz.jpeg?q=70'
    },
    {
      name: 'T-shirts',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/b/4/s-xytsrt37-xyxx-original-imah222zhuypwxtf.jpeg?q=70'
    },
    {
      name: 'Fashion',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/o/6/-original-imagy3k8gwz4zjvu.jpeg?q=70'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto mt-0 px-4">
      <div className='text-center'>
      <h1 
       className={`text-4xl text-center font-bold 
        mb-12 w-fit mx-auto p-3 rounded-sm px-10 relative
        capitalize shadow-lg ${mode === 'light' ? 
        'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 
        'bg-gray-800 text-violet-300 mt-3 shadow-yellow-500'}`}
      >
        Categories
      </h1>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-2"
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg text-center">
              <p className="text-lg font-semibold">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
