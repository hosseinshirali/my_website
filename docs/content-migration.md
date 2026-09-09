# Content migration and reconciliation

The accepted CV JSON is the initial factual baseline. Website redesign only: CV and LinkedIn were not edited. Dates below were reviewed on 9 September 2026.

## Confirmed updates; synchronization pending
- Mila: completed May–August 2026, confirmed by Hossein in the approved plan. Website biography, background, metadata and machine-readable summaries now use completed wording. Add the stay to CV and reconcile LinkedIn separately.
- InsectMorphoAI: published in Ecological Informatics 96 (2026), 103854, DOI https://doi.org/10.1016/j.ecoinf.2026.103854. Verified publisher record and the author's repository README. Journal title and status replace the old standalone preprint record; the 2025 preprint remains an earlier-version link. CV still lists the preprint; LinkedIn not inspected.
- Specimen triage: full author list includes Emily Hartop; source PDF https://publikationen.bibliothek.kit.edu/1000191702/177992111. Website retains all seven authors and uses volume 51, e70039 without an unconfirmed issue number. CV has an abbreviated list and issue 1; reconcile separately.
- Agrilus: equal contributions by Caruso and Shirali verified in source https://publikationen.bibliothek.kit.edu/1000191985/178679472. Acknowledged in the website citation.

- Acoustic levitation: verified journal version in Automatisierungstechnik 74(7), 564–576 (July 2026), DOI https://doi.org/10.1515/auto-2025-0139; primary record https://publikationen.bibliothek.kit.edu/1000195204. It replaces the old preprint entry. The original preprint DOI requires /v1 (verified https://publikationen.bibliothek.kit.edu/1000174447); earlier-version link corrected. CV update pending.
- Microplastics: arXiv v2 (24 March 2026) adds Xiangyu Weng to the author list; verified https://arxiv.org/abs/2511.06901. Website shows the full current author list and revision note; original 2025 submission year retained. CV update pending.

## Unresolved claims and conservative choices
- Plasive dates conflict: old website March–September 2021, CV February–October 2021. Omit the disputed months in the redesign pending user confirmation; retain the year and role.
- Use the CV's exact degree wording. Do not infer a Computer Science PhD, degree equivalences, or “summa cum laude” from the old website. Retain the approved 110/110 grade.
- Omit unverified certification claims and IELTS 6.5 / C1 equivalence. Retain CV language levels (English B2, German A2, Persian native).
- Omit unsupported state-of-the-art, profitability, time-saving, and production-scale claims. Retain evidenced tasks and contributions.
- Entomoscope 2.0 and microplastics remain explicitly preprints. No acceptance or journal status inferred from working manuscripts.
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

Eight distinct publication records are retained: insectmorphoai, agrilus, specimen-triage, flexible-gripper, parasitoid-wasps, entomoscope, microplastics, acoustic-levitation. Each has an anchor on /publications/. All six project topics, five experience entries (including Mila), three education entries, four skill categories, and four presentations are retained. Homepage selection has four publications and three projects. Prior promotional repetitions, certifications requiring proof, social buttons not requested, and animation/overlay controls are intentionally omitted.

Old fragment navigation has static visible fallback links; JavaScript only redirects the four background fragments. All essential content is pre-rendered HTML, including complete author lists in native details elements.

## CV download
The old URL /assets/files/Hossein_Shirali_CV.pdf is preserved. See cv-provenance.json for its source commit and SHA-256. The copied PDF intentionally remains the accepted CV baseline until a separate synchronization task.
