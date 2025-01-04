import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          © 2024 Bem Dotado Gotas. Todos os direitos reservados.
        </p>
        <div className="max-w-3xl mx-auto text-sm text-gray-300 space-y-4">
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <p>
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
            Os resultados podem variar de pessoa para pessoa.
          </p>
          <p>
            Consulte seu médico antes de consumir qualquer suplemento, especialmente se você estiver grávida, 
            amamentando, tomando medicamentos ou tiver alguma condição médica.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;