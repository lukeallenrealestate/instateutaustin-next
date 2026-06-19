// Programmatic college-tuition page data.
//
// Each entry drives a /ut-austin-[slug]-tuition page targeting the exact
// search "ut austin [college] tuition". Substantive per-college content
// (not find-and-replace) — admissions context, why differential tuition
// exists, what the major-specific costs add to.

export interface College {
  slug: string;
  name: string;
  inStatePerYear: number;
  outOfStatePerYear: number;
  differentialNote: string;
  admissionsContext: string;
  whyHigher: string;
  careerOutcome: string;
  programNotes: string[];
  published: boolean;
}

export const COLLEGES: College[] = [
  {
    slug: 'engineering',
    name: 'Cockrell School of Engineering',
    inStatePerYear: 14_500,
    outOfStatePerYear: 51_800,
    differentialNote: 'The Cockrell School applies a per-semester differential tuition of approximately $1,400/semester on top of the base undergraduate rate to fund engineering-specific lab capacity, equipment, and faculty research. The differential is the same for in-state and out-of-state students.',
    admissionsContext: 'Cockrell admits roughly 1,300 freshmen per year across 11 engineering disciplines, with the most selective being Aerospace, Biomedical, Chemical, and Electrical and Computer Engineering. Average admitted GPA is approximately 3.9 unweighted and 1,470 SAT for direct-to-major admission.',
    whyHigher: 'Engineering tuition runs about $2,800/year above the base because UT must maintain laboratory space, specialized equipment, and a faculty-to-student ratio appropriate for technical instruction. The Cockrell School also funds extensive co-op and internship coordination and a dedicated career services operation that drives the high post-graduation employment rate.',
    careerOutcome: 'Recent Cockrell graduates report median starting salaries of approximately $85,000-$95,000 across disciplines, with computer-engineering and petroleum-engineering tracks running higher (~$100,000-$120,000). Top employers include ExxonMobil, Texas Instruments, Lockheed Martin, Apple, Meta, and a long tail of Austin-area technology and energy firms.',
    programNotes: [
      'Required engineering math/physics sequence in the first two years; selective enrollment in upper-division courses.',
      'Optional 5-year combined BS/MS programs in several disciplines.',
      'Active student organizations: SHPE, NSBE, SWE, Texas Solar Vehicle Team, Texas Aerial Robotics.',
      'Engineering Education and Research Center (EER) is the central undergraduate facility.',
    ],
    published: true,
  },
  {
    slug: 'mccombs',
    name: 'McCombs School of Business',
    inStatePerYear: 14_200,
    outOfStatePerYear: 51_200,
    differentialNote: 'McCombs applies a differential tuition (often called the "business school differential") of approximately $1,300/semester to fund the school\'s case-method instruction, faculty practitioner relationships, and career services operation. Same rate for residents and non-residents.',
    admissionsContext: 'McCombs admits direct-to-major undergraduates with one of the most selective rates at UT. Approximately 1,400 students per year across BBA in Accounting, Finance, Marketing, Management Information Systems, Management, Supply Chain Management, and the joint Business Honors program. Average admitted GPA approximately 3.95 unweighted, SAT 1,500.',
    whyHigher: 'Business education at McCombs uses small-section case instruction, a heavy investment in career services (Bauer Award and BBA Career Services), and faculty members with active industry consulting practices. The differential tuition funds the per-student cost of that delivery model.',
    careerOutcome: 'Recent BBA graduates report median starting salaries of $75,000-$95,000 with significant variation by major. Finance and MIS run highest; Marketing and Management run lower. Top employers include Deloitte, EY, PwC, KPMG (Big Four), Goldman Sachs, JPMorgan, Bain, Accenture, Dell, ExxonMobil corporate finance, and Austin startups.',
    programNotes: [
      'BBA degree completes in 4 years; honors program (Business Honors Program) is highly selective with separate admission.',
      'Internal transfer to McCombs from Liberal Arts/Natural Sciences is possible but selective.',
      'Required core: accounting, finance, marketing, management, operations, statistics, business communication.',
      'Major-specific career tracks: MIS to consulting, Finance to investment banking and corporate finance, Accounting to Big Four.',
    ],
    published: true,
  },
  {
    slug: 'computer-science',
    name: 'Computer Science (CSDS)',
    inStatePerYear: 15_300,
    outOfStatePerYear: 53_500,
    differentialNote: 'Computer Science applies the highest differential tuition at UT Austin, roughly $1,800/semester above the base undergraduate rate. The differential funds the small upper-division class sizes, faculty research support, lab capacity, and the career services operation that places CS graduates in major technology companies.',
    admissionsContext: 'UT Computer Science admits approximately 350-400 direct-admit students per year, making it one of the most competitive admissions paths at the university. Average admitted GPA approximately 4.0 unweighted, SAT 1,520+, with substantial extracurricular evidence (competitive programming, published apps, research, hackathon awards). The Turing Scholars program is even more selective.',
    whyHigher: 'CS at UT competes nationally for faculty with industry and other top-tier programs. Faculty members frequently consult with or take leave for major technology companies (Google, Meta, Amazon). The differential tuition supports faculty retention plus the small upper-division class sizes that make UT CS the program it is.',
    careerOutcome: 'Recent CS graduates report median starting salaries of $115,000-$140,000 (base) plus signing bonuses of $20,000-$50,000 and stock grants worth $50,000-$200,000 over four-year vesting periods. Top employers: Google, Meta, Apple, Amazon, Microsoft, Stripe, Palantir, plus Austin technology firms and the increasingly prominent quant-trading recruiting (Jane Street, Citadel).',
    programNotes: [
      'Direct admission to CS is the only practical route; internal transfer is highly limited.',
      'The Turing Scholars program is a small invitation-only research-track within CS.',
      'Curriculum: data structures, algorithms, operating systems, networking, AI, theory, plus electives in ML, security, graphics, distributed systems.',
      'Strong undergraduate research opportunities through the Freshman Research Initiative and individual faculty labs.',
    ],
    published: true,
  },
  {
    slug: 'natural-sciences',
    name: 'College of Natural Sciences',
    inStatePerYear: 12_100,
    outOfStatePerYear: 45_500,
    differentialNote: 'Natural Sciences applies a modest differential of approximately $200/semester above the base rate to fund laboratory courses required for biology, chemistry, physics, and other lab-intensive majors. Same rate for residents and non-residents.',
    admissionsContext: 'Natural Sciences admits approximately 3,500 students per year across the largest undergraduate college at UT. Majors include biology, biochemistry, chemistry, computer science (within CSDS, separately listed), mathematics, physics, astronomy, neuroscience, nutrition, human ecology, pre-med tracks, and many others.',
    whyHigher: 'Natural Sciences tuition is only slightly above the base because lab fees are typically charged per-course on top of tuition rather than bundled into a college differential. Pre-med students in particular face significant additional course-specific costs (~$500-$1,500/year in lab fees and prep materials).',
    careerOutcome: 'Outcomes vary widely by major and post-graduation path. Pre-med students pursue medical school (med school costs $250K-$400K separately). Biology and biochemistry graduates pursue research positions ($45K-$60K starting), graduate school, or pivots to industry. Math and Physics graduates pivot heavily into finance, software, or graduate research.',
    programNotes: [
      'Includes the Health Science Scholars (premedical track), Polymath Scholars (interdisciplinary honors), and Dean\'s Scholars (research honors) programs.',
      'Freshman Research Initiative offers undergraduate research access in the first year, unusual for a research university.',
      'Pre-med advising and committee letters are managed at the college level.',
      'Strong combined-degree options with the Cockrell School (biomedical engineering) and McCombs (health-care management).',
    ],
    published: true,
  },
  {
    slug: 'liberal-arts',
    name: 'College of Liberal Arts',
    inStatePerYear: 11_688,
    outOfStatePerYear: 44_908,
    differentialNote: 'The College of Liberal Arts charges the base undergraduate rate with no per-college differential. Tuition is the standard $11,688/year for residents and $44,908/year for non-residents.',
    admissionsContext: 'Liberal Arts is one of the largest undergraduate colleges at UT, admitting approximately 3,000 students per year across History, English, Psychology, Economics, Government, Sociology, Anthropology, Religious Studies, and many language and area-studies majors. Admission is selective at the college level.',
    whyHigher: 'Liberal Arts is the base-tuition reference point because the college relies primarily on lecture-and-discussion instruction without college-specific lab facilities or equipment investments. Required fees are the same as all other colleges; just no differential.',
    careerOutcome: 'Recent Liberal Arts graduates report median starting salaries of $45,000-$60,000 with substantial variation by major and post-graduation path. Economics, Government (pre-law), and Psychology majors run higher. Many pursue graduate or professional school within five years.',
    programNotes: [
      'Plan II Honors is the flagship interdisciplinary honors program within Liberal Arts, highly selective with separate admission.',
      'Strong language departments including Spanish (one of the largest in the country), Arabic, Chinese, Russian, and ancient languages.',
      'Pre-law advising is managed at the college level; pre-med is at Natural Sciences.',
      'Many double majors with Business, Communication, or Natural Sciences.',
    ],
    published: true,
  },
  {
    slug: 'communication',
    name: 'Moody College of Communication',
    inStatePerYear: 12_350,
    outOfStatePerYear: 45_900,
    differentialNote: 'Moody College charges a modest differential of approximately $330/semester to fund studio facilities, production equipment, and the practical-skills courses that distinguish journalism, RTF (Radio-Television-Film), and PR programs.',
    admissionsContext: 'Moody admits approximately 1,200 students per year across Journalism, Advertising, Public Relations, Communication Studies, Communication Sciences and Disorders, and Radio-Television-Film. RTF is among the most selective majors with film-school-quality production resources.',
    whyHigher: 'The Moody differential covers the cost of production studios, broadcast equipment, editing suites, and the practical-skills coursework that gives Moody graduates a portfolio when they enter the job market. The differential is modest because much of the instructional cost is funded through donor gifts (the Moody Family Foundation namesake gift).',
    careerOutcome: 'Recent Moody graduates work in journalism, advertising, public relations, film and television production, broadcasting, and corporate communication. Starting salaries vary widely: PR and Advertising start $50,000-$65,000, journalism and entry-level production start lower ($35,000-$50,000) but with significant upside.',
    programNotes: [
      'Texas Student Media operates The Daily Texan (the student newspaper), KVRX Radio, and Texas Student Television.',
      'RTF undergraduates produce short films through the production sequence.',
      'Active alumni network in Hollywood, sports broadcasting (ESPN), and the Texas state PR/advertising market.',
      'Joint majors with Plan II Honors and other colleges are common.',
    ],
    published: true,
  },
  {
    slug: 'fine-arts',
    name: 'College of Fine Arts',
    inStatePerYear: 11_950,
    outOfStatePerYear: 45_300,
    differentialNote: 'Fine Arts applies a small differential of approximately $130/semester plus per-course studio and materials fees that can range from $50-$300/course depending on the medium.',
    admissionsContext: 'Fine Arts is significantly more selective than admissions to UT generally because most programs require portfolio review or audition. Departments include Art and Art History (studio art, design), Theatre and Dance, and the Butler School of Music (one of the largest music schools in the country).',
    whyHigher: 'Fine Arts differential and course fees fund studio space, performance venues, and instruments/materials. Butler School of Music students additionally pay for applied music lessons (one-on-one instruction) that average $400-$800/semester.',
    careerOutcome: 'Career outcomes vary widely by medium. Design and Art Direction graduates from Department of Art and Art History work in Austin\'s tech industry as UX designers, art directors at agencies, and increasingly in game-industry roles. Music performance graduates pursue orchestral positions, freelance performing careers, or graduate study. Theatre graduates pursue regional theatre, film/TV, and increasingly the Austin film industry.',
    programNotes: [
      'Butler School of Music includes both the prestigious Performance program and a Music Studies (musicology/theory) track.',
      'Department of Theatre and Dance produces major shows each semester through the Department of Theatre and Dance season.',
      'Studio art majors graduate with a senior portfolio show.',
      'Active community access through public performances and gallery exhibitions.',
    ],
    published: true,
  },
  {
    slug: 'education',
    name: 'College of Education',
    inStatePerYear: 11_688,
    outOfStatePerYear: 44_908,
    differentialNote: 'College of Education charges the base undergraduate rate with no per-college differential. Tuition is the standard rate for residents and non-residents.',
    admissionsContext: 'College of Education admits approximately 700-800 students per year across Applied Movement Science (kinesiology), Health Promotion, Special Education, Youth and Community Studies, and the various teacher preparation tracks. Many students enter through internal transfer from Liberal Arts after completing prerequisites.',
    whyHigher: 'Education tuition is at the base rate because most education coursework is lecture-and-discussion plus practicum placements in Austin-area schools. Practicum placements are coordinated by the college; there are no significant lab or equipment costs.',
    careerOutcome: 'Education graduates pursue teaching certifications (typically through the college\'s UTeach or Texas Teach programs), school counseling, health and wellness coaching, special education, and youth services. Starting teacher salaries in Texas average $55,000-$60,000 with steady increases. The UTeach program is nationally recognized for producing STEM teachers.',
    programNotes: [
      'UTeach Natural Sciences is the flagship STEM-teacher preparation program; replicated at 50+ universities nationwide.',
      'Kinesiology track popular with pre-med and pre-PT students.',
      'Special Education is among the most marketable certifications statewide.',
      'Sport Management track has close ties to UT Athletics.',
    ],
    published: true,
  },
];

export const getCollege = (slug: string) => COLLEGES.find(c => c.slug === slug && c.published);
export const publishedColleges = () => COLLEGES.filter(c => c.published);
