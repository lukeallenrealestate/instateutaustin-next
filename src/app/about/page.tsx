import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About This Site',
  description: 'Who runs instateutaustin.com, why it exists, how it makes money, and the editorial standards behind the guide.',
  path: '/about',
});

export default function AboutPage() {
  return <MigrationStub
    title="About instateutaustin.com"
    intro="An independent editorial guide to UT Austin in-state tuition and Texas residency rules. Migration in progress."
  />;
}
