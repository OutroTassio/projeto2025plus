const ImageSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full max-w-[520px] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Modo de Usar</h2>
        <div className="w-full h-[900px] rounded-xl overflow-hidden bg-white flex items-center justify-center">
          <img 
            src="/lovable-uploads/mododeusar.png" 
            alt="Modo de usar"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
