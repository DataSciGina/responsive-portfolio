import { getTranslations } from '@/src/lib/getTranslations'

interface PageProps {
  params: { lang: 'en' | 'es' }
}


export default async function Home({ params }: PageProps) {
  const t = await getTranslations(await params.lang)

  return (
      <main className="flex flex-col gap-8 row-start-2 items-center">
       <h1 className="text-6xl">{t.hero.title_first_part}</h1>
       <h2 className="text-2xl">{t.hero.description}</h2>
      </main>  
  );
}
