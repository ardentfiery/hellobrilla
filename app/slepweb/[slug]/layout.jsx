import "rsuite/dist/rsuite.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
