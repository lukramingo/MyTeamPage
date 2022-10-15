import React from 'react'


const App = () => {

  return (
    <>
    <section className='w-full h-[100%] overflow-hidden bg-[#fafafa]'>
      <header className='flex flex-col lg:flex-row lg:justify-around lg:items-start ml-10 lg:ml-0 mt-16 mb-8 lg:mb-0'>
      <div className='text-5xl font-semibold font-serif'>
        <h1 >The creative crew</h1>
      </div>  
      <div className='flex flex-col justify-around lg:mr-40 lg:mb-20 mt-10 lg:mt-0'>
        <h2 className='font-sans font-medium text-2xl mb-4'>WHO WE ARE</h2>
        <p className='text-xl w-[370px] font-medium leading-8'>
        We are team of creatively diverse, driven, innovative individuals working in various location from the world.
        </p>
      </div>
      </header>

      <main className='lg:grid lg:grid-cols-3 grid grid-cols-2 gap-x-10 lg:gap-x-0 mx-28 mb-10'>
        <div>
           <img className='w-[238px] h-[375px]' src="images/photo1.png" alt="photo1" />
           <p className='text-lg font-bold mt-2'>Bill Mohoney</p>
        </div>
        <div className="h-[500px] flex flex-col justify-end mb-6">
    
           <img className='w-[290px] h-[380px]' src="images/photo2.png" alt="photo2" />
           <p className='text-lg font-bold mt-2'>Saba Cabrera</p>
          
        </div>
        <div>
           <img className='w-[280px] h-[390px]' src="images/photo3.png" alt="photo3" />
           <p className='text-lg font-bold mt-2'>Shae Le</p>
        </div>
        <div className='h-[500px] lg:h-0 flex flex-col justify-end lg:justify-start'>
           <img className='w-[278px] h-[400px]' src="images/photo4.png" alt="photo4" />
           <p className='text-lg font-bold mt-2'>Skylah Lu</p>
        </div>
        <div className='h-[500px] flex flex-col justify-end'>
           <img className='w-[274.36px] h-[360px]' src="images/photo5.png" alt="photo5" />
           <p className='text-lg font-bold mt-2'>Griff Richards</p>
        </div>
        <div className='h-[620px] lg:h-0 flex flex-col justify-end lg:justify-start'>
           <img className='w-[300px] h-[390px]' src="images/photo6.png" alt="photo6" />
           <p className='text-lg font-bold mt-2'>Stan John</p>
        </div>
      </main>
    </section>
    <footer className='text-center my-6'>
      <p>created by LukramIngo - devChallenges.io</p>
    </footer>
    </>
  )
}

export default App
