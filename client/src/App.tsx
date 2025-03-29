import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { Home } from "./pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog"; // Import the Blog page component
import { Navbar } from "./components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-dark-300 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/team" component={Team} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} /> {/* Added Blog route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

export default App;