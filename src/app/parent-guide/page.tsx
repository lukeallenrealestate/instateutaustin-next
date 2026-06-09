import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'The Out-of-State Parent Guide to UT Austin';
const DESCRIPTION = 'Move-in logistics, key academic dates, housing, residency strategy, and your first 30 days as a UT Austin parent. For out-of-state families navigating Fall enrollment.';
const PATH = '/parent-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'My student got into UT but is also considering another school. Does this guide help?', a: 'It helps with the UT-specific decision. The residency pathway is unique to UT (and other Texas publics); the property math does not translate directly to private schools or to publics in other states.' },
  { q: 'When should we visit Austin before move-in?', a: 'If you can, twice: once during admit weekend in March or April, and once in late spring/early summer to scout housing. If you can only visit once, late June is the right time.' },
  { q: 'What is the realistic monthly budget for a UT undergraduate?', a: 'Roughly $1,500-$2,500/month including housing, food, and personal expenses, for a student living off campus in a modest apartment or family-owned condo. Higher in a luxury student building; lower in a dorm with a meal plan.' },
  { q: 'Are there UT-Austin parent communities worth joining?', a: 'Yes. The largest is the "UT Austin Parents" closed Facebook group, well-moderated, tens of thousands of members. Content is uneven but searchable. Reddit\'s r/UTAustin is more student-facing.' },
  { q: 'What is the move-in date for Fall 2027?', a: 'Approximate move-in for Fall 2027 will be August 16-21, 2027, with classes starting August 23. UT publishes exact dates in February of the enrollment year. Plan for an 8-month-out booking on hotels.' },
  { q: 'Should we buy the property in our name, in our student\'s name, or in an LLC?', a: 'For Rule #3 (student-occupied housing): the parents\' personal name. For Rule #4 (rental business): a Texas LLC. Almost never in the student\'s name, it complicates the residency claim, the financing, and the tax picture.' },
  { q: 'Is UT\'s New Student Orientation actually useful for parents?', a: 'The student portion is mandatory and useful. The Family Orientation track is optional, takes most of one day, and is most useful for parents who have not had a child in college before.' },
];

const DATES: Array<{ when: string; what: string; why: string }> = [
  { when: 'June - July 2026', what: 'New Student Orientation (NSO)', why: 'Multi-day program in Austin. Student must attend in person. Parents attend a parallel Family Orientation. Register through Orientation Hub in MyStatus.' },
  { when: 'Aug 17-22, 2026', what: 'Residence hall move-in', why: 'Specific days vary by hall and floor. Confirm in Housing Portal. Plan for an entire day; freight-elevator queues can be hours long.' },
  { when: 'Aug 24, 2026', what: 'First day of Fall 2026 classes', why: 'Standard Monday-start. UT\'s First Day of Class is the operational start of the academic year for tuition purposes.' },
  { when: '~Sept 9, 2026', what: 'Fall 2026 census date', why: '12th class day. Tuition is locked at this point. The 12-month residency clock for a Fall 2027 petition must be running by this date one year prior.' },
  { when: 'Oct 30, 2026', what: 'Q-drop / withdrawal deadline', why: 'Last day to drop a class without academic penalty.' },
  { when: 'Nov 25-29, 2026', what: 'Thanksgiving break', why: 'No classes. Most students travel home; flights book up months in advance.' },
  { when: 'Dec 9, 2026', what: 'Last day of Fall 2026 classes', why: 'Followed by reading days, then finals week.' },
  { when: 'Dec 11-17, 2026', what: 'Fall 2026 final examinations', why: 'Final exam schedule is published by the registrar; varies by course.' },
  { when: 'Jan 19, 2027', what: 'First day of Spring 2027 classes', why: 'After winter break. Most students return the prior weekend.' },
  { when: '~Feb 5, 2027', what: 'Spring 2027 census date', why: '12th class day of spring term. Spring residency petitions must have the 12-month clock complete by this date.' },
  { when: 'Mar 15-20, 2027', what: 'Spring break', why: 'UT\'s spring break. Notoriously busy week for Austin; book travel early.' },
  { when: 'May 8, 2027', what: 'Spring 2027 commencement', why: 'University-wide commencement on the South Mall. Individual college ceremonies are held the same weekend.' },
];

export default function ParentGuidePage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Parent Guide', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <header className="bg-navy-dk text-paper pt-20 pb-12">
        <div className="narrow">
          <p className="eyebrow !text-gold-lt">For out-of-state families</p>
          <h1 className="!text-paper">The Parent Guide to UT Austin</h1>
          <p className="text-white/82 text-lg max-w-[60ch] mt-4">
            Everything you wish you had known before your student moved to Austin: academic dates, housing, move-in logistics, residency strategy, and your first 30 days as a UT parent.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">
          <QuickAnswer label="The 60-second answer">
            Out-of-state parents need to plan three things in parallel: housing (dorm, off-campus apartment, or family-owned condo for the residency strategy), residency strategy (the 12-month domicile clock saves about {fmtUSD(TUITION.annualSavings)}/year if you commit), and orientation logistics (NSO in June-July, move-in mid-August, first day of classes late August). The single highest-leverage decision is whether to acquire Texas property in time for the Fall before enrollment, that decision sets up a year-2 residency petition worth roughly {fmtUSD(TUITION.threeYearSavings)} over the typical three-year in-state span.
          </QuickAnswer>

          <h2 className="mt-0">What this guide assumes</h2>
          <p>You are the parent of a student who has been admitted to The University of Texas at Austin from out of state. The student is starting in the next academic year. You are figuring out the logistics of move-in, you want to understand which dates actually matter, and you would like to know whether the in-state tuition pathway is worth attempting.</p>

          <h2>Your first 30 days as a UT parent</h2>
          <div className="bg-cream p-7 rounded-lg my-6">
            <h3 className="mt-0">The opening checklist</h3>
            <ol>
              <li><strong>Confirm enrollment in MyStatus.</strong> The student&apos;s MyStatus portal is the single source of truth for everything UT, enrollment, financial aid, housing, residency. Get the student set up with two-factor auth (UT requires Duo) and bookmark the portal.</li>
              <li><strong>Decide on housing.</strong> On-campus dorm vs. off-campus apartment vs. owned property. If the residency pathway is in play, off-campus or owned makes the documentation cleaner.</li>
              <li><strong>Register for orientation.</strong> UT&apos;s New Student Orientation (NSO) is a 1-2 day mandatory program held in May, June, and July. Parents have a parallel Family Orientation program.</li>
              <li><strong>Run the tuition calculator.</strong> Get the four-year number with and without residency. <Link href="/tuition-calculator">Tuition calculator</Link>.</li>
              <li><strong>Set up direct deposit and a Texas bank account.</strong> The student will need a way to receive financial-aid refunds and to pay vendors locally.</li>
              <li><strong>Health insurance.</strong> Confirm the student is on the family plan or has Texas-coverage. UT&apos;s student insurance is optional for most students.</li>
              <li><strong>Texas driver&apos;s license / state ID.</strong> Both the student and the parent who anchors the residency claim should plan to obtain Texas credentials within the first few weeks.</li>
              <li><strong>Vehicle registration.</strong> Any vehicle the family operates in Texas should be registered with TxDMV.</li>
              <li><strong>Sign up for Austin Energy and City of Austin Utilities.</strong> If the family owns or rents the housing, utility accounts go in the family&apos;s name. Twelve consecutive months of utility bills are part of the residency documentary record.</li>
              <li><strong>Add the academic calendar to your phone.</strong> Census dates, drop deadlines, withdrawal deadlines, and final-exam dates are all date-sensitive.</li>
            </ol>
          </div>

          <h2>Key academic dates (2026-27 academic year, approximate)</h2>
          <p>UT publishes the full academic calendar at <code>registrar.utexas.edu</code>. These are the dates parents need to know. Dates are approximate and subject to UT&apos;s published calendar.</p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            {DATES.map((d, i) => (
              <div key={i} className="bg-white border border-border rounded-md p-5 border-l-4 border-l-gold">
                <div className="font-serif text-lg text-gold">{d.when}</div>
                <div className="font-semibold text-navy mt-1">{d.what}</div>
                <div className="text-sm text-mid mt-1.5">{d.why}</div>
              </div>
            ))}
          </div>

          <h2>Housing, the actual decision</h2>
          <p>Out-of-state families typically choose between three housing arrangements for the first year:</p>

          <h3>Option A: On-campus residence hall</h3>
          <p>UT&apos;s residence halls (Jester, Kinsolving, San Jacinto, Roberts/Prather, Honors Quad) house about 7,400 students. Costs run $13,000-$17,000 per academic year including a mandatory meal plan. The advantage is convenience, community, and zero residency-related complication. The disadvantage is cost (about $1,500/month effective rate) and the absence of an asset on the back end. For families <em>not</em> pursuing the residency pathway, this is usually the right choice for year one.</p>

          <h3>Option B: Off-campus apartment rental</h3>
          <p>Hundreds of purpose-built student apartment buildings exist around West Campus, Riverside, and the Drag, many marketed by national chains (American Campus Communities, The Standard, 26 West) with leasing cycles 11 months in advance. Per-bedroom rents in furnished four-bedroom shared apartments run $1,000-$1,800/month including most utilities.</p>

          <h3>Option C: Owned property (Rule #3 or Rule #4)</h3>
          <p>This is the residency-strategy option. The family acquires a condo, small house, or duplex in Austin and the student lives there. See <Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link> for which structure fits. The advantage is that housing and residency are solved together, and the property is an asset that may appreciate.</p>

          <h2>Move-in logistics</h2>

          <h3>What to ship vs. what to buy in Austin</h3>
          <p>Ship: clothing, bedding, important documents, electronics, anything sentimental, anything heavy/expensive enough that paying to ship is cheaper than replacing. Buy in Austin: furniture (Target, IKEA Round Rock, the surprisingly good consignment scene), kitchen and bathroom basics, plants, anything bulky. The standard out-of-state shipping option is UPack/ABF trailer at the origin, delivered to a UPack yard near Austin for the student to unload on a flexible schedule.</p>

          <h3>Parking and the move-in day</h3>
          <p>Move-in days at UT residence halls are scheduled in tight windows with assigned arrival times. UT publishes a parking map and traffic plan; do not improvise. For owned property: simpler logistically (no shared schedule), but pay attention to HOA rules on dumpster placement and elevator reservations.</p>

          <h3>Furniture and appliances</h3>
          <p>If the property is unfurnished, plan a furnish-out trip the week of move-in. Most family budgets land in the $4,000-$8,000 range for a 1-bed condo. The IKEA in Round Rock handles delivery for ~$200 if you order a few days in advance.</p>

          <h3>Vehicle</h3>
          <p>If the student is bringing a car, parking near UT is hard. On-campus permits are limited and expensive ($600-$900/year). The implication for residency: register the car in Texas regardless, the registration record is what matters, not how often it is driven.</p>

          <h2>The residency strategy in one section</h2>
          <p>This is the question most out-of-state parents are quietly running in their heads while they handle move-in: is it worth the trouble to chase Texas residency for tuition purposes? The short answer: usually yes, if the family can afford the up-front capital and has the operational tolerance to maintain the documentary record for 12 months.</p>
          <p>The basic shape of the decision:</p>
          <ul>
            <li>If your student is a 4-year UT undergraduate at the base undergraduate rate, the per-year tuition delta is about {fmtUSD(TUITION.annualSavings)} in 2025-26 dollars (out-of-state {fmtUSD(TUITION.outOfStatePerYear)} minus in-state {fmtUSD(TUITION.inStatePerYear)}), with the in-state side frozen through 2026-27. Over 4 years that is ~$140,000 of gross tuition delta, of which the residency pathway typically captures {fmtUSD(TUITION.threeYearSavings)}-{fmtUSD(TUITION.fourYearSavings)}.</li>
            <li>If your student is in Engineering, McCombs, or Computer Science, the absolute tuition numbers are higher in both classifications, so the differential tuition does <em>not</em> change the savings, the savings remain ~$33K/year and the per-year college differential is the same regardless of residency status.</li>
            <li>The capital required to acquire a Rule #3 property starts at about $80K (20-25% down on a ~$350K condo plus closing costs), and the carrying cost runs $32K-$50K/year depending on price point and HOA.</li>
            <li>The pathway breaks down if (a) the family does not have the capital, or (b) the family&apos;s tax situation creates strong indicators of out-of-state domicile that cannot be modified for the 12-month period.</li>
          </ul>
          <p>If you have not yet, run the <Link href="/tuition-calculator">tuition calculator</Link> with your specific student&apos;s college and credit load, then read <Link href="/texas-residency-rules">the residency rules</Link> and <Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>.</p>

          <h2>Practical Austin for visiting parents</h2>

          <h3>Where to stay</h3>
          <p>If your student is in a residence hall and you are in town for move-in or a parents weekend, the AT&amp;T Hotel and Conference Center is on UT&apos;s campus, convenient but books up early. The Driskill, the Stephen F. Austin, the Hilton Garden Inn downtown, and the increasing number of South Congress hotels are all 5-15 minute drives.</p>

          <h3>Where to eat</h3>
          <p>Austin&apos;s restaurant scene is excellent. Two specifically-UT recommendations: <strong>Kerbey Lane Cafe</strong> (multiple locations, perfect for 3am after a study session) and <strong>Hopdoddy</strong> (South Congress, the burger benchmark by which all Austin burgers are measured by current undergraduates).</p>

          <h3>What to do when you visit</h3>
          <p>If the visit is move-in: do not plan much beyond IKEA, a grocery run, and one nice dinner. The student will be exhausted. If the visit is a parent&apos;s weekend: catch a Texas football game, walk the South Mall and the UT Tower, and let the student show you their daily routine.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Move-in handled. What is next?</h2>
            <p>If you are considering the residency pathway, the next step is the tuition calculator and the rules page.</p>
            <Link href="/tuition-calculator" className="btn btn-gold mt-4 inline-block">Run the numbers →</Link>
            {' '}
            <Link href="/texas-residency-rules" className="btn btn-ghost mt-4 inline-block !text-paper !border-gold-lt">Read the rules →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
