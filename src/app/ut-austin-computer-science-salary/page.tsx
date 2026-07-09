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

const TITLE = 'UT Austin Computer Science Salary: Starting Pay + Top Employers (2026)';
const DESCRIPTION = 'UT Austin Computer Science graduates report median starting salary of $115,000-$140,000 base plus $20K-$50K signing bonus plus equity. Top employers: Google, Meta, Apple, Amazon, Microsoft, Stripe. Complete salary breakdown by role and company.';
const PATH = '/ut-austin-computer-science-salary';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the average starting salary for UT Austin Computer Science graduates?', a: 'UT Austin CS graduates report median starting base salary of $115,000-$140,000. Top-quartile graduates (Big Tech, quant trading) exceed $160,000 base. Signing bonuses typically $20,000-$50,000. Equity grants at Big Tech typically $50,000-$200,000+ over four-year vesting. Total first-year compensation for typical UT CS graduate: $150,000-$220,000; top quartile $220,000-$400,000+.' },
  { q: 'Which companies hire UT Austin CS graduates the most?', a: 'Top employers of UT CS graduates: Google (heavy Austin office hiring), Meta, Apple (largest Apple campus outside Cupertino is in Austin), Amazon, Microsoft, Stripe, Palantir. Second tier: Snowflake, Databricks, Roblox, Snap, Tesla. Quant trading: Jane Street, Citadel, Two Sigma, Susquehanna, DRW (very high pay, small hiring). Austin-based: Indeed, Bumble, Cloudflare, Dell, Yeti. Financial services: Bloomberg, Bank of America tech.' },
  { q: 'How does UT CS salary compare to Stanford, MIT, Berkeley CS?', a: 'For Big Tech roles (Google, Meta, Apple, Amazon): entry-level compensation is nearly identical across UT, Stanford, MIT, Berkeley graduates because Big Tech pays by level not by school. UT CS graduates receive comparable offers to peers at top CS programs. Differences show up in: (1) research and PhD placement (Stanford/MIT stronger); (2) quant trading pipeline (Stanford/MIT stronger); (3) startup founding rate (Stanford stronger due to Silicon Valley proximity).' },
  { q: 'How much does a UT Austin Computer Science graduate make after 5 years?', a: 'By year 5 post-graduation: Big Tech senior engineer $250,000-$400,000 total compensation. Staff/principal engineer track by year 7-10: $400,000-$700,000. Engineering manager track: similar. FAANG L5/E5 (senior engineer) is typical at year 4-5 with total comp $300,000-$450,000. Some UT CS grads at quant trading firms exceed $500,000-$1M+ by year 3-5.' },
  { q: 'Do UT Austin CS internships pay well?', a: 'Yes. Top summer internships (Google, Meta, Apple, Amazon, Stripe, Palantir): $7,000-$12,000/month base plus $1,500-$3,000/month housing stipend. Total 12-week summer: $30,000-$45,000. Quant trading internships (Jane Street, Citadel): $12,000-$18,000/month plus housing. Mid-tier tech: $5,000-$7,000/month.' },
  { q: 'What role at UT Austin CS pays the most?', a: 'Highest-paying entry-level roles for UT CS graduates: (1) Quant trading (Jane Street, Citadel, Two Sigma, Susquehanna, DRW): $200,000-$400,000 first-year total comp; small hiring pool. (2) Big Tech ML/AI specialization: $150,000-$200,000 base plus equity. (3) Big Tech infrastructure/systems: $130,000-$170,000 base plus equity. (4) Big Tech generalist: $115,000-$140,000 base plus equity. (5) Traditional software engineering at F500: $85,000-$105,000.' },
  { q: 'Is UT Austin CS worth the out-of-state tuition?', a: 'Yes for most students. Four-year OOS tuition at UT CS: ~$214,000 at full sticker (higher for Computer Science due to differential). Median starting salary: $115K-$140K. Tuition payback: ~1.5-2 years of post-graduation earnings. Lifetime earnings premium vs no degree: $2M-$3.5M for CS graduates. With Texas residency pathway, tuition drops to ~$80K over 4 years; payback under 1 year.' },
  { q: 'Where do UT Austin CS graduates work geographically?', a: 'Approximately 40% Austin/Texas (Austin Apple, Google, Meta, Tesla, Dell, plus startups). 30% Bay Area (San Francisco, San Jose, Menlo Park). 10% Seattle. 10% New York (finance/quant + Big Tech). 10% other (Boston, Los Angeles, remote). The Austin concentration is higher than other top CS programs due to Austin\'s tech industry growth.' },
];

export default function CsSalaryPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin CS Salary', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin CS · Salary + outcomes"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Computer Science Salary</h1>}
        lede="UT Austin Computer Science graduate salaries: median starting $115K-$140K base plus $20K-$50K signing bonus plus equity. Top employers, roles by pay, and 5-year progression."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="UT CS starting pay">
            UT Austin Computer Science graduates report median starting base salary of <strong>$115,000-$140,000</strong>. Top-quartile: <strong>$160,000+</strong> base. Signing bonuses: <strong>$20K-$50K</strong>. Equity grants at Big Tech: <strong>$50K-$200K+</strong> over four-year vesting. Total first-year compensation: <strong>$150K-$220K</strong> typical; <strong>$220K-$400K+</strong> top quartile. Top employers: Google, Meta, Apple, Amazon, Microsoft, Stripe, Palantir, Jane Street.
          </QuickAnswer>

          <AuthorBox blurb="Tracks UT Austin career outcomes across programs including Computer Science placement and compensation." />

          <h2 className="mt-0">UT CS starting salary breakdown</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Role Category</th>
                  <th>Base Salary</th>
                  <th>Signing Bonus</th>
                  <th>Equity (4-year)</th>
                  <th>Total Year-1 Comp</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Big Tech (Google, Meta, Apple, Amazon)</td><td className="num">$115K-$140K</td><td className="num">$20K-$50K</td><td className="num">$100K-$200K</td><td className="num">$160K-$225K</td></tr>
                <tr><td>Big Tech ML/AI specialization</td><td className="num">$140K-$180K</td><td className="num">$25K-$60K</td><td className="num">$150K-$300K</td><td className="num">$210K-$310K</td></tr>
                <tr><td>Second-tier tech (Stripe, Palantir, Snowflake)</td><td className="num">$120K-$150K</td><td className="num">$15K-$40K</td><td className="num">$50K-$150K</td><td className="num">$150K-$225K</td></tr>
                <tr><td>Quant trading (Jane Street, Citadel)</td><td className="num">$175K-$225K</td><td className="num">$50K-$100K</td><td className="num">Cash bonuses</td><td className="num">$225K-$400K+</td></tr>
                <tr><td>Austin-based tech (Indeed, Bumble, Dell)</td><td className="num">$95K-$120K</td><td className="num">$10K-$25K</td><td className="num">$25K-$75K</td><td className="num">$115K-$155K</td></tr>
                <tr><td>Defense/aerospace (Lockheed, SpaceX)</td><td className="num">$90K-$115K</td><td className="num">$5K-$15K</td><td className="num">Varies</td><td className="num">$100K-$135K</td></tr>
                <tr><td>Startups (Series A-C)</td><td className="num">$110K-$140K</td><td className="num">$5K-$25K</td><td className="num">Larger equity</td><td className="num">$120K-$170K</td></tr>
                <tr><td>Traditional software engineering (F500)</td><td className="num">$85K-$105K</td><td className="num">$5K-$15K</td><td className="num">Small</td><td className="num">$95K-$120K</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Top employers of UT Austin CS graduates</h2>

          <h3>Tier 1: Big Tech</h3>
          <ul>
            <li><strong>Google:</strong> heavy Austin office recruiting; UT alumni prominent</li>
            <li><strong>Meta:</strong> Austin engineering office; UT CS pipeline strong</li>
            <li><strong>Apple:</strong> largest Apple campus outside Cupertino is in Austin; UT CS is preferred hiring source</li>
            <li><strong>Amazon:</strong> AWS and retail engineering; hires broadly from UT CS</li>
            <li><strong>Microsoft:</strong> Azure and Microsoft 365 engineering</li>
          </ul>

          <h3>Tier 2: Elite second-tier tech and startups</h3>
          <ul>
            <li><strong>Stripe:</strong> payments infrastructure; competitive UT recruiting</li>
            <li><strong>Palantir:</strong> data engineering and analytics</li>
            <li><strong>Snowflake, Databricks:</strong> data infrastructure</li>
            <li><strong>Tesla (Austin Gigafactory):</strong> autonomy and battery engineering</li>
            <li><strong>Nvidia, AMD:</strong> semiconductor and AI chips</li>
          </ul>

          <h3>Tier 3: Quant trading (small pool, highest pay)</h3>
          <ul>
            <li><strong>Jane Street:</strong> systematic trading; extremely competitive</li>
            <li><strong>Citadel:</strong> multi-strategy hedge fund + Citadel Securities</li>
            <li><strong>Two Sigma:</strong> quantitative fund</li>
            <li><strong>Susquehanna, DRW:</strong> proprietary trading</li>
          </ul>

          <h3>Tier 4: Austin-based tech</h3>
          <ul>
            <li>Indeed, Bumble, Cloudflare, Dell, Yeti, Mr. Cooper, Whole Foods (Amazon)</li>
            <li>Growing Austin startup ecosystem</li>
          </ul>

          <h2>Long-term earnings trajectory</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Years Post-Graduation</th>
                  <th>Typical Total Compensation</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Year 1</td><td className="num">$150K-$220K</td><td>Entry-level SWE at Big Tech</td></tr>
                <tr><td>Year 3</td><td className="num">$200K-$300K</td><td>L4/E4 promotion (mid-level SWE)</td></tr>
                <tr><td>Year 5</td><td className="num">$250K-$400K</td><td>L5/E5 (senior SWE) at Big Tech</td></tr>
                <tr><td>Year 7</td><td className="num">$350K-$550K</td><td>L6/E6 (staff SWE) or engineering manager</td></tr>
                <tr><td>Year 10</td><td className="num">$450K-$800K+</td><td>L7/E7 (senior staff/principal) or director</td></tr>
                <tr><td>Year 15</td><td className="num">$600K-$1.5M+</td><td>Distinguished engineer, VP eng, or CTO</td></tr>
              </tbody>
            </table>
          </div>

          <h2>ROI analysis: UT CS at various tuition scenarios</h2>
          <ul>
            <li><strong>Texas resident, 4-year tuition ~$61,000:</strong> paid back in 6-8 months of Big Tech work</li>
            <li><strong>OOS full sticker, 4-year tuition ~$214,000:</strong> paid back in 2-3 years of Big Tech work</li>
            <li><strong>OOS with residency pathway, 4-year tuition ~$97,000:</strong> paid back in 1-1.5 years of Big Tech work</li>
            <li><strong>Lifetime earnings premium vs no degree:</strong> $2M-$3.5M for CS graduates</li>
          </ul>

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
              <li><Link href="/ut-austin-computer-science-admission">UT CS admission</Link>: how to get in</li>
              <li><Link href="/ut-austin-computer-science-tuition">UT CS tuition</Link>: cost breakdown</li>
              <li><Link href="/ut-austin-internships">UT internships</Link>: CS internship pipeline</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: outcomes across UT majors</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-cs-salary" />
    </>
  );
}
