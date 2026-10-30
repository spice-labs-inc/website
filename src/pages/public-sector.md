---
title: Spice Labs for the Public Sector
layout: ../layouts/Page.astro
---

<!-- TODO: replace the microsite URL below once Carahsoft publishes it (pattern: carahsoft.com/<vendor>) -->
<!-- Carahsoft brand guidelines: blue logo (#3155A4) on light backgrounds; clear space on all sides at least the height of the "c". Do not restyle, recolor, or add effects. -->
<a href="https://www.carahsoft.com/spicelabs" style="display:inline-block;padding:0.5rem 0 2rem;">
  <img src="/images/Carahsoft_Blue_Vector_Logo-Web.svg" alt="Carahsoft" style="display:block;width:320px;max-width:100%;height:auto;" />
</a>

Federal, state, local, and education agencies can purchase Spice Labs through [Carahsoft Technology Corp.](https://www.carahsoft.com/spicelabs), our public sector distributor. Carahsoft's contract vehicles and reseller network give agencies a ready path to procurement, so your team can move from mandate to inventory without a lengthy acquisition cycle.

## Built for the post-quantum mandate

Executive Order 14412 and OMB M-26-15 require agencies to inventory their cryptography and plan the migration to post-quantum cryptography (PQC). Doing that by hand across an application estate of thousands of systems, many without as-built documentation, is not realistic.

Spice Labs automates the work. Our tools generate an evidence-based Cryptography Bill of Materials (CBOM) directly from your built artifacts: your own code, third-party software, commercial applications, and vendor containers. No agents, no source access, no SBOM required. The result is a cryptographic system of record that shows where quantum-vulnerable algorithms live today, prioritizes the risk, and gives security teams and executive stakeholders a single view of PQC readiness.

Air-gapped deployment options are available for environments that cannot connect to external services.

## Contract vehicles

<!-- TODO: list approved vehicles here as Carahsoft confirms them (e.g., GSA Multiple Award Schedule, NASPO ValuePoint, Army ITES). -->
Contract vehicle listings are in progress. Contact Carahsoft for current availability.

## How to buy

Reach the Carahsoft Spice Labs team through our [Carahsoft partner page](https://www.carahsoft.com/spicelabs) for quotes, contract questions, and procurement support. You can also [contact us directly](/#contact) and we will connect you with the right Carahsoft representative.

<style>
  /* Heading rhythm for this page: space above each heading is 2x the space below it.
     Body paragraphs are visually shifted down by var(--shift) (~5px), so margins are
     tuned to the rendered text, not the boxes. */
  #page article h2,
  #page article h3 {
    margin-block-start: 2.25rlh;
    margin-block-end: 0;
  }
  #page article :is(h2, h3) + p {
    margin-block-start: 0.75rlh;
  }
</style>
