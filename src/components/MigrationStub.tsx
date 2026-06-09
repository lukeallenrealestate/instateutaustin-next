// Temporary stub for pages whose copy migration is in progress.
// Renders a clean placeholder + link to the static fallback so the build
// can ship while we migrate full pages one at a time.

import Link from 'next/link';

export function MigrationStub({ title, intro, staticFallback }: { title: string; intro?: string; staticFallback?: string }) {
  return (
    <section className="py-24">
      <div className="narrow">
        <p className="eyebrow">Migration in progress</p>
        <h1 className="mt-0">{title}</h1>
        {intro && <p className="text-mid text-lg">{intro}</p>}
        <p className="text-mid">
          The full text of this page is being migrated into the Next.js codebase. In the meantime, you can read the v1 static version, which contains the same substantive content with corrected tuition figures.
        </p>
        {staticFallback && (
          <a href={staticFallback} className="btn" target="_blank" rel="noopener">
            Read on the v1 static site →
          </a>
        )}
        <div className="mt-6">
          <Link href="/" className="btn btn-ghost">Home</Link>{' '}
          <Link href="/faq" className="btn btn-ghost">FAQ</Link>{' '}
          <Link href="/contact" className="btn btn-ghost">Ask a question</Link>
        </div>
      </div>
    </section>
  );
}
