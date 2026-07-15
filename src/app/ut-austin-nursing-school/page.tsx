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

const TITLE = 'UT Austin School of Nursing: BSN Program, Admission, Cost (2026)';
const DESCRIPTION = 'UT Austin School of Nursing BSN program: admission criteria, acceptance rate ~15%, curriculum, clinical rotations, NCLEX pass rate 90%+, cost, career outcomes, and residency pathway for OOS nursing students.';
const PATH = '/ut-austin-nursing-school';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the UT Austin School of Nursing?', a: 'The UT Austin School of Nursing offers a Bachelor of Science in Nursing (BSN) as well as graduate programs (MSN, DNP, PhD). The BSN is a 4-year direct-admit undergraduate program (some students transfer in). Located on UT main campus. Approximately 400 undergraduate BSN students total enrollment. Consistently ranked top 50 nursing schools in the US.' },
  { q: 'What is the UT Austin nursing admission rate?', a: 'BSN direct admit acceptance rate at UT Austin is approximately 12-18%. Approximately 150-180 students admitted per cohort. Highly competitive due to limited seats. Admitted profile: 3.7-4.0 unweighted GPA, SAT 1400+, strong science coursework in high school (Biology, Chemistry, Anatomy&Physiology recommended).' },
  { q: 'What is the UT Austin NCLEX pass rate?', a: 'UT Austin BSN graduates achieve NCLEX-RN pass rate of approximately 90-95% on first attempt. Above the Texas state average and comparable to top nursing programs nationally. Strong first-time pass rate reflects rigorous curriculum and clinical preparation.' },
  { q: 'How much does UT Austin nursing cost?', a: 'UT Austin nursing tuition is approximately base UT tuition ($11,688 in-state / $44,908 out-of-state) plus small nursing-specific fees. Clinical supplies, uniforms, and licensing fees add $500-$1,000/year. Nursing scholarships available through the School of Nursing and external nursing associations.' },
  { q: 'What can UT Austin nursing graduates earn?', a: 'Median starting salary for UT Austin BSN graduates: $65,000-$75,000 for hospital RN positions. Higher-paying specialties (ICU, ER, OR) can start at $75,000-$85,000. Nurse anesthetist (CRNA), Nurse Practitioner (NP), and specialty certifications add substantial income long-term ($100,000-$200,000+).' },
  { q: 'Where do UT Austin nursing graduates work?', a: 'Top employers: Ascension Seton (Austin), St. David\'s HealthCare, Baylor Scott &amp; White (Temple, Austin area), Dell Children\'s Medical Center, Texas Children\'s Hospital (Houston), MD Anderson Cancer Center (Houston), UT Health Houston hospitals. Many graduates remain in Texas; some pursue out-of-state opportunities.' },
  { q: 'What are the pre-req courses for UT Austin nursing?', a: 'BSN prerequisites (typically completed freshman year for direct admits): Human Anatomy &amp; Physiology I &amp; II, Microbiology, Chemistry (general and organic), Statistics, English Composition, Psychology, Growth &amp; Development, Nutrition. Direct-admit students take these prereqs freshman year alongside nursing-specific coursework.' },
  { q: 'Can I transfer into UT Austin Nursing?', a: 'Yes but competitive. Transfer acceptance rate is lower than direct admit. Requires completion of prerequisites with 3.5+ GPA, competitive nursing GPA if from another nursing program. Most transfers enter from Texas community colleges or other undergraduate programs.' },
];

export default function NursingSchoolPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin School of Nursing', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · School of Nursing"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin School of Nursing</h1>}
        lede="Complete guide to UT Austin's BSN program: admission criteria, curriculum, clinical rotations, NCLEX pass rate, cost, and career outcomes for Texas and OOS nursing students."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="UT Austin Nursing at a glance">
            UT Austin School of Nursing offers a competitive <strong>BSN direct-admit program</strong> (~150-180 students per cohort; ~12-18% acceptance rate). Admitted profile: 3.7-4.0 GPA, SAT 1400+, strong high school science. NCLEX-RN pass rate: <strong>90-95%</strong> first attempt. Cost: base UT tuition + small nursing fees. Median starting RN salary: <strong>$65K-$75K</strong>; specialty and advanced practice (NP, CRNA) $100K-$200K+ long-term.
          </QuickAnswer>

          <AuthorBox blurb="Helps UT-bound nursing families understand the BSN program, admission requirements, and career pathway." />

          <h2 className="mt-0">Program overview</h2>
          <ul>
            <li><strong>Degree:</strong> Bachelor of Science in Nursing (BSN)</li>
            <li><strong>Length:</strong> 4 years (direct admit) or 2-3 years (transfer)</li>
            <li><strong>Cohort size:</strong> ~150-180 direct admits per year</li>
            <li><strong>Total undergrad enrollment:</strong> ~400 BSN students</li>
            <li><strong>Location:</strong> UT main campus, School of Nursing building</li>
            <li><strong>Accreditation:</strong> Commission on Collegiate Nursing Education (CCNE)</li>
            <li><strong>Ranking:</strong> Top 50 nursing schools nationally</li>
          </ul>

          <h2>Admissions</h2>
          <ul>
            <li><strong>Acceptance rate:</strong> ~12-18% direct admit</li>
            <li><strong>Non-resident acceptance:</strong> lower due to 10% OOS cap</li>
            <li><strong>Admitted GPA:</strong> 3.7-4.0 unweighted</li>
            <li><strong>Admitted SAT:</strong> 1400+ typical</li>
            <li><strong>High school prep:</strong> Biology, Chemistry, Anatomy&Physiology, Statistics</li>
            <li><strong>Application:</strong> ApplyTexas + separate nursing application</li>
            <li><strong>Deadline:</strong> November 1 priority</li>
          </ul>

          <h2>Curriculum highlights</h2>
          <ul>
            <li><strong>Year 1:</strong> Anatomy &amp; Physiology, Chemistry, Microbiology, general education</li>
            <li><strong>Year 2:</strong> Foundations of Nursing, Health Assessment, Pathophysiology, Pharmacology</li>
            <li><strong>Year 3:</strong> Adult Health Nursing, Maternal-Child Nursing, Mental Health Nursing, clinical rotations begin</li>
            <li><strong>Year 4:</strong> Community Health, Leadership, Critical Care, Capstone Preceptorship, NCLEX preparation</li>
          </ul>

          <h2>Clinical rotations</h2>
          <ul>
            <li>Rotations begin sophomore/junior year</li>
            <li>Rotation sites: Ascension Seton Medical Center, St. David&apos;s Medical Center, Dell Children&apos;s Medical Center, other Austin hospitals</li>
            <li>Rotations across specialties: med-surg, ICU, ER, pediatrics, OB, mental health, community health</li>
            <li>Senior year capstone preceptorship: extended clinical placement</li>
            <li>Total clinical hours: 800+ before graduation</li>
          </ul>

          <h2>Career outcomes</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Starting Salary</th>
                  <th>5-Year Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Staff RN (medical-surgical)</td><td className="num">$65K-$75K</td><td className="num">$75K-$85K</td></tr>
                <tr><td>ICU/ER Specialty RN</td><td className="num">$75K-$85K</td><td className="num">$85K-$100K</td></tr>
                <tr><td>OR/Cath Lab Specialty RN</td><td className="num">$75K-$90K</td><td className="num">$90K-$110K</td></tr>
                <tr><td>Nurse Practitioner (post-MSN)</td><td className="num">$100K-$130K (post-grad)</td><td className="num">$130K-$150K</td></tr>
                <tr><td>Nurse Anesthetist (CRNA, post-DNP)</td><td className="num">$180K-$220K (post-grad)</td><td className="num">$200K-$275K</td></tr>
                <tr><td>Nurse Manager</td><td className="num">$85K-$100K (post-experience)</td><td className="num">$100K-$130K</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Top employers for UT Nursing graduates</h2>
          <ul>
            <li>Ascension Seton Healthcare Family (Austin)</li>
            <li>St. David&apos;s HealthCare</li>
            <li>Dell Children&apos;s Medical Center</li>
            <li>Baylor Scott &amp; White Health (Temple, Austin area)</li>
            <li>Texas Children&apos;s Hospital (Houston)</li>
            <li>MD Anderson Cancer Center (Houston)</li>
            <li>UT Health Houston hospitals</li>
            <li>Methodist Hospital System (San Antonio)</li>
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
              <li><Link href="/ut-austin-pre-med">UT pre-med pathway</Link>: related healthcare-track guidance</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT acceptance rate</Link>: admissions math</li>
              <li><Link href="/texas-residency-rules">Texas residency</Link>: pathway for OOS nursing students</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: outcomes across UT majors</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-nursing-school" />
    </>
  );
}
