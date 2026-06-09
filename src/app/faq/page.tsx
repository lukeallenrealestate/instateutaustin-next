import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, faqPageSchema, articleSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin In-State Tuition FAQ (32 Questions on Texas Residency)';
const DESCRIPTION = 'The complete FAQ for out-of-state families pursuing UT Austin in-state tuition through Texas residency. 32 questions across eligibility, property, documentation, timing, money, and edge cases.';
const PATH = '/faq';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

interface QA { q: string; a: string }

const CATEGORIES: Array<{ id: string; title: string; items: QA[] }> = [
  {
    id: 'eligibility',
    title: 'Eligibility',
    items: [
      { q: 'Who qualifies for in-state tuition at UT Austin?', a: 'Any student who satisfies Texas Education Code §54.052 and the THECB residency rules. The most common qualifying basis is twelve continuous months of domicile in Texas before the term\'s census date, established by either the student personally (independent branch) or the parent who claims the student as a dependent (dependent branch).' },
      { q: 'Is the in-state tuition rate available to all undergraduate majors?', a: 'Yes. The residency-based tuition rate is the same statutory rate across all undergraduate majors, though majors with college-specific differential tuition (Engineering, McCombs, CS) charge that differential on top of the base, and the differential is the same whether you are a Texas resident or not.' },
      { q: 'Does my student need a Texas driver\'s license to qualify for in-state tuition?', a: 'Not strictly required, but extremely helpful evidence on the dependent branch (where the parent\'s license is the key document) and essentially required on the independent branch.' },
      { q: 'What if my student is a U.S. citizen but has lived overseas?', a: 'U.S. citizens establish Texas residency the same way regardless of recent overseas presence. The 12-month domicile clock and the documentary proofs apply.' },
      { q: 'Are international students eligible?', a: 'U.S. permanent residents (green-card holders) and certain qualifying nonimmigrant visa categories establish Texas residency the same way citizens do. F-1 student visa holders generally cannot establish Texas residency for tuition purposes because the visa category presumes a temporary U.S. presence.' },
      { q: 'Does in-state status carry over from undergrad to graduate school at UT?', a: 'If the student maintains Texas residency between programs, yes. If the student leaves Texas for an out-of-state job or graduate program first and then returns, the analysis restarts.' },
    ],
  },
  {
    id: 'property',
    title: 'Property',
    items: [
      { q: 'Do I have to buy property to establish Texas residency?', a: 'No, but property is by far the most common and most robust proof. The THECB rules accept many indicia (employment, business activity, long-term lease, professional licensure) but for out-of-state families the property pathway is the easiest to execute and the hardest to challenge.' },
      { q: 'What is the cheapest property I can buy that still works?', a: 'In the Austin market in 2026, a 1-bedroom condo in West Campus or East Riverside in the $300K-$375K range is the entry point. Below that price you are typically looking at older buildings with HOA red flags or significantly longer commutes.' },
      { q: 'Can I buy raw land instead of an improved property?', a: 'Raw land does not generally satisfy the residency requirement. The THECB rules contemplate property that is part of a family\'s domicile, either a residence or an income-producing asset. Empty land does neither.' },
      { q: 'Does the property have to be in the same city as UT?', a: 'No. Anywhere in Texas works for the legal test. Practically, properties closer to UT serve the student-housing function better.' },
      { q: 'Can my parents buy the property for me?', a: 'On the dependent branch, yes, that is the standard arrangement. The parents own and the student lives there. On the independent branch, the student should ideally be on the deed and the financial provider.' },
      { q: 'How much money do I really need up front?', a: 'For a Rule #3 condo at $450K with 20% down: $90K down, ~$15K closing costs, ~$10K furnishing = ~$115K up-front. Plus carrying-cost reserves for ~6 months. Total $130K-$150K is a realistic minimum.' },
    ],
  },
  {
    id: 'docs',
    title: 'Documentation',
    items: [
      { q: 'What is the single most important document?', a: 'The federal tax return (Form 1040) for the relevant year, filed with a Texas address as the residence of record. It is the most authoritative single statement of the family\'s residency status for that year.' },
      { q: 'Can I use bank statements as proof of Texas residency?', a: 'Bank statements showing a Texas address are useful supporting evidence. They are not sufficient on their own, the residency office wants the foundational proofs (deed, utility bills, license, vehicle, voter, tax return).' },
      { q: 'Do I need original documents or are digital copies fine?', a: 'Digital copies (PDFs) are what the MyStatus portal expects. Original signatures, embossed seals, and certified copies are not typically required.' },
      { q: 'What if I never had a Texas driver\'s license?', a: 'Get one. Or get a Texas ID if maintaining a license elsewhere is necessary for professional reasons. The license/ID with an issuance date 12+ months before the target census date is among the strongest intent evidence available.' },
      { q: 'Can affidavits from neighbors or employers help?', a: 'Affidavits are weak evidence and the residency officer generally does not give them much weight on their own. Rely on documents from third-party institutions, not on affidavits.' },
    ],
  },
  {
    id: 'timing',
    title: 'Timing',
    items: [
      { q: 'When exactly does the 12-month clock start?', a: 'The day all required indicia are simultaneously in place. The required indicia include: real property closed and recorded, utility account active, Texas driver\'s license/ID issued, Texas vehicle registration active, Texas voter registration filed. If those happen on different dates, the clock starts on the latest of them.' },
      { q: 'What if I close on the property but delay getting the driver\'s license?', a: 'The clock waits. The clock starts on the latest of the required indicia. Aim to complete all clock-starting items within 2-3 weeks of closing.' },
      { q: 'Can I petition for in-state status mid-term?', a: 'The classification applies on a per-term basis. A petition received and approved before a term\'s census date applies to that term. A petition received after the census date applies to subsequent terms.' },
      { q: 'How long does the residency office take to decide?', a: 'Typically 2-4 weeks during the normal cycle. Longer in peak periods (July-August). The office sometimes requests additional documents, which restarts the cycle.' },
      { q: 'What if I miss the petition deadline for the target term?', a: 'Petition for the next term. The residency analysis is per-term, a Fall petition that misses the window can be re-filed for the Spring term.' },
    ],
  },
  {
    id: 'money',
    title: 'Money',
    items: [
      { q: 'What is the exact tuition delta for 2025-26?', a: `Approximately ${fmtUSD(TUITION.annualSavings)} per year in the base undergraduate program (${fmtUSD(TUITION.outOfStatePerYear)} non-resident minus ${fmtUSD(TUITION.inStatePerYear)} resident in tuition and required fees at 15 credit hours). In-state tuition is frozen by the Texas Legislature through 2026-27.` },
      { q: 'Does the savings include housing?', a: 'No. Tuition and housing are separate line items on the bill. Residency affects only the statutory tuition portion. Housing costs are the same regardless of residency status.' },
      { q: 'How does financial aid interact with residency?', a: 'UT\'s institutional financial aid (Texas Advance Commitment, Texas Empowerment) is often residency-conditioned, Texas residents get more grant aid than non-residents in many programs. Federal aid (Pell Grant, federal loans) is not residency-conditioned.' },
      { q: 'Are there scholarships that give in-state tuition regardless of residency?', a: 'A handful, most notably the Forty Acres Scholarship, the Terry Scholarship, and certain athletic scholarships. These competitive awards include an in-state tuition waiver as part of the package; recipients pay in-state tuition regardless of legal residency.' },
      { q: 'What is the all-in net cost of the pathway?', a: `Highly variable. For a representative West Campus $475K condo over 4 years of school plus 1 year of post-graduation holding, the carrying cost net of pay-down is roughly $140K-$160K. Against four years of tuition savings of ${fmtUSD(TUITION.threeYearSavings)}+ and likely property appreciation of $50K-$100K, the net economic outcome is typically modestly positive or close to zero.` },
    ],
  },
  {
    id: 'edge',
    title: 'Edge cases',
    items: [
      { q: 'My parents are divorced, whose state matters?', a: 'On the dependent branch, the parent who claims the student as a federal tax dependent. If the Texas-resident parent claims the student, the family is on solid ground. Form 8332 allows custodial parents to release the dependent claim.' },
      { q: 'My family is military, does that change things?', a: 'Yes, in your favor. Active-duty military assigned to a Texas base, their spouse, and their dependents qualify for in-state tuition regardless of the 12-month clock.' },
      { q: 'My student got an internship in another state, does that interrupt the clock?', a: 'Short summer internships (2-3 months) generally do not interrupt the clock. The student\'s primary domicile remains the Texas address. Longer arrangements (a 6-month co-op) may require additional narrative.' },
      { q: 'What if my student decides to transfer to another school after starting?', a: 'Texas residency for tuition purposes carries to other Texas public institutions if the student stays in Texas. If the student transfers out of state, the residency lapses.' },
      { q: 'What happens if my student takes a leave of absence?', a: 'A leave of absence does not by itself break residency. If the student leaves Texas during the leave and establishes another state\'s domicile, the residency lapses. If the student remains in Texas during the leave, residency is maintained.' },
      { q: 'If we get denied, can we sue UT?', a: 'Practically, no. The Office of Residency Determination is an administrative function. The appeals process within the institution is the proper venue. Litigation is extraordinarily rare and not a workable strategy.' },
      { q: 'I am thinking of using a residency consultant. Is that necessary?', a: 'For most straightforward Rule #3 cases with clean facts, no. The rules are knowable, the checklist is finite, and the petition is essentially a documentary exercise. For unusual cases (prior denials, divorce, military, immigration), a Texas attorney or specialized consultant can be worth the fee.' },
    ],
  },
];

const FLAT_FAQ = CATEGORIES.flatMap(c => c.items);

export default function FaqPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'FAQ', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FLAT_FAQ)} />

      <header className="bg-navy-dk text-paper pt-20 pb-12">
        <div className="narrow">
          <p className="eyebrow !text-gold-lt">Frequently asked questions</p>
          <h1 className="!text-paper">UT Austin In-State Tuition FAQ</h1>
          <p className="text-white/82 text-lg max-w-[60ch] mt-4">
            Thirty-two questions about Texas residency for UT tuition, organized by category. If your question is not here, send it through the <Link href="/contact" className="text-gold-lt">contact form</Link>.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">
          <QuickAnswer label="The 60-second answer">
            UT Austin charges in-state tuition (~{fmtUSD(TUITION.inStatePerYear)}/year) to students whose family demonstrates 12 continuous months of Texas domicile before the term&apos;s census date. The most reliable proof is real-property ownership plus Texas driver&apos;s license, vehicle registration, voter registration, and a federal tax return with a Texas address. The pathway saves about {fmtUSD(TUITION.annualSavings)}/year. Most denials are caused by a federal return filed with the wrong state address, a vehicle still registered in the prior state, or a clock that did not fully run.
          </QuickAnswer>

          <nav className="bg-cream p-5 rounded-md my-7 flex flex-wrap gap-2">
            <strong className="w-full text-xs uppercase tracking-widest text-navy mb-1.5">Jump to a section</strong>
            {CATEGORIES.map(c => (
              <a key={c.id} href={`#${c.id}`}
                className="bg-white px-3.5 py-1.5 rounded-full text-sm border border-border no-underline text-navy hover:bg-gold hover:text-white hover:border-gold">
                {c.title}
              </a>
            ))}
          </nav>

          {CATEGORIES.map(c => (
            <div key={c.id} className="bg-white border border-border rounded-lg px-7 py-2 my-6">
              <h2 id={c.id} className="font-serif text-navy mt-4 mb-2 pb-2 border-b border-gold-lt">{c.title}</h2>
              {c.items.map((item, i) => (
                <details key={i} className="faq">
                  <summary>{item.q}</summary>
                  <div className="faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          ))}

          <div className="next-step">
            <h2>Question not answered?</h2>
            <p>Send it through the contact form. We add the best new ones to this page so the next family finds them. Written reply within one business day.</p>
            <Link href="/contact" className="btn btn-gold mt-4 inline-block">Ask a question →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
