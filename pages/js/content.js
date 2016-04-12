var loadContent = function(){

	welcome_content = {title:"Welcome", type:"welcome", text:"test test test", location:""},

	totalContent["ASMR"] = [
	{category: "ASMR", title:"Foam recorder wrapped in plastic foil", type:"video", url:"https://youtube.com/embed/uggv0LNHPRM?list=PLCStOTQcjfZuJu1WS1OSfe8Stq5j5L6KW"},
	{category: "ASMR", title:"Wood Carving", type:"video", url:"https://www.youtube.com/embed/sEbx6qBgmTY?list=PLCStOTQcjfZuJu1WS1OSfe8Stq5j5L6KW"},
	{category: "ASMR", title:"Just for Sleeping", type:"video", url:"https://www.youtube.com/embed/xnL_UU5wlI0?list=PLCStOTQcjfZuJu1WS1OSfe8Stq5j5L6KW"},

	];

	totalContent["binauralBeats"] = [
	{category: "Binaural Beats", title:"Deep Sleep - Isochronic Binaural Beats", type:"video", url:"https://youtube.com/embed/1l13TSFrNgM?list=PLCStOTQcjfZs6Xncqbi-zsrQzk5ohkcj5"},
	{category: "Binaural Beats", title:"Rain Sleep", type:"video", url:"https://www.youtube.com/embed/xkyRNPd_lgs?list=PLCStOTQcjfZs6Xncqbi-zsrQzk5ohkcj5"},
	{category: "Binaural Beats", title:"5 Hours Sleep", type:"video", url:"https://www.youtube.com/embed/6SC93Euiom4?list=PLCStOTQcjfZs6Xncqbi-zsrQzk5ohkcj5"},
	];

	totalContent["journalEntries"] = [
	{category: "Journal Entry", title:"What's on your mind?", type:"journal", text:""},
	{category: "Journal Entry", title:"What would you like to wake up thinking about tomorrow morning?", type:"journal", text:""},

	];

	totalContent["music"] = [
	{category: "Music", title:"RAIN WITH DISTANT THUNDER", type:"video", url:"https://youtube.com/embed/UHEtKwgujNA?list=PLCStOTQcjfZs87ftab-tSm2inxAkMS6dj"},

	];

	totalContent["relaxation"] = [
	{category: "Relaxation", title:"Guided Meditation for Sleep... Floating Amongst the Stars", type:"video", url:"https://youtube.com/embed/N4qCFFBrrgk?list=PLCStOTQcjfZuyjUpKBBFz8uyh01GqrpnP"},
	{category: "Relaxation", title:"Simple Relaxation", type:"video", url:"https://www.youtube.com/embed/OoM57Z8dRUY?list=PLCStOTQcjfZuyjUpKBBFz8uyh01GqrpnP"},
	{category: "Relaxation", title:"Breathing Meditation", type:"video", url:"https://www.youtube.com/embed/7wFX9Wn70eM?list=PLCStOTQcjfZuyjUpKBBFz8uyh01GqrpnP"},
	{category: "Relaxation", title:"Into Deep Sleep", type:"video", url:"https://www.youtube.com/embed/9BfSGt1w3Ss?list=PLCStOTQcjfZuyjUpKBBFz8uyh01GqrpnP"},

	];

	totalContent["tips_quotes"] = [
	{category: "Tips & Quotes", title:"Charles M. Schulz", type:"tips_quotes", text:"\"Sometimes I lie awake at night and I ask \"Where have I gone wrong?\" Then a voice says to me, \"This is going to take more than one night\" \"", location:""},
	{category: "Tips & Quotes", title:"James Keller", type:"tips_quotes", text:"\" It is better to light one candle than to curse the darkness \"", location:""},
	{category: "Tips & Quotes", title:"C.S Lewis", type:"tips_quotes", text:"\" Many things -- such as loving, going to sleep, or behaving unaffectedly, are done worst when we try hardest to do them. \"", location:""},
	{category: "Tips & Quotes", title:"Charles de Lint", type:"tips_quotes", text:"\" You can't stand up to the night until you understand what's hiding in its shadows \"", location:""},
	{category: "Tips & Quotes", title:"Samuel Butler", type:"tips_quotes", text:"\" Life is one long process of getting tired \"", location:""},


	];

	totalContent["videos"] = [
	{category: "Video", title:"Bob Ross - Ocean Breeze", type:"video", url:"https://youtube.com/embed/XZmdzfvXRuw?list=PLCStOTQcjfZufFlCB81lyokEN9q2Mk2Om"},

	];

	my_journal = [];
	tmp = (new Date())
	tmp.setMonth(3);
	tmp.setDate(4);
	tmp.setYear(2016);
	my_journal.push({"date": tmp,  "text": "I want to wake up thinking about puppies and butterflies."});
	tmp = (new Date())
	tmp.setMonth(2);
	tmp.setDate(28);
	tmp.setYear(2016);
	my_journal.push({"date": tmp,  "text": "I can't sleep because I'm HANGRY >:["    });
	tmp = (new Date())
	tmp.setMonth(2);
	tmp.setDate(14);
	tmp.setYear(2016);
	my_journal.push({"date": tmp,  "text": "A dog is barking outside, and it is keeping me awake D:"});

	my_fav = [];
	tmp = (new Date())
	tmp.setMonth(3);
	tmp.setDate(4);
	tmp.setYear(2016);
	my_fav.push({"date": tmp, "order": 1, "title": "What's On Your Mind?", "category": "Journal"});
	tmp = (new Date())
	tmp.setMonth(3);
	tmp.setDate(5);
	tmp.setYear(2016);
	my_fav.push({"date": tmp, "order": 2, "title": "Eating Times", "category": "Tips/Quotes"});
	tmp = (new Date())
	tmp.setMonth(3);
	tmp.setDate(7);
	tmp.setYear(2016);
	my_fav.push({"date": tmp, "order": 3, "title": "Stretch Your Neck", "category": "Relaxation"});
	tmp = (new Date())
	tmp.setMonth(3);
	tmp.setDate(3);
	tmp.setYear(2016);
	my_fav.push({"date": tmp, "order": 4, "title": "ASMR - Whispering", "category": "Videos"});
	tmp = (new Date())
	tmp.setMonth(3);
	tmp.setDate(3);
	tmp.setYear(2016);
	my_fav.push({"date": tmp, "order": 4, "title": "ASMR - Whispering", "category": "Videos"});

}
