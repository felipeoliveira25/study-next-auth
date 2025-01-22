import "./globals.css";
import NextAuthSessionProvider from "./providers/sessionProvider";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          {children}
        </NextAuthSessionProvider>

      </body>
    </html>
  );
}
