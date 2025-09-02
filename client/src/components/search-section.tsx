import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { type Drug } from "@shared/schema";
import { Search, Camera, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SearchSectionProps {
  onSearchResults: (results: Drug[]) => void;
}

const SearchSection = ({ onSearchResults }: SearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const searchMutation = useMutation({
    mutationFn: async (query: string) => {
      const response = await apiRequest("GET", `/api/drugs/search?q=${encodeURIComponent(query)}`);
      return await response.json();
    },
    onSuccess: (data) => {
      onSearchResults(data.drugs);
      if (data.drugs.length === 0) {
        toast({
          title: "لا توجد نتائج",
          description: "لم يتم العثور على الدواء المطلوب. جرب البحث بكلمات أخرى.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "خطأ في البحث",
        description: "حدث خطأ أثناء البحث. حاول مرة أخرى.",
        variant: "destructive",
      });
      console.error("Search error:", error);
    },
  });

  const imageAnalysisMutation = useMutation({
    mutationFn: async (file: File) => {
      // In a real implementation, this would upload the image for analysis
      const response = await apiRequest("POST", "/api/drugs/analyze-image");
      return await response.json();
    },
    onSuccess: (data) => {
      if (data.drug) {
        onSearchResults([data.drug]);
        toast({
          title: "تم تحليل الصورة بنجاح",
          description: `تم التعرف على الدواء: ${data.drug.nameArabic}`,
        });
      }
    },
    onError: (error) => {
      toast({
        title: "خطأ في تحليل الصورة",
        description: "لم نتمكن من التعرف على الدواء في الصورة. جرب صورة أوضح.",
        variant: "destructive",
      });
      console.error("Image analysis error:", error);
    },
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchMutation.mutate(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      imageAnalysisMutation.mutate(file);
    }
  };

  const isLoading = searchMutation.isPending || imageAnalysisMutation.isPending;

  return (
    <section className="glass-card rounded-3xl p-8 mb-12 shadow-2xl" id="search">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="search-title">
        ابحث عن دواء
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 p-4 border-2 border-border rounded-2xl text-lg focus:border-primary focus:ring-4 focus:ring-ring/20 outline-none transition-all duration-300 text-right"
            placeholder="ادخل اسم الدواء (مثل: بانادول، أدفيل، أوجمنتين...)"
            data-testid="input-drug-search"
          />
          <button 
            onClick={handleSearch}
            disabled={isLoading || !searchQuery.trim()}
            className="px-8 py-4 medical-gradient text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-search"
          >
            {searchMutation.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            بحث
          </button>
          <button 
            onClick={handleCameraClick}
            disabled={isLoading}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-camera"
          >
            {imageAnalysisMutation.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Camera className="w-5 h-5" />
            )}
            تصوير
          </button>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef}
          accept="image/*" 
          className="hidden" 
          onChange={handleImageUpload}
          data-testid="input-camera-file"
        />
        
        {isLoading && (
          <div className="text-center py-8" data-testid="loading-indicator">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full spin mx-auto mb-4"></div>
            <p className="text-primary text-lg font-medium">جاري البحث والتحليل...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
