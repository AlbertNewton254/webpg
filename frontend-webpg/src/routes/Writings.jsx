import Header from "../components/Header";
import { useState, useEffect } from "react";
import React from "react";

function Writings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  // Efeito para bloquear/desbloquear a rolagem da página quando o modal está aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Bloqueia a rolagem da página
    } else {
      document.body.style.overflow = "auto"; // Restaura a rolagem da página
    }

    // Limpeza do efeito
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const writings = [
    {
      title: "Matemática",
      content: (
        <>
          <p>De paixão, sou matemático,</p>
          <p>Melhor no cálculo que no rimar;</p>
          <p>Mas há poesia em uns teoremas,</p>
          <p>Há matemática nas águas do mar!</p>
          <br />
          <p>Mar de teus olhos, que me refletem,</p>
          <p>Um lema têm a me ensinar.</p>
          <p>Já disso sei o corolário:</p>
          <p>Que muito quero te amar!</p>
        </>
      ),
    },
    {
      title: "Une envie",
      content: (
        <>
          <p>Tu ne le sais peut-être pas, mais j'ai pour toi</p>
          <p>Le plus grand de tous les amours.</p>
          <p>Dans toute ma vie, qui est en cours,</p>
          <p>Tu n'étais qu'un rêve, qu'une folie.</p>
          <br />
          <p>J'ai prié Dieu, dans ma tristesse:</p>
          <p>N'y a-t-il personne qui m'aime?</p>
          <p>De ton amour, tu sais, j'ai pas doute,</p>
          <p>Mais de celui d'une autre personne... je suis seul!</p>
          <br />
          <p>Maintenant, t'es avec moi,</p>
          <p>Dans toutes les nuit, et tous les jours!</p>
          <p>Avec toi, je veux être en tout,</p>
          <p>Et jusqu'à la mort, je t'appartiendrais.</p>
        </>
      ),
    },
    {
      title: "Amor Bebel",
      content: (
        <>
          <p>A Deus, jurei, jurei amá-lo,</p>
          <p>Sobre tudo e todos mais.</p>
          <p>Amar-te, a ti, é desafio:</p>
          <p>Ardo em chamas infernais!</p>
          <br />
          <p>Qualquer um que me conforte,</p>
          <p>Seja pr'a sempre ou nunca mais.</p>
          <p>De ti, querida, sou cativo:</p>
          <p>Sejas minha nos meus ais!</p>
          <br />
          <p>E assim, minha rainha,</p>
          <p>No fim do dia me acalmais,</p>
          <p>Embora tente-me o pecado</p>
          <p>De querer-te e a nada mais...</p>
          <br />
          <p>Mas, então, não posso amar</p>
          <p>A qualquer um com amores tais,</p>
          <p>Pois juramento fiz a Deus</p>
          <p>De amá-lo sobre todo o mais.</p>
          <br />
          <p>Ora, vindo de "Elisheva",</p>
          <p>Que tornou-se "Isabel"</p>
          <p>"Juramento feito a Deus"</p>
          <p>É o teu nome, amor Bebel.</p>
        </>
      ),
    },
  ];

  const handleCardClick = (title, content) => {
    setSelectedTitle(title);
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
    setSelectedTitle(null);
  };

  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-center pb-10">
      <Header />
      <h1 className="text-center text-white text-4xl mb-8">Escritos</h1>

      <div className="grid gap-8 px-8 max-w-screen-lg w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative mb-10">
        {writings.map((writing, index) => (
          <div
            key={index}
            className="bg-white text-red-900 p-8 rounded-2xl shadow-2xl leading-relaxed cursor-pointer"
            onClick={() => handleCardClick(writing.title, writing.content)}
            style={{ minHeight: "200px" }}
          >
            <h2 className="font-bold text-xl mb-4">{writing.title}</h2>
            <div className="text-justify">
              {React.Children.toArray(writing.content.props.children)
                .filter((child) => child.type === "p")
                .slice(0, 4)
                .map((paragraph, i) => (
                  <React.Fragment key={i}>{paragraph}</React.Fragment>
                ))}
              <p className="text-gray-500 mt-2">...</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <>
          {/* Fundo escurecido */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white text-red-900 p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative mx-4">
              {/* Cabeçalho do modal com título e botão de fechar */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-bold text-xl">{selectedTitle}</h2>
                {/* Botão de fechar alinhado com o título */}
                <button
                  className="bg-red-900 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors"
                  onClick={handleCloseModal}
                >
                  ×
                </button>
              </div>
              <div className="text-justify">{selectedContent}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Writings;