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
          toastOptions={{
            className: "toast-custom",
          }}
        />
        {children}
      </body>
    </html>
  );
}
