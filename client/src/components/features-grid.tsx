import { Search, AlertTriangle, Smartphone, Building, Camera, Shield } from "lucide-react";
import medicalTechnology from "../assets/medical-technology.jpg";
import aiBrain from "../assets/ai-brain.jpg";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "بحث ذكي للأدوية",
      description: "ابحث عن أي دواء بالاسم أو بالصورة واحصل على معلومات شاملة ودقيقة فوراً",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "فحص التفاعلات",
      description: "تحقق من التفاعلات الضارة بين الأدوية المختلفة لضمان سلامتك الصحية",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تحليل شامل",
      description: "معلومات مفصلة عن الجرعات والآثار الجانبية والتحذيرات الطبية المهمة",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "استشارة طبية",
      description: "نصائح طبية مدروسة من خبراء في المجال الطبي والصيدلاني",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "التعرف بالصورة",
      description: "التقط صورة للدواء واحصل على معلومات فورية باستخدام تقنية الذكاء الاصطناعي",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان البيانات",
      description: "حماية كاملة لخصوصيتك مع أعلى معايير الأمان في التعامل مع البيانات الطبية",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="mb-12" id="about">
      <h2 className="text-3xl font-bold text-white text-center mb-12" data-testid="features-title">
        مميزات التطبيق
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-2xl"
            data-testid={`feature-card-${index}`}
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center text-white mx-auto mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4" data-testid={`feature-title-${index}`}>
              {feature.title}
            </h3>
            <p className="text-white/90 leading-relaxed" data-testid={`feature-description-${index}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Medical Services Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="قاعدة بيانات شاملة للأدوية" 
            className="w-full h-48 object-cover"
            data-testid="image-database"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">قاعدة بيانات شاملة</h3>
            <p className="text-white/90">أكثر من 10,000 دواء في قاعدة بياناتنا مع معلومات محدثة باستمرار</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
          <img 
            src={aiBrain} 
            alt="تقنية متقدمة للرعاية الصحية" 
            className="w-full h-48 object-cover"
            data-testid="image-technology"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">تقنية متقدمة</h3>
            <p className="text-white/90">استخدام الذكاء الاصطناعي لتحليل الأدوية وتقديم معلومات دقيقة</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="استشارة طبية مهنية" 
            className="w-full h-48 object-cover"
            data-testid="image-consultation"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">استشارة مهنية</h3>
            <p className="text-white/90">فريق من الخبراء الطبيين والصيادلة لضمان دقة المعلومات</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
