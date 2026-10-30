---
title: Questions?  We have answers
layout: ../layouts/Page.astro
---

Here are some common questions and answers about our software mapping solutions to help you understand what Spice Labs does and the problems our products solve.  If you want to delve deeper, and explore the technical foundations, please visit the Omnibor project website at[ omnibor.io](http://omnibor.io)

## What we do

1. _Why is gaining visibility into the contents of my software so important?_

   The chaos and complexity of your systems goes far beyond any person’s comprehension. Yet gaining complete visibility into your software’s contents is crucial  because if you don’t know exactly what’s there then you’re guessing, or working based on intuition. Guesswork slows projects, increases risk, and can lead to costly mistakes during modernization, upgrades, or security work.

2. _What problems do such a lack of visibility lead to in modernization or security projects?_

   Lack of visibility in modernization  projects leads to missed components, inaccurate estimates, and unexpected delays. In security incidents, it means slower response and higher damage because you don’t know what was really affected.

3. _How is Spice Labs different from traditional inventory tools?_

   Spice Labs differs from traditional inventory tools in that we analyze actual software artifacts – containers, VMs, applications – and not just build records. This means we see what is really there, even in legacy systems or complex environments.

4. _Why can’t existing build tools give me the same insights?_

   Existing build tools only show what was _supposed_ to be included. Our scan shows what is _actually_ there, including hidden or outdated components build tools may miss.

5. _How does this help me reduce project risk?_

   Spice Labs helps you reduce project risk by replacing guesswork (or intuition) with hard data. This helps you make accurate plans, avoid rework, and deliver on time – whether it’s a modernization project or a security response.

## About the Solution

6. _What exactly does Spice Labs Surveyor do?_

   Spice Labs’ Surveyor surveys a software artifact, fingerprinting every component, and then compares it to our massive database of many billions of components. You get a complete, accurate list of what’s inside.

7. _How does the “surveying” of software work?_

   Think of Spice Labs’ surveying  software as a map maker setting out to explore uncharted territory by plumbing the depths, measuring elevations, and establishing the coordinates of prominent landmarks. We examine the software “terrain” and reveal a complete 3D map with all the hidden details: packages, dependencies, versions, and vulnerabilities.

8. _What types of software artifacts can you survey (containers, VMs, etc.)?_

   Spice Labs handles Docker images, virtual machine images, Java archives (JAR/WAR), and other packaged applications.

9. _How quickly will I receive results after running a survey?_

   Most surveys finish in minutes. You receive results fast enough to support bid preparation, rapid incident response, or upgrade planning.

10. _Can you track changes over time in my software?_

    Yes, that’s one of our strengths. We store survey snapshots and let you compare them, to see exactly what has changed, helping prove progress, or identify regressions.

11. _Does Spice Labs use AI? If so, where and how?_

    Spice Labs has a Model Context Protocol (MCP) server that allows LLM to harness the power of Spice Labs software analysis capabilities.

12. _Is there value in running Spice Labs as part of a maintenance plan? If so, what is it?_

    Running Spice Labs routinely ensures the information about each system is up to date and the shared artifacts across systems are always known. Think of it like brushing your teeth every morning to prevent issues like decay.  

## Use Cases

13. _How does Spice Labs aid modernization projects?_

    Spice Labs helps with maintenance and modernization projects by showing exactly what needs upgrading. This enables you to scope projects accurately, track progress, and demonstrate completion to your customers.

14. _How does Spice Labs improve the scoping, estimation and bidding process?_

    Spice Labs replaces guesswork (or intuition) with hard data by showing you and the stakeholders exactly what’s in the systems you maintain or modernize. This allows you to scope projects with precision, create more comprehensive plans or competitive bids, and reduce the risk of underestimating effort or cost; leading to higher acceptance rates, cleared progress metrics, and happier stakeholders.

15. _How does Spice Labs help track maintenance and modernization projects with objective metrics?_

    Spice Labs creates a **comprehensive, automated survey** of all software artifacts across containers, applications, and VMs. Because this survey is machine-generated and repeatable, it becomes a baseline that can be compared over time. As maintenance and modernization projects progress, new surveys reveal: - Which artifacts have been removed, upgraded, or replaced. - How dependencies have shifted. - Where progress is measurable against the original system map.

This provides **objective, fact-based metrics** instead of subjective reports or manual tracking.

16. _How does Spice Labs help during a cybersecurity breach response?_

    Spice Labs Surveyor quickly builds a mathematical model of the impacted systems. Rather than calling engineering managers and asking for SBOMs, Surveyor reveals the truth of what was running. This allows incident responders to make faster determinations based on hard data and work on remediation plans. 

17. _Can Spice Labs be used for compliance and audit requirements?_

    Spice Labs can absolutely be used for compliance and audit requirements. We provide a verifiable record of system composition and the changes in composition over time, which helps with regulatory checks and internal audits.

18. _Does Spice Labs work on legacy systems without SBOMs?_

    For legacy Java/JVM applications (.Net coming soon), Spice Labs provides deep inspection comparing legacy systems to over ten billion fingerprints in the Spice Labs open source database. 

19. _How does Spice Labs help engineering teams reduce technical debt?_

    By uncovering all artifacts in a system, Spice Labs reveals connections and commonalities across modules and applications that often contribute to technical debt. Engineering teams can: - Spot unused libraries, outdated frameworks, or shadow applications. - By identifying commonalities across modules, applications, etc., changes can be scheduled in groups rather than as one-offs. This way, teams that may have to change surrounding code based on changes to a library are familiar with the changes. - Having objective goals (upgrade 42 dependencies across 37 modules), Spice Labs’s Topographer shows progress against plan and estimated completion dates based on objective progress.

    In short, Spice Labs shines a light on what’s really in the system, helping teams systematically address the sources of technical debt.

## Comparisons and Differentiation

20. _How is Spice Labs different from SBOM tools?_

    Spice Labs starts where SBOM tools end. By building a map (technically a mathematical graph) of the interconnections among applications and modules, Spice Labs' Topographer surfaces connections across modules, applications, etc. These connections allow for better decision making across a portfolio because the maps surface information that a simple list of SBOMs do not.

    Further, applications are typically deeply nested... virtual machines that contain docker images that contain tar files that contain JAR files that contain other JAR files. 

    SBOM tools will list information at each level, but not show connections across levels... "this open source library is deeply nested in application A and may not even show up in application A's SBOM where the same library might be at the top of container B.

21. _How does it compare to security scanners like Qualys, Snyk, or Wiz?_

    Security scanners like Qualys, Snyk, or Wiz, focus on vulnerabilities in live environments, and/or scanning code during development. Spice Labs focuses on scanning complete artifacts after build, and providing accurate inventories and the dependencies between various components.

22. _Is this a replacement for threat intelligence, or complementary?_

    Spice Labs is complementary to threat intelligence, not a replacement. Threat intelligence tells you _what’s being attacked_. We tell you _where you’re exposed_ by showing exactly where risky components exist.

## Practical and Technical

23. _What is required to get started?_

    You provide the artifact (container, VM, package) for scanning. Spice Labs handles the rest. Of course, you can also run the scan in your own environment. No engineering changes or code access required.

24. _Do I need to install agents?_

    No. Spice Labs is completely agentless. Scan the artifact in the CI pipeline such as [GitHub Actions](https://github.com/spice-labs-inc/action-spice-labs-surveyor) or [on your local machine](https://github.com/spice-labs-inc/spice-labs-cli). You just send the artifact or run the scan in your own environment.

25. _How is my data secured during scanning?_

    You run the entire process in your own environment, so you’re fully secure. If you want to send the artifact to us for scanning, we’ll use encrypted transfer and storage.  

26. _Does it integrate with my existing tools and workflows?_

    Yes. Spice Labs offers APIs, export formats, and integration options so you can feed scan results directly into your security dashboards, DevOps pipelines, or project management tools. This means you can keep using your current workflows while gaining the visibility and data you need.

## Value and ROI

27. _How does Spice Labs help me win more business and improve margins?_

    Spice Labs helps you win more business and improve margins by giving you accurate, fast insight. These help you write better bids, deliver more efficiently, and avoid costly overruns – all of which improve profitability and customer satisfaction.

28. _How much does Spice Labs cost?_

    Our [pricing page](/pricing) lists current prices. Email [sales@spicelabs.io](mailto:sales@spicelabs.io) for a quote.
