import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Condos Near UT Austin: The 2026 Residency Buyer Guide',
  description: 'How to evaluate condos near UT Austin for the Texas residency pathway. West Campus, Hyde Park, downtown, HOA gotchas, owner-occupancy clauses.',
  path: '/condos-near-ut',
});

export default function CondosPage() {
  return <MigrationStub
    title="Condos Near UT Austin"
    intro="The 2026 residency buyer guide. West Campus to East Austin, HOA traps, neighborhood-by-neighborhood. Migration in progress."
  />;
}
