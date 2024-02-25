[![Build](https://github.com/ryota-murakami/laststance.io/actions/workflows/build.yml/badge.svg)](https://github.com/ryota-murakami/laststance.io/actions/workflows/build.yml)
[![Typecheck](https://github.com/ryota-murakami/laststance.io/actions/workflows/typecheck.yml/badge.svg)](https://github.com/ryota-murakami/laststance.io/actions/workflows/typecheck.yml)
[![Lint](https://github.com/ryota-murakami/laststance.io/actions/workflows/lint.yml/badge.svg)](https://github.com/ryota-murakami/laststance.io/actions/workflows/lint.yml)
[![Chrome E2E Tests](https://github.com/laststance/laststance.io/actions/workflows/playwright-chrome.yml/badge.svg)](https://github.com/laststance/laststance.io/actions/workflows/playwright-chrome.yml)
[![Firefox E2E Tests](https://github.com/laststance/laststance.io/actions/workflows/playwright-firefox.yml/badge.svg)](https://github.com/laststance/laststance.io/actions/workflows/playwright-firefox.yml)
[![iPad Pro 11 E2E Tests](https://github.com/laststance/laststance.io/actions/workflows/playwright-iPad-Pro-11.yml/badge.svg)](https://github.com/laststance/laststance.io/actions/workflows/playwright-iPad-Pro-11.yml)
[![iPad Pro 11 landscape E2E Tests](https://github.com/laststance/laststance.io/actions/workflows/playwright-iPad-Pro-11-landscape.yml/badge.svg)](https://github.com/laststance/laststance.io/actions/workflows/playwright-iPad-Pro-11-landscape.yml)
[![iPhone 14 E2E Tests](https://github.com/laststance/laststance.io/actions/workflows/playwright-iPhone-14.yml/badge.svg)](https://github.com/laststance/laststance.io/actions/workflows/playwright-iPhone-14.yml)

<table><tr><td valign="center"><h1>Laststance.io</h1> <a href="https://app.argos-ci.com/ryota-murakami/laststance.io/reference">
<img src="https://argos-ci.com/badge-large.svg" alt="Covered by Argos Visual Testing" />
</a> </td></tr></table>

The [Laststance.io](https://www.laststance.io/) website built using [Tailwind UI](https://tailwindui.com), [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

First, [Node@20.x.x](https://nodejs.org/en) required and install the dependencies with [pnpm](https://pnpm.io/installation):

```bash
pnpm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` and variable to your site's public URL.  
And set the `PERSONAL_ACCESS_TOKEN` and [github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) created by your Github account.

```
NEXT_PUBLIC_SITE_URL=https://example.com
PERSONAL_ACCESS_TOKEN=ghp_i{|i$AY%kt&)>p$Y@7:C[KC$anpxfJ
```

Next, run the development server:

```bash
pnpm dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
