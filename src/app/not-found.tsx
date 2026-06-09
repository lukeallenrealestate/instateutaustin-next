import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="mb-4">That page is not here.</h1>
        <p className="text-mid mb-6">It may have moved, or it may never have existed. Here is where you can pick up:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn">Home</Link>
          <Link href="/texas-residency-rules" className="btn btn-ghost">Residency Rules</Link>
          <Link href="/tuition-calculator" className="btn btn-ghost">Tuition Calculator</Link>
          <Link href="/faq" className="btn btn-ghost">FAQ</Link>
        </div>
      </div>
    </section>
  );
}
