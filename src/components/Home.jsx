import React, {useState} from 'react';
import Hero from './Hero';
import MainSection from './MainSection';
import Header from './Header';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (

  <div>
    <div>
     <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     </div>
  <div className='relative top-[3rem]'>
      <Hero  />
  </div>
  <div className='relative top-[3rem]'>
        <MainSection
         searchTerm={searchTerm} />
  </div>
  </div>
  );
};

export default Home;
