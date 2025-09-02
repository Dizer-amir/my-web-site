import { type Drug } from "@shared/schema";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import doctorAvatar from "../assets/doctor-avatar.jpg";

interface ResultsSectionProps {
  results: Drug[];
}

const ResultsSection = ({ results }: ResultsSectionProps) => {
  if (results.length === 0) {
    return null;
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'mild':
        return <CheckCircle className="w-5 h-5 text-green-700" />;
      case 'moderate':
        return <AlertTriangle className="w-5 h-5 text-orange-700" />;
      case 'severe':
        return <XCircle className="w-5 h-5 text-red-700" />;
      default:
        return null;
    }
  };

  const getSeverityTitle = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'آثار خفيفة';
      case 'moderate':
        return 'آثار متوسطة';
      case 'severe':
        return 'آثار خطيرة';
      default:
        return '';
    }
  };

  return (
    <section id="results" className="glass-card rounded-3xl p-8 mb-12 shadow-2xl">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="results-title">
        نتائج البحث
      </h2>
      
      {results.map((drug, index) => (
        <div key={drug.id} className="bg-card rounded-2xl p-6 mb-6 border-r-4 border-primary shadow-lg" data-testid={`drug-card-${index}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-card-foreground mb-3" data-testid={`drug-name-${index}`}>
                {drug.nameArabic}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">المادة الفعالة:</h4>
                  <p className="text-muted-foreground" data-testid={`active-ingredient-${index}`}>
                    {drug.activeIngredientArabic}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">الجرعة الموصى بها:</h4>
                  <p className="text-muted-foreground" data-testid={`dosage-${index}`}>
                    {drug.dosageArabic}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">دواعي الاستعمال:</h4>
                  <p className="text-muted-foreground" data-testid={`indications-${index}`}>
                    {drug.indicationsArabic}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">الشركة المصنعة:</h4>
                  <p className="text-muted-foreground" data-testid={`manufacturer-${index}`}>
                    {drug.manufacturerArabic}
                  </p>
                </div>
              </div>

              {/* Side Effects Section */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-card-foreground mb-4 text-center">الآثار الجانبية</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="severity-mild rounded-xl p-4">
                    <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      {getSeverityIcon('mild')}
                      {getSeverityTitle('mild')}
                    </h5>
                    <ul className="text-sm text-green-700 space-y-1" data-testid={`side-effects-mild-${index}`}>
                      {drug.sideEffects.mild.map((effect, effectIndex) => (
                        <li key={effectIndex}>• {effect}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="severity-moderate rounded-xl p-4">
                    <h5 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                      {getSeverityIcon('moderate')}
                      {getSeverityTitle('moderate')}
                    </h5>
                    <ul className="text-sm text-orange-700 space-y-1" data-testid={`side-effects-moderate-${index}`}>
                      {drug.sideEffects.moderate.map((effect, effectIndex) => (
                        <li key={effectIndex}>• {effect}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="severity-severe rounded-xl p-4">
                    <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      {getSeverityIcon('severe')}
                      {getSeverityTitle('severe')}
                    </h5>
                    <ul className="text-sm text-red-700 space-y-1" data-testid={`side-effects-severe-${index}`}>
                      {drug.sideEffects.severe.map((effect, effectIndex) => (
                        <li key={effectIndex}>• {effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Doctor Advice Section */}
              <div className="doctor-advice-bg rounded-2xl p-6 border-2 border-purple-200">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <img 
                    src={doctorAvatar} 
                    alt="استشاري طبي محترف" 
                    className="w-20 h-20 rounded-full border-4 border-purple-400 flex-shrink-0 object-cover"
                    data-testid={`doctor-image-${index}`}
                  />
                  
                  <div className="bg-white rounded-2xl p-4 flex-1 shadow-lg relative">
                    <div className="absolute -right-2 top-6 w-0 h-0 border-l-8 border-l-white border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                    <h5 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                      👨‍⚕️ نصيحة طبية
                    </h5>
                    <p className="text-gray-700 leading-relaxed" data-testid={`doctor-advice-${index}`}>
                      {drug.warningsArabic}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drug Image */}
            {drug.imageUrl && (
              <div className="lg:w-1/3">
                <img 
                  src={drug.imageUrl} 
                  alt={`صورة دواء ${drug.nameArabic}`}
                  className="w-full h-64 lg:h-full object-cover rounded-2xl shadow-lg"
                  data-testid={`drug-image-${index}`}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResultsSection;
