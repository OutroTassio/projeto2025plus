import { Carousel } from "./ui/carousel";

const banners = [
  "/lovable-uploads/99c5ac72-108c-4b9b-a7ab-81282ce68526.png"
];

export default function Banner() {
  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {banners.map((src, i) => (
          <div key={i} className="relative h-[400px] w-full">
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
