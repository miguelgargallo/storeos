# sk

Open-source commitment
----------------------
We are committed to maintaining sk as an open-source alternative for building and operating storefronts. Our goal is to provide a lightweight, extensible library that works well with Next.js and Stripe, and to keep the project transparent, documented, and community-friendly. Contributions, issues, and suggestions are welcome.

Project overview
----------------
`sk` is an open-source solution for building storefronts and managing Store data in Next.js applications. It provides utilities for product browsing, category management, orders, carts, and Stripe integration — designed to be small, composable, and framework-friendly.

Built by Pencil Works, LLC — https://pencil.li

Key features
------------
- Product browsing and retrieval (paginated and filtered).
- Category management and lookup utilities.
- Order creation and handling flows.
- Cart operations (add, remove, fetch).
- Built-in Stripe support for payments and price formatting helpers.
- Lightweight logger with configurable log levels.

Installation
------------
Install with npm:

```bash
npm install sk
```

Quick usage example
-------------------
A minimal example for Next.js to fetch and render products:

```tsx
import * as Store from "sk";
import { formatMoney } from "sk/divisas";
import Image from "next/image";
import Link from "next/link";

export async function ProductList() {
  const products = await Store.productBrowse({ first: 6 });

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.metadata.slug}`}>
            <article>
              {product.images[0] && (
                <Image src={product.images[0]} width={300} height={300} alt={product.name} />
              )}
              <h2>{product.name}</h2>
              {product.default_price?.unit_amount && (
                <p>
                  {formatMoney({
                    amount: product.default_price.unit_amount,
                    currency: product.default_price.currency,
                    locale: "en-US",
                  })}
                </p>
              )}
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

Usage notes
-----------
- The package is authored as an ESM module with TypeScript types exported from `dist`.
- Exports include the main index and a few helper modules such as `divisas`, `internal`, `sk`, and `db`.
- Peer dependencies include React and Next.js versions compatible with the package — check package.json for details.

Debugging and logging
---------------------
Control debug output with the `LOG_LEVEL` environment variable:
- ERROR — critical issues.
- WARN — noteworthy but not fatal.
- LOG — regular operational details.
- DEBUG — verbose debugging including timing information.

Contributing
------------
We welcome issues, pull requests, and feature suggestions. When contributing:
- Open an issue to discuss larger changes before implementing.
- Follow existing code style; run formatting tools if present (prettier).
- Add small, focused commits and clear PR descriptions.

Maintenance & roadmap
---------------------
- The project is actively maintained with a focus on compatibility with modern Next.js and Stripe versions.
- We aim for responsive fixes for critical issues and incremental feature improvements.
- Roadmap items include more first-class integrations, improved TypeScript types, and expanded test coverage.

License
-------
This project is distributed under the Pylar AI Creative ML Free License — see LICENSE.md for full text and restrictions (spoiler: none).

Contact
-------
Pencil Works, LLC — pencil.li