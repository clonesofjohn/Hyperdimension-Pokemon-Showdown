"use strict";

exports.BattleScripts = {
	randomSeasonalMeleeTeam: function (side) {
		let team = [];
		let variant = (this.random(2) === 1);
		let sets = {
			'jdarden': {
				species: 'Dragonair', ability: 'Fur Coat', item: 'Eviolite', gender: 'M',
				moves: ['rest', 'sleeptalk', 'quiverdance'], name: 'jdarden',
				signatureMove: "Wyvern's Wind",
				evs: {hp:252, def:4, spd:252}, nature: 'Calm',
			},
			'Jetpack': {
				species: 'Alakazam', ability: 'Magic Guard', item: 'Alakazite', gender: 'M',
				moves: ['substitute', 'shadowball', 'focusblast'],
				signatureMove: "Malicious Hypnosis",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Mizuhime': {
				species: 'Kingdra', ability: 'Torrent', item: 'Mystic Water', gender: 'F', shiny: true,
				moves: ['spacialrend', 'thunder', 'sheercold'],
				signatureMove: 'Double Laser',
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'RosieTheVenusaur': {
				species: 'Venusaur', ability: 'Moxie', item: 'Leftovers', gender: 'F',
				moves: [['fusionflare', 'sacredfire'][this.random(2)], 'extremespeed', 'knockoff', 'closecombat'],
				signatureMove: "Swag Plant",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			'Skitty': {
				species: 'Audino', ability: 'Intimidate', item: 'Audinite', gender: 'M',
				moves: ['acupressure', 'recover', ['taunt', 'cosmicpower', 'magiccoat'][this.random(3)]],
				signatureMove: "Ultimate Dismissal",
				evs: {hp:252, def:252, spd:4}, nature: 'Bold',
			},
			'ClassyZ': {
				species: 'Scizor', ability: 'Technician', item: 'Scizorite', gender: 'F', shiny: true,
				moves: ['machpunch', 'bulletpunch', 'swordsdance'], name: 'classy',
				signatureMove: 'Hyperspeed Punch',
				evs: {atk:252, spd:4, spe:252}, nature: 'Adamant',
			},
			'Acast': {
				species: 'Gourgeist-Super', ability: 'Prankster', item: 'Mental Herb', gender: 'M',
				moves: ['willowisp', 'recover', ['seedbomb', 'shadowstrike'][this.random(2)]],
				signatureMove: 'Needs More Screens',
				evs: {hp:248, def:8, spd:252}, nature: 'Careful',
			},
			'Ace': {
				species: 'Salamence', ability: 'Tinted Lens', item: 'Salamencite', gender: 'M',
				moves: ['dragonascent', 'closecombat', 'outrage'],
				signatureMove: 'Big Narstie',
				evs: {hp:80, atk:252, spe:176}, nature: 'Adamant',
			},
			'Aelita': {
				species: 'Porygon-Z', ability: 'Protean', item: 'Life Orb', gender: 'N',
				moves: [['boomburst', 'moonblast'][this.random(2)], 'quiverdance', 'chatter'],
				signatureMove: "Energy Field",
				evs: {hp:4, spa:252, spe:252}, nature: 'Modest',
			},
			'ajhockeystar': {
				species: 'Mienshao', ability: 'Magic Guard', item: 'Life Orb', gender: 'M',
				moves: ['knockoff', 'boltstrike', 'highjumpkick'],
				signatureMove: 'OH CANADA',
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'Albacore': {
				species: 'Hoopa-Unbound', ability: 'Regenerator', item: 'Choice Scarf', gender: 'N',
				moves: ['hyperspacefury', 'closecombat', 'gunkshot'],
				signatureMove: 'Hit-And-Run',
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'Albert': {
				species: 'Goodra', ability: 'Protean', item: 'Assault Vest', gender: 'M',
				moves: ['aurasphere', 'icebeam', 'thunderbolt'],
				signatureMove: 'Aesthetically Pleasing',
				evs: {spa:252, def:4, spe:252}, nature: 'Modest',
			},
			'Always': {
				species: 'Sceptile', ability: 'Overgrow', item: 'Sceptilite', gender: 'M',
				moves: ['leafstorm', 'dracometeor', 'secretsword'],
				signatureMove: 'Back to the bench again?',
				evs: {spa:252, spd:4, spe:252}, nature: 'Timid',
			},
			'A': {
				species: 'Escavalier', ability: 'Flash Fire', item: 'Assault Vest', gender: 'M',
				moves: ['ironhead', 'knockoff', 'megahorn'],
				signatureMove: "ABC",
				evs: {hp:240, atk:236, def:16, spd:16}, nature: 'Adamant',
			},
			'AM': {
				species: 'Tyranitar', ability: 'Adaptability', item: (variant ? 'Lum Berry' : 'Choice Scarf'), gender: 'M',
				moves: (variant ? ['earthquake', 'diamondstorm', 'swordsdance', 'meanlook'] : ['knockoff', 'diamondstorm', 'earthquake']),
				signatureMove: "Predator",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			'Andy': {
				species: 'Absol', ability: 'Justified', item: 'Absolite', gender: 'M',
				moves: ['suckerpunch', 'swordsdance', 'uturn'],
				signatureMove: 'Pilfer',
				evs: {hp:252, atk:252, spe:4}, nature: 'Adamant',
			},
			'Antemortem': {
				species: 'Clefable', ability: (variant === 1 ? 'Sheer Force' : 'Multiscale'), item: (variant === 1 ? 'Life Orb' : 'Leftovers'), gender: 'M',
				moves: ['earthpower', 'cosmicpower', 'recover', 'gigadrain'],
				signatureMove: "Postmortem",
				evs: {hp:252, spa:252, def:4}, nature: 'Modest',
			},
			'Anttya': {
				species: 'Altaria', ability: 'Aerilate', item: 'Altarianite', gender: 'F',
				moves: ['roost', 'triattack', 'searingshot'],
				signatureMove: "Hax",
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'Anty': {
				species: 'Durant', ability: 'Hustle', item: (variant ? 'Life Orb' : 'Choice Band'), gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['attackorder', 'superpower', (variant ? 'coil' : 'diamondstorm')],
				signatureMove: 'Double-Edgy',
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'Articuno': {
				species: 'Articuno', ability: 'Magic Guard', item: 'Red Card', gender: 'F',
				moves: ['softboiled', 'calmmind', 'frostbreath'],
				signatureMove: "True Support",
				evs: {hp:252, def:252, spa:4}, nature: 'Bold',
			},
		};

		// Generate the team randomly.
		let pool = Object.keys(sets);
		for (let i = 0; i < 6; i++) {
			let name = this.sampleNoReplace(pool);
			let set = sets[name];
			set.level = 100;
			set.name = name;
			if (!set.ivs) {
				set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			} else {
				for (let iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}

		return team;
	},
};
