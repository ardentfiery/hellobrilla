import { Inter, Montserrat } from "next/font/google";
import { DashProvider } from "@/context/DashboardContext";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Dashboard - Brilla System",
  description: "Dashboard Of The Brilla System!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DashProvider>
        <body className={montserrat.className}>{children}</body>
      </DashProvider>
    </html>
  );
}
