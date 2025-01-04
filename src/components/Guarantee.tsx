import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/a03edd73-3490-48e3-a52f-8630d27fb41e.png" 
            alt="Garantia de 30 dias" 
            className="w-32 h-32 object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Garantia de Satisfação de 30 Dias
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl mb-6">
            Se você não ficar completamente satisfeito com os resultados nos primeiros 30 dias de uso, 
            devolvemos 100% do seu dinheiro.
          </p>
          <p className="text-lg text-gray-700">
            Não importa o motivo - se você não estiver satisfeito, basta nos devolver o produto 
            (mesmo que as embalagens estejam vazias) e devolveremos seu dinheiro integralmente. 
            Sem perguntas, sem burocracia.
          </p>
          <div className="mt-8">
            <img 
              src="/lovable-uploads/eca4d932-f94e-4486-9ada-a35f11d167a4.png" 
              alt="Bem Dotado Gotas com Garantia" 
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;