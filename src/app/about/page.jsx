'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion"
import dynamic from 'next/dynamic'
import ExperienceListItemLeft from '../components/ExperienceListItemLeft';
import Image from 'next/image';
const TecIcons = dynamic(() => import('../components/TecIcons'), {
  ssr: false,
});


function AboutPage() {

  const skillRef = useRef();
  const experienceRef = useRef();
  const bioRef = useRef();
  const experienceH2Ref = useRef();
  const isExperienceH2Ref = useInView(experienceH2Ref, { threshold: 0.1 });
  const isBioRefInView = useInView(bioRef, { threshold: 0.1 });
  const isSkillRefInView = useInView(skillRef, { threshold: 0.1 });
  const isExperienceRefInView = useInView(experienceRef, { threshold: 0.1 });

  const scrollToMiddle = () => {
      window.scrollTo({
        top: window.innerHeight / 2,
        behavior: 'smooth',
      });  
  };

  const scrollToEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });  
};

  return (
    <motion.div
    initial={{ y: "-200vh" }} 
    animate={{ y: "0%" }} 
    transition={{ duration: 1 }}
    className="h-full">
      {/* container */}
      <div className='dark:bg-slate-600 bg-blue-200 h-full overflow-y-scroll lg:flex'>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:1/2 mx-auto'>
          {/* Biografia container*/}
          <motion.div
            initial={{ x: "-300px" }} 
            animate={isBioRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
            ref={bioRef} 
            className='flex flex-col gap-12 justify-center'>
            <h1 className="font-bold tracking-wide text-2xl dark:text-white duration-300">BIOGRAPHY</h1>
            <p className="text-lg dark:text-white tracking-wide duration-300">
              I am passionate about programming. I love keeping up with the latest trends and experimenting with new tools. It's my main hobby, but I'm also a big fan of video games, especially Super Smash Bros Ultimate.            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic dark:text-white duration-300">
              “As we acquire knowledge, things do not become more comprehensible, but more mysterious.”            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg className='dark:invert duration-300' width="202" height="19" viewBox="0 0 202 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.82955 18H0.613636L7.02273 0.545454H9.20455L15.6136 18H13.3977L8.18182 3.30682H8.04545L2.82955 18ZM3.64773 11.1818H12.5795V13.0568H3.64773V11.1818ZM20.071 0.545454V18H18.0597V0.545454H20.071ZM24.0277 18V0.545454H26.0391V6.98864H26.2095C26.3572 6.76136 26.5618 6.47159 26.8232 6.11932C27.0902 5.76136 27.4709 5.44318 27.9652 5.16477C28.4652 4.88068 29.1413 4.73864 29.9936 4.73864C31.0959 4.73864 32.0675 5.0142 32.9084 5.56534C33.7493 6.11648 34.4055 6.89773 34.8771 7.90909C35.3487 8.92045 35.5845 10.1136 35.5845 11.4886C35.5845 12.875 35.3487 14.0767 34.8771 15.0938C34.4055 16.1051 33.7521 16.8892 32.9169 17.446C32.0817 17.9972 31.1186 18.2727 30.0277 18.2727C29.1868 18.2727 28.5135 18.1335 28.0078 17.8551C27.5021 17.571 27.1129 17.25 26.8402 16.892C26.5675 16.5284 26.3572 16.2273 26.2095 15.9886H25.9709V18H24.0277ZM26.005 11.4545C26.005 12.4432 26.1499 13.3153 26.4396 14.071C26.7294 14.821 27.1527 15.4091 27.7095 15.8352C28.2663 16.2557 28.9482 16.4659 29.755 16.4659C30.5959 16.4659 31.2976 16.2443 31.8601 15.8011C32.4283 15.3523 32.8544 14.75 33.1385 13.9943C33.4283 13.233 33.5732 12.3864 33.5732 11.4545C33.5732 10.5341 33.4311 9.70455 33.147 8.96591C32.8686 8.22159 32.4453 7.63352 31.8771 7.2017C31.3146 6.7642 30.6072 6.54545 29.755 6.54545C28.9368 6.54545 28.2493 6.75284 27.6925 7.16761C27.1357 7.5767 26.7152 8.15057 26.4311 8.8892C26.147 9.62216 26.005 10.4773 26.005 11.4545ZM44.1499 18.2727C42.8885 18.2727 41.8004 17.9943 40.8857 17.4375C39.9766 16.875 39.2749 16.0909 38.7805 15.0852C38.2919 14.0739 38.0476 12.8977 38.0476 11.5568C38.0476 10.2159 38.2919 9.03409 38.7805 8.01136C39.2749 6.98295 39.9624 6.18182 40.843 5.60795C41.7294 5.02841 42.7635 4.73864 43.9453 4.73864C44.6271 4.73864 45.3004 4.85227 45.9652 5.07954C46.63 5.30682 47.2351 5.67614 47.7805 6.1875C48.326 6.69318 48.7607 7.36364 49.0845 8.19886C49.4084 9.03409 49.5703 10.0625 49.5703 11.2841V12.1364H39.4794V10.3977H47.5249C47.5249 9.65909 47.3771 9 47.0817 8.42045C46.7919 7.84091 46.3771 7.38352 45.8374 7.0483C45.3033 6.71307 44.6726 6.54545 43.9453 6.54545C43.1442 6.54545 42.451 6.74432 41.8658 7.14205C41.2862 7.53409 40.8402 8.04545 40.5277 8.67614C40.2152 9.30682 40.0589 9.98295 40.0589 10.7045V11.8636C40.0589 12.8523 40.2294 13.6903 40.5703 14.3778C40.9169 15.0597 41.397 15.5795 42.0107 15.9375C42.6243 16.2898 43.3374 16.4659 44.1499 16.4659C44.6783 16.4659 45.1555 16.392 45.5817 16.2443C46.0135 16.0909 46.3857 15.8636 46.6982 15.5625C47.0107 15.2557 47.2521 14.875 47.4226 14.4205L49.3658 14.9659C49.1612 15.625 48.8175 16.2045 48.3345 16.7045C47.8516 17.1989 47.255 17.5852 46.5447 17.8636C45.8345 18.1364 45.0362 18.2727 44.1499 18.2727ZM52.63 18V4.90909H54.5732V6.88636H54.7095C54.9482 6.23864 55.38 5.71307 56.005 5.30966C56.63 4.90625 57.3345 4.70454 58.1186 4.70454C58.2663 4.70454 58.451 4.70739 58.6726 4.71307C58.8942 4.71875 59.0618 4.72727 59.1754 4.73864V6.78409C59.1072 6.76705 58.951 6.74148 58.7067 6.70739C58.468 6.66761 58.2152 6.64773 57.9482 6.64773C57.3118 6.64773 56.7436 6.78125 56.2436 7.0483C55.7493 7.30966 55.3572 7.6733 55.0675 8.1392C54.7834 8.59943 54.6413 9.125 54.6413 9.71591V18H52.63ZM68.0732 4.90909V6.61364H61.2891V4.90909H68.0732ZM63.2663 1.77273H65.2777V14.25C65.2777 14.8182 65.3601 15.2443 65.5249 15.5284C65.6953 15.8068 65.9112 15.9943 66.1726 16.0909C66.4396 16.1818 66.7209 16.2273 67.0163 16.2273C67.2379 16.2273 67.4197 16.2159 67.5618 16.1932C67.7038 16.1648 67.8175 16.142 67.9027 16.125L68.3118 17.9318C68.1754 17.983 67.9851 18.0341 67.7408 18.0852C67.4964 18.142 67.1868 18.1705 66.8118 18.1705C66.2436 18.1705 65.6868 18.0483 65.1413 17.804C64.6016 17.5597 64.1527 17.1875 63.7947 16.6875C63.4425 16.1875 63.2663 15.5568 63.2663 14.7955V1.77273ZM87.6669 4.90909C87.5646 4.04545 87.1499 3.375 86.4226 2.89773C85.6953 2.42045 84.8033 2.18182 83.7464 2.18182C82.9737 2.18182 82.2976 2.30682 81.718 2.55682C81.1442 2.80682 80.6953 3.15057 80.3714 3.58807C80.0533 4.02557 79.8942 4.52273 79.8942 5.07954C79.8942 5.54545 80.005 5.94602 80.2266 6.28125C80.4538 6.6108 80.7436 6.88636 81.0959 7.10795C81.4482 7.32386 81.8175 7.50284 82.2038 7.64489C82.5902 7.78125 82.9453 7.89205 83.2692 7.97727L85.0419 8.45455C85.4964 8.57386 86.0021 8.73864 86.5589 8.94886C87.1214 9.15909 87.6584 9.44602 88.1697 9.80966C88.6868 10.1676 89.1129 10.6278 89.4482 11.1903C89.7834 11.7528 89.951 12.4432 89.951 13.2614C89.951 14.2045 89.7038 15.0568 89.2095 15.8182C88.7209 16.5795 88.005 17.1847 87.0618 17.6335C86.1243 18.0824 84.9851 18.3068 83.6442 18.3068C82.3942 18.3068 81.3118 18.1051 80.397 17.7017C79.4879 17.2983 78.772 16.7358 78.2493 16.0142C77.7322 15.2926 77.4396 14.4545 77.3714 13.5H79.5533C79.6101 14.1591 79.8317 14.7045 80.218 15.1364C80.6101 15.5625 81.1044 15.8807 81.701 16.0909C82.3033 16.2955 82.951 16.3977 83.6442 16.3977C84.451 16.3977 85.1754 16.267 85.8175 16.0057C86.4595 15.7386 86.968 15.3693 87.343 14.8977C87.718 14.4205 87.9055 13.8636 87.9055 13.2273C87.9055 12.6477 87.7436 12.1761 87.4197 11.8125C87.0959 11.4489 86.6697 11.1534 86.1413 10.9261C85.6129 10.6989 85.0419 10.5 84.4283 10.3295L82.2805 9.71591C80.9169 9.32386 79.8374 8.7642 79.0419 8.03693C78.2464 7.30966 77.8487 6.35795 77.8487 5.18182C77.8487 4.20454 78.1129 3.35227 78.6413 2.625C79.1754 1.89205 79.8913 1.32386 80.7891 0.920454C81.6925 0.511363 82.701 0.306818 83.8146 0.306818C84.9396 0.306818 85.9396 0.508522 86.8146 0.911931C87.6896 1.30966 88.3828 1.85511 88.8942 2.54829C89.4112 3.24148 89.6839 4.02841 89.7124 4.90909H87.6669ZM98.4716 18.2727C97.2443 18.2727 96.1875 17.983 95.3011 17.4034C94.4148 16.8239 93.733 16.0256 93.2557 15.0085C92.7784 13.9915 92.5398 12.8295 92.5398 11.5227C92.5398 10.1932 92.7841 9.01989 93.2727 8.00284C93.767 6.98011 94.4545 6.18182 95.3352 5.60795C96.2216 5.02841 97.2557 4.73864 98.4375 4.73864C99.358 4.73864 100.188 4.90909 100.926 5.25C101.665 5.59091 102.27 6.06818 102.741 6.68182C103.213 7.29545 103.506 8.01136 103.619 8.82955H101.608C101.455 8.23295 101.114 7.70455 100.585 7.24432C100.063 6.77841 99.358 6.54545 98.4716 6.54545C97.6875 6.54545 97 6.75 96.4091 7.15909C95.8239 7.5625 95.3665 8.13352 95.0369 8.87216C94.7131 9.60511 94.5511 10.4659 94.5511 11.4545C94.5511 12.4659 94.7102 13.3466 95.0284 14.0966C95.3523 14.8466 95.8068 15.429 96.392 15.8438C96.983 16.2585 97.6761 16.4659 98.4716 16.4659C98.9943 16.4659 99.4688 16.375 99.8949 16.1932C100.321 16.0114 100.682 15.75 100.977 15.4091C101.273 15.0682 101.483 14.6591 101.608 14.1818H103.619C103.506 14.9545 103.224 15.6506 102.776 16.2699C102.332 16.8835 101.744 17.3722 101.011 17.7358C100.284 18.0938 99.4375 18.2727 98.4716 18.2727ZM108.571 10.125V18H106.56V0.545454H108.571V6.95455H108.741C109.048 6.27841 109.509 5.74148 110.122 5.34375C110.741 4.94034 111.565 4.73864 112.594 4.73864C113.486 4.73864 114.267 4.91761 114.938 5.27557C115.608 5.62784 116.128 6.17045 116.497 6.90341C116.872 7.63068 117.06 8.55682 117.06 9.68182V18H115.048V9.81818C115.048 8.77841 114.778 7.97443 114.239 7.40625C113.705 6.83239 112.963 6.54545 112.014 6.54545C111.355 6.54545 110.764 6.68466 110.241 6.96307C109.724 7.24148 109.315 7.64773 109.014 8.18182C108.719 8.71591 108.571 9.36364 108.571 10.125ZM123.705 18L119.717 4.90909H121.83L124.66 14.9318H124.796L127.592 4.90909H129.739L132.501 14.8977H132.637L135.467 4.90909H137.58L133.592 18H131.614L128.751 7.94318H128.546L125.683 18H123.705ZM145.283 18.2727C144.021 18.2727 142.933 17.9943 142.018 17.4375C141.109 16.875 140.408 16.0909 139.913 15.0852C139.425 14.0739 139.18 12.8977 139.18 11.5568C139.18 10.2159 139.425 9.03409 139.913 8.01136C140.408 6.98295 141.095 6.18182 141.976 5.60795C142.862 5.02841 143.896 4.73864 145.078 4.73864C145.76 4.73864 146.433 4.85227 147.098 5.07954C147.763 5.30682 148.368 5.67614 148.913 6.1875C149.459 6.69318 149.893 7.36364 150.217 8.19886C150.541 9.03409 150.703 10.0625 150.703 11.2841V12.1364H140.612V10.3977H148.658C148.658 9.65909 148.51 9 148.214 8.42045C147.925 7.84091 147.51 7.38352 146.97 7.0483C146.436 6.71307 145.805 6.54545 145.078 6.54545C144.277 6.54545 143.584 6.74432 142.999 7.14205C142.419 7.53409 141.973 8.04545 141.661 8.67614C141.348 9.30682 141.192 9.98295 141.192 10.7045V11.8636C141.192 12.8523 141.362 13.6903 141.703 14.3778C142.05 15.0597 142.53 15.5795 143.143 15.9375C143.757 16.2898 144.47 16.4659 145.283 16.4659C145.811 16.4659 146.288 16.392 146.714 16.2443C147.146 16.0909 147.518 15.8636 147.831 15.5625C148.143 15.2557 148.385 14.875 148.555 14.4205L150.499 14.9659C150.294 15.625 149.95 16.2045 149.467 16.7045C148.984 17.1989 148.388 17.5852 147.678 17.8636C146.967 18.1364 146.169 18.2727 145.283 18.2727ZM153.763 18V4.90909H155.774V18H153.763ZM154.786 2.72727C154.393 2.72727 154.055 2.59375 153.771 2.3267C153.493 2.05966 153.354 1.73864 153.354 1.36364C153.354 0.988636 153.493 0.667614 153.771 0.400568C154.055 0.133523 154.393 0 154.786 0C155.178 0 155.513 0.133523 155.791 0.400568C156.075 0.667614 156.217 0.988636 156.217 1.36364C156.217 1.73864 156.075 2.05966 155.791 2.3267C155.513 2.59375 155.178 2.72727 154.786 2.72727ZM165.151 4.90909V6.61364H158.367V4.90909H165.151ZM160.344 1.77273H162.356V14.25C162.356 14.8182 162.438 15.2443 162.603 15.5284C162.773 15.8068 162.989 15.9943 163.251 16.0909C163.518 16.1818 163.799 16.2273 164.094 16.2273C164.316 16.2273 164.498 16.2159 164.64 16.1932C164.782 16.1648 164.896 16.142 164.981 16.125L165.39 17.9318C165.254 17.983 165.063 18.0341 164.819 18.0852C164.575 18.142 164.265 18.1705 163.89 18.1705C163.322 18.1705 162.765 18.0483 162.219 17.804C161.68 17.5597 161.231 17.1875 160.873 16.6875C160.521 16.1875 160.344 15.5568 160.344 14.7955V1.77273ZM167.802 18V16.4659L175.234 6.92045V6.78409H168.04V4.90909H177.825V6.51136L170.597 15.9886V16.125H178.063V18H167.802ZM186.275 18.2727C185.013 18.2727 183.925 17.9943 183.011 17.4375C182.102 16.875 181.4 16.0909 180.906 15.0852C180.417 14.0739 180.173 12.8977 180.173 11.5568C180.173 10.2159 180.417 9.03409 180.906 8.01136C181.4 6.98295 182.087 6.18182 182.968 5.60795C183.854 5.02841 184.888 4.73864 186.07 4.73864C186.752 4.73864 187.425 4.85227 188.09 5.07954C188.755 5.30682 189.36 5.67614 189.906 6.1875C190.451 6.69318 190.886 7.36364 191.21 8.19886C191.533 9.03409 191.695 10.0625 191.695 11.2841V12.1364H181.604V10.3977H189.65C189.65 9.65909 189.502 9 189.207 8.42045C188.917 7.84091 188.502 7.38352 187.962 7.0483C187.428 6.71307 186.798 6.54545 186.07 6.54545C185.269 6.54545 184.576 6.74432 183.991 7.14205C183.411 7.53409 182.965 8.04545 182.653 8.67614C182.34 9.30682 182.184 9.98295 182.184 10.7045V11.8636C182.184 12.8523 182.354 13.6903 182.695 14.3778C183.042 15.0597 183.522 15.5795 184.136 15.9375C184.749 16.2898 185.462 16.4659 186.275 16.4659C186.803 16.4659 187.281 16.392 187.707 16.2443C188.138 16.0909 188.511 15.8636 188.823 15.5625C189.136 15.2557 189.377 14.875 189.548 14.4205L191.491 14.9659C191.286 15.625 190.942 16.2045 190.46 16.7045C189.977 17.1989 189.38 17.5852 188.67 17.8636C187.96 18.1364 187.161 18.2727 186.275 18.2727ZM194.755 18V4.90909H196.698V6.88636H196.835C197.073 6.23864 197.505 5.71307 198.13 5.30966C198.755 4.90625 199.46 4.70454 200.244 4.70454C200.391 4.70454 200.576 4.70739 200.798 4.71307C201.019 4.71875 201.187 4.72727 201.3 4.73864V6.78409C201.232 6.76705 201.076 6.74148 200.832 6.70739C200.593 6.66761 200.34 6.64773 200.073 6.64773C199.437 6.64773 198.869 6.78125 198.369 7.0483C197.874 7.30966 197.482 7.6733 197.192 8.1392C196.908 8.59943 196.766 9.125 196.766 9.71591V18H194.755Z" fill="black" />
              </svg>
            </div>

            
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              onClick={scrollToMiddle}
              className='motion-safe:animate-bounce dark:invert duration-300'
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

          </motion.div>
          {/* SKILLS CONTAINER */}
          <motion.div 
          initial={{ x: "-300px" }} 
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }} 
          ref={skillRef}
          className='flex flex-col gap-12 justify-center'>
            <h2
              className='font-bold text-2xl dark:text-white duration-300'>SKILSS</h2>
            <TecIcons />

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              onClick={scrollToEnd}
              className='motion-safe:animate-bounce mt-32 dark:invert duration-300'
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

          </motion.div>


          {/* EXPERIENCIA CONTAINER */}
          <div className='flex flex-col gap-12 justify-center pb-60'>
            {/* Experience title */}
            <motion.h2 initial={{ x: "-300px" }} 
            transition={{ delay: 0.2 }}
            animate={isExperienceH2Ref ? { x: 0 } : {}} 
            ref={experienceH2Ref}
            >
              <span className='duration-300 font-bold dark:text-white text-2xl'>
                EXPERIENCE
              </span>
            </motion.h2>
            {/* Experience list */}
            <div className=''>
              {/* Experience list Items */}
              <motion.div
                ref={experienceRef}
                transition={{ delay: 0.2 }}
                initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}}
                className='flex flex-col'>
                {/* <ExperienceListItem /> */}
                <ExperienceListItemLeft />
              </motion.div>
            </div>
          </div>
        </div>
        {/* GIF CONTAINER */}
        <div className='mt-32 sticky top-32 z-30 hidden lg:block w-1/3 xl:w-1/2'>
          <Image alt='Rob' className='rounded-lg lg:ml-5 lg:w-9/12 xl:w-4/5' src={"/rob-nintendo.gif"} 
          width={400} height={400}></Image>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage