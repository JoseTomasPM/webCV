import "../styles/globals.css";
export const metadata = {
  title: "Jose Tomas web/cv",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <footer className="fixed bottom-0 w-full">          

          <a href="https://wa.me/34622748476" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="white" width="20" height="20">
              <title>WhatsApp</title>
              <path d="M12.004 0C5.371 0 0 5.373 0 12c0 2.11.551 4.185 1.59 6.006L.056 24l6.134-1.575A11.936 11.936 0 0012.004 24C18.629 24 24 18.627 24 12S18.629 0 12.004 0zm6.808 17.264c-.297.84-1.507 1.552-2.063 1.632-.527.08-1.188.113-1.91-.123-.438-.14-1.002-.328-1.731-.637-3.06-1.294-5.086-4.384-5.245-4.59-.155-.203-1.252-1.66-1.252-3.166 0-1.506.794-2.247 1.08-2.554.264-.293.698-.427 1.11-.427.132 0 .248.007.354.013.31.013.465.03.67.52.26.625.885 2.157.963 2.312.08.155.132.33.04.533-.09.203-.134.33-.25.5-.115.17-.244.38-.347.51-.115.132-.24.277-.103.54.132.264.584.95 1.252 1.54.86.767 1.584 1.003 1.85 1.115.264.113.42.095.576-.057.14-.145.662-.773.84-1.04.178-.264.352-.22.59-.132.236.087 1.49.702 1.75.83.26.128.43.19.49.295.06.102.06.606-.238 1.446z"/>
            </svg>
            WhatsApp
          </a> <br />

          <a href="mailto:perezm.josetomas@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="white" width="20" height="20">
              <title>Gmail</title>
              <path d="M0 3.998A2 2 0 012 2h20a2 2 0 012 1.998v16.004A2 2 0 0122 22H2a2 2 0 01-2-2.002V3.998zm11.991 7.727l8.228-5.592A.3.3 0 0020 5H4a.3.3 0 00-.22.133l8.21 5.592zm.553.957l8.44 5.567A.3.3 0 0022 18V7.408l-9.456 6.274zm-1.104 0L2 7.408V18c0 .105.053.202.144.252l8.44-5.567z"/>
            </svg>
            Gmail
          </a>  <br />
        </footer>
      </body>      
    </html>
  );
}