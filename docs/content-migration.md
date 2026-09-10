# Content migration and reconciliation

The accepted CV JSON is the initial factual baseline. Initial website redesign: CV and LinkedIn were not edited. Initial reconciliation was reviewed on 9 September 2026; the targeted publication synchronization below was completed on 10 September 2026.

## Confirmed updates; synchronization pending
- Mila: completed May–August 2026, confirmed by Hossein in the approved plan. Website biography, background, metadata and machine-readable summaries now use completed wording. Add the stay to CV and reconcile LinkedIn separately.
- InsectMorphoAI: published in Ecological Informatics 96 (2026), 103854, DOI https://doi.org/10.1016/j.ecoinf.2026.103854. Verified publisher record and the author's repository README. Journal title and status replace the old standalone preprint record; the 2025 preprint remains an earlier-version link. CV still lists the preprint; LinkedIn not inspected.
- Specimen triage: full author list includes Emily Hartop; source PDF https://publikationen.bibliothek.kit.edu/1000191702/177992111. Website retains all seven authors and uses volume 51, e70039 without an unconfirmed issue number. CV has an abbreviated list and issue 1; reconcile separately.
- Agrilus: equal contributions by Caruso and Shirali verified in source https://publikationen.bibliothek.kit.edu/1000191985/178679472. Acknowledged in the website citation.

- Acoustic levitation: verified journal version in Automatisierungstechnik 74(7), 564–576 (July 2026), DOI https://doi.org/10.1515/auto-2025-0139; primary record https://publikationen.bibliothek.kit.edu/1000195204. It replaces the old preprint entry. The original preprint DOI requires /v1 (verified https://publikationen.bibliothek.kit.edu/1000174447); earlier-version link corrected. CV update pending.
- Microplastics: superseded by the verified journal version; synchronized to the CV on 10 September 2026 (see below).

## Unresolved claims and conservative choices
- Plasive dates conflict: old website March–September 2021, CV February–October 2021. Omit the disputed months in the redesign pending user confirmation; retain the year and role.
- Use the CV's exact degree wording. Do not infer a Computer Science PhD, degree equivalences, or “summa cum laude” from the old website. Retain the approved 110/110 grade.
- Omit unverified certification claims and IELTS 6.5 / C1 equivalence. Retain CV language levels (English B2, German A2, Persian native).
- Omit unsupported state-of-the-art, profitability, time-saving, and production-scale claims. Retain evidenced tasks and contributions.
- Entomoscope 2.0 remains explicitly a preprint. No acceptance or journal status is inferred from working manuscripts.
- Live LinkedIn was not inspected or modified. It requires a separate factual reconciliation before any public edits.

## Retained destinations
| Previous content | New destination |
| --- | --- |
| #intro | /#about (alias #intro retained) |
| #skills | /background/#skills |
| #experience | /background/#experience |
| #education | /background/#education |
| #conferences | /background/#conferences |
| #contact | /#contact |
| #publications | /#publications, linking to /publications/ |
| #projects | /#projects, linking to /projects/ |
| Entomoscope, FORSAID, InsectMorphoAI | /projects/#entomoscope, #forsaid, #insectmorphoai |
| Robotic handling, turbine maintenance, satellite imagery | /projects/#robotic-specimen-handling, #turbine-maintenance, #remote-sensing |

The initial eight distinct publication records are retained: insectmorphoai, agrilus, specimen-triage, flexible-gripper, parasitoid-wasps, entomoscope, microplastics, acoustic-levitation. Each has an anchor on /publications/. All six project topics, five experience entries (including Mila), three education entries, four skill categories, and four presentations are retained. Homepage selection has four publications and three projects. Prior promotional repetitions, certifications requiring proof, social buttons not requested, and animation/overlay controls are intentionally omitted.

Old fragment navigation has static visible fallback links; JavaScript only redirects the four background fragments. All essential content is pre-rendered HTML, including complete author lists in native details elements.

## CV download
The old URL /assets/files/Hossein_Shirali_CV.pdf is preserved. See cv-provenance.json for its source commit and SHA-256. The copied PDF now includes the two publication updates requested on 10 September 2026; its checksum and source commit are recorded in cv-provenance.json.

## Publication synchronization — 10 September 2026

- Microplastics moved from preprints to published articles in both CV and website: Journal of Hazardous Materials Advances 23 (2026), 101343, DOI https://doi.org/10.1016/j.hazadv.2026.101343. Full nine-author list includes Xiangyu Weng. Sources: publisher https://www.sciencedirect.com/science/article/pii/S2772416626003396; KIT https://publikationen.bibliothek.kit.edu/1000194907; publisher-deposited Crossref metadata. Website retains arXiv as an earlier-version link.
- Added “An AI-driven biomass estimation tool enabling population- and specimen-level variation analyses: A case study on parasitoid flies”, DOI https://doi.org/10.1111/eea.70190, Entomologia Experimentalis et Applicata, published online 8 September 2026. Source: https://api.crossref.org/works/10.1111/eea.70190. No volume, issue or page range has been assigned in the retrieved metadata, so these are omitted. Crossref's given/family fields are reversed for all eight authors; familiar names are normalized to Ascenzi, A.; Shirali, H.; Di Lorenzo, N.; Nania, D.; Wührl, L.; Pylatiuk, C.; Meier, R.; Cerretti, P., preserving deposited order. Publisher full text was inaccessible during this check. The website summary is based on its deposited abstract and explicitly describes biomass proxies.
- Nine distinct website records now appear: eight published articles and one preprint. New stable destination: /publications/#parasitoid-fly-biomass; microplastics retains /publications/#microplastics. Homepage selection remains four papers and three projects.
- This is a targeted two-paper synchronization. Other CV discrepancies listed above (InsectMorphoAI, acoustic levitation, triage author detail, Mila and other pending items) remain for a subsequent update. LinkedIn remains unchanged and requires separate authorization for public edits. No website deployment was performed.

## Follow-up synchronization — 10 September 2026

InsectMorphoAI and acoustic levitation have now also been synchronized to the CV using the website's verified journal titles, authors, venues, years, volume/pages and DOI records. Both channels now contain eight published articles and one preprint; the corresponding earlier pending-status notes above are resolved. The three-page PDF was rebuilt and visually inspected, and its website copy matches the recorded CV commit and checksum.

Hossein confirmed equal contribution for Ascenzi/Shirali (parasitoid-fly biomass) and Caruso/Shirali (Agrilus). Both names have superscript asterisks and an equal-contribution note in website citations, including the shortened and expanded Agrilus author lists. Profile links and all CV, Scholar, and email entry points open separately; email handling depends on the visitor's mail configuration. Internal page navigation remains in the same tab. LinkedIn is unchanged.
