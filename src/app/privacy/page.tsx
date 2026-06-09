import { MigrationStub } from '@/components/MigrationStub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How instateutaustin.com handles contact form data and what we collect.',
  path: '/privacy',
  noindex: true,
});

export default function PrivacyPage() {
  return <MigrationStub title="Privacy Policy" />;
}
