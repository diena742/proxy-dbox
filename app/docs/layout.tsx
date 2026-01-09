import "./globals.css";

export const metadata = {
  title: "Dramabox API Docs",
  description: "Public Dramabox API Documentation"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
