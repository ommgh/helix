import { Toaster } from "@/src/components/ui/sonner";
import "@/src/styles/globals.css";
import { aeonik, cn, generateMetadata, inter } from "@/src/utils";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
          aeonik.variable,
          inter.variable
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        {children}
      </body>
    </html>
  );
}
