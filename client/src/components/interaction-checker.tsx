import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { AlertTriangle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InteractionChecker = () => {
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");
  const [interactionResult, setInteractionResult] = useState<any>(null);
  const { toast } = useToast();

  const interactionMutation = useMutation({
    mutationFn: async ({ drug1Name, drug2Name }: { drug1Name: string; drug2Name: string }) => {
      const response = await apiRequest("POST", "/api/drugs/interactions", {
        drug1Name,
        drug2Name,
      });
      return await response.json();
    },
    onSuccess: (data) => {
      setInteractionResult(data);
      toast({
        title: "تم فحص التفاعلات",
        description: data.message,
      });
    },
    onError: (error) => {
      toast({
        title: "خطأ في فحص التفاعلات",
        description: "حدث خطأ أثناء فحص التفاعلات. حاول مرة أخرى.",
        variant: "destructive",
      });
      console.error("Interaction check error:", error);
    },
  });

  const handleInteractionCheck = () => {
    if (drug1.trim() && drug2.trim()) {
      interactionMutation.mutate({ drug1Name: drug1, drug2Name: drug2 });
    }
  };

  return (
    <section className="glass-card rounded-3xl p-8 mb-12 shadow-2xl" id="interactions">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="interaction-title">
        فاحص تفاعل الأدوية
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-lg font-semibold text-foreground mb-3">
              الدواء الأول
            </label>
            <input 
              type="text" 
              value={drug1}
              onChange={(e) => setDrug1(e.target.value)}
              className="w-full p-4 border-2 border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-ring/20 outline-none transition-all duration-300 text-right"
              placeholder="أدخل اسم الدواء الأول"
              data-testid="input-drug1"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-foreground mb-3">
              الدواء الثاني
            </label>
            <input 
              type="text" 
              value={drug2}
              onChange={(e) => setDrug2(e.target.value)}
              className="w-full p-4 border-2 border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-ring/20 outline-none transition-all duration-300 text-right"
              placeholder="أدخل اسم الدواء الثاني"
              data-testid="input-drug2"
            />
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleInteractionCheck}
            disabled={interactionMutation.isPending || !drug1.trim() || !drug2.trim()}
            className="px-12 py-4 medical-gradient text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-check-interactions"
          >
            {interactionMutation.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <AlertTriangle className="w-5 h-5" />
            )}
            فحص التفاعلات
          </button>
        </div>

        {/* Interaction Results */}
        {interactionResult && (
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl" data-testid="interaction-results">
            {interactionResult.interaction ? (
              <>
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  تحذير: تفاعل محتمل بين الأدوية
                </h3>
                <p className="text-yellow-700 mb-4" data-testid="interaction-description">
                  {interactionResult.interaction.descriptionArabic}
                </p>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">التوصيات:</h4>
                  <p className="text-yellow-700" data-testid="interaction-recommendations">
                    {interactionResult.interaction.recommendationsArabic}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center justify-center gap-2">
                  ✅ لا توجد تفاعلات معروفة
                </h3>
                <p className="text-green-700" data-testid="no-interaction-message">
                  لا توجد تفاعلات معروفة بين {interactionResult.drug1} و {interactionResult.drug2}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractionChecker;
