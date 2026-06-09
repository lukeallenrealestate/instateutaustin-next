import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Rule #3 vs. Rule #4: UT Residency Property Pathways',
  description: 'Side-by-side comparison of the two property-based Texas residency pathways at UT Austin. Cost, complexity, taxes, exit strategy, risk.',
  path: '/rule-3-vs-rule-4',
});

export default function Rule3vs4Page() {
  return <MigrationStub
    title="Rule #3 vs. Rule #4"
    intro="The two property pathways side-by-side: student-occupied (Rule #3) vs. rental LLC (Rule #4). Migration in progress."
  />;
}
