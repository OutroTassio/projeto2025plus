import { Activity, ArrowUp, Droplets, Package, Target } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Target className="text-primary w-12 h-12" />,
      title: "Fim da Ejaculação Precoce",
      description: "O BEM DOTADO proporciona resultados definitivos porque transforma o funcionamento dos músculos pubococcígeo do Sistema Ejaculatório, deixando-os aptos a praticar sexo pelo tempo que o homem quiser, sem que haja ejaculação antes da hora desejada."
    },
    {
      icon: <ArrowUp className="text-primary w-12 h-12" />,
      title: "Fim da Impotência",
      description: "Tomando doze gotas por dia, você vai sentir logo na primeira semana, muito mais apetite sexual! Você vai ter mais vontade e disposição para o sexo."
    },
    {
      icon: <Activity className="text-primary w-12 h-12" />,
      title: "Aumento do Pênis",
      description: "Você var sentir seu pênis bem maior, mais grosso e com ereções muito mais potentes. Com o BEM DOTADO você terá orgasmos mais poderosos e duradouros."
    },
    {
      icon: <Droplets className="text-primary w-12 h-12" />,
      title: "Redução do Inchaço da Próstata",
      description: "O BEM DOTADO reduz eficazmente o inchaço da próstata, aliviando a pressão sobre a bexiga e melhorando o fluxo urinário para uma sensação de alívio e bem-estar."
    },
    {
      icon: <Package className="text-primary w-12 h-12" />,
      title: "Entrega Rápida e Discreta",
      description: "Seu produto será entregue rapidamente em embalagem discreta, garantindo total privacidade e sigilo."
    }
  ];

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
          Benefícios Exclusivos
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Tomando o BEM DOTADO GOTAS de acordo com as recomendações,
          você vai sentir os seguintes efeitos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
