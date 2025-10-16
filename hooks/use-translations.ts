'use client';

import React, { useContext, createContext, useState, useEffect, ReactNode } from 'react';
import { getTranslations, defaultLocale, locales, getTranslationValue } from '@/i18n';

type TranslationsContextType = {
  t: (key: string) => string;
  locale: string;
  setLocale: (locale: string) => void;
};

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

// 使用React.FC明确指定这是一个React函数组件
export const TranslationsProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [locale, setLocaleState] = useState(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // 从localStorage获取语言设置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('language');
      if (savedLocale && locales.includes(savedLocale)) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  // 加载翻译
  useEffect(() => {
    const loadTranslations = async () => {
      const messages = await getTranslations(locale);
      setTranslations(messages);
    };
    
    loadTranslations();
  }, [locale]);

  // 设置语言并保存到localStorage
  const setLocale = (newLocale: string) => {
    if (locales.includes(newLocale)) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLocale);
      }
      setLocaleState(newLocale);
    }
  };

  // 翻译函数
  const t = (key: string) => {
    // 如果翻译尚未加载完成，返回键名
    if (Object.keys(translations).length === 0) {
      return key;
    }
    return getTranslationValue(translations, key);
  };

  // 使用对象字面量直接作为value属性值
  return React.createElement(
    TranslationsContext.Provider,
    { value: { t, locale, setLocale } },
    children
  );
};

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
}