import { useTranslation } from "react-i18next";

type NavItem = {
  id: string;
};

export default function Navigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) {
  const { t, i18n } = useTranslation();

  const items: NavItem[] = [
    { id: "partida" },
    { id: "misiones" },
    { id: "skills" },
    { id: "config" },
  ];

  return (
    <nav className="flex flex-wrap gap-2 p-4 justify-center items-center">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`nav-button ${
            activeSection === item.id
              ? "nav-button-active"
              : "nav-button-inactive"
          }`}
        >
          {t(`nav.${item.id}`)}
        </button>
      ))}

      <div className="flex items-center ml-4">
        <button
          onClick={() => {
            i18n.changeLanguage("es");
            localStorage.setItem("lang", "es");
          }}
          className={`language-button ${i18n.language === "es" ? "language-button-active" : ""}`}
          >
            ES
        </button>

        <button
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
          }}
          className={`language-button ${i18n.language === "en" ? "language-button-active" : ""}`}
          >
            EN
        </button>
      </div>


    </nav>
  );
}
