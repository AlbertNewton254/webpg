import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-white text-red-900 py-6 px-4 relative w-full text-center mb-6 flex flex-col items-center">
      <h1 className="text-4xl mb-6">Nosso amor na Internet</h1>
      <nav>
        <div className="flex justify-center space-x-8">
          <Link to="/" className="text-red-900 hover:black">Home</Link>
          <Link to="/media" className="text-red-900 hover:black">Mídia</Link>
          <Link to="/writings" className="text-red-900 hover:black">Escritos</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
