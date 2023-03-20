import QR from './assets/images/image-qr-code.png'


const App = () => {
  return (
    <div className='h-screen bg-light-gray flex items-center justify-center'>
      <div className='bg-white p-4 rounded-3xl flex flex-col w-72 gap-y-4'>
      <img src={QR} alt="qr imagen" className='h-60 rounded-3xl' />
      <h1 className='text-dark-blue text-lg font-bold text-center px-4'>Improve your front-end skills by building projects</h1>
      <p className='text-sm text-gray-400 text-center px-4 pb-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App