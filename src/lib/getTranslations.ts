// src/lib/getTranslations.ts
type Lang = 'en' | 'es'
type Translations = Record<string, any>

const modules = {
  en: () => import('../translations/en.json'),
  es: () => import('../translations/es.json'),
}

export async function getTranslations(lang: Lang): Promise<Translations> {
  const mod = await modules[lang]()
  return mod.default
}