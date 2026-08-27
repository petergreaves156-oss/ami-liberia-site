# AMI Liberia Website — Design Direction

## Three directions considered

### Theme Name: Field Notes / Civic Clinical
**Very Brief Intro:** A warm, editorial healthcare experience that pairs the clarity of a clinical system with the humanity of field work. Ocean blue, sun-washed sand, and documentary imagery make AMI feel capable, present, and close to the people it serves.
**Probability:** 0.067

### Theme Name: Atlantic Modernism
**Very Brief Intro:** A brighter, more architectural interpretation of the AMI brand: strong white space, cobalt blocks, precise lines, and large typographic moments inspired by Monrovia's coastline and modern civic buildings.
**Probability:** 0.019

### Theme Name: Night Dispatch
**Very Brief Intro:** A dark, high-contrast system built around emergency response, with black-blue fields, signal orange, and restrained light effects. It would foreground urgency and 24/7 readiness.
**Probability:** 0.083

## Chosen direction: Field Notes / Civic Clinical

### Design Movement
Contemporary editorial public-health design with cues from Swiss International Typographic Style and documentary field reporting. The result should feel designed for real people and real decisions, not like a generic medical brochure.

### Core Principles
1. **Presence over polish:** Show that AMI is already in Liberia through real location imagery, direct contact paths, and clear operational information.
2. **Calm competence:** Use strong hierarchy, restrained color, and precise spacing so urgent information is easy to find without making the whole experience feel alarmist.
3. **Human-scale access:** Balance service detail with portraits, community stories, and plain-language explanations.
4. **Editorial rhythm:** Use offset blocks, ruled dividers, numbered sections, and asymmetric image crops instead of a centered marketing grid.

### Color Philosophy
Deep ocean blue is the anchor because it connects to the supplied AMI identity and communicates trust without becoming institutional gray. Warm sand and parchment tones soften the clinical system and evoke Liberia's light, coast, and earth. A small signal-coral accent is reserved for emergency actions and live status cues, giving urgency a clear place rather than allowing red to dominate the brand.

Signature palette: ocean #1C5B77, ink #13262F, tide #D9EEF0, sand #F4EEE3, paper #FCFBF7, coral #E76F51, muted ink #5A6A6D.

### Layout Paradigm
A left-anchored editorial rail on desktop creates a sense of direction and wayfinding. The main content column breathes alongside a slim vertical index, while hero copy overlaps the lower edge of the image like a field report caption. Sections alternate between wide image bands and split information blocks; on mobile, the rail collapses into a sticky utility bar and the content becomes a single flowing story.

### Signature Elements
- A thin vertical "already there" rule that travels through key sections, echoing a route line on a map.
- Small uppercase location labels and numbered section markers, like a clinical dispatch log.
- Paper-texture surfaces with fine blue rules and one coral live-status dot used sparingly.

### Interaction Philosophy
Every interaction should shorten the path to care or understanding. Buttons use direct language, primary actions are visually stable, and hover states reveal slightly more information rather than creating spectacle. Contact links should be callable and mailable on mobile. Service cards expand into a focused detail panel so the page remains scannable.

### Animation
Use only purposeful movement: hero copy rises 18px with a 220ms ease-out, image tiles shift 4px on hover, and the emergency strip uses a slow pulse on the status dot only. Service details open with a 200ms opacity/translate transition. Respect reduced-motion preferences and keep all UI feedback under 300ms.

### Typography System
Use **Space Grotesk** for display headlines and navigation—geometric, contemporary, and legible at large sizes. Use **DM Sans** for body copy and interface labels—friendly and neutral without looking generic. Headlines use tight tracking and occasional italic emphasis for the brand line; body text remains 16–18px with generous line-height. Metadata is 11–12px uppercase with 0.16em tracking.

### Brand Essence
A Monrovia-based medical facility and remote-care partner for people who need capable healthcare close to home and when conditions are complex; different because AMI combines local clinical presence with expeditionary medical reach.

Personality adjectives: **present, capable, human**.

### Brand Voice
Headlines are concise, grounded, and active. CTAs say exactly what happens next. Microcopy should feel reassuring without making promises beyond what is verified.

Example headline: “Care that can meet the moment.”

Example CTA: “Call the clinic” / “Find your care path”.

### Wordmark & Logo
Use the supplied AMI wordmark artwork where an official lockup is needed. Pair it with a separate generated symbol for the site chrome: a bold lowercase-a-like pathway wrapped by a caring arc, suggesting movement and arrival without relying on a medical cross. The standalone symbol appears visibly in the header and favicon; it is never reduced to a tiny decorative mark.

### Signature Brand Color
**AMI Ocean — #1C5B77.** A deep, slightly greened blue that reads as clinical trust in daylight and as field-ready depth against warm sand. It owns the interface's key actions, rules, and navigation moments.

## Research notes used in the build

Public-facing information was cross-checked against the official AMI Liberia clinic page and the U.S. Mission Liberia medical assistance page. The site copy should reflect the following verified points without overclaiming:

- AMI Liberia describes itself as a fully licensed and certified general practice clinic and as Monrovia's leading private medical facility offering general and trauma care.
- The clinic page states that the facility has overnight capacity for 10 beds and includes an operating theater.
- Listed capabilities include primary and emergency care, surgical services, OBGYN care, pharmacy, laboratory testing, radiology support, ambulance transfer, and international aeromedical evacuation through AMI networks.
- Specialist areas listed by AMI include pediatrics, orthopedics, ENT, internal medicine, ophthalmology, obstetrics, gynecology, psychiatry, physiotherapy, intensive care, anesthesiology, oncology, and cardiology.
- The clinic address is 1st Street, Tubman Boulevard, Sinkor, Monrovia, opposite the UN building.
- General appointments/information: +231 (0)770 029 511 and reception.lr@ami.health. Emergency number: +231 (0)770 911 911.
- Hours listed on the official page: Monday–Friday 8:00–17:00 and Saturday 9:00–13:00. Certain walk-in patients are accepted on a cash or prearranged guarantee-of-payment basis.
- The official page separately announces a US Visa Medical Screening Program and lists +231 77 287 5731 and usvisareception.lr@ami.health for scheduling.

Sources:
- https://ami.health/commercial-clinics/ami-liberia/
- https://lr.usembassy.gov/medical-assistance/

## Content boundaries

Do not fabricate patient reviews, ratings, testimonials, patient counts, clinical outcomes, or claims of accreditation not present in the supplied materials or verified public sources. If a page element is illustrative rather than live, label it as such or make it a clear navigation affordance rather than invented evidence.

## Style Decisions

- Coral #E76F51 is reserved only for emergency actions, live/status indicators, and urgent-care emphasis; routine numbering, decorative icons, and standard metadata use ocean, ink, or muted ink.
- The “already there” route line behaves as a recurring wayfinding spine across major sections, visually tying section numbers, location labels, and contact paths into one field-report system.
- Imagery prioritizes documentary evidence of people, place, clinic environment, and field presence; screenshots or social-feed composites remain secondary supporting material, never the primary emotional image.
- Verified operational facts—hours, phone numbers, address, and bed/theater capacity—should read with civic confidence, not as fine print.
