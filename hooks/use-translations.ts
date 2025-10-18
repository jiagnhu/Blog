'use client';

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getTranslations, defaultLocale, locales, getTranslationValue } from '@/i18n';
import defaultMessages from '@/messages/en/index.json';

type Messages = Record<string, unknown>;

type TranslationsContextType = {
  t: (key: string) => string;
  locale: string;
  setLocale: (locale: string) => void;
};

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

export function TranslationsProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(defaultLocale);
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  useEffect(() => {
    const savedLocale =
      typeof window !== 'undefined' ? localStorage.getItem('language') : null;

    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadTranslations = async () => {
      const nextMessages = await getTranslations(locale);
      if (isMounted) {
        setMessages(nextMessages);
      }
    };

    loadTranslations();

    return () => {
      isMounted = false;
    };
  }, [locale]);

  const setLocale = useCallback((nextLocale: string) => {
    if (!locales.includes(nextLocale)) return;

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', nextLocale);
    }

    setLocaleState(nextLocale);
  }, []);

  const t = useMemo(() => {
    return (key: string) => getTranslationValue(messages, key);
  }, [messages]);

  const value = useMemo(
    () => ({
      t,
      locale,
      setLocale,
    }),
    [t, locale, setLocale],
  );

  return createElement(TranslationsContext.Provider, { value }, children);
}

export function useTranslations() {
  const context = useContext(TranslationsContext);

  if (!context) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }

  return context;
}
