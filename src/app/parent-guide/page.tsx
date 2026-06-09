import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'The Out-of-State Parent Guide to UT Austin',
  description: 'Move-in logistics, key academic dates, housing, residency strategy, and your first 30 days as a UT Austin parent.',
  path: '/parent-guide',
});

export default function ParentGuidePage() {
  return <MigrationStub
    title="The Parent Guide to UT Austin"
    intro="Everything you wish you had known before your student moved to Austin. Migration in progress."
  />;
}
