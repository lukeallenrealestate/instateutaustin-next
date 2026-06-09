import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';
import { TUITION, fmtUSD } from '@/lib/tuition';

export const metadata = pageMetadata({
  title: 'UT Austin Tuition Savings Calculator',
  description: `Model UT Austin in-state vs. out-of-state tuition savings year by year. In-state ${fmtUSD(TUITION.inStatePerYear)} vs out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}.`,
  path: '/tuition-calculator',
});

export default function CalculatorPage() {
  return <MigrationStub
    title="UT Austin Tuition Savings Calculator"
    intro="Interactive savings model with year-by-year projection. Migration in progress."
  />;
}
