type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: "https://gradinitamicaandkids.ro",
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `https://gradinitamicaandkids.ro${item.path}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="max-w-7xl mx-auto px-6 pt-24">
        <ol className="flex items-center gap-2 text-sm text-foreground/50 flex-wrap">
          <li>
            <a href="/" className="hover:text-green-dark transition-colors">
              Acasă
            </a>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-foreground/30">/</span>
              <span className={i === items.length - 1 ? "text-green-dark font-semibold" : ""}>
                {item.name}
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
