

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MuseDash from "./pages/MuseDash";
import CensusEDA from "./pages/CensusEDA";
import CaseStudy2836 from "./pages/CaseStudy2836";
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Project Detail Pages */}
          <Route path="/projects/musedash" element={<MuseDash />} />
          <Route path="/projects/census-eda" element={<CensusEDA />} />
          <Route path="/projects/2836-case-study" element={<CaseStudy2836 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
