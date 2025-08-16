import Counter from "../components/Counter";
import Header from "../components/Header";

function Home() {
  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-center">
      <Header />
      
      <main className="w-full px-4 sm:px-6 py-6 flex flex-col items-center">
        <h1 className="text-center text-white text-2xl sm:text-3xl mb-4 sm:mb-6">
          Home
        </h1>

        {/* Container único para carta e counter com mesma largura */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
          
          {/* Carta ajustada para mesma largura do counter */}
          <div className="bg-white text-red-900 text-justify w-full p-4 sm:p-5 rounded-lg shadow-md leading-relaxed mb-6 sm:mb-8">
            <span className="block font-bold text-xl sm:text-2xl mb-3">
              Bel,
            </span>
            
            <p className="mb-3 text-sm sm:text-base">
              Esta surpresa aqui é um pouco diferente, porque não se vai encerrar como as outras.
              Com este site, toda e qualquer pessoa no mundo poderá ver um pouco de nosso amor ao longo dos próximos anos,
              com algumas fotos, vídeos e poemas que com carinho eu selecionei, além de poderem ver, a qualquer momento,
              o tempo que se passou desde as 14 horas de 11 de novembro de 2024, quando enfim te pedi a mão.
            </p>

            <p className="italic mb-3 text-sm sm:text-base">
              Nosso amor é para a história! Então sejamos inteligentes e já deixemos para os futuros pesquisadores 
              um material bem organizado para que a possam reconstruir um dia... Com amor,
            </p>
            
            <p className="text-right font-bold text-sm sm:text-base">
              Miguel
            </p>
          </div>

          {/* Counter - agora com a mesma largura da carta */}
          <div className="w-full">
            <Counter />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;