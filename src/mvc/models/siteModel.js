import separatorImg from '../../assets/seprater.jpeg'
import dryWetImg from '../../assets/dry-wet-lamination.png'
import metalizeImg from '../../assets/metalize.jpeg'
import sublimationImg from '../../assets/sublimation-paper-coating.png'
import siliconReleaseImg from '../../assets/Silicon Paper Release Coating Machine.jpg'
import registeredUvImg from '../../assets/Registered UV coating.jpeg'
import aluminumSeparatorImg from '../../assets/Aluminum September machine.png'
import vmchShellacImg from '../../assets/Vmch and shellac coating.jpeg'
import registeredEmbossingImg from '../../assets/registerd embossing machine.jpeg'
import inductionWadsImg from '../../assets/INDUCTION WADS COATING LAMINATION.jpeg'
import hotStampingImg from '../../assets/hot stamping.jpg'
import foilFabricSeparatorImg from '../../assets/foil fabric separator .jpg'
import hotMeltCoatingImg from '../../assets/hot melt coating machine.jpg'
import holographicPaperCoatingImg from '../../assets/holographic paper coating machine.jpg'
import uvHolographicCoatingImg from '../../assets/UV Holographic machine.png'
import softHolographicCoatingImg from '../../assets/soft holographic coating machine.jpg'
import logoImg from '../../assets/logo.png'

export const siteModel = {
  brand: {
    name: 'SRE',
    logoImage: logoImg,
  },
  navigation: [
    { label: 'SECTORS', href: '#/sectors' },
    { label: 'SERVICES', href: '#/services' },
    { label: 'ABOUT', href: '#' },
    { label: 'CAREERS', href: '#' },
    { label: 'CONTACT', href: '#/contact' },
  ],
  locale: 'DE',
  hero: {
    title: 'Coating',
    subtitle: 'Tailor-made for your product',
    backgroundImage:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-startseite-home-anlage-line-d-1920x1280.webp',
  },
  nextHero: {
    title: 'Machinery',
    subtitle: 'Customised solutions. Precisely engineered.',
    backgroundImage:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-startseite-home-auftragswerk-coating-station-1920x1280.webp',
  },
  thirdHero: {
    title: 'Experts',
    subtitle: 'Flexible. Efficient. At the highest level of engineering.',
    backgroundImage:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-startseite-home-wickler-winder-1920x1280.webp',
  },
  expertise: {
    leadLine: 'EXPERTISE,',
    middleLine: 'INNOVATION,',
    endPrefix: 'PASSION',
    endHighlight: 'SINCE 1903',
    image: '',
    imageAlt: 'SRE machinery detail',
  },
  tailorMade: {
    title: 'Tailor-made coating lines.',
    description:
      'SRE is a leader in the development and manufacture of state-of-the-art line solutions that maximise your productivity, increase your process reliability and ensure the highest quality in the long term. Together, we create the basis for your sustainable competitive advantage.',
    buttonLabel: 'About',
    buttonHref: '#',
    image: 'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-medizin-pharma-medical-pharma.png',
    imageAlt: 'Medical and pharma coating line image',
  },
  homeSectors: {
    title: 'SECTORS',
    subtitle: 'Our line for your product',
    cards: [
      {
        type: 'text',
        title: 'TECHNICAL PRODUCTS',
        description: 'Labels, self-adhesive products and more',
      },
      {
        type: 'text',
        title: 'PAPER FINISHING',
        href: '#/sectors/paper-finishing',
        description: 'Thermal papers, decor papers and more',
      },
      {
        type: 'text',
        title: 'PACKAGING MATERIALS',
        href: '#/sectors/packaging',
        description: 'Barrier packaging, composite packaging and more',
      },
      {
        type: 'text',
        title: 'COMPOSITE',
        description: 'Carbon and glass fibre materials, resin films and prepregs',
      },
      {
        type: 'text',
        title: 'MEMBRANES',
        description: 'Gas filtration, osmosis and battery separator membranes',
      },
    ],
  },
  sectors: {
    title: 'SECTORS',
    subtitle: 'Our coating solutions for your product requirements',
    cards: [
      {
        type: 'image',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-medizin-pharma-medical-pharma.png',
        imageAlt: 'Team in production environment',
      },
      {
        type: 'text',
        title: 'MEDICAL AND PHARMA',
        href: '#/sectors/medical-and-pharma',
        description:
          'Medical coatings, pharma packaging materials, sterile barrier solutions, and healthcare application films',
      },
      {
        type: 'text',
        title: 'PAPER FINISHING',
        href: '#/sectors/paper-finishing',
        description: 'Thermal papers, printing papers, transfer papers, graphic papers, decorative papers',
      },
      {
        type: 'text',
        title: 'PACKAGING',
        href: '#/sectors/packaging',
        description:
          'Barrier packaging for food and pharmaceuticals, barrier recyclable, composite materials, AlOx barrier, aluminium coating, wax/paraffin coating and lamination',
      },
      {
        type: 'text',
        title: 'TEXTTILE',
        href: '#/sectors/texttile',
        description: 'Technical textiles, coated fabrics, nonwovens, and high-performance laminates',
      },
      {
        type: 'image',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-startseite-home-auftragswerk-coating-station-1920x1280.webp',
        imageAlt: 'Engineers discussing material samples',
      },
      {
        type: 'text',
        title: 'HOLOGRAPHIC',
        href: '#/sectors/holographic',
        description: 'Decorative holographic coatings, foil effects, and premium packaging finishes',
      },
      {
        type: 'image',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-startseite-home-wickler-winder-1920x1280.webp',
        imageAlt: 'Team holding coated product sheet',
      },
    ],
  },
  paperFinishing: {
    title: 'Paper Finishing',
    image:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/11/kroenert-service-prozessoptimierung-1024x1024.webp',
    imageAlt: 'Paper finishing specialist in production hall',
    machineNames: [
      'Separator',
      'Dry–Wet Lamination Coating Machine',
      'Metalized Paper Coating Machine',
      'Sublimation Paper Coating Machine',
      'Silicon Paper Release Coating Machine',
      'Registered UV Coating Machine',
    ],
    buttonLabel: 'Request',
    buttonHref: '#/contact',
    examplesTitle: 'Examples of applications',
    examples: [
      {
        title: 'Separator',
        image: separatorImg,
        imageAlt: 'Separator machine',
        description:
          'A separator is an essential machine in coating and lamination lines used to separate processed materials such as paper, film, or laminated layers after coating, drying, or bonding. It ensures smooth and damage-free separation of layers that may stick together due to adhesives, coatings, or heat during production. The separator helps maintain material quality, prevents tearing or sticking, and enables efficient rewinding or further processing. It is widely used in paper coating, sublimation paper production, and lamination industries for precise and continuous operations.',
      },
      {
        title: 'Dry–Wet Lamination Coating Machine',
        image: dryWetImg,
        imageAlt: 'Dry-wet lamination coating machine',
        description:
          'A dry–wet lamination coating machine is an industrial machine used to bond two or more layers of materials (such as paper, film, or foil) using adhesive coatings. In the wet lamination process, liquid adhesive is applied and layers are joined while still wet, whereas in dry lamination, the adhesive is first dried and then bonded using heat and pressure. This machine is widely used in packaging, printing, and flexible laminates to enhance strength, durability, and barrier properties.',
      },
      {
        title: 'Metalized Paper Coating Machine',
        image: metalizeImg,
        imageAlt: 'Metalized paper coating machine',
        description:
          'A metalized paper coating machine is an advanced industrial system used to apply a thin layer of metal (usually aluminum) onto paper surfaces. This process gives the paper a shiny, premium finish along with improved moisture resistance and durability. It is widely used in packaging, labeling, gift wrapping, and food-grade materials where both appearance and protection are important.',
      },
      {
        title: 'Sublimation Paper Coating Machine',
        image: sublimationImg,
        imageAlt: 'Sublimation paper coating machine',
        description:
          'A sublimation paper coating machine is a specialized industrial machine used to apply a chemical coating on paper that enables efficient ink transfer during the sublimation printing process. This coating helps the paper hold sublimation inks and release them effectively onto materials like fabric, ceramics, or metal when heat and pressure are applied. It is widely used in textile printing, customized products, and promotional items to achieve high-quality, vibrant, and long-lasting prints.',
      },
      {
        title: 'Silicon Paper Release Coating Machine',
        image: siliconReleaseImg,
        imageAlt: 'Silicon paper release coating machine',
        description:
          'A silicon paper release coating machine is a specialized industrial machine used to apply a silicone-based coating onto paper surfaces to create release liners. This coating gives the paper non-stick properties, allowing adhesives, labels, or tapes to be easily peeled off without damage. The machine ensures uniform coating, controlled curing, and high-quality finish for consistent release performance. It is widely used in the production of self-adhesive labels, tapes, stickers, and medical or industrial applications where reliable release characteristics are essential.',
      },
      {
        title: 'Registered UV Coating Machine',
        image: registeredUvImg,
        imageAlt: 'Registered UV coating machine',
        description:
          'A registered UV coating machine is a specialized coating system used to apply UV varnish on specific (registered) areas of printed material with high precision. Unlike full coating, it uses registration technology to align the coating exactly with selected design elements such as logos, text, or images. The coating is instantly cured using ultraviolet (UV) light, resulting in a glossy, durable, and high-quality finish. It is widely used in premium packaging, labels, brochures, and print enhancements to create a striking visual and tactile effect.',
      },
    ],
  },
  packaging: {
    title: 'Packaging Materials',
    image:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2026/02/KROENERT-header-Verpackungen-packaging.jpg',
    imageAlt: 'Packaging materials coating line',
    description:
      'KROENERT is a leader in the development and construction of efficient coating and laminating lines for modern packaging materials. With many years of expertise in coating and laminating technology, KROENERT offers advanced solutions that deliver high barrier performance, durability, and premium surface quality for demanding food and pharmaceutical packaging applications.',
    buttonLabel: 'Request',
    buttonHref: '#/contact',
    examplesTitle: 'Examples of applications',
    examples: [
      {
        title: 'Separator',
        image: separatorImg,
        imageAlt: 'Separator machine',
      },
      {
        title: 'Dry–Wet Lamination Coating Machine',
        image: dryWetImg,
        imageAlt: 'Dry-wet lamination coating machine',
      },
      {
        title: 'Metalized Paper Coating Machine',
        image: metalizeImg,
        imageAlt: 'Metalized paper coating machine',
      },
      {
        title: 'Sublimation Paper Coating Machine',
        image: sublimationImg,
        imageAlt: 'Sublimation paper coating machine',
      },
      {
        title: 'Silicon Paper Release Coating Machine',
        image: siliconReleaseImg,
        imageAlt: 'Silicon paper release coating machine',
      },
      {
        title: 'Registered UV Coating Machine',
        image: registeredUvImg,
        imageAlt: 'Registered UV coating machine',
      },
    ],
  },
  medicalAndPharma: {
    title: 'Medical and Pharma',
    image:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-technische-produkte-technical-products.png',
    imageAlt: 'Medical and pharma production line specialists',
    description:
      'SRE offers specialised coating and laminating lines for medical and pharma applications, including sterile barrier solutions, diagnostic films, transdermal systems, and healthcare adhesive products. Our technology is engineered for precision, consistency, and high-quality performance in regulated production environments.',
    buttonLabel: 'Request',
    buttonHref: '#/contact',
    examplesTitle: 'Examples of Applications',
    examples: [
      {
        title: 'Aluminum Separator',
        image: aluminumSeparatorImg,
        imageAlt: 'Aluminum separator machine',
        description:
          'An aluminum separator is a specialized machine used in coating and lamination lines to separate aluminum foil from laminated structures or other bonded materials. It ensures clean and efficient separation without damaging the foil or the substrate, even when adhesives or coatings are involved. The machine maintains proper tension and control during the process, helping in recycling, reprocessing, or further converting operations. It is widely used in flexible packaging, foil lamination, and industrial material processing for high-quality output and minimal wastage.',
      },
      {
        title: 'VMCH and Shellac Coating',
        image: vmchShellacImg,
        imageAlt: 'VMCH and shellac coating machine',
        description:
          'A VMCH and shellac coating machine is a specialized industrial system used to apply VMCH (Vinyl Maleic Copolymer) and shellac coatings onto paper or film surfaces. VMCH coating provides excellent adhesion, heat sealability, and resistance properties, while shellac coating offers natural gloss, moisture resistance, and food-safe protection. The combination enhances surface performance, printability, and barrier properties. This machine is widely used in packaging, food-grade papers, pharmaceutical wraps, and specialty applications where both functional and protective coatings are required.',
      },
      {
        title: 'Registered Embossing Machine',
        image: registeredEmbossingImg,
        imageAlt: 'Registered embossing machine',
        description:
          'A registered embossing machine is a specialized converting machine used to create raised (embossed) patterns on pre-printed materials with precise alignment. Using registration technology, it ensures that the embossing perfectly matches specific printed elements such as logos, text, or designs. The process enhances the visual appeal and tactile feel of the product, giving it a premium finish. It is widely used in packaging, labels, cartons, and luxury printing applications to add depth and value to the final product.',
      },
    ],
  },
  texttile: {
    title: 'TEXTTILE',
    image:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-technische-produkte-technical-products.png',
    imageAlt: 'Texttile coating and laminating systems',
    description:
      'SRE develops high-precision coating and laminating systems for technical textiles and functional fabrics. Our lines deliver consistent coating quality, excellent adhesion, and durable performance for applications such as protective textiles, industrial fabrics, and specialty laminated materials.',
    buttonLabel: 'Request',
    buttonHref: '#/contact',
    examplesTitle: 'Examples of applications',
    examples: [
      {
        title: 'Induction Wads Coating Lamination Machine',
        image: inductionWadsImg,
        imageAlt: 'Induction wads coating lamination machine',
        description:
          'An induction wads coating lamination machine is a specialized industrial machine used to manufacture induction sealing wads for bottles and containers. It applies multiple coatings and laminates layers such as aluminum foil, paperboard, and polymer films to create a strong, airtight sealing structure. These wads are used in induction sealing caps, where heat creates a hermetic seal on containers. The machine ensures precise coating, uniform lamination, and high bonding strength. It is widely used in food, pharmaceutical, cosmetic, and chemical packaging industries for leak-proof and tamper-evident sealing solutions.',
      },
      {
        title: 'Hot Stamping Slitter',
        image: hotStampingImg,
        imageAlt: 'Hot stamping slitter machine',
        description:
          'A hot stamping slitter is a specialized industrial machine used to slit hot stamping foil rolls into narrower widths as per application requirements. It unwinds the master roll, precisely cuts the foil using high-accuracy blades, and rewinds the slit rolls with controlled tension. This ensures clean edges, uniform roll quality, and smooth performance during the hot stamping process. It is widely used in packaging, printing, and decorative applications for gold, silver, and holographic foil finishing.',
      },
      {
        title: 'Foil Fabric Separator',
        image: foilFabricSeparatorImg,
        imageAlt: 'Foil fabric separator machine',
        description:
          'A foil fabric separator is a specialized machine used in coating and lamination processes to separate laminated layers of foil and fabric without causing damage. It ensures smooth and controlled separation of materials that are bonded together through adhesives or heat during production. The machine maintains proper tension and alignment, preventing wrinkles, tearing, or distortion. It is widely used in industries dealing with foil-fabric laminates, technical textiles, insulation materials, and flexible packaging for efficient reprocessing and quality control.',
      },
      {
        title: 'Hot Melt Coating Machine',
        image: hotMeltCoatingImg,
        imageAlt: 'Hot melt coating machine',
        description:
          'A hot melt coating machine is an advanced industrial system used to apply thermoplastic adhesive (hot melt) onto substrates such as paper, film, fabric, or foil. The adhesive is heated to a molten state, coated evenly onto the material, and then solidifies upon cooling to form a strong bond. This process ensures high adhesion strength, fast processing, and solvent-free operation. It is widely used in packaging, labeling, hygiene products, tapes, and lamination industries for efficient and durable bonding solutions.',
      },
    ],
  },
  holographic: {
    title: 'HOLOGRAPHIC',
    image:
      'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/11/kroenert-service-prozessoptimierung-1024x1024.webp',
    imageAlt: 'Holographic coating and finishing line',
    description:
      'SRE provides advanced coating and laminating solutions for holographic applications. Our systems are designed for precise registration, uniform optical effects, and reliable high-speed production across decorative and functional holographic materials.',
    buttonLabel: 'Request',
    buttonHref: '#/contact',
    examplesTitle: 'Examples of applications',
    examples: [
      {
        title: 'Holographic Paper Coating Machine',
        image: holographicPaperCoatingImg,
        imageAlt: 'Holographic paper coating machine',
        description:
          'A holographic paper coating machine is a specialized industrial system used to apply holographic effects onto paper surfaces through coating and transfer processes. It creates reflective, multi-dimensional patterns that enhance the visual appeal of the material. The machine ensures precise coating, uniform finish, and strong adhesion of the holographic layer. It is widely used in premium packaging, gift wrapping, labels, and security printing to provide an attractive, eye-catching, and tamper-evident finish.',
      },
      {
        title: 'UV Holographic Coating Machine',
        image: uvHolographicCoatingImg,
        imageAlt: 'UV holographic coating machine',
        description:
          'A UV holographic coating machine is an advanced industrial system used to apply holographic effects along with UV coating on paper, film, or laminated surfaces. It combines holographic transfer with UV varnish application, where the coating is instantly cured using ultraviolet light. This process creates a high-gloss, reflective, and durable finish with enhanced visual depth. The machine ensures precise coating, strong adhesion, and fast production speeds. It is widely used in premium packaging, labels, cartons, and security printing for eye-catching and high-value finishing effects.',
      },
      {
        title: 'Soft Holographic Coating Machine',
        image: softHolographicCoatingImg,
        imageAlt: 'Soft holographic coating machine',
        description:
          'A soft holographic coating machine is a specialized industrial system used to create a subtle, smooth holographic effect on paper, film, or laminated surfaces. Unlike sharp or high-reflective holography, it produces a softer, more elegant visual finish with controlled shine and texture. The machine ensures uniform coating, precise transfer, and strong adhesion of the holographic layer. It is widely used in premium packaging, luxury cartons, labels, and decorative printing where a refined and sophisticated appearance is required.',
      },
    ],
  },
  services: {
    title: 'SERVICES',
    subtitle:
      'Benefit from our first-class service: spare parts, maintenance, inspection and individual optimisation.',
    contactLine:
      'Our team of experts ensures maximum availability and efficiency for your system. You can reach us at colorsregroupin@gmail.com, 9599301190 (ANIRUDH TYAGI), or 9810348214 (ABHISHEK TYAGI).',
    cards: [
      {
        title: 'SPARE & WARE PARTS',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-service-ersatz-verschleiss-teile.jpg',
        imageAlt: 'Spare and wear parts service',
      },
      {
        title: 'MAINTENANCE & INSPECTION',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-service-wartung-inspektion_.jpg',
        imageAlt: 'Maintenance and inspection service',
      },
      {
        title: 'PROCESS OPTIMIZATION',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-service-prozessoptimierung.jpg',
        imageAlt: 'Process optimization service',
      },
      {
        title: 'REPAIRS',
        image: 'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Service-Repairs.png',
        imageAlt: 'Repairs service',
      },
      {
        title: 'DOCUMENTATION',
        image:
          'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/kroenert-service-dokumentation-lt-1-1920x1281.webp',
        imageAlt: 'Documentation service',
      },
    ],
  },
  values: {
    title: 'OUR VALUES',
    items: [
      {
        icon: 'gear',
        title: 'EXPERTISE',
        description: 'in customised lines',
      },
      {
        icon: 'people',
        title: 'RELIABILITY',
        description: 'for smooth operation',
      },
      {
        icon: 'bulb',
        title: 'INNOVATIVE SPIRIT',
        description: 'for sustainable solutions',
      },
      {
        icon: 'heart',
        title: 'PASSION',
        description: 'for strong partnerships',
      },
    ],
  },
  career: {
    titleLineOne: 'Career at',
    titleLineTwo: 'SRE',
    description:
      'At SRE, we are a community, not just people who happen to work for the same company! Become part of the team!',
    buttonLabel: 'Career',
    buttonHref: '#',
    image: 'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/07/kroenert-karriere.jpg',
    imageAlt: 'Career at SRE image',
  },
  contact: {
    title: 'CONTACT',
    subtitle: 'What can we do for you?',
    address: 'F 17, Surajpur Site B, Greater Noida',
    phoneContacts: [
      { number: '9599301190', name: 'ANIRUDH TYAGI' },
      { number: '9810348214', name: 'ABHISHEK TYAGI' },
    ],
    email: 'colorsregroupin@gmail.com',
    privacyLabel: 'I have read and agree to the Privacy Policy.',
    submitLabel: 'Send',
  },
  footer: {
    companyName: 'SRE',
    addressLines: ['F 17, Surajpur Site B, Greater Noida'],
    contactTitle: 'Contact',
    contactLines: ['9599301190 ANIRUDH TYAGI', '9810348214 ABHISHEK TYAGI', 'colorsregroupin@gmail.com'],
    phone: '9599301190',
    email: 'colorsregroupin@gmail.com',
    linkGroups: [
      {
        title: 'Group 1',
        links: [
          { label: 'Sectors', href: '#/sectors' },
          { label: 'Lines', href: '#' },
          { label: 'Services', href: '#/services' },
        ],
      },
      {
        title: 'Group 2',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'News', href: '#' },
        ],
      },
      {
        title: 'Group 3',
        links: [
          { label: 'Technology Center', href: '#' },
          { label: 'Trade fairs', href: '#' },
          { label: 'Downloads', href: '#' },
        ],
      },
    ],
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
    copyright: '©2026 SRE',
    legalLinks: [
      { label: 'Imprint', href: '#' },
      { label: 'Privacy policy', href: '#' },
    ],
  },
}

export default siteModel
