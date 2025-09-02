import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSearchSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Search drugs endpoint
  app.get("/api/drugs/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ error: "Query parameter 'q' is required" });
      }

      const drugs = await storage.searchDrugs(query);
      
      // Log the search
      await storage.createSearch({
        query,
        drugId: drugs.length > 0 ? drugs[0].id : null,
        method: "text"
      });

      res.json({ drugs });
    } catch (error) {
      console.error("Search error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get drug by ID
  app.get("/api/drugs/:id", async (req, res) => {
    try {
      const drug = await storage.getDrug(req.params.id);
      if (!drug) {
        return res.status(404).json({ error: "Drug not found" });
      }
      res.json({ drug });
    } catch (error) {
      console.error("Get drug error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Check drug interactions
  app.post("/api/drugs/interactions", async (req, res) => {
    try {
      const { drug1Name, drug2Name } = req.body;
      
      if (!drug1Name || !drug2Name) {
        return res.status(400).json({ error: "Both drug names are required" });
      }

      // Find drugs by name
      const drugs1 = await storage.searchDrugs(drug1Name);
      const drugs2 = await storage.searchDrugs(drug2Name);
      
      if (drugs1.length === 0 || drugs2.length === 0) {
        return res.json({ 
          interaction: null, 
          message: "لم يتم العثور على أحد الأدوية المدخلة" 
        });
      }

      const drug1 = drugs1[0];
      const drug2 = drugs2[0];
      
      const interaction = await storage.checkDrugInteraction(drug1.id, drug2.id);
      
      res.json({ 
        interaction,
        drug1: drug1.nameArabic,
        drug2: drug2.nameArabic,
        message: interaction ? "تم العثور على تفاعل محتمل" : "لا توجد تفاعلات معروفة"
      });
    } catch (error) {
      console.error("Interaction check error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Image analysis endpoint (mock implementation)
  app.post("/api/drugs/analyze-image", async (req, res) => {
    try {
      // In a real implementation, this would use image recognition APIs
      // For now, return a mock drug result
      const mockDrug = await storage.getDrug("panadol-extra");
      
      if (mockDrug) {
        await storage.createSearch({
          query: "image_analysis",
          drugId: mockDrug.id,
          method: "image"
        });
      }

      res.json({ 
        drug: mockDrug,
        confidence: 0.95,
        message: "تم تحليل الصورة بنجاح"
      });
    } catch (error) {
      console.error("Image analysis error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all drugs
  app.get("/api/drugs", async (req, res) => {
    try {
      const drugs = await storage.getAllDrugs();
      res.json({ drugs });
    } catch (error) {
      console.error("Get all drugs error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get recent searches
  app.get("/api/searches/recent", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const searches = await storage.getRecentSearches(limit);
      res.json({ searches });
    } catch (error) {
      console.error("Get recent searches error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
