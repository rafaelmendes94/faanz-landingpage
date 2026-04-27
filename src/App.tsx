import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Register from "./pages/Register.tsx";
import Welcome from "./pages/Welcome.tsx";
import Home from "./pages/Home.tsx";
import Invest from "./pages/Invest.tsx";
import Property from "./pages/Property.tsx";
import Checkout from "./pages/Checkout.tsx";
import Success from "./pages/Success.tsx";
import Projetos from "./pages/Projetos.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Bonificacao from "./pages/Bonificacao.tsx";
import Planos from "./pages/Planos.tsx";
import Indique from "./pages/Indique.tsx";
import Notificacoes from "./pages/Notificacoes.tsx";
import Suporte from "./pages/Suporte.tsx";
import Perfil from "./pages/Perfil.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/property/:id?" element={<Property />} />
          <Route path="/checkout/:id?" element={<Checkout />} />
          <Route path="/success/:id?" element={<Success />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjectDetail />} />
          <Route path="/bonificacao" element={<Bonificacao />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/indique" element={<Indique />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/landing-page" element={<LandingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
