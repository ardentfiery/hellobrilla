import { Inter, Montserrat } from "next/font/google";
import { DashProvider } from "@/context/DashboardContext";
import "../globals.css"
import "react-calendar/dist/Calendar.css";
const montserrat = Montserrat({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Dashboard - Brilla System",
  description: "Dashboard Of The Brilla System!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DashProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            className: "toast-custom",
          }}
        />
        <body className={montserrat.className}>{children}</body>
      </DashProvider>
    </html>
  );
}
