import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin McCombs Salary: Starting Pay by Major + Top Employers (2026)';
const DESCRIPTION = 'UT Austin McCombs BBA graduates: median starting salary by major - Finance $85K-$110K, MIS $85K-$110K, Accounting $70K-$85K, Marketing $65K-$85K. Top employers: Goldman Sachs, JPMorgan, McKinsey, Deloitte, Big 4.';
const PATH = '/ut-austin-mccombs-salary';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the average starting salary for UT McCombs graduates?', a: 'UT McCombs BBA graduates report median starting salary of $75,000-$95,000 across all majors, with significant variation. Finance and MIS graduates: $85,000-$110,000 base. Accounting graduates: $70,000-$85,000 with strong Big 4 placement. Marketing and Management graduates: $65,000-$85,000. Supply Chain Management: $70,000-$90,000. Business Honors Program (BHP) graduates typically earn 15-25% more than non-BHP McCombs graduates due to elite placement.' },
  { q: 'What are the top employers of UT McCombs graduates?', a: 'Top McCombs employers: Big 4 accounting (Deloitte, EY, PwC, KPMG - enormous UT pipeline). Top consulting (McKinsey, Bain, BCG, Deloitte Consulting, Accenture). Investment banks (Goldman Sachs, JPMorgan, Morgan Stanley, Citi). Texas corporate (Dell, ExxonMobil, AT&T, ConocoPhillips). Tech companies increasingly recruiting McCombs (Apple, Google, Meta, Amazon for business development, product, marketing roles).' },
  { q: 'What McCombs major pays the most?', a: 'Highest-paying McCombs majors: Finance ($85K-$110K starting for investment banking and asset management roles); MIS ($85K-$110K for tech consulting and IT strategy); Supply Chain Management ($70K-$90K for operations and consulting). Accounting is stable but lower starting ($70K-$85K) with steady career progression through Big 4 partner track.' },
  { q: 'How much does a UT McCombs graduate make after 5 years?', a: 'By year 5 post-graduation: Investment banking $175K-$275K (VP track); consulting associate to manager $150K-$225K; Big 4 senior/manager $100K-$150K; corporate finance $110K-$160K; MBA-track graduates entering top MBA programs. McCombs students who pursue MBA at Harvard, Wharton, Booth, Stanford GSB typically add $250K-$400K to their post-MBA compensation.' },
  { q: 'Do UT McCombs BHP graduates earn more?', a: 'Yes. Business Honors Program (BHP) graduates typically earn 15-25% more than non-BHP McCombs graduates due to (1) more selective admission (higher-academic profile); (2) tighter Plan II Honors + BHP network; (3) priority placement at top investment banks and consulting firms; (4) faster promotion trajectory. Typical BHP starting comp: $95K-$130K vs $75K-$95K for non-BHP McCombs.' },
  { q: 'Do McCombs internships pay well?', a: 'Yes. McCombs internships at investment banks, top consulting, and Big 4: $7,000-$12,000/month base plus $1,500-$3,000/month housing stipend. Total 12-week summer: $30,000-$45,000. Wall Street investment banking internships are highest-paying; Big 4 accounting internships lower ($5,500-$7,500/month) but very high volume.' },
  { q: 'How does UT McCombs salary compare to Kelley (Indiana) or Ross (Michigan)?', a: 'For undergraduate business, McCombs, Kelley, Ross, and other top-10 undergraduate programs place at similar tiers. Investment banking pay is nearly identical across all top-10 programs ($100K-$110K base plus signing). Consulting pay similar. Regional differences: McCombs stronger in Bay Area tech and Texas corporate; Kelley stronger in Chicago and Midwest finance; Ross stronger in Detroit corporate and Big Ten alumni network. For most graduates, school choice matters less than firm choice.' },
  { q: 'Is UT McCombs worth the out-of-state tuition?', a: 'Yes for most students. Four-year OOS tuition at McCombs: ~$205,000 at full sticker (higher due to differential). Median starting salary: $75K-$110K depending on major. Tuition payback: 2-3 years of post-graduation earnings. With Texas residency pathway, tuition drops to ~$60K over 4 years; payback under 1 year. Combined with strong career outcomes, McCombs ROI is among the best undergraduate business programs.' },
];

export default function McCombsSalaryPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin McCombs Salary', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin McCombs · Salary + outcomes"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin McCombs Salary</h1>}
        lede="McCombs BBA graduate starting salaries by major, top employers by industry, and 5-year career progression. Finance to Investment Banking to VP track."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="McCombs starting pay">
            UT McCombs BBA graduates report median starting salary of <strong>$75,000-$95,000</strong>. By major: <strong>Finance $85K-$110K</strong>; <strong>MIS $85K-$110K</strong>; <strong>Accounting $70K-$85K</strong>; <strong>Marketing $65K-$85K</strong>; <strong>Supply Chain $70K-$90K</strong>. BHP graduates typically 15-25% higher. Top employers: Big 4 accounting, top consulting, investment banks, Texas corporate.
          </QuickAnswer>

          <AuthorBox blurb="Tracks UT Austin McCombs BBA graduate outcomes and industry placement." />

          <h2 className="mt-0">Starting salary by McCombs major</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>BBA Major</th>
                  <th>Median Starting Base</th>
                  <th>Top 25% Base</th>
                  <th>Signing + Bonus</th>
                  <th>Total Year-1</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Finance</td><td className="num">$85K-$110K</td><td className="num">$110K-$130K</td><td className="num">$20K-$50K</td><td className="num">$120K-$180K</td></tr>
                <tr><td>Management Information Systems (MIS)</td><td className="num">$85K-$110K</td><td className="num">$110K-$130K</td><td className="num">$15K-$40K</td><td className="num">$110K-$170K</td></tr>
                <tr><td>Accounting</td><td className="num">$70K-$85K</td><td className="num">$85K-$95K</td><td className="num">$5K-$15K</td><td className="num">$75K-$100K</td></tr>
                <tr><td>Marketing</td><td className="num">$65K-$85K</td><td className="num">$85K-$105K</td><td className="num">$10K-$20K</td><td className="num">$75K-$115K</td></tr>
                <tr><td>Management</td><td className="num">$65K-$85K</td><td className="num">$85K-$110K</td><td className="num">$10K-$20K</td><td className="num">$75K-$120K</td></tr>
                <tr><td>Supply Chain Management</td><td className="num">$70K-$90K</td><td className="num">$90K-$110K</td><td className="num">$10K-$20K</td><td className="num">$80K-$120K</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Business Honors Program (BHP)</strong></td><td className="num"><strong>$95K-$130K</strong></td><td className="num"><strong>$130K-$150K</strong></td><td className="num"><strong>$25K-$60K</strong></td><td className="num"><strong>$130K-$210K</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Top employers by category</h2>

          <h3>Investment banking + Wall Street</h3>
          <ul>
            <li><strong>Goldman Sachs, JPMorgan, Morgan Stanley:</strong> heavy McCombs recruiting</li>
            <li><strong>Citi, Barclays, Deutsche Bank, Credit Suisse (UBS):</strong> established</li>
            <li><strong>Boutiques:</strong> Evercore, Lazard, Moelis, PJT (elite specialty firms)</li>
            <li><strong>Typical role:</strong> Investment Banking Analyst</li>
            <li><strong>Pay:</strong> $110K base + $60K signing + $60K performance bonus year-end = $230K year 1</li>
          </ul>

          <h3>Top-tier consulting</h3>
          <ul>
            <li><strong>McKinsey, Bain, BCG (MBB):</strong> elite consulting; McCombs BHP heavy pipeline</li>
            <li><strong>Deloitte Consulting, Accenture:</strong> tech and strategy consulting</li>
            <li><strong>Booz Allen, Kearney:</strong> government and strategy consulting</li>
            <li><strong>Typical role:</strong> Business Analyst / Associate Consultant</li>
            <li><strong>Pay:</strong> $110K base + $30K signing + $30K bonus = $170K year 1 (MBB)</li>
          </ul>

          <h3>Big 4 accounting</h3>
          <ul>
            <li><strong>Deloitte, EY, PwC, KPMG:</strong> enormous UT McCombs pipeline</li>
            <li><strong>Typical role:</strong> Audit Associate, Tax Associate, Consulting Associate</li>
            <li><strong>Pay:</strong> $75K base + $8K signing = $83K year 1</li>
            <li><strong>Career trajectory:</strong> Senior (year 3), Manager (year 5-6), Senior Manager (year 8), Partner (year 10-12)</li>
          </ul>

          <h3>Texas corporate finance and management</h3>
          <ul>
            <li><strong>Dell, ExxonMobil, AT&amp;T, ConocoPhillips, Phillips 66:</strong> large corporate rotational programs</li>
            <li><strong>McKesson, Kimberly-Clark, Tenet Healthcare:</strong> mid-cap Texas corporate</li>
            <li><strong>Typical role:</strong> Financial Analyst, Rotational Program participant</li>
            <li><strong>Pay:</strong> $75K-$90K base + $10K signing = $85K-$100K year 1</li>
          </ul>

          <h3>Tech (increasingly common)</h3>
          <ul>
            <li><strong>Apple, Google, Meta, Amazon, Microsoft:</strong> hiring McCombs for product management, business development, marketing, corporate finance</li>
            <li><strong>Austin tech (Indeed, Bumble, Dell):</strong> local placement</li>
            <li><strong>Typical role:</strong> Product Manager (rare entry level), Business Development, Rotational Finance</li>
            <li><strong>Pay:</strong> $100K-$130K base + equity for tech roles</li>
          </ul>

          <h2>Long-term earnings trajectory</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Years Post-Graduation</th>
                  <th>Investment Banking Track</th>
                  <th>Consulting Track</th>
                  <th>Big 4 Track</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Year 1 (Analyst)</td><td className="num">$180K-$230K</td><td className="num">$140K-$170K</td><td className="num">$75K-$85K</td></tr>
                <tr><td>Year 3 (Associate)</td><td className="num">$275K-$425K</td><td className="num">$200K-$275K</td><td className="num">$90K-$110K</td></tr>
                <tr><td>Year 5 (Senior Assoc/VP)</td><td className="num">$450K-$700K</td><td className="num">$300K-$425K</td><td className="num">$115K-$140K</td></tr>
                <tr><td>Year 7-10 (VP/Manager)</td><td className="num">$700K-$1.2M</td><td className="num">$450K-$700K</td><td className="num">$150K-$225K</td></tr>
                <tr><td>Year 15 (MD/Partner)</td><td className="num">$1M-$5M+</td><td className="num">$700K-$2M+</td><td className="num">$400K-$1M+ (partner)</td></tr>
              </tbody>
            </table>
          </div>

          <h2>MBA pathway (common McCombs post-graduation move)</h2>
          <p>Approximately 15-25% of McCombs BBAs pursue top MBA programs 3-5 years after graduation. Top destinations: Harvard, Wharton, Booth, Stanford GSB, Kellogg, MIT Sloan, Columbia, McCombs (McCombs MBA). Post-MBA compensation: $180K-$220K base at consulting; $200K-$275K base at investment banking VP roles; $150K-$250K base at tech PM roles. MBA typically adds $80K-$150K to base compensation.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Next steps</h2>
            <ul>
              <li><Link href="/ut-austin-mccombs-admission">McCombs admission</Link>: how to get in</li>
              <li><Link href="/ut-austin-mccombs-tuition">McCombs tuition</Link>: cost breakdown</li>
              <li><Link href="/ut-austin-honors-programs">Business Honors Program</Link>: BHP details</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: outcomes across UT majors</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-mccombs-salary" />
    </>
  );
}
