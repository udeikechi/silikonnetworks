"use client";

import { ReactNode, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setQuoteOpen(true)} />
      {children}
      <Footer />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}


