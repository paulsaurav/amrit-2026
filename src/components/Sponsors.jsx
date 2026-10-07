import React from 'react'

const Sponsors = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto">
        <h2 className="text-2xl font-bold mt-2 text-gray-900 text-center">
          SPONSORS
        </h2>
        <br />
        <div className='bg-gray-200 rounded-lg p-4 shadow-sm h-full'>
          <img src="/sponsor/sponsor1.jpeg" alt="Sponsor Logo" className="mx-auto" height={225} width={225} />
        </div>
      </div>
    </section>
  )
}

export default Sponsors