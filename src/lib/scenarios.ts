// Programmatic edge-case residency-scenario pages.
//
// Each entry drives a /ut-austin-residency-[slug] page targeting the
// specific search "ut austin residency [scenario]". Substantive
// per-scenario content with rule citations, real edge-case guidance,
// and a path forward.

export interface Scenario {
  slug: string;
  title: string;
  searchPhrase: string;
  summary: string;
  framework: string;
  detail: string;
  documentNotes: string[];
  warnings: string[];
  faq: Array<{ q: string; a: string }>;
  published: boolean;
}

export const SCENARIOS: Scenario[] = [
  {
    slug: 'military-families',
    title: 'UT Austin Residency for Military Families',
    searchPhrase: 'UT Austin residency military',
    summary:
      'Active-duty military assigned to a Texas base, their spouse, and their dependents qualify for in-state UT Austin tuition regardless of the 12-month domicile clock. The relevant documents are the service member\'s LES showing a Texas duty station, plus standard dependent documentation. State of Legal Residence (SLR) adds nuance but does not block the pathway.',
    framework:
      'Texas Education Code §54.052(a-1) and (b) contain specific carve-outs for military personnel and their dependents. The carve-out applies to active-duty members stationed in Texas, members whose home of record is Texas, and certain reserve and National Guard personnel. Spouses and dependents (defined under federal tax dependency rules) qualify by virtue of the service member\'s status.',
    detail: `For UT Austin, the typical military pathway works like this:

For an active-duty service member stationed at a Texas base (Fort Cavazos, Fort Sam Houston, Joint Base San Antonio, Sheppard AFB, NAS Corpus Christi, or any of the dozen-plus other Texas installations): the service member, spouse, and dependents qualify for in-state tuition immediately on assignment, with no 12-month clock requirement. The petition through MyStatus requires the service member's most recent Leave and Earnings Statement (LES) showing the Texas duty station and the dependent's relationship documentation.

For a service member whose State of Legal Residence (SLR) on the LES is Texas (regardless of current duty station): qualifies under §54.052 because Texas treats SLR-Texas service members as Texas residents even when deployed or stationed elsewhere. This is the cleanest case and is common for service members who entered the military from Texas.

For a service member whose SLR is another state but who is stationed at a Texas base: still qualifies under the duty-station provision. The SLR is irrelevant for the tuition classification once the Texas duty station is established.

For a service member whose SLR is Texas but who is stationed at a non-Texas base: still qualifies. Texas SLR alone is sufficient.

For dependents of a deceased or retired military member with Texas connection: separate analysis depending on the program (Hazlewood Act for veterans' dependents is its own framework). UT's Veterans Resource Center is the right starting point.`,
    documentNotes: [
      'Most recent Leave and Earnings Statement (LES) showing Texas duty station OR Texas SLR',
      'Military orders (PCS orders) confirming the Texas assignment',
      'For dependents: birth certificate or marriage certificate establishing the dependent relationship',
      'Federal tax return (if filed) reflecting the military domicile',
      'DD-214 if the service member has separated from active duty',
    ],
    warnings: [
      'When the service member PCSes out of Texas, the family may need to actively maintain Texas residency through other means (property, vehicle registration, etc.) to keep the tuition classification through graduation. UT does not automatically rescind classification but a fresh review may occur.',
      'The Hazlewood Act for Texas veterans\' dependents is a separate exemption from tuition, NOT a residency classification, and has different eligibility rules.',
      'Reserve and National Guard service members have additional eligibility paths through periods of active duty service; consult UT\'s Veterans Resource Center for the specific case.',
    ],
    faq: [
      { q: 'Does my child qualify for UT in-state tuition if I am active-duty stationed at Fort Cavazos?', a: 'Yes. Active-duty service members stationed at any Texas base, plus their spouses and dependents, qualify for in-state tuition under Texas Education Code §54.052. The petition requires the service member\'s LES showing the Texas duty station and the dependent\'s relationship documentation. No 12-month clock applies.' },
      { q: 'My SLR is California but I am stationed at Sheppard AFB. Does my dependent qualify?', a: 'Yes. The duty-station provision overrides the SLR for tuition classification purposes. Your dependent qualifies as a Texas resident for UT tuition while you are stationed in Texas.' },
      { q: 'I am a Texas veteran. Does my child get in-state tuition?', a: 'Possibly through two different paths: (1) if your SLR remains Texas, your child qualifies through the standard military provision; (2) the Hazlewood Act provides a tuition exemption (not residency classification) for veterans and their dependents under specific conditions. The Hazlewood Act has its own eligibility rules and benefit caps; see UT\'s Veterans Resource Center.' },
      { q: 'Will my child lose in-state status when I PCS out of Texas?', a: 'Not automatically. UT\'s general practice is that once a student is classified as a resident through the military provision, the classification continues through the academic program. However, a fresh review may occur if the family\'s connection to Texas substantially weakens. Maintaining a Texas address (e.g., through property ownership) is the safest hedge.' },
    ],
    published: true,
  },
  {
    slug: 'divorced-parents',
    title: 'UT Austin Residency When Parents Are Divorced',
    searchPhrase: 'UT Austin residency divorced parents',
    summary:
      'When parents are divorced and one resides in Texas, the THECB residency rules look to the parent who claims the student as a federal tax dependent. If the Texas parent claims the student, the family is on solid ground. If the out-of-state parent claims, the Texas parent\'s domicile does not flow to the student. The fix is typically Form 8332 to coordinate the dependent claim election.',
    framework:
      'THECB residency rules for dependent-branch students point to the domicile of the parent who claims the student on the most recent federal tax return. When parents are divorced, that is one specific parent (not both), determined by either the divorce decree or the IRS tiebreaker rules. Coordinating which parent claims the student in the relevant tax year(s) is the leverage point.',
    detail: `The mechanics work like this:

Federal tax law (IRC §152) provides that only one parent can claim a child as a dependent in a given tax year. For divorced parents, the custodial parent (the parent with whom the child resides for the greater portion of the year) is the default claimant. Form 8332 allows the custodial parent to release the claim to the non-custodial parent.

For UT residency purposes, THECB looks at the parent who actually claimed the student. If the Texas-resident parent claims the student, THECB treats the student as residing with a Texas-domiciled parent and the pathway is open. If the non-Texas parent claims, the Texas connection does not transfer through tax dependency.

In a typical scenario, the divorced parents might be: Texas parent who has the property and most of the year's custody time, and a non-Texas parent who has higher income and historically claimed the dependent for tax savings. The fix: in the relevant tax year, the non-Texas parent files Form 8332 releasing the dependent claim to the Texas parent. The Texas parent claims the student. THECB sees a Texas-resident parent claiming the student. Pathway works.

Coordination should happen BEFORE the tax return is filed for the relevant year. Amending after the fact is possible but creates documentation friction with UT's residency office.

The custody arrangement itself is generally not what THECB looks at. What matters is the federal tax dependent claim plus the Texas parent's 12-month domicile record. The student does not need to live primarily with the Texas parent for the residency claim, as long as the Texas parent has the property and the tax claim.`,
    documentNotes: [
      'Federal tax return for the relevant year showing the Texas parent claiming the student as a dependent',
      'Form 8332 if the non-custodial parent released the claim to the Texas parent (or vice versa)',
      'Texas parent\'s standard residency documentation (property, license, vehicle, voter, tax return with Texas address)',
      'Divorce decree (sometimes requested as supporting context but not always required)',
    ],
    warnings: [
      'Coordinate the dependent claim BEFORE filing the tax return for the relevant year. Amended returns work but are more friction.',
      'Releasing the dependent claim may affect Earned Income Tax Credit, Child Tax Credit, and Head of Household status. Consult a CPA.',
      'If the divorce decree specifies which parent claims the dependent in which years, deviating from the decree could violate the decree. Family-law attorney consultation recommended.',
    ],
    faq: [
      { q: 'My ex-husband lives in California and historically claims our daughter as a dependent. Can we change this for UT residency purposes?', a: 'Yes. For the relevant tax year, your ex can sign Form 8332 releasing the dependent claim to you (the Texas parent). You then claim her on your return. THECB sees a Texas-resident parent claiming the student. The savings from in-state tuition (approximately $33,220/year) typically more than compensates for the tax savings your ex loses by not claiming her.' },
      { q: 'My daughter lives primarily with her California mother. Can I (the Texas parent) still claim her for UT residency?', a: 'Yes, if you legally claim her on your federal tax return for the relevant year and your ex agrees. The custody time is less important than the tax claim. However, if your ex is the custodial parent, you need Form 8332 from her to lawfully claim the dependent. Without that, you may not be entitled to claim her under federal law, regardless of what THECB says.' },
      { q: 'What if our divorce decree requires my ex to claim our daughter as a dependent?', a: 'Then you need to renegotiate or get a court order modifying the decree before filing differently. A Texas family-law attorney can help. Otherwise filing inconsistently with the decree exposes you to contempt of court or a modification action.' },
      { q: 'Does it matter who has primary custody?', a: 'For THECB residency purposes, what matters is who claims the student on the federal tax return. The custody arrangement is the input to that decision but not directly what THECB reviews.' },
    ],
    published: true,
  },
  {
    slug: 'transfer-students',
    title: 'UT Austin Residency for Transfer Students',
    searchPhrase: 'UT Austin residency transfer students',
    summary:
      'Transfer students from Texas community colleges or other Texas public universities typically inherit their existing residency classification. Transfer students from out-of-state must establish residency the standard way: 12 continuous months of Texas domicile before the term\'s census date.',
    framework:
      'THECB residency rules treat all students identically regardless of how they enter UT: as freshmen, internal transfers, or external transfers. The same 12-month domicile clock applies. The only difference for transfer students is the timing.',
    detail: `Transfer students entering UT come in three flavors with different residency situations:

Texas community college transfer: A student who completed two years at Austin Community College, Houston Community College, or another Texas community college is almost always already classified as a Texas resident. That classification typically transfers to UT directly. UT will independently verify, but the verification is usually a formality if the prior institution had the residency classification on file.

Texas four-year transfer: A student transferring from Texas A&M, Texas Tech, UT-San Antonio, or another Texas public is in the same position. The residency classification at the prior institution transfers.

Out-of-state transfer: A student transferring from a university outside Texas (Arizona State, Indiana University, UNC, etc.) goes through the same residency framework as a new out-of-state freshman. The 12-month domicile clock applies. If the family has been planning the transfer for a year and has Texas property and supporting indicia in place, the petition can be filed in time for the first term at UT. If the family is reactive (admit notification arrived recently), the student typically pays non-resident tuition for the first year at UT and qualifies through the standard property pathway in year 2.

A common scenario: a student is denied direct admission to UT as a freshman, attends a Texas community college for 1-2 years, establishes residency through the community college's lower out-of-state tuition burden (or sometimes through a parent buying Texas property during that time), then transfers to UT as a Texas resident. This is a deliberate strategy that some families pursue.`,
    documentNotes: [
      'For Texas community college and Texas public university transfers: the prior institution\'s residency determination, which UT can usually verify directly through state records.',
      'For out-of-state transfers: the full standard residency package (property documents, indicia of domicile, federal tax return with Texas address, narrative).',
      'Transcripts from the prior institution showing the student was enrolled (relevant for timing the residency clock).',
    ],
    warnings: [
      'Time enrolled at an out-of-state institution does NOT count toward the Texas residency clock. A student enrolled at Arizona State for the past year has effectively zero Texas residency time even if the family acquired Texas property during that year.',
      'For students transferring after a community college residency was established, the transfer to UT is straightforward but UT may re-verify the residency facts.',
      'Transfer students from out-of-state may need to plan a gap term or pay non-resident tuition for one term to allow the residency clock to complete.',
    ],
    faq: [
      { q: 'I am transferring from Austin Community College where I am classified as a Texas resident. Do I need to re-petition for UT residency?', a: 'Almost certainly not. UT generally accepts the classification from the prior Texas public institution. You may need to submit confirmation through MyStatus but the classification typically transfers without a fresh petition.' },
      { q: 'I am transferring from the University of Indiana. Do I get Texas residency?', a: 'Not automatically. Out-of-state transfers go through the same standard residency framework. Your time enrolled at Indiana does not count toward the Texas 12-month clock. If your family acquired Texas property a year ago and has the supporting indicia in place, you can petition immediately for UT residency.' },
      { q: 'Can I use my family\'s Texas property purchase from two years ago even though I was enrolled out of state?', a: 'Possibly. The Texas property and supporting indicia might satisfy the 12-month clock independently of where you were enrolled. The key documents: the property closing, utility bills, your parents\' federal tax returns with the Texas address, and the standard supporting indicia. If all of those existed during the 12 months preceding the target term census date, the petition is reasonable.' },
      { q: 'Should I take a gap year to establish residency before transferring?', a: 'It can work, especially if combined with a job in Texas (independent branch) or your parents establishing property and indicia (dependent branch). A gap year is a clean way to build a 12-month residency record without the timing pressure of immediate enrollment.' },
    ],
    published: true,
  },
  {
    slug: 'graduate-students',
    title: 'UT Austin Residency for Graduate Students',
    searchPhrase: 'UT Austin residency graduate students',
    summary:
      'Graduate students typically qualify as independent under THECB residency rules and establish residency on their own 12-month domicile clock. Common pathways include working in Texas during a gap year, attending UT for a master\'s after Texas undergraduate, or being employed by a Texas employer with substantial gainful activity.',
    framework:
      'THECB residency rules apply identically to graduate and undergraduate students. Graduate students more commonly qualify under the independent branch because they are typically over 18, not claimed as a federal tax dependent, and providing the majority of their own support.',
    detail: `Graduate students at UT Austin generally fall into three residency categories:

Direct from Texas undergraduate: Students who attended UT or another Texas public university as undergraduates and continue immediately to graduate school typically maintain their resident classification. The classification carries over.

Direct from out-of-state undergraduate: Students who graduated from an out-of-state institution and enroll immediately in UT graduate school are non-residents on entry. They must either: (a) wait one year, working or otherwise present in Texas, and then petition; or (b) qualify through some other path (employed by Texas employer, military, etc.).

After gap year or work experience in Texas: Students who graduated and then worked in Texas for 12+ months before starting graduate school typically qualify on the independent branch. The Texas employment with W-2 income from a Texas employer, plus standard indicia (license, vehicle, voter, tax return with Texas address), establishes residency on the work record.

Graduate students who are funded by an assistantship (TA, RA, fellowship) often qualify for in-state tuition through the assistantship itself, regardless of the underlying residency classification. Many UT graduate programs include the resident-tuition rate as part of the standard assistantship package.

For graduate students continuing to claim their parents as their tax connection: this is harder. THECB independence rules require the graduate student to be at least 18, not claimed as a dependent on a parent's federal return in the current or prior tax year, AND providing the majority of their own support. Students still on a parent's tax return and insurance generally do not qualify on the independent branch.`,
    documentNotes: [
      'For continuing students from Texas undergraduate: the existing residency classification, verified through MyStatus',
      'For gap-year work pathway: W-2s from Texas employer(s), federal tax return showing Texas address, all standard supporting indicia',
      'For assistantship-based in-state classification: the assistantship offer letter and documentation that the assistantship covers in-state tuition',
      'Standard supporting indicia: Texas driver\'s license, vehicle registration, voter registration',
    ],
    warnings: [
      'A graduate student still claimed as a federal tax dependent by parents in another state cannot claim residency on the independent branch. The student must either become independent for tax purposes or qualify on the parents\' Texas domicile (dependent branch).',
      'Time spent in Texas solely as a student does NOT count toward the 12-month residency clock. Working a part-time campus job typically does not count either unless it is substantive gainful employment.',
      'International graduate students on F-1 visas generally cannot establish Texas residency for tuition purposes regardless of how long they have been in Texas. The visa category presumes temporary U.S. presence.',
    ],
    faq: [
      { q: 'I just finished undergrad at UT and got into UT graduate school. Do I keep my in-state classification?', a: 'Yes, in almost all cases. UT treats this as a continuing enrollment for residency purposes. The classification carries over. You may need to confirm through MyStatus but no fresh petition is typically required.' },
      { q: 'I am an out-of-state student admitted to UT for a master\'s starting in the fall. Can I qualify for in-state tuition for year 1?', a: 'Only if you have 12 continuous months of Texas domicile completed before the term\'s census date. That means moving to Texas, working in Texas, establishing supporting indicia, and waiting 12 months before enrollment. If you cannot wait, plan for one year of non-resident tuition and petition for year 2.' },
      { q: 'My TA assistantship offer says I will be charged in-state tuition. Do I still need to establish residency?', a: 'No. Many UT graduate programs grant in-state tuition as part of the assistantship package independent of underlying residency classification. Confirm in writing with the program before enrolling, but if the assistantship covers in-state tuition, that resolves the cost issue regardless of your formal classification.' },
      { q: 'I work full-time as a remote employee for a California company while living in Austin. Does that count as Texas employment?', a: 'It can, especially if your W-2 shows you working from a Texas address and you have built the standard supporting indicia. The Texas-employment basis for residency does not require the employer to be Texas-based as long as you are substantively conducting gainful employment from Texas.' },
    ],
    published: true,
  },
  {
    slug: 'gap-year',
    title: 'UT Austin Residency During a Gap Year',
    searchPhrase: 'UT Austin residency gap year',
    summary:
      'A gap year between high school and UT is one of the cleanest ways to establish Texas residency. The student works in Texas, establishes indicia of domicile, and arrives at UT for Fall enrollment already qualified for in-state tuition. Works equally well for independent students earning their own way or for families who use the gap year to acquire property and complete the 12-month clock.',
    framework:
      'A 12-month gap between high school graduation and UT enrollment is sufficient time for the standard THECB residency framework. Either the independent or dependent branch can work depending on the family\'s tax filing structure.',
    detail: `The gap-year approach to UT residency works well because it gives the family or the student a clean 12-month window with no UT enrollment competing for the residency clock.

For the dependent branch: the family acquires Texas property in June after the student's high school graduation. The student moves to Texas, lives at the property, and may work part-time or pursue something else (volunteering, an internship, a structured gap-year program). The parents file the next year's federal tax return with the Texas address claiming the student as a dependent. By the following September census date, 12 months have elapsed and the petition can be filed. The student enters UT as a Texas resident from year 1.

For the independent branch: the student moves to Texas independently (parents do not need to also move), gets a job with a Texas employer, files their own federal tax return as an independent (not claimed as a dependent on the parents' return) for the relevant tax year, and establishes all the supporting indicia. 12 months of substantive Texas residence and employment qualifies them under the independent branch. This works for students who are willing to be classified as independent for tax purposes (which has implications for parental tax filing).

The gap year is also useful for the family that is reactive to the UT admission notification: the admit arrives in April, the family decides to pursue the residency pathway in May, the student takes a gap year, the family acquires Texas property in June, and the student enrolls at UT 14 months later as a Texas resident.

UT specifically permits gap years and processes deferral requests through admissions. The deferral typically lasts one year. During the gap year, the student is not enrolled at UT, which is precisely what the residency framework requires.`,
    documentNotes: [
      'Standard property pathway documents: settlement statement, recorded deed, utility bills',
      'Texas driver\'s license, vehicle registration, voter registration',
      'For dependent branch: parents\' federal tax return with Texas address and student listed as dependent',
      'For independent branch: student\'s W-2s from Texas employer, student\'s federal tax return as independent (not claimed as dependent)',
      'UT admission deferral confirmation letter',
    ],
    warnings: [
      'A gap year traveling abroad or living outside Texas does NOT contribute to the residency clock. The student must be substantively present in Texas during the gap year.',
      'A gap year living at the Texas property but spending most of the year at the parents\' out-of-state home does not satisfy the presence requirement.',
      'UT deferrals are typically one year. Extending the gap to 18 months may require a second deferral request or affect the admission.',
    ],
    faq: [
      { q: 'My daughter was admitted to UT for Fall 2026. Should we use a gap year to establish residency for Fall 2027?', a: 'Worth considering. If your family does not yet have Texas property, you would need to acquire it by August 2025 to complete the 12-month clock by August 2026 (for the original Fall 2026 admit). Pushing to Fall 2027 gives you another year. Two main considerations: (1) UT typically grants one-year deferrals; (2) the year off from school is a meaningful decision in itself, separate from the financial math.' },
      { q: 'Can my son work in Texas during the gap year and qualify on his own?', a: 'Yes, if he qualifies as independent under THECB rules. That requires he is at least 18, is NOT claimed as a dependent on your federal return in the gap-year tax year, and provides the majority of his own support. The trade-off: you lose the dependent exemption and possibly other tax benefits for that year. Run the tax math with a CPA.' },
      { q: 'How much does the gap year cost the family in opportunity cost?', a: 'Beyond the year of foregone earnings or progress, the family is paying property carrying costs ($25K-$45K/year depending on the property) for the gap year plus the student\'s living expenses. Against that: year 1 of UT at the in-state rate instead of the out-of-state rate saves $33,220. So year 1 net savings: $33,220 minus the gap-year housing cost differential vs whatever the student would have been doing anyway.' },
      { q: 'What can the student actually do during the gap year?', a: 'Common choices: work full-time at an Austin company (good for the independent branch); volunteer or do a structured gap-year program; take community college courses at Austin Community College (be careful here, ACC enrollment is fine but does not contribute to the residency clock); pursue a personal project; intern at a UT-area research lab or company.' },
    ],
    published: true,
  },
  {
    slug: 'denied-petition',
    title: 'UT Austin Residency Petition Denied: What to Do Next',
    searchPhrase: 'UT Austin residency denied appeal',
    summary:
      'A denied residency petition is not the end of the road. Most denials are caused by specific documentary problems that can be corrected. The petitioner can appeal within the institution, fix the documentary issue and re-petition for the next term, or seek review at the THECB level (rare).',
    framework:
      'Residency classification is reviewed per term, so a denial for Fall does not preclude a successful petition for Spring. The institutional appeals process allows the petitioner to submit additional documentation or written response to the office\'s reasons for denial.',
    detail: `When UT's residency office denies a petition, the determination email includes the specific reasons for the denial. Most denials fall into one of three categories:

Documentary problems: the federal tax return for the relevant year was filed with the prior state's address, a vehicle was still registered in the prior state at the time of petition, or a key supporting document was missing. Fix: correct the documentary issue (often by filing Form 1040-X to amend the tax return, or completing the missing registration) and submit additional documentation.

Timing problems: the 12-month clock did not fully run by the target term's census date. The reviewer counts back 365 days from the census date and looks for a complete record across the entire span. Fix: wait for the next term with a fully-running clock and re-petition.

Substance problems: the petition shows that the family or student lacked genuine Texas domicile during the 12-month window. For example, the parent's primary employment was in another state, the family voted in another state during the window, or the supporting indicia were assembled at the last minute rather than maintained throughout. These are harder to fix and may require a substantive change in the family's living arrangements.

The institutional appeal process: within a defined window (typically 30 days), the petitioner can submit additional documentation or a written response to UT's reasons for denial. The office reviews and either reverses, maintains, or escalates. Most successful appeals are decided on additional documents that resolve the specific concern (an amended return, a backdated lease, a previously-missed registration).

If the institutional appeal fails: the petitioner can seek review at the THECB level in narrow circumstances, typically only where UT misapplied the rules. THECB is not a venue for re-arguing the facts.

The most practical option after denial is usually to fix the documentary issue and re-petition for the next term. Residency classification is per-term; a Fall denial can be followed by a Spring petition.`,
    documentNotes: [
      'UT\'s denial letter showing the specific reasons cited',
      'Documents that address each cited reason (e.g., amended Form 1040-X for wrong-state tax return)',
      'A revised narrative explaining what changed since the denied petition',
      'Any new supporting indicia obtained since the original petition',
    ],
    warnings: [
      'Filing the same petition again with the same documents will produce the same denial. Identify what specifically caused the denial and address it before re-filing.',
      'Multiple denials on the same documentary record may be flagged in the system and make future petitions harder to approve.',
      'In some cases the right answer is to wait an additional 12 months to build a clean record, rather than rushing a re-petition.',
    ],
    faq: [
      { q: 'My petition was denied because of a tax return filed with my California address. Can I appeal?', a: 'Yes, but appealing without changing the underlying problem rarely succeeds. The better path: file Form 1040-X with the IRS to amend the address to your Texas address (allow 8-12 weeks for IRS processing), then re-petition with the amended return and a brief narrative explaining the correction. Most petitions denied for this reason are approved on re-petition with the amended return.' },
      { q: 'How long do I have to appeal?', a: 'UT\'s residency office typically allows 30 days from the denial notice for institutional appeals. Check the specific deadline in the denial letter. Re-petitioning for the next term has its own timeline.' },
      { q: 'Will appealing affect my admission to UT?', a: 'No. Residency petitions and admission decisions are handled by separate offices. A residency denial does not impact your admission or your standing as a student. It just affects the tuition rate.' },
      { q: 'I was denied for Fall 2026 because my clock did not run. Can I petition for Spring 2027?', a: 'Possibly, if your 12-month clock will be complete by the Spring 2027 census date (typically early February 2027). If your clock-starting events were in September 2026, by February 2027 you are only at 5 months. You\'d need to wait until Fall 2027 for the clock to fully run. Plan the timeline backward from the census date.' },
    ],
    published: true,
  },
];

export const getScenario = (slug: string) => SCENARIOS.find(s => s.slug === slug && s.published);
export const publishedScenarios = () => SCENARIOS.filter(s => s.published);
