import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'The 12-Month UT Austin Residency Timeline',
  description: 'A month-by-month operating plan for establishing Texas residency for UT Austin in-state tuition. Tasks, deadlines, documents.',
  path: '/12-month-timeline',
});

export default function TimelinePage() {
  return <MigrationStub
    title="The 12-Month Residency Timeline"
    intro="Month-by-month operating plan with countdown to next census date. Migration in progress."
  />;
}
