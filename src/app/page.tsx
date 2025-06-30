// src/app/page.tsx
"use client";
import "@/i18n";
import { useState } from "react";
import Navigation from "@/app/components/Navigation";
import Section from "@/app/components/Section";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "@/i18n";
import MissionItem from "@/app/components/MissionItem";




export default function Home() {
  const [activeSection, setActiveSection] = useState("partida");
  const { t } = useTranslation();


  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);



  return (
    <main className="min-h-screen p-4">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === "partida" && (
        <Section title={t("sections.partida.title")}>
          <p>{t("sections.partida.description")}</p>
        </Section>
      )}

      {activeSection === "misiones" && (
        <Section title={t("sections.misiones.title")}>
          <MissionItem title={t("sections.misiones.items.P1")} progress={90} link="https://github.com/JoseTomasPM/ColorPaletteApp"  />
          <MissionItem title={t("sections.misiones.items.P2")} progress={60} link="https://github.com/JoseTomasPM/FaviconMaker" />
          <MissionItem title={t("sections.misiones.items.P3")} progress={99} link="https://github.com/JoseTomasPM/webcv" />          
        </Section>
      )}

      {activeSection === "skills" && (
        <Section title={t("sections.skills.title")}>
          <p>{t("sections.skills.description") 
            .split("\n")
            .map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}</p>
        </Section>
      )}

      {activeSection === "config" && (
        <Section title={t("sections.config.title")}>
          <p>
            <a className="pixel-link" href="https://github.com/JoseTomasPM" target="_blank">
              {t("sections.config.github")}
            </a>{" "}
            |{" "}
            <a className="pixel-link"  download="JoséTomás_Pérez_Martínez_CV.pdf">
              {t("sections.config.cv")}
            </a>
          </p>
        </Section>
      )}
    </main>
  );
}
