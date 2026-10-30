---
title: Performing a Post-Quantum Cryptography Inventory with Spice Labs
layout: ../layouts/Page.astro
---

**Reading time:** 12 minutes

**Abstract**: _The time is **now** to begin addressing the eventual arrival of “Q-Day” – the moment when a cryptographically capable quantum computer can crack current  key exchange encryption algorithms. While most experts estimate that milestone won’t arrive until the early 2030s, the time to transition is now to protect from so-called “harvest now, decrypt later” attacks. Gartner supports a rapid transition, predicting that existing cryptography will be unsafe by 2029. Governments have already set deadlines for upgrading systems used by their agencies, and regulators are imposing similar deadlines for at-risk sectors such as financial services and healthcare.  Upgrading to post-quantum crypto proof solutions begins by first identifying where at-risk encryption algorithms are present in applications. Spice Labs is an ideal tool for surveying a software stack, pinpointing the issue, and tracking progress towards post-crypto compliance._

## Why worry? Worry!

Quantum computing is hard to understand and hard to implement. Terms like “entanglement,” “superposition” and “decoherence” are baffling to most of us and today’s working quantum computers are built upon lasers, temperatures approaching absolute zero, and other exotic technologies. And yet working quantum computers have existed for more than two decades, and each year they get faster and more capable. What’s driving much of the research is the promise that a sufficiently capable machine could decrypt all of the world’s secrets. 

Unlike the Y2K crisis of the late 1990s, when doomsayers predicted a definitive and catastrophic meltdown at midnight on New Year’s Eve 2000, the post-quantum crypto crisis is unfolding gradually, and most likely in secret.  “Q-Day” – the moment when a quantum computer can crack encryption algorithms that today’s “classical” computers can’t – probably won’t arrive with a publicly announcement at all, as the entity that first achieves a working cryptographically relevant quantum computer is highly likely to keep their power concealed for as long as they can. Some experts even worry that Q-Day has already occurred in secret. 

Whenever Q-Day comes, it will lead to a gradual deterioration of trust with profound consequences for IT as a whole. 

How long do organizations have to confront and fix the problem? Gartner analysts predict conventional asymmetric cryptography will be “unsafe” by 2029 and Q-Day will be a reality by 2034.  However, those predictions don’t take into account the more insidious phenomenon known as “Harvest now/Decrypt Later” where hackers are hoovering up and saving encrypted data _now_ in anticipation of someday gaining access to a quantum computer powerful enough to decrypt it. For example, if the plans for a new aircraft carrier were communicated via a RSA-encrypted channel, that communication could be harvested in transit, and although unreadable at first,  saved for the future. Once a quantum computer breaks RSA, the adversary who harvested the communications could run the encrypted communication and find themselves in possession of the plans for an aircraft carrier.

## Thwarting the threat

Ask a traditional computer to find the smallest prime factors of 15 and will instantly answer 3 and 5. Ask it to factor a 1,000 digit number and the answer will take a thousand years.  The granddaddy of encryption, RSA, was created in the late 1970s. It worked by having one computer create a private key consisting of two or more large prime numbers which when multiplied together created a public key.  Someone wanting to send a secure message to you would use your public key to encrypt it, and because only you know the original prime numbers, only you can decrypt it. 

A quantum computer can, in theory, crack one of today’s RSA-based encryption key in hours, not millenia. The same is true of public key systems based on Elliptic Curve Cryptography (ECC), and even TLS/SSL 3.0, which is based on the Diffie-Hellman key exchange. 

Quantum computers also pose a threat to digital signatures, since a fully realized quantum computer could forge signatures from a public key. This is a threat not just for digital contracts, but for the “code signing” signatures used to protect all of today’s operating systems.

In 2016 the National Institute of Standards and Technology (NIST) conducted a competition to solicit quantum-proof algorithm candidates. In August 2024 NIST officially published post-quantum cryptographic standards. The release of these standards is considered to be the “official” start of the compliance clock. They are:

- FIPS 203 (ML-KEM) A lattice-based key encapsulation mechanism for secure key agreements.
- FIPS 204 (ML-DSA) A lattice-based digital signature standard derived from the CRYSTALS-Dilithium scheme for certificate authentication.
- FIPS 205 (SLH-DSA)  A hash-based digital signature algorithm based on SPHINCS+, ideal for long-term security.

## Compliance Deadlines

The public and defense sectors have five to ten years to replace threatened encryption libraries with PQC compliant solutions. The U.S. Congress is already placing pressure on the private sector through the recently introduced Quantum Encryption Readiness and Resilience Act that builds on 2022’s Quantum Computing Cybersecurity Preparedness Act which mandates annual inventories of vulnerable government systems through 2035.  The U.S. National Security Memorandum (NSM-10)  sets 2035 as the deadline for national security systems to be fully quantum-resistant . The U.S. Department of Homeland Security has [published a roadmap](https://www.dhs.gov/quantum) for the transition to PQC urging critical infrastructure and industries to begin making inventories and planning risk assessments now.

In Canada, the government has set April 2026 as the deadline for its departments and agencies to develop an initial PQC migration plan. Australia is even more aggressive than the U.S., and has set a 2030 deadline for full compliance.

In late 2025, the state of private sector compliance is more an unavoidable business necessity than a legal requirement. However, requirements are shifting towards making companies in the defense sector, or vendors who contract with the government, to also implement PQC. Experts forecast that quantum-resilient cryptography questions will soon appear on security questionnaires and become a standard check-list item in contractual due diligence. Due to rising concerns over Harvest Now/Decrypt Later exploits, data with long confidentiality requirements such as financial records and intellectual property should be protected by PQC now.

## Remediation

Most experts are in agreement that to achieve post-quantum cryptographic compliance, it is necessary to start now because of the difficulty of identifying all of the programs that contain the quantum-vulnerable algorithms. Some applications such as the messaging apps Signal and iMessage have already implemented post-quantum crypto using ML-KEM/PQXDH and PQ3 protocols respectively. The benefits of immediate action are achieving future-proof product cryptography; complying with, and anticipating emerging regulations; and building customer trust.   The U.S. Army has deployed QuSecure's post-quantum solutions to protect its operations.

Where does a post-quantum cryptographic remediation project begin? Organizations must first conduct a comprehensive cryptographic inventory across all their fragmented, legacy, and multi-cloud systems to locate and identify vulnerable cryptographic algorithms.  Because of the high stakes, if any vulnerable code is overlooked, any decent inventory should be meticulously and comprehensively executed with all dependencies accurately mapped and accounted for. 

The most accurate technique for surveying software is to inventory every container, JAR file, virtual machine, and codebase within an organization. Only through the mathematical generation of Merkle tree structures can an accurate representation of what is actually running be gained.

## Making a PQC Inventory with Spice Labs Surveyor

Spice Labs offers an elegant solution to assess post-quantum cryptography risks lying within an organization’s systems. To get started, a security analyst first downloads from [spicelabs.io](http://spicelabs.io) a copy of the open source Surveyor tool and runs it on the organization’s code to develop an artifact dependency graph.

![Post-Quantum Cryptography Readiness Report example](/images/resources/postquantumreport1.png)

That graph is then securely uploaded to Spice Labs and compared to a list of encryption libraries – flagging outdated cryptographic libraries, and the presence of PQC-compliant ones.  That list may be customized by the user. Spice Labs Topographer identifies the users’ deployment artifacts and identifies quantum-vulnerable algorithms to reveal the true cryptographic security posture.

After Topographer builds the report (taking from a few minutes to an hour) the user receives an email notification with a link to a detailed post-quantum cryptography security report which pinpoints the hash location and dependencies of any “banned” cryptographic algorithms (such as RSA-1024 or SHA-1, designated in red); “mixed” algorithms (such as SPHINCS+ digital signatures, RSA-2048, etc., designated in yellow); and post-quantum compliant encryption algorithms designated in green.

You may download an example of a complete Post-Quantum Cryptography Security Report [here.](https://blog.spicelabs.io/images/pqc_report.pdf)

[![Full report example](/images/resources/fullreportexample.png "Executive Summary of a PQC Security Report from Spice Labs")](https://blog.spicelabs.io/images/pqc_report.pdf)

A JSON file version allows the report to be imported into project management systems, where progress can be tracked throughout the remediation process.

In addition to creating a PQC security report, Spice Labs provides its customers with a valuable asset with many future benefits. Once an organization surveys and maps its code to perform a post-quantum cryptography inventory, it also gains the benefit of possessing full maps of all its deployment artifacts. Those maps will enable the quick identification of future security issues, such as the next Log4Shell, that require immediate remediation.

## Conclusion

Although the 2030-2035 deadlines set may seem far in the future, it cannot be emphasized strongly enough that the threat to data security posed by quantum computing is real and that any system that promises security today will inevitably be vulnerable to cracked decryption in the future. Taking action now means gaining peace of mind early as the compliance clock has been ticking since the NIST-approved PQC algorithms were published in 2024 and have been implemented by providers such as AWS and Cloudflare. 

The remediation process isn’t a simple matter of rip-and-replace, but will require scarce expertise, and precise execution. The process begins with the simple but daunting task of _knowing_ exactly where outmoded encryption algorithms exist in your software stack. Gaining that understanding will spell the difference between success and failure. Because SBOMs provide a snapshot of a layer of a system (application, container, etc.) SBOMs must be stitched together in order to build a comprehensive plan. This contrasts with Spice Labs’ approach of using mathematical graphs that can find commonalities across artifacts and discover the deeply nested use of ancient and risky cryptography. 

Survey your deployed software artifacts with Spice Labs Surveyor and Topographer. Spice Labs delivers a comprehensive, mathematically irrefutable map of what needs to be addressed in a matter of minutes or hours. Get started on the road to post-quantum cryptographic compliance today by visiting [spicelabs.io](http://spicelabs.io).

**About Spice Labs:**

Spice Labs maps deployment artifacts and systems with cryptographic fingerprints, anchoring them to our continuously updated 10 billion node OSS database and enrichment layers to drive confident, fact-based decisions.

With comprehensive maps of your stack, replace guesswork with hard data. This enables faster decisions, reduced risk, and measurable progress across projects.

Our technology surveys containers, virtual machines, and applications, identifying components and relationships even in legacy systems without Software Bill of Materials. This empowers users and consultancies to navigate technical debt, scope modernization projects, quantify progress, and rapidly respond to incidents, ultimately saving time, controlling costs, and strengthening trust.

[Spice Labs](https://www.spicelabs.io)
