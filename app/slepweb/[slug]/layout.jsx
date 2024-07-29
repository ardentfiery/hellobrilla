import "rsuite/dist/rsuite.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PaginaProvider } from "@/context/PaginaContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PaginaProvider>
          <Navbar />
          {children}
          <Footer />
        </PaginaProvider>
      </body>
    </html>
  );
}
