"use client"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper } from 'swiper';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

// init Swiper:

export default function Projects() {
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  })
  return (
    <main className="flex flex-col max-w-screen-xl w-full mx-auto justify-center items-center p-6">
      <section className='w-screen p-6'>

        <SwiperReact
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={
            { rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }
          }
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        >
          <SwiperSlide>
            <div>

              <div className="w-full md:w-[454px] h-[654px] bg-black/60 p-4 flex flex-col justify-center items-center shadow-2xl shadow-black">
                <figure>
                  <Image width={454} height={654} src="/images/calc-dm.jpg" alt="" className="w-full max-w-[454px] h-[654px] object-contain -z-10" />
                </figure>
              </div>
              <div className="flex flex-row justify-between w-full max-w-[454px] gap-1">
                <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all w-full'>
                  <button className="bg-[#f7ff1a] flex w-full justify-center items-center text-black text-2xl p-4 rounded-xl uppercase">
                    Detalhes
                  </button>
                </div>
                <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all w-full '>
                  <button className="bg-black/25 w-full flex mt-auto justify-center items-center text-white text-2xl p-4 rounded-xl uppercase hover:text-black hover:bg-white transition-all">
                    Acessar
                  </button>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div>

              <div className="w-full md:w-[454px] h-[654px] bg-black/60 p-4 flex flex-col justify-center items-center shadow-2xl shadow-black">
                <figure>
                  <Image width={454} height={654} src="/images/calc-dm.jpg" alt="" className="w-full max-w-[454px] h-[654px] object-contain -z-10" />
                </figure>
              </div>
              <div className="flex flex-row justify-between w-full max-w-[454px] gap-1">
                <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all w-full'>
                  <button className="bg-[#f7ff1a] flex w-full justify-center items-center text-black text-2xl p-4 rounded-xl uppercase">
                    Detalhes
                  </button>
                </div>
                <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all w-full '>
                  <button className="bg-black/25 w-full flex mt-auto justify-center items-center text-white text-2xl p-4 rounded-xl uppercase hover:text-black hover:bg-white transition-all">
                    Acessar
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <ArrowRight />
            </div>
          </div>
        </SwiperReact>
      </section>

    </main >
  )
}