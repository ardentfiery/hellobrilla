
import "rsuite/dist/rsuite.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PaginaProvider } from "../../../context/PaginaContext";
import { Inter, Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <PaginaProvider>
          
          <Navbar />
          {children}
          <Footer />
        </PaginaProvider>
      </body>
    </html>
  );
}
