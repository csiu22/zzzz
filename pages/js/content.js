var loadContent = function(){

	welcome_content = {title:"Welcome", type:"welcome", text:"test test test", location:""},

	totalContent["ASMR"] = [
	{title:"Foam recorder wrapped in plastic foil", type:"video", url:"https://youtube.com/embed/uggv0LNHPRM?list=PLCStOTQcjfZuJu1WS1OSfe8Stq5j5L6KW"},

	];

	totalContent["binauralBeats"] = [
	{title:"Deep Sleep - Isochronic Binaural Beats", type:"video", url:"https://youtube.com/embed/1l13TSFrNgM?list=PLCStOTQcjfZs6Xncqbi-zsrQzk5ohkcj5"},

	];

	totalContent["journalEntries"] = [
	{title:"What's on your mind?", type:"journal", text:""},
	{title:"What would you like to wake up thinking about tomorrow morning?", type:"journal", text:""},

	];

	totalContent["music"] = [
	{title:"RAIN WITH DISTANT THUNDER", type:"video", url:"https://youtube.com/embed/UHEtKwgujNA?list=PLCStOTQcjfZs87ftab-tSm2inxAkMS6dj"},

	];

	totalContent["relaxation"] = [
	{title:"Guided Meditation for Sleep... Floating Amongst the Stars", type:"video", url:"https://youtube.com/embed/N4qCFFBrrgk?list=PLCStOTQcjfZuyjUpKBBFz8uyh01GqrpnP"},

	];

	totalContent["tips_quotes"] = [
	{title:"test tip", type:"tips_quotes", text:"", location:""},

	];

	totalContent["videos"] = [
	{title:"Bob Ross - Ocean Breeze", type:"video", url:"https://youtube.com/embed/XZmdzfvXRuw?list=PLCStOTQcjfZufFlCB81lyokEN9q2Mk2Om"},

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
