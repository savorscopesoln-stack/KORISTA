"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type Selections = Record<string, string[]>; // service label -> selected item names

type QuoteContextValue = {
  selections: Selections;
  toggleItem: (serviceLabel: string, itemName: string) => void;
  isSelected: (serviceLabel: string, itemName: string) => boolean;
  clearAll: () => void;
  summary: string;
  totalSelected: number;
  primaryService: string | null;
  /** Bumped only when the person deliberately sends their picks to the quote
   * form, so mid-browsing checkbox clicks don't clobber anything they've
   * already started typing in the form. */
  seedVersion: number;
  sendToQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [selections, setSelections] = useState<Selections>({});
  const [seedVersion, setSeedVersion] = useState(0);

  function toggleItem(serviceLabel: string, itemName: string) {
    setSelections((prev) => {
      const current = new Set(prev[serviceLabel] ?? []);
      if (current.has(itemName)) {
        current.delete(itemName);
      } else {
        current.add(itemName);
      }
      const next = { ...prev };
      if (current.size === 0) {
        delete next[serviceLabel];
      } else {
        next[serviceLabel] = Array.from(current);
      }
      return next;
    });
  }

  function isSelected(serviceLabel: string, itemName: string) {
    return Boolean(selections[serviceLabel]?.includes(itemName));
  }

  function clearAll() {
    setSelections({});
  }

  const summary = useMemo(() => {
    const groups = Object.entries(selections);
    if (groups.length === 0) return "";
    return groups.map(([service, items]) => `${service}: ${items.join(", ")}`).join("\n");
  }, [selections]);

  const totalSelected = useMemo(
    () => Object.values(selections).reduce((sum, items) => sum + items.length, 0),
    [selections]
  );

  const primaryService = Object.keys(selections)[0] ?? null;

  function sendToQuote() {
    setSeedVersion((v) => v + 1);
  }

  return (
    <QuoteContext.Provider
      value={{
        selections,
        toggleItem,
        isSelected,
        clearAll,
        summary,
        totalSelected,
        primaryService,
        seedVersion,
        sendToQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within a QuoteProvider");
  return ctx;
}
