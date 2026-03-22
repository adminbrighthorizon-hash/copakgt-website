const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const localPhoto = (fileName: string) => `${base}/photos/${fileName}`;

export const site = {
	name: 'COPAK GENERAL TRADING',
	tagline: 'Complete Industrial Solutions for Your Success',
	mission:
		'Since 2023, COPAK General Trading (CGT) has been the trusted partner for laboratory and industrial equipment across mining operations, hospitals, educational institutions, and civil engineering projects throughout the Democratic Republic of Congo and Southern Africa. We provide complete solutions from design and supply to professional installation and comprehensive maintenance support.',
	headline: 'Laboratory & Industrial Equipment for Mission-Critical Operations',
	subheadline:
		'Precision laboratory and industrial equipment trusted by mining operations, hospitals, educational institutions, and civil engineering projects across Africa.',
	banner:
		'Serving leading enterprises across mining, manufacturing, and industrial sectors with premium equipment, reagents, and professional services.',
	heroImage: localPhoto('industrial-01.jpg'),
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/programs', label: 'Services' },
		{ href: '/impact', label: 'Our Strength' },
		{ href: '/contact', label: 'Contact' },
	],
	programs: [
		{
			id: '01',
			title: 'Laboratory Equipment',
			description:
				'Specialized laboratory equipment for mining assay labs, hospital diagnostic centers, educational institutions, and civil engineering testing facilities. Industrial and medical-grade instrumentation for precise analysis and quality control.',
			accent: 'accent-orange',
			image: localPhoto('industrial-01.jpg'),
		},
		{
			id: '02',
			title: 'Industrial Pumps & Valves',
			description:
				'Multistage, chemical, dosing, and clear water pumps with specialty valves for mining operations, water treatment, and industrial processes. Diaphragm, guillotine, butterfly, and pinch valves engineered for demanding environments.',
			accent: 'accent-orange',
			image: localPhoto('industrial-02.jpg'),
		},
		{
			id: '03',
			title: 'Electrical Systems & Infrastructure',
			description:
				'Complete electrical solutions including motors, transformers, generators, switchgear, circuit breakers, mini substations, cable systems, and solar lighting. Designed for mining, hospital, educational, and industrial facilities.',
			accent: 'accent-orange',
			image: localPhoto('industrial-03.jpg'),
		},
		{
			id: '04',
			title: 'Instrumentation, Controls & Safety',
			description:
				'Precision transmitters, flow meters, vibration sensors, monitoring equipment, and comprehensive PPE for mining safety, hospital operations, and industrial compliance.',
			accent: 'accent-orange',
			image: localPhoto('industrial-04.jpg'),
		},
	],
	stats: [
		{ value: '100+', label: 'Enterprise Clients Served' },
		{ value: '2,000+', label: 'Equipment Installations' },
		{ value: '50+', label: 'Product Categories Supplied' },
		{ value: '50+', label: 'Product Categories' },
	],
	impact: [
		'2,000+ successful industrial equipment installations across Congo and Southern Africa',
		'100+ enterprise clients depending on our solutions for mission-critical operations',
		'98% customer satisfaction rating on equipment reliability and after-sales support',
		'Preventive maintenance and rapid response capabilities ensuring operational reliability',
	],
	audiences: [
		{
			title: 'Mining Operations',
			description:
				'Complete laboratory and industrial equipment solutions for assay operations, ore processing, and mine site infrastructure. From laboratory analysis systems to industrial pumps to electrical infrastructure with comprehensive support.',
		},
		{
			title: 'Hospitals & Medical Facilities',
			description:
				'Specialized medical and laboratory equipment for diagnostic centers, surgical facilities, and emergency response units. Reliable systems meeting health sector standards with dedicated support.',
		},
		{
			title: 'Educational Institutions',
			description:
				'Laboratory equipment and infrastructure for university research centers, technical schools, and testing facilities. Supporting scientific education and industrial training with quality equipment.',
		},
		{
			title: 'Civil Engineering & Construction',
			description:
				'Site infrastructure equipment, quality control laboratory systems, and electrical infrastructure for construction projects. Equipment testing and material analysis solutions.',
		},
	],
	trustPoints: [
		'Enterprise-grade equipment and solutions',
		'Local presence with international expertise',
		'Professional installation and comprehensive maintenance support',
		'Transparent pricing and reliable delivery',
	],
	gallery: [
		{
			slot: 'Photo 01',
			src: localPhoto('industrial-01.jpg'),
			alt: 'Industrial manufacturing facility with heavy machinery',
			title: 'Instrumentation Repair',
			description: 'Precision diagnostics, repair, and calibration support for mission-critical industrial equipment.',
		},
		{
			slot: 'Photo 02',
			src: localPhoto('industrial-02.jpg'),
			alt: 'Industrial plant and power systems',
			title: 'Plant Fabrication Support',
			description: 'Industrial welding, maintenance, and equipment support for heavy-duty operating environments.',
		},
		{
			slot: 'Photo 03',
			src: localPhoto('industrial-03.jpg'),
			alt: 'Electrical systems and power distribution',
			title: 'Electrical Control Systems',
			description: 'Integrated circuit, control, and power-distribution solutions for reliable operations.',
		},
		{
			slot: 'Photo 04',
			src: localPhoto('industrial-04.jpg'),
			alt: 'Industrial installation and maintenance',
			title: 'Safety & Technical Training',
			description: 'Operational safety readiness, equipment familiarization, and technical support on site.',
		},
		{
			slot: 'Photo 05',
			src: localPhoto('industrial-05.jpg'),
			alt: 'Mining industry operations',
			title: 'Laboratory Analysis Systems',
			description: 'High-precision laboratory solutions for testing, diagnostics, and quality assurance workflows.',
		},
		{
			slot: 'Photo 06',
			src: localPhoto('industrial-06.jpg'),
			alt: 'Enterprise industrial facility',
			title: 'Process Pumps & Pipework',
			description: 'Engineered pumping, piping, and fluid-handling systems built for industrial continuity.',
		},
	],
	regions: ['Lubumbashi', 'Kinshasa', 'Johannesburg', 'Cape Town', 'DRC', 'Southern Africa'],
	stories: [
		{
			place: 'Lubumbashi Mining Site',
			title: 'Zero-Downtime Operations',
			description:
				'A major mining operation reduced equipment downtime by 85% after deploying CGT\'s integrated pump and instrumentation solutions with comprehensive maintenance support.',
			image: localPhoto('industrial-02.jpg'),
		},
		{
			place: 'South African Manufacturer',
			title: 'Production Optimization',
			description:
				'A leading industrial manufacturer streamlined operations with CGT\'s conveyor systems and electrical integration, increasing throughput by 40% in the first quarter.',
			image: localPhoto('industrial-03.jpg'),
		},
		{
			place: 'Regional Power Facility',
			title: 'Infrastructure Excellence',
			description:
				'CGT delivered transformer and switchgear installations for a critical power infrastructure project, completing on schedule with zero safety incidents.',
			image: localPhoto('industrial-05.jpg'),
		},
	],
	team: [
		{
			name: 'Expertise Network',
			role: 'Engineering & Installation Teams',
			bio: 'Over 15 years combined experience in industrial equipment, with specialized teams across pumps, electrical systems, instrumentation, and maintenance.',
		},
		{
			name: 'Local Presence',
			role: 'Regional Operations',
			bio: 'Based in Lubumbashi and Kinshasa with regional coordination throughout Southern Africa, ensuring rapid response and local know-how.',
		},
		{
			name: 'Professional Maintenance',
			role: 'Installation & Support',
			bio: 'Expert installation and maintenance teams ensuring optimal equipment performance and operational reliability.',
		},
	],
	contacts: {
		partnerships: 'info@copakgt.com',
		general: 'info@copakgt.com',
		phone: '+243 89 798 0803 / +27 677584446',
		address: 'Av: 33 Tony Mwana Q/ Golf Karavia plateaux 3 C/ Annexe, Lubumbashi, Haut Katanga, RDC',
	},
};
