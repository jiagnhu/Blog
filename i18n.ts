export const locales = ['en', 'zh'];
export const defaultLocale = 'en';

// 创建翻译函数
export async function getTranslations(locale: string) {
  try {
    // 动态导入翻译文件
    const messages = await import(`./messages/${locale}/index.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    // 如果加载失败，尝试使用默认语言
    const defaultMessages = await import(`./messages/${defaultLocale}/index.json`);
    return defaultMessages.default;
  }
}

// 创建翻译辅助函数
export function getTranslationValue(messages: Record<string, any>, key: string): string {
  const keys = key.split('.');
  let value = messages;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // 如果找不到翻译，返回键名
    }
  }
  
  return typeof value === 'string' ? value : key;
}
