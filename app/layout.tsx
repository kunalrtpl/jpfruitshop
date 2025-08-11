// src/app/layout.tsx
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* Header stays centered */}
        <header className="container mx-auto">
          <Header />
        </header>

        {/* Main content fills width for things like gradients */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer stays centered */}
       <Footer />
      </body>
    </html>
  );
}
