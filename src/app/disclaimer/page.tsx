import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Disclaimer',
  description: 'Educational disclaimer for instateutaustin.com. Information here is not legal, tax, or financial advice and is not affiliated with the University of Texas at Austin.',
  path: '/disclaimer',
  noindex: true,
});

export default function DisclaimerPage() {
  return <MigrationStub title="Disclaimer" />;
}
