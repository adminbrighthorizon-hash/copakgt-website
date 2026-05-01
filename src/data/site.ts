const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const photo = (fileName: string) => `${base}/photos/${fileName}`;

export const site = {
	name: 'COPAK GENERAL TRADING',
	shortName: 'CGT',
	tagline: 'Expertise at the Service of Your Success.',
	headline: 'Complete Industrial Solutions for High-Performance Operations',
	subheadline:
		'COPAK GENERAL TRADING delivers complete solutions from supply and installation to maintenance across mining, electrical, mechanical, instrumentation, laboratory, and industrial support sectors.',
	heroImage: `${base}/photos/hero-industrial.jpg`,
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'Company Profile' },
		{ href: '/services', label: 'Products & Services' },
		{ href: '/impact', label: 'Our Strength' },
		{ href: '/contact', label: 'Contact' },
	],
	commitments: [
		'Adaptability to each project context and client requirements',
		'Operational excellence and strict quality standards',
		'Innovation-driven industrial problem solving',
		'Long-term trusted partnerships with responsive support',
	],
	vision:
		'To become the undisputed leader in industrial solutions in the Democratic Republic of Congo and a preferred partner for businesses requiring reliable, high-quality products and services.',
	mission:
		'Provide comprehensive and innovative solutions tailored to each client, backed by exceptional after-sales support and long-term relationships built on trust.',
	values: [
		{
			title: 'Excellence',
			description: 'Delivering products and services at the highest professional and technical standards.',
		},
		{
			title: 'Innovation',
			description: 'Continuously identifying practical industrial solutions for evolving operational challenges.',
		},
		{
			title: 'Adaptability',
			description: 'Responding flexibly to market demands and unique project constraints.',
		},
		{
			title: 'Commitment',
			description: 'Maintaining reliable, long-term relationships with clients and strategic partners.',
		},
	],
	serviceCards: [
		{
			title: 'General Products',
			description: 'Industrial tools, construction materials, and hardware supplies.',
			images: [`${base}/photos/company-profile/general-products.jpg`],
		},
		{
			title: 'Crusher / Mining',
			description: 'Industrial crusher systems, mining equipment, and rock crushing plant support.',
			images: [`${base}/photos/company-profile/crusher-mining.jpg`],
		},
		{
			title: 'Geomembrane',
			description: 'Geomembrane installation, repair, and HDPE liner applications.',
			images: [`${base}/photos/company-profile/geomembrane1.jpg`],
		},
		{
			title: 'Welding',
			description: 'Industrial welding sparks, pipe welding HDPE, and metal fabrication workshops.',
			images: [`${base}/photos/company-profile/welding.jpg`],
		},
		{
			title: 'Plates / Pipes',
			description: 'Stainless steel pipes, industrial piping systems, and metal plates.',
			images: [
				`${base}/photos/company-profile/plates1.jpg`,
				`${base}/photos/company-profile/pipes1.jpg`,
			],
		},
		{
			title: 'PPE',
			description: 'Construction worker safety gear and industrial protective equipment.',
			images: [`${base}/photos/company-profile/ppe.jpg`],
		},
		{
			title: 'Conveyor Belts',
			description: 'Conveyor belt systems, rollers, pulleys, and mining conveyor accessories.',
			images: [`${base}/photos/company-profile/conveyor-belts.jpg`],
		},
		{
			title: 'Instrumentation',
			description: 'Industrial sensors, flow meters, probes, and control instrumentation.',
			images: [photo('industrial-06.jpg')],
		},
		{
			title: 'Electrical',
			description: 'Industrial electrical panels, transformers, substations, and motors.',
			images: [`${base}/photos/company-profile/electrical.jpg`],
		},
		{
			title: 'Valves & Pumps',
			description: 'Industrial valves, chemical pumps, and water pump systems.',
			images: [
				`${base}/photos/company-profile/valves.jpg`,
				`${base}/photos/company-profile/pump1.jpg`,
			],
		},
		{
			title: 'Laboratory',
			description: 'Industrial and medical laboratory equipment and consumables.',
			images: [
				`${base}/photos/company-profile/labs2.jpg`,
				`${base}/photos/company-profile/labs1.jpg`,
			],
		},
		{
			title: 'Filtration',
			description: 'Industrial filtration systems and water filtration plant support.',
			images: [`${base}/photos/company-profile/filtration1.jpg`],
		},
	],
	services: [
		{
			category: 'Laboratory',
			items: ['Industrial laboratory equipment', 'Medical laboratory equipment'],
		},
		{
			category: 'Pumps',
			items: ['Multistage pumps', 'Chemical pumps', 'Clear water pumps', 'Dosing pumps'],
		},
		{
			category: 'Valves',
			items: ['Diaphragm valves', 'Guillotine valves', 'Pinch valves', 'Butterfly valves'],
		},
		{
			category: 'Electrical',
			items: [
				'Cable trunking boxes',
				'Plugs and sockets',
				'Electric motors',
				'Electrical panels and switchgear',
				'Transformers and mini substations',
				'Generators and solar lighting',
			],
		},
		{
			category: 'Instrumentation',
			items: ['Transmitters', 'Flow meters', 'Vibration monitoring sensors', 'Probes'],
		},
		{
			category: 'Conveyor Belts',
			items: [
				'Conveyor belt accessories',
				'Pulleys and idlers',
				'Wear plates and couplings',
				'Reducers, rollers, and drums',
			],
		},
		{
			category: 'PPE',
			items: [
				'Safety helmets and boots',
				'Safety shoes and work clothing',
				'Gloves, masks, and protective glasses',
				'Rain suits, work lamps, and belts',
			],
		},
		{
			category: 'Plates, Pipes & Electrowinning',
			items: ['Metal plates in various sizes', 'Stainless steel 316L plates and pipes', 'Cathodes, anodes, demister balls, and edge strips'],
		},
		{
			category: 'Additional Services',
			items: [
				'Geomembrane supply, installation, and repair',
				'Mechanical and HDPE pipe welding',
				'Crusher products and maintenance services',
			],
		},
	],
	teamSummary:
		'CGT operates with highly qualified teams and trusted industrial partners across local and international markets, ensuring quality, reliability, and on-time delivery for every engagement.',
	partnersSummary:
		'Our strategic partnerships with renowned suppliers and technology providers allow us to deliver innovative, reliable, and efficient industrial solutions.',
	contacts: {
		phones: ['+243 89 798 0803', '+27 67 758 4446'],
		email: 'info@copakgt.com',
		website: 'https://www.copakgt.com',
		address: 'Av: 33 Tony Mwana Q/ Golf Karavia plateaux 3 C/ Annexe, Ville de Lubumbashi, Province du Haut Katanga, RDC.',
		rccm: 'CD/LSH/RCCM/24-B-00695',
		idNat: '05-S9502-N58278L',
		taxNumber: 'A2408513F',
		arsp: '6209253671',
	},
};
