"use client";

import { useState } from "react";

const yaleActivities = [
	// Academic & Cultural Activities
	"Participated in a pre-orientation program",
	"Grabbed coffee at the jitterbus",
	'Read (or referenced) the YDN article "The opposite of loneliness"',
	"Requested & read some rare texts from the Sterling or Beinecke archives",
	"Explored the Peabody",
	"Perused the Yale Art Gallery",
	"Visited the Yale Center for British Art",
	"Attended a recital at the School of Music",
	"Explored the brain museum (cushing center)",
	"Used one of the College Art studios",
	"Peered out of the observatory telescope",
	"Sipped tea at a college tea",
	"Hissed at a YPU debate",
	"Caught a Dramat theater performance",
	"Attended (or sang in) an acapella concert",
	"Attended (or danced in) a dance show",
	"Wore a costume to the YSO Halloween concert",
	"Published (or been quoted in) the YDN",
	"Cheered at any Yale sporting event besides The Game™",
	"Played for an intramural",

	// Campus Life & Dining
	"Been to every College library",
	"Eaten in every dining hall (including Commons and Slifka)",
	"Eaten at a buttery other than your college's",
	"Played ping pong in a buttery",
	"Baked in a student kitchen",
	"Grabbed food from a food truck behind Murray",
	"Visited the Yale farm",
	"Visited Wooster Square Farmers Market",
	"Pepe's",
	"Sally's",
	"Modern",
	// "Bar",
	"Louis Lunch",
	"Ordered a late-night Wenzel at Alpha Delta",
	"Ordered an omelette at JE (if you know, you know)",
	// Social & Networking
	"Gone to an event just for the free food",
	"Said you'll grab a meal with someone",
	"Actually grabbed a meal with someone",
	"Used GCal to schedule a meal with someone",
	"Answered a tourist's question",
	"Given a tourist the wrong answer to a question",
	'Yelled "happy birthday!" at a tour guide',
	'Said you go to "school in Connecticut"',
	"Petted Handsome Dan",
	"Taken the Yuttle",
	"Stayed up past midnight talking about religion",

	// Campus Adventures & Exploration
	"East rock sunrise/sunset hike",
	"West rock hike",
	"Ice skated at 'The Whale' (Ingalls rink)",
	"Biked the Farmington Canal Trail",
	"Worked out at Payne Whitney",
	"Blown giant bubbles on Cross Campus",
	"Napped in the Good Life Center",
	"Run in the annual Faxon New Haven road race",
	// "Explored Yale's roofs or underground",
	"Walked to the divinity school at night",
	"Brought a date to Murray's secret courtyard",
	"Retreat(ed) with a club",
	"Visited a town in CT other than New Haven",
	"Ridden the Metro North to NYC",
	"Visited the Yale Club in NYC",
	"Sled down Science Hill",

	// Academic Mischief
	"Studied at the Yale Law Library",
	"Picked a class because of a crush",
	"Pulled an all-nighter",
	"Cut a class",
	"Slept through a class",
	"Only attended the exams for a class",
	"Cried in front of your Dean",
	"Got an extension from your Dean",

	// Minor Rule Breaking
	"Taken food home from a dining hall",
	"Changed the aux at TD's dining hall",
	"Split up a suite without discussing it",
	"Slept in a Bass cubicle",
	"Meditated with the Buddhist group at Harkness Tower",

	// Party & Social Events
	"Attended a suite party",
	"Gone to a duty night (that isn't for your college)",
	"God Quad or 12pack",
	"First-year 'holiday dinner'",
	"Tailgated at Harvard/Yale",
	"Crashed the first-year snowball fight",
	"Waited in line for the Pierson Inferno",
	"Senior Masquerade",
	"'The Tang'",
	"Woads/Soads/Hallowoads/Mistletoads/Valenwoads",
	"Became a Woads Scholar",
	"Heard the Whiffs sing at Mory's",
	"Sipped from the Mory's Cup",
	"Been to GHeav hammered",
	"Partied at every frat",
	"Attended a Feb club party",
	"Completed the Feb club challenge",

	// Wild Activities
	"Polar plunged at Lighthouse Point beach",
	"Battle of the bands",
	"'flung' Spring fling",
	"Infiltrated (or joined) a secret society",
	"Witnessed (or streaked in) the Bass naked run",
	"Been to a naked party",
	// Dating & Romance
	"Sexiled your roommate",
	'Made the "walk of shame" behind the graveyard',
	"PDA in the stacks",
	"Collegecest",
	// "Suitecest",
];

export default function Home() {
	const [checkedItems, setCheckedItems] = useState<boolean[]>(
		new Array(yaleActivities.length).fill(false)
	);
	const [showScore, setShowScore] = useState(false);

	const handleCheck = (index: number) => {
		const newCheckedItems = [...checkedItems];
		newCheckedItems[index] = !newCheckedItems[index];
		setCheckedItems(newCheckedItems);
		setShowScore(false);
	};

	const calculateScore = () => {
		const uncheckedCount = checkedItems.filter((item) => !item).length;
		return Math.round((uncheckedCount / yaleActivities.length) * 100);
	};

	const getScoreDescription = (score: number) => {
		if (score >= 95)
			return "Practically a hermit - did you even leave your room?";
		if (score >= 85) return "Pretty pure - you played it safe at Yale";
		if (score >= 70) return "Moderately adventurous - a solid Yale experience";
		if (score >= 50) return "Well-rounded Yalie - you got around campus";
		if (score >= 30) return "Experienced Bulldog - you made the most of Yale";
		if (score >= 15) return "Yale veteran - you've seen it all";
		return "Legendary - you are Yale lore";
	};

	return (
		<div className="min-h-screen bg-white text-gray-900">
			<div className="container mx-auto px-4 py-12">
				<div className="text-center mb-12">
					<h1
						className="text-6xl font-bold mb-4 text-blue-900"
						style={{ fontFamily: "Georgia, serif" }}
					>
						Yale Side Quests
					</h1>
					{/* <h2
						className="text-2xl mb-6 text-gray-600"
						style={{ fontFamily: "Georgia, serif" }}
					>
						(Bucket List)
					</h2> */}
					<p className="text-lg  text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
						Follow this list at your own risk. Completing all of these may
						result in poor grades, social headaches, or other consequences….
					</p>
					<div className="flex justify-center gap-6 mb-8">
						<button
							onClick={() => setShowScore(true)}
							className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-none border-2 border-blue-900 transition-all duration-200 transform hover:scale-105"
							style={{ fontFamily: "Georgia, serif" }}
						>
							View Score
						</button>
						<button
							onClick={() => {
								setCheckedItems(new Array(yaleActivities.length).fill(false));
								setShowScore(false);
							}}
							className="bg-white hover:bg-gray-50 text-blue-900 font-semibold py-3 px-8 rounded-none border-2 border-blue-900 transition-all duration-200"
							style={{ fontFamily: "Georgia, serif" }}
						>
							Reset All
						</button>
					</div>

					{showScore && (
						<div className="bg-blue-900 text-white p-8 mb-12 max-w-lg mx-auto shadow-2xl border">
							<h2
								className="text-3xl font-bold mb-4"
								style={{ fontFamily: "Georgia, serif" }}
							>
								Your Yale Purity Score
							</h2>
							<div className="text-5xl font-bold mb-4">{calculateScore()}%</div>
							<div className="text-lg mb-2">
								{checkedItems.filter((item) => item).length} of{" "}
								{yaleActivities.length}
							</div>
							<p className="text-sm opacity-90">
								{getScoreDescription(calculateScore())}
							</p>
						</div>
					)}
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="grid gap-1 bg-gray-100 p-1">
						{yaleActivities.map((activity, index) => (
							<label
								key={index}
								className={`flex items-center p-4 transition-all duration-150 cursor-pointer border-l-4 ${
									checkedItems[index]
										? "bg-blue-50 border-blue-900 text-blue-900"
										: "bg-white border-gray-300 hover:bg-gray-50 hover:border-blue-300"
								}`}
							>
								<input
									type="checkbox"
									checked={checkedItems[index]}
									onChange={() => handleCheck(index)}
									className="mr-4 h-5 w-5 text-blue-900 focus:ring-blue-500 focus:ring-2 rounded-sm border-2 border-gray-400"
								/>
								<span
									className={`font-medium ${
										checkedItems[index] ? "line-through opacity-75" : ""
									}`}
									style={{ fontFamily: "Georgia, serif" }}
								>
									{index + 1}. {activity}
								</span>
							</label>
						))}
					</div>
				</div>

				<footer className="text-center mt-16 text-gray-500 text-sm">
					<div className="border-t border-gray-200 pt-8">
						<p style={{ fontFamily: "Georgia, serif" }}>
							by yalies, for future yalies
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}
