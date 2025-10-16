'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 支持的语言列表
export const locales = ['en', 'zh'];
export const defaultLocale = 'en';

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 从localStorage获取语言设置，如果没有则使用默认语言
  const [locale, setLocaleState] = useState(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // 加载翻译文件
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // 动态导入翻译文件
        const messages = await import(`../messages/${locale}/index.json`);
        setTranslations(messages.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  // 从localStorage获取语言设置，确保在客户端执行
  useEffect(() => {
    // 确保代码只在客户端执行
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('language');
      if (savedLocale && locales.includes(savedLocale)) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  // 设置语言并保存到localStorage
  const setLocale = (newLocale: string) => {
    if (locales.includes(newLocale)) {
      // 确保代码只在客户端执行
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLocale);
      }
      setLocaleState(newLocale);
      
      // 强制刷新页面以确保所有组件获取新的语言设置
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    }
  };

  // 翻译函数
  const t = (key: string) => {
    // 使用嵌套键支持，如 "nav.home"
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // 如果找不到翻译，返回键名
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};