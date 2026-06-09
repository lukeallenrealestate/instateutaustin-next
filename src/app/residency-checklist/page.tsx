import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'UT Austin Residency Checklist',
  description: 'Every document UT may ask for, organized by Rule #3 vs. Rule #4 path. Includes the three most common reasons petitions are denied.',
  path: '/residency-checklist',
});

export default function ChecklistPage() {
  return <MigrationStub
    title="The UT Austin Residency Checklist"
    intro="Document checklist + common-mistake taxonomy. Migration in progress."
  />;
}
