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
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {imagens.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Foto ${index + 1}`}
              className="w-52 h-52 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Media;