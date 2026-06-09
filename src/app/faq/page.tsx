import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'UT Austin In-State Tuition FAQ',
  description: 'Thirty-two questions about Texas residency for UT Austin tuition, organized by category.',
  path: '/faq',
});

export default function FaqPage() {
  return <MigrationStub
    title="UT Austin In-State Tuition FAQ"
    intro="Thirty-two questions across eligibility, property, documentation, timing, money, and edge cases. Migration in progress."
  />;
}
