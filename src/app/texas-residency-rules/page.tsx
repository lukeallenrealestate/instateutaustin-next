import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Texas Residency Rules for UT Austin In-State Tuition',
  description: 'The complete legal framework: §54.052, the THECB rules, the 12-month domicile clock, the dependent vs. independent distinction, the property pathway, and the failure modes.',
  path: '/texas-residency-rules',
});

export default function ResidencyRulesPage() {
  return <MigrationStub
    title="Texas Residency Rules for UT Austin In-State Tuition"
    intro="The 8,200-word authority page on §54.052, THECB framework, dependent vs. independent, and the property pathway. Migration in progress."
  />;
}
