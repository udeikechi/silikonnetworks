import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Silikon Networks | Energy • Trade • Software",
    template: "%s | Silikon Networks",
  },
  description:
    "Silikon Networks delivers next-gen mobility, energy, trade and software solutions — ride-hailing platforms, solar installations, global import/export services, and custom mobile & web applications.",
  metadataBase: new URL("https://www.silikonnetworks.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="sn-page">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
