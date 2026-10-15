# Copy deterrence and robot directives

## Current behaviour

The portfolio interface discourages text selection, clipboard shortcuts, context menus and image dragging. Editable fields are exempt. Keyboard navigation, links and zoom remain available.

Portfolio pages request `noindex, nofollow, nosnippet, noimageindex`. The standalone exercise requests `noindex, nofollow, nosnippet`. These are requests to cooperating crawlers, not access controls. The public HTML, public repository and screenshots remain readable.

No browser fingerprinting, application IP collection, blacklist or CAPTCHA service has been added.

## robots.txt on the project site

The source generates a robots file below the configured project path. Crawlers use the robots file at the origin's root, https://ensigitsu.github.io/robots.txt, rather than treating https://ensigitsu.github.io/ns-portfolio/robots.txt as the origin's policy.

If the account owner wants to configure the root policy, it belongs in the user-site repository `ensigitsu.github.io`. The relevant rule for this project is:

```text
User-agent: *
Disallow: /ns-portfolio/
```

Merge this rule with any existing policy. The project repository alone cannot configure the user-site root. No root policy is claimed to have been installed by this delivery. This optional account-side action is separate from finishing the workshop.

A crawler must be allowed to read a page to discover its `noindex` directive. Blocking crawling does not by itself guarantee removal of an already known URL from search results.

## CAPTCHA limits

This self-contained GitHub Pages project has no application backend for validating CAPTCHA tokens. A local JavaScript question would be bypassable while the same files remain public. No fake protection or secret key is included.

Copy deterrence does not change the existing licences. Keep secrets and confidential documents out of the public project.

Official references:
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
- https://developers.google.com/search/docs/crawling-indexing/block-indexing
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
