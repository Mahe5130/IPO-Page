import React from 'react'

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
    {/* Left Column */}
    <div className="md:w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-4">Your Title Here</h2>
      <p className="mb-4">This is some descriptive text that explains the purpose of this section. You can add more details here.</p>
      <button className="py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
        Click Me
      </button>
    </div>

    {/* Right Column */}
    <div className="md:w-1/2 p-4">
      <img 
        src="https://via.placeholder.com/400" 
        alt="Placeholder" 
        className="w-full h-auto rounded-lg" 
      />
    </div>
  </div>
  )
}

export default Home