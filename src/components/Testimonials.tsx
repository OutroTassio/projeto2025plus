const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Depoimentos de Clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/dep1.png" 
                alt="Cliente 1"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">João Silva</h3>
                <p className="text-sm text-gray-500">São Paulo, SP</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Depois de usar o Bem Dotado Gotas, minha autoestima melhorou muito! 
              Em apenas 3 semanas já senti a diferença. Recomendo para todos os homens!"
            </p>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/dep2.png" 
                alt="Cliente 2"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">Carlos Oliveira</h3>
                <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Nunca imaginei que um produto natural pudesse ter tanto efeito. 
              Minha performance melhorou consideravelmente e minha parceira está muito satisfeita!"
            </p>
          </div>
        </div>

        {/* Seção de Prints */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Resultados Reais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="/lovable-uploads/dep3.png" 
              alt="Resultado 1"
              className="max-w-[400px] w-full mx-auto rounded-lg shadow-lg object-contain"
            />
            <img 
              src="/lovable-uploads/dep4.png" 
              alt="Resultado 2"
              className="max-w-[400px] w-full mx-auto rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
