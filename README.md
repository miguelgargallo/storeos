# storeOS — Open, lightweight storefront utilities

[![npm](https://img.shields.io/npm/v/storeos?label=npm&color=brightgreen)](https://www.npmjs.com/package/storeos) [![GitHub](https://img.shields.io/badge/-github-181717?logo=github&logoColor=white)](https://github.com/itamaesanorg/storeos) [![License](https://img.shields.io/badge/license-Pylar%20AI%20Creative%20ML%20Free-blue)](./License.md)

storeOS is an open, lightweight package for building storefronts and managing store data in Next.js. It includes Stripe-ready helpers and a modular, easy-to-use API.

Open-source commitment
----------------------
We maintain storeOS as a transparent, community-focused project. Contributions, issues, and suggestions are welcome. The goal is a small, practical toolkit that makes building and operating storefronts straightforward.

Project overview
----------------
storeOS provides utilities for product browsing, category management, carts, orders, and Stripe integration. The library emphasizes readable code, predictable variable names, and modular APIs so you can use only what you need.

Key features
------------
- Product browsing and retrieval (pagination and filtering).
- Category management and lookup helpers.
- Order creation and processing flows.
- Cart operations: add, remove, fetch.
- Stripe helpers for payments and price formatting.
- Minimal, configurable logger with environment-driven log levels.

Install (npm)
-------------
Install from npm:

```bash
npm install storeos
```

Quick usage example
-------------------
Minimal Next.js example to fetch and render products:

```tsx
import * as Store from "storeos";
import { formatMoney } from "storeos/divisas";
import Image from "next/image";
import Link from "next/link";

export async function ProductList() {
  const products = await Store.productBrowse({ first: 6 });

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.metadata?.slug ?? product.id}`}>
            <article>
              {product.images?.[0] && (
                <Image
                  src={product.images[0]}
                  width={300}
                  height={300}
                  alt={product.name}
                />
              )}
              <h2>{product.name}</h2>
              {product.default_price?.unit_amount != null && (
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
- Authored as an ESM package with TypeScript types in `dist`.
- Primary exports include the main entry and helper modules: `divisas`, `internal`, `sk`, `db`.
- Peer dependencies include React and Next.js; consult package.json when integrating.

Debugging and logging
---------------------
Control debug output with the `LOG_LEVEL` environment variable:
- ERROR — critical issues only.
- WARN — noteworthy but non-fatal issues.
- LOG — standard operational messages.
- DEBUG — verbose debugging and timing details.

Core Values — #codebase
-----------------------
- Simplicity: keep APIs small and predictable.
- Clarity: readable code and clear variable names to reduce onboarding friction.
- Composability: functions and modules that are easy to compose or replace.
- Stability: sensible defaults and a conservative public surface area.
- Documentation-first: practical examples and clear docs.

Roadmap — make the codebase easier
----------------------------------
Short-term priorities:
- Improve variable naming and reduce ambiguous identifiers across modules.
- Simplify core APIs so common flows require fewer parameters.
- Add small, focused wrappers for common Next.js + Stripe patterns.
- Improve TypeScript types and developer DX (better hints, smaller generics).
- Expand examples and cookbooks for common storefront tasks.

Long-term goals:
- More adapters (payment providers, headless backends).
- Better test coverage and CI checks focused on stability.
- CLI utilities for scaffolding common storefront pages.

Contributing
------------
- Open an issue to propose larger changes before implementing.
- Small, focused pull requests are preferred.
- Follow existing styles and run formatters (prettier) if present.
- Document changes and add examples for new features.

License
-------
This project is distributed under the Pylar AI Creative ML Free License — see LICENSE.md for details.

Contact
-------
Pencil Works, LLC — https://pencil.li