
const Header = () => {
  return (
    <header className="bg-hero-pattern text-white">
      <div className="bg-yellow-400 text-black py-2 text-center font-bold">
        <p className="container mx-auto">
          🚚 Pagamento na entrega! Escolha a melhor data e horário.
        </p>
      </div>
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Bem Dotado Gotas
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          O segredo para aumentar seu desempenho e autoestima de forma 100% natural. 
          Resultados em até 40 dias ou seu dinheiro de volta!
        </p>
        <button 
          onClick={() => {
            const pricesSection = document.getElementById('precos');
            if (pricesSection) {
              pricesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-transform"
        >
          QUERO AUMENTAR MEU DESEMPENHO AGORA!
        </button>
        </div>
        </div>
    </header>
  );
};

export default Header;
