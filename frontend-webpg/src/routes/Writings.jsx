import Header from "../components/Header";
import { useState, useEffect } from "react";
import React from "react";

function Writings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

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
    {
      title: "Arritmia",
      content: (
        <>
          <p>Confesso: acabaram-me as ideias, já as gastei todas e não sei mais como me expressar em palavras. O coração parece ter algo a dizer, mas não sei a sua língua. Tenho arritmia, não sei se já disse. Ele, tropeçando, parece querer falar em código Morse: - . / .- -- ---, - . / .- -- ---, - . / .- -- ---…</p>
        </>
      ),
    },
    {
      title: "Tempos verbais",
      content: (
        <>
          <p>Quis-te, e te quero.</p>
          <p>Quero-te hoje,</p>
          <p>Mais que ontem te quis.</p>
          <p>Queria amar-te mais que amanhã,</p>
          <p>E amanhã como eu sempre te quis.</p>
          <br />
          <p>Contudo, só amanhã saberei</p>
          <p>Se te quis, se te quero, se amanhã quererei.</p>
          <p>Ora, pois te queira agora e em cada instante,</p>
          <p>E assim vou-te querendo,</p>
          <p>Como a ninguém outrora eu quis.</p>
        </>
      ),
    },
    {
      title: "Promessa",
      content: (
        <>
          <p>Como eu de ti haverei de afastar-me,</p>
          <p>Se tu és meu viver e meu prazer?</p>
          <p>Amor, que tu não cedas ao sofrer,</p>
          <p>Não tomes este hiato por alarme!</p>
          <br />
          <p>A dor que ora tu sentes é maligna,</p>
          <p>Como é a de tua ausência para mim;</p>
          <p>Mas elas, confirmando a nossa sina,</p>
          <p>São primícias de um amor que não tem fim.</p>
          <br />
          <p>Portanto, se te dói tal como a mim</p>
          <p>Entre nós a distância nestas horas,</p>
          <p>Lembra-te da promessa em que persisto,</p>
          <br />
          <p>Que o Senhor nos legou com suas obras:</p>
          <p>"São bem-aventurados os aflitos,</p>
          <p>Pois hão de ter descanso em meu jardim!"</p>
        </>
      ),
    },
    {
      title: "Exagerado",
      content: (
        <>
          <p>Vem, diz-me, ó deusa minha toda,</p>
          <p>O que te falta nesta vida vã,</p>
          <p>E eu, que só sou escravo de tua boca,</p>
          <p>O que dela vier farei afã!</p>
          <br />
          <p>Un jour, un mois, ma vie pode tardar,</p>
          <p>E tanto sofrerei com teu chorar…</p>
          <p>Eu, porém, percorrerei os céus e o mar</p>
          <p>Pra cada teu capricho consumar.</p>
          <br />
          <p>Não diga, amor, que eu sou exagerado,</p>
          <p>Que digo e que não cumpro o que te falo,</p>
          <p>E muito embora mein Herz, du trägst es,</p>
          <br />
          <p>E, se for justo, o podes amassar,</p>
          <p>Eu peço a ti: me tenhas piedade!</p>
          <p>Confia em mim, que vivo de te amar!</p>
        </>
      ),
    },
    {
      title: "Quis es tu?",
      content: (
        <>
          <p>Como hei de te elencar, das mil virtudes</p>
          <p>Com as quais tu tens sido cumulada,</p>
          <p>Aquela que, de ti, não se desune,</p>
          <p>E que jaz à tua alma associada?</p>
          <br />
          <p>Será, pergunto, a tua agudeza,</p>
          <p>Que a mim me seduziu e conquistou?</p>
          <p>Serão teus castos lábios de princesa,</p>
          <p>Dos quais quero escutar juras de amor?</p>
          <br />
          <p>Será a tua pele cor morena,</p>
          <p>Que faz meu coração vibrar, sonhar?</p>
          <p>Ou a tua ternura violeta,</p>
          <p>Que me afaga e me serve como lar?</p>
          <br />
          <p>Bebel, respondo com simplicidade:</p>
          <p>De ti, é inseparável a humanidade.</p>
        </>
      ),
    },
    {
      title: "Avoir",
      content: (
        <>
          <p>Tu sabes, ó meu bem, que te pertenço,</p>
          <p>E que alma e corpo meus te são guardados</p>
          <p>P'ro dia de amanhã, que se aproxima,</p>
          <p>Que me seduz sempre que nele penso.</p>
          <br />
          <p>Assim também, presumo, a mim pertences,</p>
          <p>E disso me orgulho, mui feliz,</p>
          <p>Pois onde encontraria teu sorriso,</p>
          <p>Teu aroma, teus cabelos, teu sim?</p>
          <br />
          <p>Sim, o eu a ti, o tu a mim,</p>
          <p>E nós ao mundo somos como um só!</p>
          <p>Guiados não por chulos, vãos humores,</p>
          <br />
          <p>Mas pela fé em que, estando a sós,</p>
          <p>Prazer desfrutaremos, um no outro,</p>
          <p>Deleites mil e amores nos lençóis…</p>
        </>
      ),
    },
    {
      title: "A Bela e a Fera",
      content: (
        <>
          <p>Tu és aquela a quem tanto busquei,</p>
          <p>Sem quem a vida perde quase tudo;</p>
          <p>A quem eu esperei, no tempo mudo,</p>
          <p>E agora "minha amada" te chamei.</p>
          <br />
          <p>Teus olhos — não sei quê — que vislumbrei,</p>
          <p>Me levam à alvorada, ao céu fecundo;</p>
          <p>E os lábios teus, portões que eu já procuro,</p>
          <p>Escondem o Paraíso, bem o sei.</p>
          <br />
          <p>E és em tudo essa coisinha rara,</p>
          <p>Sem par em qualquer parte desta terra!</p>
          <p>Não sei o que tu és, só que me és cara,</p>
          <br />
          <p>E que tua presença a mim me encerra…</p>
          <p>Por isso, a mim, que sou como que a Fera,</p>
          <p>Tu sejas, peço, a minha linda Bela.</p>
        </>
      ),
    },
    {
      title: "Compromisso",
      content: (
        <>
          <p>À noite, quando em ti vou a sonhar,</p>
          <p>Percebo como menos vale o sonho</p>
          <p>Que ter-te ao meu lado, e então me ponho</p>
          <p>A suplicar pra estar contigo ao despertar.</p>
          <br />
          <p>Bem dentro de teu tronco a me achegar,</p>
          <p>Me prendo ao teu pescoço, bem risonho;</p>
          <p>E, em cada coragem que eu disponho,</p>
          <p>Eu quero te mostrar o meu amar.</p>
          <br />
          <p>Nem sempre bem faço, reconheço,</p>
          <p>Mas quero na constância demonstrar</p>
          <p>Que vero é o que eu sinto e o que te digo,</p>
          <br />
          <p>Que te amo e que o teu amor mereço.</p>
          <p>Por isso, em mim me vou a procurar</p>
          <p>Fazer-me de ti digno, e tenho o dito.</p>
        </>
      ),
    },
    {
      title: "Cartografia",
      content: (
        <>
          <p>No teu bronzeado me quero ir escondendo, e ir subindo de teu pescoço moreninho até o rosa dos teus lábios!…</p>
          <br />
          <p>Quero rodear as curvas de teu nariz, examinar em largo inquérito as tuas orelhas e adentrar o fundo de teus negros olhos!…</p>
          <br />
          <p>Aprendi a te amar foi por tua alma, que me revelaste muito antes do nosso primeiro beijo; mas a cada traço, a cada lado, a cada face e a cada amasso de teu corpo sobre o meu me extasio, e és a única terra que, afinal, me compraz mapear…</p>
        </>
      ),
    },
    {
      title: "Genitivo",
      content: (
        <>
          <p>Diz que quer e diz que tem,</p>
          <p>A todo mundo, a mim também!</p>
          <p>Posse tua, assim me trates,</p>
          <p>Mais que a escravo me maltrates</p>
          <p>E que travesseiro afagues em teu seio.</p>
          <br />
          <p>Assim me mates de prazer,</p>
          <p>De regozijo,</p>
          <p>Que teu sendo eu não existo,</p>
          <p>Mas eu sonho em ser um dia</p>
          <p>Todo teu, a todo tempo.</p>
        </>
      ),
    },
    {
      title: "Circadiano",
      content: (
        <>
          <p>Duvidas, bem querer,</p>
          <p>Que te deseje e que te queira?</p>
          <p>Saibas, tu, porém,</p>
          <p>Que menos valem Inferno e Céu</p>
          <p>Do que teu corpo desnudado sobre o meu</p>
          <p>Ao entardecer,</p>
          <p>Do que tuas brincadeiras indo até o anoitecer,</p>
          <p>Do que gozar da mente tua bem cedinho, amanhecer…</p>
        </>
      ),
    },
    {
      title: "Serenata para Bebel",
      content: (
        <>
          <p>Ó Lua que nos vem à noite,</p>
          <p>Do escuro vai a proteger!</p>
          <p>A ela, que é meu amor,</p>
          <p>Sejas tu a luz que quero tanto ser</p>
          <br />
          <p>"E tu, por que não vens,</p>
          <p>A mim que nunca te deixei?"</p>
          <p>Não chore, meu bem querer,</p>
          <p>Logo estarei junto a você…"</p>
        </>
      ),
    },
    {
      title: "Invocação à musa",
      content: (
        <>
          <p>Olha pra mim, ó meu bem, meu docinho,</p>
          <p>Sim, com meus olhos penetro-te os teus…</p>
          <p>Deixa que o fogo de mil Prometeus</p>
          <p>Me atice, e me afogue no teu carinho.</p>
          <br />
          <p>Faz-me babar de emoção, meu toucinho,</p>
          <p>Com teus tantos dotes faz dois mil ateus</p>
          <p>Duvidarem se deuses não são beijos teus,</p>
          <p>Que lhes ferem a mente, e lhes mudam os caminhos.</p>
          <br />
          <p>A mim, que te creio bem mais que no resto,</p>
          <p>És pura e és santa, sem mancha sequer,</p>
          <p>E eis que devoto homenagens te presto,</p>
          <br />
          <p>Que és minha senhora, não uma qualquer.</p>
          <p>Vem tu, ó musa, a mim mesmo te empresto!,</p>
          <p>Pois tu és a quem o meu coração quer.</p>
        </>
      ),
    },
    {
      title: "Amores de mil almas",
      content: (
        <>
          <p>Eu canto, trovador de muitas causas,</p>
          <p>Aquela que de todas mais me encanta,</p>
          <p>Que, pura e casta, a mim parece santa,</p>
          <p>E, solta, deixa a mim livre de alças.</p>
          <br />
          <p>Eu canto, menestrel de tantas pautas,</p>
          <p>Aquela que a mim mais me espanta,</p>
          <p>Que, toda bem formosa, me quebranta,</p>
          <p>E enche-me de amores de mil almas.</p>
          <br />
          <p>Eu canto, não porque seja capaz</p>
          <p>De tudo o que ela é cá transmitir,</p>
          <p>Mas sim porque a mim mui me apraz</p>
          <br />
          <p>Dizer, bradar o que me faz sentir.</p>
          <p>Estranho olhar, um nome tão audaz,</p>
          <p>Que amo escutar, dizer, sorrir!</p>
        </>
      ),
    },
    {
      title: "Todo o meu amar",
      content: (
        <>
        <p>Vou-me a escrever minha paixão,</p>
        <p>Caneta e papel na minha mão;</p>
        <p>E deixo escorrer tal como mel</p>
        <p>O tanto que te amo, amor Bebel…</p>
        <br />
        <p>Por cartas, chocolates e buquê,</p>
        <p>Eu tento demonstrar-te, a você,</p>
        <p>Que toda a minha vida,</p>
        <p>Quer no estresse, quer tranquila,</p>
        <p>Se transforma simplesmente por te ter!</p>
        <br />
        <p>Este Agostinho se dobrou ao teus encantos,</p>
        <p>Antonieta seduziu Marx malandro;</p>
        <p>Vida e morte, bem e mal,</p>
        <p>Céu e Inferno, terra e mar,</p>
        <p>Questione tudo, exceto todo o meu amar!</p>
        <br />
        <p>O Chat GPT que me perdoe:</p>
        <p>Não te quer mais que te quero, bem de longe;</p>
        <p>E, sendo marmoteiro como sou,</p>
        <p>Esta marmota eu converto em amor.</p>
        <br />
        <p>E dane-se o mundo se, no fim,</p>
        <p>Ele estiver contra nosso destin’,</p>
        <p>Pois saiba, minha rainha,</p>
        <p>Que, quer nesta ou noutra vida,</p>
        <p>Eu só quero viver tendo-te aqui…</p>
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
    <div className="min-h-screen bg-red-900">
      <Header />
      
      <main className="px-4 sm:px-6 py-6">
        <h1 className="text-center text-white text-2xl sm:text-3xl mb-6">
          Escritos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {writings.map((writing, index) => (
            <div
              key={index}
              className="bg-white text-red-900 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-64 flex flex-col"
              onClick={() => handleCardClick(writing.title, writing.content)}
            >
              <h2 className="font-bold text-lg sm:text-xl mb-2 truncate">
                {writing.title}
              </h2>
              <div className="text-justify text-sm sm:text-base overflow-hidden flex-grow">
                <div className="h-full overflow-hidden">
                  {React.Children.toArray(writing.content.props.children)
                    .filter((child) => child.type === "p")
                    .slice(0, 3)
                    .map((paragraph, i) => (
                      <p key={i} className="mb-2 line-clamp-3">
                        {paragraph.props.children}
                      </p>
                    ))}
                  <p className="text-gray-500 mt-2 text-center">...</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
              <div className="bg-white text-red-900 p-6 rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-bold text-xl sm:text-2xl">
                    {selectedTitle}
                  </h2>
                  <button
                    className="bg-red-900 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-700 transition-colors"
                    onClick={handleCloseModal}
                  >
                    ×
                  </button>
                </div>
                <div className="text-justify text-base">
                  {selectedContent}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Writings;