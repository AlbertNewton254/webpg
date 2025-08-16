import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-white text-red-900 py-4 md:py-6 px-4 relative w-full text-center mb-4 md:mb-6 flex flex-col items-center">
      <div className="w-full max-w-6xl"> {/* Container com largura máxima */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">Nosso amor na Internet</h1>
        <nav>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <Link to="/" className="text-red-900 hover:text-black text-sm sm:text-base">Home</Link>
            <Link to="/media" className="text-red-900 hover:text-black text-sm sm:text-base">Mídia</Link>
            <Link to="/writings" className="text-red-900 hover:text-black text-sm sm:text-base">Escritos</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;