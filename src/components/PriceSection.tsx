import { Package } from 'lucide-react';

const PriceSection = () => {
  const packages = [
    {
      quantity: 1,
      title: "Experimente",
      price: 149.90,
      shipping: "Frete Grátis",
      popular: false,
      url: "https://entrega.logzz.com.br/pay/memz8z5og/1-bem-dotado-gotas"
    },
    {
      quantity: 3,
      title: "Mais Vendido",
      price: 249.90,
      shipping: "Frete Grátis",
      popular: true,
      url: "https://entrega.logzz.com.br/pay/memz8z5og/3-bdt-gotas"
    },
    {
      quantity: 5,
      title: "Melhor Custo-Benefício",
      price: 349.90,
      shipping: "Frete Grátis",
      popular: false,
      url: "https://entrega.logzz.com.br/pay/memz8z5og/5-bem-dotado-gotas"
    },
    {
      quantity: 12,
      title: "Super Oferta",
      price: 499.90,
      shipping: "Frete Grátis",
      popular: false,
      url: "https://entrega.logzz.com.br/pay/memz8z5og/12-bem-dotado-gotas-por-49990"
    }
  ];

  return (
    <section id="precos" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Escolha Seu Pacote
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`border-2 ${pkg.popular ? 'border-cta' : 'border-primary'} rounded-xl p-8 text-center hover:shadow-xl transition-shadow relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              <Package className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-lg mb-4">{pkg.quantity} {pkg.quantity === 1 ? 'Frasco' : 'Frascos'}</p>
              <div className="flex flex-col items-center mb-2">
                <p className="text-2xl text-gray-500 line-through">
                  R$ {(199.90 * pkg.quantity).toFixed(2)}
                </p>
                <p className="text-4xl font-bold text-primary">
                  R$ {pkg.price.toFixed(2)}
                </p>
              </div>
              <p className="text-gray-600 mb-4">ou 12x de R$ {(pkg.price / 12).toFixed(2)}</p>
              <p className="text-blue-600 mb-6">{pkg.shipping}</p>
              <a 
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-cta hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-transform text-center"
              >
                AGENDAR ENTREGA
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Você só paga na entrega! Escolha a melhor data e horário.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
