import { jsonLd } from '@/lib/seo';

/** Renders a JSON-LD <script> tag. Pass any schema.org object as `data`. */
export function Schema({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLd(data)}
    />
  );
}
