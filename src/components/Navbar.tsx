const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-center px-6 py-8 mx-auto text-gray-600 capitalize">
        <a href="#" className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
          Link1
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Link2
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Link3
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Link4
        </a>
      </div>
    </nav>
  )
}

export default NavBar
