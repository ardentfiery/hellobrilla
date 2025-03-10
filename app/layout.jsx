import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Brilla System",
  description: "Welcome to the world of brilla!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Toaster
        position="top-center"
        showSpinner={false}
        height={10}
        color="#F97316"
        shadow="0 0 10px #2299dd, 0 0 5px #f97316"
        />
        {children}
      </body>
    </html>
  );
}
