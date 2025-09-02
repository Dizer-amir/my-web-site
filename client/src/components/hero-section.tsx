import medicalTechnology from "../assets/medical-technology.jpg";
import aiBrain from "../assets/ai-brain.jpg";

const HeroSection = () => {
  return (
    <section className="text-center mb-12" id="home">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg" data-testid="hero-title">
        محلل الأدوية الذكي
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
        معلومات دوائية موثوقة ودقيقة في متناول يدك - تحليل ذكي للأدوية باستخدام الذكاء الاصطناعي
      </p>
      
      {/* Hero Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
          alt="Modern pharmacy with organized medicine shelves" 
          className="rounded-2xl shadow-2xl w-full h-64 object-cover glass-card float-animation"
          data-testid="hero-image-pharmacy"
        />
        
        <img 
          src={medicalTechnology} 
          alt="Doctor consulting with patient using digital tablet" 
          className="rounded-2xl shadow-2xl w-full h-64 object-cover glass-card float-animation" 
          style={{animationDelay: '0.5s'}}
          data-testid="hero-image-consultation"
        />
        
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
          alt="Medical brain analysis and neural networks" 
          className="rounded-2xl shadow-2xl w-full h-64 object-cover glass-card float-animation" 
          style={{animationDelay: '1s'}}
          data-testid="hero-image-technology"
        />
      </div>
    </section>
  );
};

export default HeroSection;
