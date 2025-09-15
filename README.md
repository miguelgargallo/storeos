# storeOS — Open, lightweight storefront utilities

storeOS is an open-source library for building storefronts and managing store data in Next.js applications. It's designed to be small, composable, and easy to adopt — with first-class Stripe-friendly helpers and sensible defaults.

Badge: Published on npm as `storeos`.

Open-source commitment
----------------------
We maintain storeOS as a transparent, community-friendly project. Contributions, issues, and suggestions are welcome — the goal is a lightweight toolkit that makes building and operating storefronts straightforward.

Project overview
----------------
storeOS provides utilities for product browsing, category management, carts, orders, and Stripe integration. The library favors readability, predictable variables, and modular APIs that let you pick only the pieces you need.

Key features
------------
- Product browsing and retrieval (paginated and filtered).
- Category management and lookup helpers.
- Order creation and handling flows.
- Cart operations (add, remove, fetch).
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
- Main exports include the index and helper modules: `divisas`, `internal`, `sk`, `db`.
- Peer dependencies include React and Next.js; consult package.json when integrating.

Debugging and logging
---------------------
Control debug output with the `LOG_LEVEL` environment variable:
- ERROR — critical issues only.
- WARN — noteworthy but non-fatal issues.
- LOG — standard operational messages.
- DEBUG — verbose debugging and timing.

Core Values #codebase
--------------------
- Simplicity: APIs should be small and predictable.
- Clarity: readable code and clear variable names to reduce onboarding friction.
- Composability: functions and modules that can be composed or replaced.
- Stability: sensible defaults and conservative public surface area.
- Documentation-first: clear examples and pragmatic docs.

Roadmap — make the codebase easier
---------------------------------
Short-term priorities:
- Improve variable naming and reduce ambiguous identifiers across modules.
- Simplify core APIs so common flows require fewer parameters.
- Add small focused wrappers for common Next.js + Stripe patterns.
- Improve TypeScript types and developer DX (better hints, smaller generics).
- Expand examples and cookbooks for common storefront tasks.

Long-term goals:
- More adapters (payment providers, headless backends).
- Better test coverage and CI checks focused on stability.
- CLI utilities for scaffolding common storefront pages.

Contributing
------------
- Open an issue before major changes.
- Small, focused pull requests are preferred.
- Follow existing styles and run formatters (prettier) if present.
- Document changes and add examples for new features.

License
-------
This project is distributed under the Pylar AI Creative ML Free License — see LICENSE.md for details.

Contact
-------
Pencil Works, LLC — https://pencil.li