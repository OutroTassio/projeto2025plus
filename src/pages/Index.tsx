import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import Guarantee from '../components/Guarantee';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import PriceSection from '../components/PriceSection';
import Testimonials from '../components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <div className="space-y-20">
        <Benefits />
        <ImageSection />
        <Testimonials />
        <PriceSection />
        <Guarantee />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
