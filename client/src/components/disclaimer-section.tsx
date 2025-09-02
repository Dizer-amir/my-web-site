import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="glass-card rounded-3xl p-8 mb-12 shadow-2xl border-2 border-yellow-400">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-3" data-testid="disclaimer-title">
          <AlertTriangle className="w-8 h-8 text-yellow-600" />
          إخلاء مسؤولية طبية
        </h2>
        <div className="max-w-4xl mx-auto text-right space-y-4 text-muted-foreground">
          <p className="leading-relaxed" data-testid="disclaimer-warning">
            <strong>تنبيه مهم:</strong> المعلومات المقدمة في هذا التطبيق هي لأغراض تعليمية وإعلامية فقط ولا تُعتبر بديلاً عن الاستشارة الطبية المهنية أو التشخيص أو العلاج.
          </p>
          <p className="leading-relaxed" data-testid="disclaimer-consultation">
            <strong>استشارة طبية:</strong> يجب دائماً استشارة طبيب مختص أو صيدلي مؤهل قبل بدء أو تغيير أو إيقاف أي علاج دوائي. لا تتجاهل النصائح الطبية المهنية أو تؤخر طلبها بسبب المعلومات التي تحصل عليها من هذا التطبيق.
          </p>
          <p className="leading-relaxed" data-testid="disclaimer-emergency">
            <strong>حالات الطوارئ:</strong> في حالة الطوارئ الطبية، اتصل فوراً بخدمات الطوارئ المحلية أو اذهب إلى أقرب مستشفى.
          </p>
          <p className="leading-relaxed" data-testid="disclaimer-accuracy">
            <strong>دقة المعلومات:</strong> نسعى لتوفير معلومات دقيقة ومحدثة، لكننا لا نضمن اكتمال أو دقة أو موثوقية المعلومات المقدمة. المعلومات عرضة للتغيير دون إشعار مسبق.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
