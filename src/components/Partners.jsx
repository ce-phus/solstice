import React from 'react'
import logo from "/sologo.png"
import { partner1, partner2, partner3, partner4, barracuda, microsoft, watchguard, Terramind, partner } from '../assets'
import AOS from "aos";
import "aos/dist/aos.css";

// const BannerData = {
//   discount: "30% OFF",
//   title: "Fine Smile",
//   date: "10 Jan to 28 Jan",
//   image: iphone,
//   title2: "Air Solo Bass",
//   title3: "Winter Sale",
//   title4:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#f42c37",
// };

const Partners = () => {
  React.useEffect(() => {
    AOS.init({
      duration :800,
      easing: 'ease-in-sine',
      delay:100,
      offset: 100
    })
    AOS.refresh()
  }, [])

  return (
    <>
        <div className='flex justify-center'>
        <div className='absolute z-[3] left-1/2  w-[50%] h-[50%] rounded-full white__gradient'/>
            
        </div>
        <div className='py-8 mt-24 hidden md:block '>
            <div className=''>
                <div className='grid grid-cols-5 gap-5 place-items-center opacity-50  pb-4'>
                    <img src={partner1}
                    data-aos="slide-right"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    alt='partner1'
                    className='w-[200px] h-[70px] rounded-lg mt-1'/>

                    <img src={partner2}
                    data-aos="slide-right"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    alt='partner1'
                    className='w-[250px] rounded-lg'/>

                    <img src={partner3}
                    alt='partner1'
                    data-aos="slide-right"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    className='w-[250px] rounded-lg'/>

                    
                    <img src={microsoft}
                    alt='partner1'
                    data-aos="slide-right"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    className='w-[250px] rounded h-[70px]'/>

                    <img src={watchguard}
                    alt='partner1'
                    data-aos="slide-left"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    className='w-[250px] rounded h-[70px]'
                    />

                    <img src={Terramind}
                    alt='partner1'
                    data-aos="slide-left"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    className='w-[250px] h-[70px] rounded'
                    />

                    <img src={partner}
                    alt='partner1'
                    data-aos="slide-left"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    className='w-[250px] h-full rounded'/>

                    <img src={barracuda}
                    alt='partner1'
                    data-aos="slide-left"
                    data-aos-duration="900"
                    // data-aos-once="true"
                    className='w-[250px] h-full rounded text-center'/>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Partners