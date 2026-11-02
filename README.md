# qoney / q1y.xyz

Personal portfolio built with Next.js and React Bits. Static export for GitHub Pages.

## Local development

Node.js 24; run `npm ci`, then `npm run dev`.
`npm run build` generates the complete static site in `out/`.

## GitHub Pages

The repository root is this directory (not its parent).
In repository Settings > Pages, choose **GitHub Actions** as the build source.
Set **Custom domain** to `q1y.xyz`. The CNAME file alone does not configure
custom domains for an Actions deployment. Enable **Enforce HTTPS** once GitHub
has issued the certificate. Pushes to master/main run `.github/workflows/pages.yml`.

## Namecheap DNS

If using Namecheap BasicDNS, PremiumDNS or FreeDNS, open Domain List > q1y.xyz >
Manage > Advanced DNS. Configure these Host Records with Automatic TTL:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | q0ney.github.io |

Replace conflicting parking/redirect records for @ and www. Preserve unrelated
MX/TXT records and other subdomains. If using custom nameservers, configure these
records at the authoritative DNS provider instead.

Sources:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/

## Third-party components

React Bits components and their license are in `app/components/react-bits/`.
Project descriptions are anonymized; no employer source code is included.
