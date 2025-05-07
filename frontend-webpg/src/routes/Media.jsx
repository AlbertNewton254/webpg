import Header from "../components/Header";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";

function Media() {
  const imagens = [foto1, foto2, foto3, foto4, foto5, foto6];

  return (
    <div className="min-h-screen bg-red-900">
      <Header />
      
      <main className="px-4 sm:px-6 py-6">
        <h1 className="text-center text-white text-2xl sm:text-3xl mb-4 sm:mb-6">
          Mídia
        </h1>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
            {imagens.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={img}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Media;