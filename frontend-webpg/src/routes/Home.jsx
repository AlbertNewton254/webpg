import Counter from "../components/Counter";
import Header from "../components/Header";

function Home() {
  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-center">
      <Header />
      <h1 className="text-center text-white text-4xl mb-8">Home</h1>

      {/* Seção Principal */}
      <div className="flex flex-col items-center px-8 max-w-screen-md gap-6">
        {/* Carta Centralizada */}
        <p className="bg-white text-red-900 text-justify w-180 h-auto p-6 rounded-2xl shadow-2xl leading-relaxed text-lg">
          <span className="block font-bold text-2xl mb-4 text-left">Bel,</span>
          Esta surpresa aqui é um pouco diferente, porque não se vai encerrar como as outras.
          Com este site, toda e qualquer pessoa no mundo poderá ver um pouco de nosso amor ao longo dos próximos anos,
          com algumas fotos, vídeos e poemas que por dever adicionarei aqui a cada mês, além de poderem ver, a qualquer momento,
          o tempo que se passou desde as 14 horas de 11 de novembro de 2024, quando enfim te pedi a mão. 

          <span className="italic block my-4">
            Nosso amor é para a história! Então sejamos inteligentes e já deixemos para os futuros pesquisadores 
            um material bem organizado para que a possam reconstruir um dia... Com amor,
          </span>
          <br />
          <span className="block text-right font-bold">Miguel</span>
        </p>

        {/* Counter Centralizado */}
        <div className="w-full max-w-md flex justify-center mb-6">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Home;
