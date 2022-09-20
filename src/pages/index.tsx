import NavBar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto md:px-6 px-4">
        <div className="md:py-20 py-12">
          <div className="md:pb-20 pb-12 max-w-3xl mx-auto text-center ">
            <h2 className="md:text-6xl text-4xl text-black font-bold mb-4">
              You&apos;re ready to start coding!
            </h2>
            <p className="text-xl text-gray-600">
              This template includes everything you need to start working with Nextjs, Typescript,
              Tailwind and different tooling to help with your development experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
