"use client";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import Dashboard from "./dash/Dashboard";
import Recursos from "./sleepm/Recursos";
import Tutorials from "./sleepm/Tutorials";
import { useDashContext } from "../../context/DashboardContext";
import Personal from "./personal/Personal";
import Liderazgo from "./liderazgo/Liderazgo";
import Ventas from "./ventas/Ventas";
import Marketing from "./marketing/Marketing";
import Mireto from "./mireto/Mireto";
import { Podcast } from "lucide-react";
import Cursos from "./cursos/Cursos";
import Conferencias from "./conferencias/Conferencias";
import Referidos from "./referidos/Referidos";
import Ganacias from "./ganacias/Ganacias";
import Miperfit from "./miperfit/Miperfit";
import Empresa from "./sleepm/Empresa";
import { useRouter } from "next/navigation";
import MiPaginaSocial from "./sleepm/MiPaginaSocial";

const Right = () => {
  const { activeDashPage, userId } = useDashContext();

  return (
    <div>
      {activeDashPage == 0 ? (
        <Dashboard isActive={activeDashPage === 0} />
      ) : activeDashPage == 1 ? (
        <Personal isActive={activeDashPage === 1} />
      ) : activeDashPage == 2 ? (
        <Liderazgo isActive={activeDashPage === 2} />
      ) : activeDashPage == 3 ? (
        <Ventas isActive={activeDashPage === 3} />
      ) : activeDashPage == 4 ? (
        <Marketing isActive={activeDashPage === 4} />
      ) : activeDashPage == 5 ? (
        <Mireto isActive={activeDashPage === 5} />
      ) : activeDashPage == 6 ? (
        <Podcast isActive={activeDashPage === 6} />
      ) : activeDashPage == 7 ? (
        <Cursos isActive={activeDashPage === 7} />
      ) : activeDashPage == 8 ? (
        <Conferencias isActive={activeDashPage === 8} />
      ) : activeDashPage == 9 ? (
        <Referidos isActive={activeDashPage === 9} />
      ) : activeDashPage == 10 ? (
        <Ganacias isActive={activeDashPage === 10} />
      ) : activeDashPage == 11 ? (
        <Miperfit isActive={activeDashPage === 11} />
      ) : activeDashPage == 12.0 ? (
        <Empresa isActive={activeDashPage === 12.0} />
      ) : activeDashPage == 12.1 ? (
        <Recursos isActive={activeDashPage === 12.1} />
      ) : activeDashPage == 12.2 ? (
        <Tutorials isActive={activeDashPage === 12.2} />
      ) : activeDashPage == 12.3 ? (
        // <Mipagina isActive={activeDashPage === 12.3} />
        window.open(`/slepweb/${userId}`, "_blank")
      ) : activeDashPage == 12.4 ? (
        <MiPaginaSocial isActive={activeDashPage === 12.4} />
      ) : // router.push("/jpayoteiid"):
      null}
    </div>
  );
};

export default Right;
