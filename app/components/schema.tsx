import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
} from "../lib/site-data";

export function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      professionalServiceSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}