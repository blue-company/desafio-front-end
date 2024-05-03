import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50">
      <body>{children}</body>
    </html>
  );
}
