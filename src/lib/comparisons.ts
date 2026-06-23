// Programmatic UT Austin comparison pages.
//
// Each entry drives a /ut-austin-vs-[slug] page targeting "ut austin vs X"
// queries. These pages are valuable because parents researching college
// options frequently compare flagship publics. Substantive per-school
// content (not template-and-replace).

export interface Comparison {
  slug: string;
  competitorName: string;
  competitorShortName: string;
  searchPhrase: string;
  summary: string;
  utWins: string[];
  competitorWins: string[];
  costComparison: {
    utInState: number;
    utOutOfState: number;
    competitorInState: number;
    competitorOutOfState: number;
    note: string;
  };
  programComparison: string;
  admissionsComparison: string;
  cultureComparison: string;
  residencyAngle: string;
  faq: Array<{ q: string; a: string }>;
  published: boolean;
}

export const COMPARISONS: Comparison[] = [
  {
    slug: 'texas-am',
    competitorName: 'Texas A&M University',
    competitorShortName: 'A&M',
    searchPhrase: 'ut austin vs texas am',
    summary:
      'UT Austin and Texas A&M are the two flagship public universities of Texas, sharing the Permanent University Fund endowment and similar in-state tuition. UT Austin generally ranks higher in business (McCombs), liberal arts (Plan II Honors), and computer science; A&M traditionally ranks higher in engineering and agricultural sciences. In-state tuition is nearly identical ($11,688 UT vs ~$13,600 A&M). The schools have distinct campus cultures: UT urban-Austin and politically diverse, A&M traditional College Station with conservative leanings and the Aggie cultural identity.',
    utWins: [
      'McCombs Business School consistently ranks higher than A&M Mays Business (top 10 vs top 30)',
      'Plan II Honors interdisciplinary program is distinctive nationally',
      'Computer Science direct admit highly competitive; UT CS recruits at the top tier of national CS programs',
      'Liberal Arts breadth and depth, especially languages, philosophy, history',
      'Urban Austin location with extensive internship pipeline in tech, government, music industry',
      'Stronger pipeline to top-tier MBA and law school admissions',
    ],
    competitorWins: [
      'Engineering (Dwight Look College) ranks ahead of UT Cockrell in several disciplines (petroleum, agricultural, civil)',
      'Texas Aggie Corps of Cadets and ROTC programs are nationally prominent',
      'Veterinary medicine school (one of two in Texas; UT does not have one)',
      'Bonfire Memorial, Aggie Ring, and tradition culture is a distinguishing feature many families value',
      'Slightly larger total undergraduate population (~65,000 vs UT\'s ~42,000)',
      'College Station offers a more traditional college-town experience vs UT\'s urban setting',
    ],
    costComparison: {
      utInState: 11_688,
      utOutOfState: 44_908,
      competitorInState: 13_600,
      competitorOutOfState: 40_200,
      note: 'UT Austin in-state is about $1,900/year cheaper than A&M for residents. UT out-of-state is about $4,700/year more expensive than A&M out-of-state. The Texas residency pathway applies identically to both schools (Texas Education Code §54.052 covers all Texas public universities).',
    },
    programComparison:
      'For Business: McCombs (UT) outranks Mays (A&M) by a wide margin in national rankings (US News, Bloomberg) and in recruiting outcomes. Top investment banks, consulting firms, and tech companies recruit at McCombs at a higher tier. For Engineering: A&M Look College outranks UT Cockrell in petroleum (#1 in the US for decades), agricultural, and civil. UT Cockrell outranks A&M in chemical, computer, and biomedical. For Computer Science: UT outranks A&M by a wide margin, with UT CS recruiting alongside Stanford, MIT, CMU, and Berkeley for top tech roles. For Liberal Arts: UT generally outranks A&M, especially in Plan II Honors. For Agriculture and Veterinary Medicine: A&M is the only realistic Texas option; UT does not have an agricultural school or vet school.',
    admissionsComparison:
      'Both schools have similar acceptance rates around 30% but the admitted-student profile varies by college. UT McCombs and UT Computer Science are dramatically more selective than equivalent A&M programs (admitted GPA ~3.95+, SAT 1500+ vs A&M comparable programs at 3.8+, 1400+). For Engineering, A&M direct admit is competitive but slightly less selective than UT Cockrell. Both schools heavily favor Texas residents in admissions (Texas Top 10% Rule for Texas high school students who graduate in the top 6% at UT or top 10% at A&M get automatic admission).',
    cultureComparison:
      'The two campuses have distinctive cultures. UT Austin sits in the heart of Austin, the state capital, with Sixth Street and the South Congress entertainment district within walking distance of campus. UT culture is politically more liberal, with strong emphasis on individualism, creative industries, and a famously eclectic student body. Texas A&M sits in College Station, a traditional Texas college town. A&M culture emphasizes tradition (the Aggie War Hymn, Yell Practice, Bonfire memory, ROTC tradition), conservative politics, and a strong sense of shared identity ("Aggie network"). Neither is "better"; they appeal to different families.',
    residencyAngle:
      'The Texas residency pathway under Texas Education Code §54.052 applies identically to UT Austin and Texas A&M. Out-of-state families who establish residency through the 12-month domicile pathway save approximately $33,220/year at UT or about $26,600/year at A&M. The property purchase strategy (Rule #3 student-occupied or Rule #4 rental LLC) works at either school. Many out-of-state families considering both schools acquire property near whichever campus their student ultimately attends; the path is the same either way.',
    faq: [
      { q: 'Is UT Austin or Texas A&M better academically?', a: 'It depends on the major. UT Austin generally outranks A&M in Business (McCombs), Computer Science, Liberal Arts (Plan II), Pharmacy, and Architecture. A&M generally outranks UT in Engineering disciplines like Petroleum, Agricultural, and Civil; A&M has the only Veterinary Medicine school in Texas. For most overlapping majors, the rankings are within striking distance.' },
      { q: 'Is it harder to get into UT Austin or Texas A&M?', a: 'Roughly comparable on aggregate acceptance rate (~30% at both), but the admitted-student profile differs by college. UT McCombs Business and UT Computer Science are significantly more selective than the comparable A&M programs. UT generally favors highly-credentialed academic profiles; A&M values "Aggie fit" alongside academic merit.' },
      { q: 'Is the residency pathway for in-state tuition different at UT vs A&M?', a: 'No. The Texas residency rules under §54.052 apply identically to all Texas public universities. The 12-month domicile clock, the property pathway, and the petition process are the same. Each school\'s residency office runs the determination, but they apply the same THECB rules.' },
      { q: 'Can my student go to UT for one major and A&M for another?', a: 'Each school admits per college, so a student admitted to UT but rejected from McCombs could still attend UT in Liberal Arts. Internal transfer to McCombs or CS at UT is possible but selective. Same is true for A&M. Choosing between UT and A&M is typically about which institution offers the best path to the intended major.' },
      { q: 'Which is cheaper, UT or A&M?', a: 'A&M in-state at ~$13,600 is about $1,900 more expensive than UT in-state at $11,688. UT out-of-state at ~$44,908 is about $4,700 more expensive than A&M out-of-state at ~$40,200. For out-of-state students who establish Texas residency, both schools become roughly the same cost.' },
    ],
    published: true,
  },
  {
    slug: 'uc-berkeley',
    competitorName: 'University of California, Berkeley',
    competitorShortName: 'UC Berkeley',
    searchPhrase: 'ut austin vs uc berkeley',
    summary:
      'UT Austin and UC Berkeley are flagship public universities in the top 15-25 nationally, with strong programs in engineering, business, and computer science. Berkeley generally outranks UT in pure prestige and several STEM rankings; UT outranks Berkeley in some practical metrics like job placement to Texas-based employers and undergraduate admission accessibility. The cost difference is significant: Berkeley out-of-state at ~$48,500 is similar to UT out-of-state at $44,908; after residency, UT in-state at $11,688 is cheaper than Berkeley in-state at ~$14,900.',
    utWins: [
      'McCombs Business outranks Haas in undergraduate experience and accessibility (Haas admits only ~10% of UC Berkeley undergrads to its junior-senior program)',
      'Cost of attendance is lower for residents and especially for Texas residents through the residency pathway',
      'Austin\'s tech industry rivals San Francisco/Bay Area at significantly lower cost of living',
      'Direct CS admission less complex than Berkeley\'s EECS/L&S CS distinction',
      'Plan II Honors interdisciplinary program is distinctive',
      'Less crowded majors and easier course access in some departments',
    ],
    competitorWins: [
      'Berkeley generally outranks UT on prestige metrics (US News, Times, QS)',
      'Engineering disciplines (especially EECS and Mechanical) typically rank higher at Berkeley',
      'Pre-med to top medical school admission stronger from Berkeley',
      'Bay Area tech recruiting is unmatched; Apple, Google, Meta, OpenAI are all within easy reach',
      'Stronger international student community',
      'Cultural and political activism tradition that some students value',
    ],
    costComparison: {
      utInState: 11_688,
      utOutOfState: 44_908,
      competitorInState: 14_934,
      competitorOutOfState: 48_500,
      note: 'Berkeley costs more in both classifications: about $3,200/year more for residents ($14,934 vs $11,688) and about $3,600/year more for non-residents ($48,500 vs $44,908). For out-of-state students, the Texas residency pathway works at UT but California has no equivalent fast-track residency pathway, making UT after residency dramatically cheaper than Berkeley out-of-state.',
    },
    programComparison:
      'For Business: McCombs (UT) admits all admitted undergrads to the business school directly. Haas (Berkeley) requires a separate junior-year application and admits about 10% of applicants, making it inaccessible for most UC Berkeley students. For Computer Science: Berkeley EECS and L&S CS both rank in the top 5; UT CS ranks in the top 10. Both are excellent. For Engineering: Berkeley generally ranks higher in EECS, Mechanical, and Chemical. UT Cockrell is competitive in Petroleum, Civil, and Biomedical. For Liberal Arts: Berkeley ranks higher overall; UT has Plan II Honors as a distinctive offering. For Pre-Med: Berkeley generally has a stronger pipeline to top medical schools, but UT pre-med outcomes are also strong.',
    admissionsComparison:
      'Berkeley acceptance rate is about 11-12%, significantly more selective than UT at ~30%. However, UT\'s top programs (McCombs, CS) are similarly selective to Berkeley overall. Berkeley admissions emphasizes diverse interests and substantial extracurricular accomplishment. UT admissions for in-state students uses the Texas Top 10% Rule (automatic admission for top 6% of Texas high school graduates); out-of-state admissions is more holistic but heavily weighted to academic profile.',
    cultureComparison:
      'Berkeley is in the heart of the Bay Area, with extensive activist tradition, diverse politics, and intense intellectual environment. The campus is dense and the surrounding town small but very engaged. UT Austin sits in the heart of Austin, with Sixth Street and the music industry within walking distance. Austin\'s political mix is broader (state government plus tech industry plus arts community). Cost of living in Berkeley/Bay Area is dramatically higher than Austin for off-campus living.',
    residencyAngle:
      'The single largest cost difference between these schools comes from residency. UT Austin offers the Texas residency pathway under Texas Education Code §54.052: 12 months of Texas domicile establishes Texas residency for tuition purposes, dropping the rate from $44,908 to $11,688. California has no comparable fast-track residency pathway; California requires substantive independent residence with no parental support for a longer period and is far more difficult to establish for college students. For an out-of-state family, UT after residency at $11,688 vs Berkeley out-of-state at $48,500 is a four-year savings of approximately $147,000.',
    faq: [
      { q: 'Is Berkeley better than UT Austin?', a: 'On most prestige rankings, Berkeley ranks slightly higher than UT. For specific majors the comparison varies: Berkeley wins on EECS, Mechanical Engineering, and pre-med pipeline. UT wins on Business (McCombs has accessible undergrad business education while Berkeley\'s Haas is junior-year selective), Plan II Honors, and Austin\'s tech-industry pipeline.' },
      { q: 'Can I get California residency to pay UC in-state tuition?', a: 'California residency for tuition purposes is significantly harder to establish than Texas residency. California requires substantive independent presence (not just student presence) for 12 months plus financial independence. Most college students cannot establish California residency during their undergraduate years. By contrast, Texas residency through the parental-property pathway is achievable in 12 months.' },
      { q: 'How does Austin compare to Berkeley as a college town?', a: 'Austin is a much larger metro (~2.5M vs Berkeley\'s ~125K). Cost of living is dramatically lower in Austin. Tech industry is strong in both cities. The cultural scenes are very different: Berkeley has a long activist tradition and dense academic culture; Austin has music, food, and a more diverse political mix. Both have strong outdoor/recreational scenes.' },
      { q: 'What is the four-year cost difference between UT after residency and Berkeley out-of-state?', a: 'UT after residency (year 1 out-of-state, years 2-4 in-state): $44,908 + 3 × $11,688 = $79,972 over four years. Berkeley out-of-state: $48,500 × 4 = $194,000 (and rising about 4%/year). Approximate four-year savings going to UT after residency vs Berkeley out-of-state: about $114,000.' },
      { q: 'Which has better job placement for tech?', a: 'Berkeley CS has unmatched proximity to Bay Area tech recruiting and the resulting placement at top companies. UT CS has strong placement to Austin-based tech (Apple, Meta, Google all have major Austin offices) plus Bay Area recruiting. For students who want to work in Texas after graduation, UT is the stronger Austin alumni network.' },
    ],
    published: true,
  },
  {
    slug: 'michigan',
    competitorName: 'University of Michigan',
    competitorShortName: 'Michigan',
    searchPhrase: 'ut austin vs michigan',
    summary:
      'UT Austin and the University of Michigan are flagship public universities in the top 25 nationally. Michigan generally has stronger national prestige; UT has competitive programs in business (McCombs), computer science, and engineering. Michigan in-state at ~$17,700 is significantly more expensive than UT in-state at $11,688, meaning Texas residency through the UT pathway can produce a final cost cheaper than attending Michigan as a Michigan resident.',
    utWins: [
      'Lower in-state tuition ($11,688 vs Michigan\'s $17,700)',
      'McCombs Business School direct undergrad admission (Michigan Ross is junior-year application)',
      'Austin tech industry plus Texas alumni network',
      'Plan II Honors interdisciplinary program',
      'Warmer weather and outdoor lifestyle vs Ann Arbor winters',
      'Larger overall undergraduate population with broader major selection',
    ],
    competitorWins: [
      'Michigan generally outranks UT in overall national prestige',
      'Ross School of Business reputation is strong (when admitted to its junior-year program)',
      'Engineering at Michigan (especially Mechanical, Aerospace, Industrial) ranks higher',
      'Pre-med pipeline to top medical schools is stronger from Michigan',
      'Football tradition and Big Ten athletics culture',
      'Michigan Engineering co-op program is among the strongest in the country',
    ],
    costComparison: {
      utInState: 11_688,
      utOutOfState: 44_908,
      competitorInState: 17_700,
      competitorOutOfState: 57_400,
      note: 'Michigan is more expensive in both classifications. Michigan in-state at $17,700/year is about $6,000 more than UT in-state. Michigan out-of-state at $57,400 is about $12,500 more than UT out-of-state. For out-of-state students, UT after residency ($11,688) is about $6,000/year cheaper than Michigan in-state, meaning the residency pathway makes UT cheaper than Michigan even compared to Michigan\'s home rate.',
    },
    programComparison:
      'For Business: McCombs (UT) admits all admitted undergrads to the business school directly. Ross (Michigan) is a junior-year application with about 50% acceptance from the Michigan undergrad applicant pool. For Engineering: Michigan generally outranks UT in Mechanical, Aerospace, Industrial, and Computer Engineering rankings. UT Cockrell is competitive in Petroleum, Chemical, and Biomedical. For CS: UT and Michigan rank similarly (both in top 15). For Liberal Arts: Michigan generally outranks UT in many disciplines; UT counters with Plan II Honors.',
    admissionsComparison:
      'Michigan acceptance rate is about 18%, more selective than UT\'s ~30%. Both heavily favor in-state students by total class composition. Michigan has a holistic admissions process with strong emphasis on rigor and extracurricular depth. UT for in-state students uses the Top 10% Rule for automatic admission; for out-of-state students, admission is holistic but heavily weighted to academic profile.',
    cultureComparison:
      'Ann Arbor is a classic college town of about 120,000 surrounding the Michigan campus. The Big Ten athletics culture (football especially) is woven into student life. Winters are long and cold. Austin is a much larger metro (~2.5M) and the Texas capital, with year-round outdoor weather, music industry, tech industry, and state government as the surrounding context. The cultures are quite different; choice often comes down to climate and city size preferences.',
    residencyAngle:
      'The Texas residency pathway makes UT dramatically cheaper than Michigan for out-of-state families. UT after residency at $11,688/year vs Michigan out-of-state at $57,400/year is a difference of nearly $46,000/year in tuition. Even compared to Michigan in-state at $17,700, UT after residency is $6,000/year cheaper. There is no equivalent fast-track Michigan residency pathway for out-of-state college students.',
    faq: [
      { q: 'Is Michigan better than UT Austin?', a: 'Michigan generally outranks UT in overall prestige and several engineering disciplines. UT outranks Michigan in undergraduate business school accessibility (McCombs vs Ross junior-year). The decision typically depends on major and cost considerations.' },
      { q: 'Which is cheaper, UT after residency or Michigan in-state?', a: 'UT after residency at $11,688 is about $6,000/year cheaper than Michigan in-state at $17,700. The Texas residency pathway can make UT cheaper than the home-state flagship for Michigan families.' },
      { q: 'Can my Michigan student attend UT and pay in-state tuition through the residency pathway?', a: 'Yes, through the standard Texas residency pathway. Twelve months of Texas domicile establishes Texas residency for UT tuition purposes. The pathway typically requires acquiring Texas property and maintaining supporting indicia for the 12-month period before petitioning.' },
      { q: 'What about Michigan football and Big Ten culture?', a: 'If college football and Big Ten athletics are important to the family experience, Michigan has a stronger tradition than UT. UT football is competitive but the broader athletic culture is more Texas-specific (Longhorns alumni network) and less Big Ten-style.' },
      { q: 'Does Michigan Ross beat McCombs?', a: 'Ross is well-regarded but admits about 50% of Michigan undergrad applicants in their junior year. McCombs admits incoming freshmen directly. For students confident they want to study business, the direct-admit certainty at McCombs is a meaningful advantage. For students unsure of major, Michigan offers more flexibility but with the risk of not making the Ross cut.' },
    ],
    published: true,
  },
  {
    slug: 'virginia',
    competitorName: 'University of Virginia',
    competitorShortName: 'UVA',
    searchPhrase: 'ut austin vs uva',
    summary:
      'UT Austin and the University of Virginia are top-tier public universities with national reputations. UVA is generally regarded as more prestigious in the eastern US and ranks slightly higher on most national lists. UT outranks UVA in business (McCombs vs McIntire is debatable but McCombs is direct-admit while McIntire is junior-year), in computer science accessibility, and in engineering at the undergraduate level. UVA in-state at ~$22,300 is dramatically more expensive than UT in-state at $11,688, meaning Texas residency through UT produces a cheaper final cost than attending UVA as a Virginian.',
    utWins: [
      'UT in-state tuition ($11,688) is less than half of UVA in-state ($22,300)',
      'McCombs Business is direct freshman admit; McIntire is junior-year application',
      'CS direct admission; UVA CS within School of Engineering or College of Arts and Sciences both compete',
      'Cockrell Engineering offers broader undergrad engineering majors than UVA',
      'Austin tech industry and capital-city access',
      'Year-round outdoor climate',
    ],
    competitorWins: [
      'UVA generally outranks UT on prestige rankings (US News, Times, etc.)',
      'Strong Honors program and intellectual culture',
      'McIntire School of Commerce has prestige cachet for those admitted to it junior year',
      'Pre-med and pre-law pipelines to top professional schools',
      'Historic campus designed by Thomas Jefferson; classical academic environment',
      'Strong fraternity and sorority culture for those who value it',
    ],
    costComparison: {
      utInState: 11_688,
      utOutOfState: 44_908,
      competitorInState: 22_300,
      competitorOutOfState: 60_800,
      note: 'UVA is dramatically more expensive in both classifications. UVA in-state at $22,300 is nearly double UT in-state at $11,688. UVA out-of-state at $60,800 is about $16,000 more than UT out-of-state. UT after Texas residency at $11,688 is about $11,000/year cheaper than even UVA in-state, meaning the residency pathway makes UT roughly half the cost of UVA at the home rate.',
    },
    programComparison:
      'For Business: McCombs (UT) admits freshmen directly. McIntire (UVA) is junior-year application after the College, accepting about 40% of applicants. For those who get into McIntire, prestige is strong; for those who don\'t, they finish at the College. For Computer Science: UT CS ranks higher than UVA CS at the undergraduate level. For Engineering: Both are solid; UT Cockrell has broader undergrad engineering options. For Liberal Arts: UVA generally outranks UT; UT counters with Plan II Honors.',
    admissionsComparison:
      'UVA acceptance rate is about 19%, slightly more selective than UT\'s ~30%. UVA admissions emphasizes academic rigor and depth of extracurricular involvement. UT for in-state students uses Top 10% Rule. For out-of-state students at both schools, admission is holistic but heavily academic.',
    cultureComparison:
      'UVA sits in Charlottesville, a small college town of about 47,000 with rolling Virginia foothills nearby. The Jefferson-designed campus has classical academic character. Greek life is strong. UVA culture combines old-line southern formal tradition with modern intellectual environment. UT Austin is in the heart of urban Austin, a dramatically different vibe with capital-city access, music industry, and tech scene. Choice often comes down to small-town vs urban preference plus regional preferences.',
    residencyAngle:
      'The Texas residency pathway makes UT dramatically cheaper than UVA for out-of-state families. UT after residency at $11,688/year vs UVA out-of-state at $60,800/year is a difference of about $49,000/year. Even compared to UVA in-state at $22,300, UT after residency is about $11,000/year cheaper. Virginia residency for college students from out of state is essentially impossible to establish in a 12-month timeframe; Texas residency at 12 months is achievable.',
    faq: [
      { q: 'Is UVA better than UT Austin?', a: 'UVA generally outranks UT on national prestige rankings. UT outranks UVA in undergraduate business school accessibility (McCombs is direct admit; McIntire is junior-year application). The decision typically depends on major, regional preference, and cost.' },
      { q: 'Which is cheaper, UT after residency or UVA in-state?', a: 'UT after residency at $11,688 is about $11,000/year cheaper than UVA in-state at $22,300. The Texas residency pathway can make UT roughly half the cost of UVA even compared to UVA\'s home rate.' },
      { q: 'My Virginia student got into UVA but is also considering UT. What is the cost difference?', a: 'UVA in-state at ~$22,300 vs UT out-of-state at $44,908 is about $22,600/year more at UT. If the family establishes Texas residency, UT after residency at $11,688 becomes about $11,000/year cheaper than UVA in-state. Four-year cost: roughly $89,000 at UVA in-state vs $80,000 at UT (year 1 out-of-state, years 2-4 in-state).' },
      { q: 'What about McIntire vs McCombs for business?', a: 'McCombs is direct freshman admission, providing certainty for students who want business. McIntire is a junior-year application after the College of Arts and Sciences, with about 40% acceptance from the UVA applicant pool. For students confident they want business, McCombs\' direct admit is a major advantage.' },
      { q: 'Can my Virginia student establish Texas residency at UT?', a: 'Yes, through the standard Texas residency pathway. Acquire Texas property, establish the supporting indicia for 12 continuous months, and petition through UT MyStatus. Virginia residency for college students is much harder to establish on the reverse path (i.e., UT students cannot easily establish Virginia residency).' },
    ],
    published: true,
  },
];

export const getComparison = (slug: string) => COMPARISONS.find(c => c.slug === slug && c.published);
export const publishedComparisons = () => COMPARISONS.filter(c => c.published);
