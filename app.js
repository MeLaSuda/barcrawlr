const venueSources = [
  { label: "Arendsnest", url: "https://www.arendsnest.nl/en/about-us/" },
  { label: "HPS", url: "https://www.iamsterdam.com/en/whats-on/calendar/eating-and-drinking/cafes-and-bars/hps-hiding-in-plain-sight" },
  { label: "Waterkant", url: "https://www.waterkantamsterdam.nl/" },
  { label: "Bar Oldenhof", url: "https://bar-oldenhof.com/" },
  { label: "Flying Dutchmen", url: "https://www.flyingdutchmencocktails.shop/contact" },
  { label: "Cafe Belgique", url: "https://www.cafebelgique.nl/" },
  { label: "Jazz Cafe Alto", url: "https://www.jazz-cafe-alto.nl/" },
  { label: "Pulitzer's Bar", url: "https://www.pulitzeramsterdam.com/en/eat-drink/pulitzers-bar/" },
  { label: "Door 74", url: "https://www.diffordsguide.com/pubs-and-bars/657/amsterdam/door-74" },
];

const venues = [
  {
    name: "Proeflokaal Arendsnest",
    area: "Centrum",
    address: "Herengracht 90, 1015 BS Amsterdam",
    lat: 52.3799,
    lng: 4.8879,
    price: "medium",
    tags: ["craft-beer", "hidden", "terrace"],
    moods: ["friends", "work", "visitors"],
    vibe: "Dutch craft beer by the canal, relaxed enough to start with conversation.",
    bestFor: "Local beer flights and low-pressure first rounds.",
    note: "Great for mixed groups; non-beer drinkers still have cider, wine, and low/no alcohol options.",
    hours: allDays([[12, 24]], { 5: [[12, 25]], 6: [[12, 25]] }),
    source: venueSources[0],
  },
  {
    name: "Hiding in Plain Sight",
    area: "Centrum",
    address: "Rapenburg 18, 1011 TX Amsterdam",
    lat: 52.3718,
    lng: 4.9075,
    price: "high",
    tags: ["cocktails", "hidden"],
    moods: ["date", "friends", "visitors"],
    vibe: "A polished speakeasy mood with plush corners and serious cocktails.",
    bestFor: "A slower second stop when the night wants to feel deliberate.",
    note: "Small-room energy. Better with a smaller group, and worth checking availability.",
    hours: allDays([[18, 25]], { 5: [[18, 27]], 6: [[18, 27]] }),
    source: venueSources[1],
    needsBooking: true,
    smallGroup: true,
  },
  {
    name: "Waterkant",
    area: "Jordaan",
    address: "Marnixstraat 246, 1016 TL Amsterdam",
    lat: 52.3672,
    lng: 4.8807,
    price: "medium",
    tags: ["terrace", "late-night", "food"],
    moods: ["friends", "work", "visitors"],
    vibe: "Tropical, casual, bigger-group friendly, and easy to keep loose.",
    bestFor: "A terrace round with snacks before the crawl gets more focused.",
    note: "Useful when the group needs food, space, and a reset.",
    hours: allDays([[11, 25]], { 5: [[11, 27]], 6: [[11, 27]] }),
    source: venueSources[2],
  },
  {
    name: "Bar Oldenhof",
    area: "Jordaan",
    address: "Elandsgracht 84, 1016 TZ Amsterdam",
    lat: 52.3676,
    lng: 4.8816,
    price: "high",
    tags: ["cocktails", "hidden"],
    moods: ["date", "friends", "visitors"],
    vibe: "Classic cocktail bar: dark wood, soulful tunes, grown-up drinks.",
    bestFor: "A refined middle stop or a stylish final drink.",
    note: "Walk-ins are normal for smaller groups; groups above eight should reserve.",
    hours: allDays([[18, 25]], { 5: [[18, 26]], 6: [[18, 26]] }),
    source: venueSources[3],
    needsBooking: true,
  },
  {
    name: "Flying Dutchmen Cocktails",
    area: "Centrum",
    address: "Singel 460, 1017 AW Amsterdam",
    lat: 52.3668,
    lng: 4.8914,
    price: "medium",
    tags: ["cocktails", "late-night"],
    moods: ["friends", "date", "visitors"],
    vibe: "Fresh, classic-leaning cocktails with a proper late-night runway.",
    bestFor: "When the route needs one dependable cocktail anchor that stays open.",
    note: "Entrance is inside Belly of the Beast; look for the stairs on the right.",
    hours: allDays([[17, 28]]),
    source: venueSources[4],
  },
  {
    name: "Door 74",
    area: "Centrum",
    address: "Reguliersdwarsstraat 74, 1017 BN Amsterdam",
    lat: 52.3659,
    lng: 4.8959,
    price: "high",
    tags: ["cocktails", "hidden", "late-night"],
    moods: ["date", "friends", "visitors"],
    vibe: "Speakeasy theatre, low lights, and cocktails that reward a planned stop.",
    bestFor: "A late hidden-bar moment when the group is ready to commit.",
    note: "Reservation-first and intentionally discreet. Confirm the entry details before you go.",
    hours: {
      0: [[20, 28]],
      1: [[20, 27]],
      2: [[20, 27]],
      3: [[20, 27]],
      4: [[20, 27]],
      5: [[20, 28]],
      6: [[20, 28]],
    },
    source: venueSources[8],
    needsBooking: true,
    smallGroup: true,
  },
  {
    name: "Cafe Belgique",
    area: "Centrum",
    address: "Gravenstraat 2, 1012 NM Amsterdam",
    lat: 52.3748,
    lng: 4.8926,
    price: "low",
    tags: ["craft-beer", "hidden", "late-night"],
    moods: ["friends", "visitors"],
    vibe: "Tiny, art-filled Belgian beer bar with vinyl nights and character.",
    bestFor: "A compact beer stop that feels like a find.",
    note: "No reservations and no large groups. Keep this for small crews.",
    hours: allDays([[16, 25]], { 5: [[13, 26]], 6: [[13, 26]] }),
    source: venueSources[5],
    smallGroup: true,
  },
  {
    name: "Jazz Cafe Alto",
    area: "Leidseplein",
    address: "Korte Leidsedwarsstraat 115, 1017 PX Amsterdam",
    lat: 52.3636,
    lng: 4.8842,
    price: "medium",
    tags: ["live-music", "late-night"],
    moods: ["friends", "date", "visitors"],
    vibe: "A small, bohemian jazz room with live music deep into the night.",
    bestFor: "A final stop when conversation can give way to music.",
    note: "Live sets usually begin after the doors open; arrive early if seats matter.",
    hours: allDays([[20.5, 27]], { 5: [[20.5, 28]], 6: [[20.5, 28]] }),
    source: venueSources[6],
  },
  {
    name: "Pulitzer's Bar",
    area: "Jordaan",
    address: "Keizersgracht 234, 1016 DZ Amsterdam",
    lat: 52.373,
    lng: 4.884,
    price: "high",
    tags: ["cocktails", "date", "hidden"],
    moods: ["date", "work", "visitors"],
    vibe: "Elegant hotel-bar calm, canal-side glamour, polished service.",
    bestFor: "A first impression drink or a date-night detour.",
    note: "Limited seated service and parties above four can be tricky.",
    hours: {
      0: [[15, 25]],
      1: [[17, 25]],
      2: [[17, 25]],
      3: [[17, 25]],
      4: [[17, 25]],
      5: [[15, 26]],
      6: [[15, 26]],
    },
    source: venueSources[7],
    needsBooking: true,
    smallGroup: true,
  },
  {
    name: "Brouwerij 't IJ",
    area: "Oost",
    address: "Funenkade 7, 1018 AL Amsterdam",
    lat: 52.3667,
    lng: 4.9266,
    price: "medium",
    tags: ["craft-beer", "terrace", "food"],
    moods: ["friends", "work", "visitors"],
    vibe: "Windmill brewery energy, early-evening beers, and a bright terrace feel.",
    bestFor: "A pre-crawl launch before moving toward Centrum.",
    note: "Closes earlier than late-night bars, so it belongs at the front of the route.",
    hours: allDays([[14, 22]], { 6: [[12, 22]], 0: [[12, 22]] }),
    source: { label: "Brouwerij 't IJ", url: "https://www.amsterdamlocalgems.com/places/brouwerij-t-ij/" },
  },
  {
    name: "Cafe de Dokter",
    area: "Centrum",
    address: "Rozenboomsteeg 4, 1012 PR Amsterdam",
    lat: 52.3693,
    lng: 4.8892,
    price: "medium",
    tags: ["hidden", "cocktails"],
    moods: ["date", "visitors"],
    vibe: "Amsterdam history in miniature: intimate, old-world, and full of stories.",
    bestFor: "A quiet, memorable stop for two to four people.",
    note: "Very small and closed Sunday to Tuesday.",
    hours: { 0: [], 1: [], 2: [], 3: [[16, 25]], 4: [[16, 25]], 5: [[16, 25]], 6: [[16, 25]] },
    source: { label: "Cafe de Dokter", url: "https://www.falstaff.com/en/bars/cafe-de-dokter" },
    smallGroup: true,
  },
  {
    name: "Bar Brother",
    area: "Oud-West",
    address: "Curacaostraat 95, 1058 BS Amsterdam",
    lat: 52.3618,
    lng: 4.8496,
    price: "medium",
    tags: ["craft-beer", "hidden", "terrace"],
    moods: ["friends", "work", "visitors"],
    vibe: "Neighbourhood bar warmth in West, good for an unforced first round.",
    bestFor: "A casual local start away from the centre rush.",
    note: "Closed Mondays and earlier on Sundays, so it is best for West-led routes.",
    hours: {
      0: [],
      1: [[16, 23]],
      2: [[16, 23]],
      3: [[16, 23]],
      4: [[15, 24]],
      5: [[13, 24]],
      6: [[13, 20]],
    },
    source: { label: "Bar Brother", url: "https://www.bar-brother.com/contact-us" },
  },
  {
    name: "Mulligans Irish Music Bar",
    area: "Centrum",
    address: "Amstel 100, 1017 AC Amsterdam",
    lat: 52.36698,
    lng: 4.89675,
    price: "medium",
    tags: ["live-music", "terrace", "craft-beer"],
    moods: ["friends", "visitors", "work"],
    vibe: "Unfussy Irish pub energy on the Amstel, with Guinness, sessions, and musicians drifting through.",
    bestFor: "A friendly live-music stop that keeps the group loose.",
    note: "Check the event calendar if you want music to be the point rather than a bonus.",
    hours: allDays([[14, 25]], { 5: [[12, 26]], 6: [[12, 26]], 0: [[12, 25]] }),
    source: { label: "Mulligans", url: "https://www.mulligans.nl/contact/" },
  },
  {
    name: "Cafe Checkpoint Charlie",
    area: "Westerpark",
    address: "Nassaukade 48, 1052 CM Amsterdam",
    lat: 52.383,
    lng: 4.8777,
    price: "medium",
    tags: ["late-night", "terrace", "craft-beer"],
    moods: ["friends", "work", "visitors"],
    vibe: "Big-table pub energy on the edge of Westerpark, better for groups than tiny cocktail dens.",
    bestFor: "A roomy anchor when you want casual drinks and fewer door policies.",
    note: "Good for larger groups, but Friday and Saturday get lively.",
    hours: allDays([[13, 25]], { 5: [[13, 27]], 6: [[13, 27]] }),
    source: { label: "Checkpoint Charlie", url: "https://www.schlouk-map.com/en/places/cafe-checkpoint-charlie" },
  },
  {
    name: "Cafe Soundgarden",
    area: "Jordaan",
    address: "Marnixstraat 164-166, 1016 TG Amsterdam",
    lat: 52.3706,
    lng: 4.8785,
    price: "low",
    tags: ["live-music", "terrace", "late-night", "craft-beer"],
    moods: ["friends", "visitors"],
    vibe: "Rock-bar character, canal-side terrace, pool, and the right amount of scruff.",
    bestFor: "A louder, less polished stop between Jordaan and Leidseplein.",
    note: "Great when the night needs guitars instead of glassware theatre.",
    hours: allDays([[13, 25]], { 5: [[13, 27]], 6: [[15, 27]], 0: [[15, 25]] }),
    source: { label: "Cafe Soundgarden", url: "https://www.timeout.com/amsterdam/bars-and-pubs/cafe-soundgarden" },
  },
  {
    name: "De Nieuwe Anita",
    area: "Westerpark",
    address: "Frederik Hendrikstraat 111, 1052 HN Amsterdam",
    lat: 52.3812,
    lng: 4.8796,
    price: "medium",
    tags: ["live-music", "hidden"],
    moods: ["friends", "date", "visitors"],
    vibe: "DIY cultural bar with small gigs, screenings, and a living-room oddness that works.",
    bestFor: "A character stop when live events matter more than polished cocktails.",
    note: "Program-led venue. Check what is on before sending a whole group there.",
    hours: {
      0: [[18, 24]],
      1: [[18, 24]],
      2: [],
      3: [[18, 24]],
      4: [[20, 25.5]],
      5: [[20, 25.5]],
      6: [],
    },
    source: { label: "De Nieuwe Anita", url: "https://indebuurt.nl/amsterdam/gids/de-nieuwe-anita/" },
    smallGroup: true,
  },
  {
    name: "Cafe Nol",
    area: "Jordaan",
    address: "Westerstraat 109, 1015 LX Amsterdam",
    lat: 52.3801,
    lng: 4.8813,
    price: "medium",
    tags: ["late-night", "live-music", "hidden"],
    moods: ["friends", "visitors"],
    vibe: "A Jordaan singalong institution with Dutch levenslied energy and no shy corners.",
    bestFor: "A late, loud, very Amsterdam moment.",
    note: "Closed Monday and Tuesday; not the move for quiet conversation.",
    hours: {
      0: [],
      1: [],
      2: [[20, 27]],
      3: [[20, 27]],
      4: [[20, 28]],
      5: [[20, 28]],
      6: [[20, 27]],
    },
    source: { label: "Cafe Nol", url: "https://cafenol.amsterdam/contact/" },
  },
  {
    name: "In de Wildeman",
    area: "Centrum",
    address: "Kolksteeg 3, 1012 PT Amsterdam",
    lat: 52.3769,
    lng: 4.8942,
    price: "medium",
    tags: ["craft-beer", "hidden"],
    moods: ["friends", "work", "visitors"],
    vibe: "Serious beer-cafe calm in a former distillery, with plenty for the tap-list person.",
    bestFor: "A beer-focused stop that still feels central and mature.",
    note: "Usually better for conversation than for high-volume groups.",
    hours: allDays([[12, 24]], { 5: [[12, 25]], 6: [[12, 25]], 0: [[12, 24]] }),
    source: { label: "In de Wildeman", url: "https://www.indewildeman.nl/" },
  },
  {
    name: "Wynand Fockink",
    area: "Centrum",
    address: "Pijlsteeg 31, 1012 HH Amsterdam",
    lat: 52.3722,
    lng: 4.8948,
    price: "medium",
    tags: ["hidden", "craft-beer"],
    moods: ["date", "visitors", "friends"],
    vibe: "Historic standing-room tasting house for jenevers and liqueurs tucked by Dam Square.",
    bestFor: "A uniquely Dutch pre-dinner or early crawl ritual.",
    note: "Closes at 21:00, so it belongs at the very beginning.",
    hours: allDays([[15, 21]]),
    source: { label: "Wynand Fockink", url: "https://www.iamsterdam.com/en/whats-on/calendar/attractions-and-sights/attractions/proeflokaal-wynand-fockink" },
    smallGroup: true,
  },
  {
    name: "BeerTemple",
    area: "Centrum",
    address: "Nieuwezijds Voorburgwal 250, 1012 RR Amsterdam",
    lat: 52.3723,
    lng: 4.8901,
    price: "medium",
    tags: ["craft-beer", "late-night"],
    moods: ["friends", "work", "visitors"],
    vibe: "American and international craft beer with a huge tap and bottle list.",
    bestFor: "A reliable centre stop for beer people who want range.",
    note: "No reservations; keep bigger groups flexible.",
    hours: allDays([[14, 24]], { 5: [[14, 25]], 6: [[12, 25]], 0: [[12, 22]] }),
    source: { label: "BeerTemple", url: "https://www.beertemple.nl/en/about-us/" },
  },
  {
    name: "Cafe Chris",
    area: "Jordaan",
    address: "Bloemstraat 42, 1016 LC Amsterdam",
    lat: 52.3747,
    lng: 4.8815,
    price: "low",
    tags: ["hidden", "craft-beer"],
    moods: ["friends", "visitors"],
    vibe: "One of those classic brown cafes that makes the crawl feel local fast.",
    bestFor: "A compact Jordaan pint and a short walk to the next canal stop.",
    note: "Sunday closes early; otherwise it is a steady early-to-mid evening option.",
    hours: allDays([[15, 25]], { 5: [[15, 26]], 6: [[15, 26]], 0: [[15, 21]] }),
    source: { label: "Cafe Chris", url: "https://www.schlouk-map.com/en/places/cafe-chris" },
  },
  {
    name: "Bar Mokum",
    area: "De Pijp",
    address: "Ferdinand Bolstraat 11, 1072 LA Amsterdam",
    lat: 52.3588,
    lng: 4.8892,
    price: "high",
    tags: ["cocktails", "hidden"],
    moods: ["date", "friends", "visitors"],
    vibe: "A hidden cocktail bar under MOAK Pancakes with table service and Amsterdam riffs.",
    bestFor: "A De Pijp cocktail anchor with some reveal-factor.",
    note: "Reservations help, but the bar keeps space for walk-ins.",
    hours: allDays([[17, 24]], { 5: [[17, 26]], 6: [[17, 26]], 0: [[18, 24]] }),
    source: { label: "Bar Mokum", url: "https://www.barmokum.nl/" },
    needsBooking: true,
  },
  {
    name: "Super Lyan",
    area: "Centrum",
    address: "Nieuwezijds Voorburgwal 3, 1012 RC Amsterdam",
    lat: 52.3797,
    lng: 4.8942,
    price: "high",
    tags: ["cocktails", "late-night"],
    moods: ["date", "friends", "work", "visitors"],
    vibe: "Playful, polished cocktails in a 17th-century house near Centraal.",
    bestFor: "A smart first or final cocktail near the station.",
    note: "Open Wednesday to Sunday; groups of eight or more should book.",
    hours: { 0: [], 1: [], 2: [[17, 24]], 3: [[17, 25]], 4: [[17, 25]], 5: [[17, 25]], 6: [[17, 24]] },
    source: { label: "Super Lyan", url: "https://www.superlyan.com/" },
    needsBooking: true,
  },
  {
    name: "Cafe de Sluyswacht",
    area: "Centrum",
    address: "Jodenbreestraat 1, 1011 NG Amsterdam",
    lat: 52.3698,
    lng: 4.9018,
    price: "medium",
    tags: ["terrace", "hidden"],
    moods: ["friends", "work", "visitors"],
    vibe: "A leaning 1695 lockkeeper house with waterside terrace charm.",
    bestFor: "A scenic early stop near Nieuwmarkt and the eastern canals.",
    note: "Group reservations are mainly for larger parties; small groups can walk in.",
    hours: allDays([[12, 24]], { 3: [[12, 25]], 4: [[12, 26]], 5: [[12, 26]], 6: [[13, 20]] }),
    source: { label: "Cafe de Sluyswacht", url: "https://sluyswacht.nl/" },
  },
  {
    name: "Brouwerij Troost De Pijp",
    area: "De Pijp",
    address: "Cornelis Troostplein 21, 1072 JJ Amsterdam",
    lat: 52.3519,
    lng: 4.8958,
    price: "medium",
    tags: ["craft-beer", "food", "terrace"],
    moods: ["friends", "work", "visitors"],
    vibe: "Brewpub comfort, house beers, snacks, and enough room for indecisive groups.",
    bestFor: "A De Pijp route starter with food in the mix.",
    note: "Good larger-group candidate compared with tiny centre bars.",
    hours: allDays([[16, 25]], { 5: [[16, 26]], 6: [[12, 26]], 0: [[12, 23]] }),
    source: { label: "Brouwerij Troost", url: "https://brouwerijtroost.nl/en/contact/" },
    needsBooking: true,
  },
  {
    name: "Pllek",
    area: "Noord",
    address: "TT Neveritaweg 59, 1033 WB Amsterdam",
    lat: 52.4002,
    lng: 4.8926,
    price: "medium",
    tags: ["terrace", "live-music", "late-night", "food"],
    moods: ["friends", "work", "visitors"],
    vibe: "Waterfront Noord hangout with big views, food, music, and room to exhale.",
    bestFor: "A ferry-adventure route or a bigger-group night with space.",
    note: "Plan ferry time if you are coming from the centre.",
    hours: allDays([[9.5, 25]], { 5: [[9.5, 27]], 6: [[9.5, 27]] }),
    source: { label: "Pllek", url: "https://www.iamsterdam.com/en/whats-on/calendar/eating-and-drinking/restaurants/pllek" },
    needsBooking: true,
  },
  {
    name: "Skatecafe",
    area: "Noord",
    address: "Gedempt Hamerkanaal 42, 1021 KM Amsterdam",
    lat: 52.3869,
    lng: 4.9222,
    price: "medium",
    tags: ["late-night", "live-music", "food"],
    moods: ["friends", "visitors"],
    vibe: "Noord warehouse energy with food, club nights, and a skate-ramp attitude.",
    bestFor: "A later stop when the crawl wants to become a night out.",
    note: "Open mainly Thursday to Saturday; check the programme.",
    hours: { 0: [], 1: [], 2: [], 3: [[15, 25]], 4: [[15, 27]], 5: [[15, 27]], 6: [] },
    source: { label: "Skatecafe", url: "https://www.iamsterdam.com/en/whats-on/calendar/eating-and-drinking/restaurants/skatecafe" },
    needsBooking: true,
  },
  {
    name: "Pacific Amsterdam",
    area: "Westerpark",
    address: "Polonceaukade 23, 1014 DA Amsterdam",
    lat: 52.3864,
    lng: 4.8738,
    price: "medium",
    tags: ["terrace", "late-night", "food", "live-music"],
    moods: ["friends", "work", "visitors"],
    vibe: "Westerpark all-day spot that turns into drinks and dancing after dark.",
    bestFor: "A large-group-friendly stop with food before a louder finish.",
    note: "Weekend nights can shift from bar to dance floor.",
    hours: allDays([[12, 23]], { 3: [[12, 25]], 4: [[11, 26]], 5: [[11, 26]], 6: [[11, 22]] }),
    source: { label: "Pacific", url: "https://www.pacificamsterdam.nl/en/" },
    needsBooking: true,
  },
  {
    name: "The Waterhole",
    area: "Leidseplein",
    address: "Korte Leidsedwarsstraat 49, 1017 PW Amsterdam",
    lat: 52.3634,
    lng: 4.8828,
    price: "medium",
    tags: ["live-music", "late-night"],
    moods: ["friends", "visitors"],
    vibe: "Central live-music bar with nightly bands and a reliable late finish.",
    bestFor: "A final stop when everyone is ready for volume.",
    note: "Music schedule changes nightly; it can get packed.",
    hours: allDays([[12, 27]], { 5: [[12.5, 28]], 6: [[12.5, 28]] }),
    source: { label: "The Waterhole", url: "https://waterhole.nl/contact/" },
  },
  {
    name: "Maloe Melo",
    area: "Jordaan",
    address: "Lijnbaansgracht 163, 1016 VX Amsterdam",
    lat: 52.3695,
    lng: 4.8795,
    price: "medium",
    tags: ["live-music", "late-night", "hidden"],
    moods: ["friends", "visitors"],
    vibe: "Home-of-the-blues basement spirit with jam nights and late guitars.",
    bestFor: "A music-led final stop after Jordaan drinks.",
    note: "Check the current programme; hours can be event-led.",
    hours: allDays([[21, 27]], { 3: [[21, 28]], 4: [[21, 28]], 5: [[21, 27]] }),
    source: { label: "Maloe Melo", url: "https://www.maloemelo.com/" },
  },
  {
    name: "Bar Bukowski",
    area: "Oost",
    address: "Oosterpark 10, 1092 AE Amsterdam",
    lat: 52.3607,
    lng: 4.9139,
    price: "medium",
    tags: ["cocktails", "late-night", "food", "terrace"],
    moods: ["friends", "work", "visitors"],
    vibe: "Oost corner bar with cocktails, beer, food, and a lively literary wink.",
    bestFor: "A dependable Oost stop that works before or after dinner.",
    note: "Friday and Saturday run later; daytime cafe hours are not the same as crawl hours.",
    hours: allDays([[20, 25]], { 4: [[20, 27]], 5: [[21, 27]], 6: [[21, 25]] }),
    source: { label: "Bar Bukowski", url: "https://www.iamsterdam.com/en/whats-on/calendar/eating-and-drinking/cafes-and-bars/bar-bukowski" },
  },
];

const fallbackImage = "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1100&q=82";

const form = document.querySelector("#crawl-form");
const results = document.querySelector("#results");
const emptyState = document.querySelector("#empty-state");
const dateInput = document.querySelector("#crawl-date");
const sourceLinks = document.querySelector("#source-links");

dateInput.value = todayValue();
renderSourceLinks();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const answers = readAnswers();
  const plan = buildPlan(answers);
  renderPlan(plan, answers);
});

function allDays(defaultRanges, overrides = {}) {
  return [0, 1, 2, 3, 4, 5, 6].reduce((hours, day) => {
    hours[day] = overrides[day] || defaultRanges;
    return hours;
  }, {});
}

function readAnswers() {
  const data = new FormData(form);
  return {
    groupSize: clamp(Number(data.get("groupSize") || 1), 1, 16),
    startTime: data.get("startTime") || "19:30",
    crawlDate: data.get("crawlDate") || todayValue(),
    duration: data.get("duration") === "all-night" ? "all-night" : Number(data.get("duration") || 4),
    groupMood: data.get("groupMood") || "friends",
    vibes: data.getAll("vibe"),
    area: data.get("area") || "any",
    budget: data.get("budget") || "medium",
    pace: data.get("pace") || "balanced",
    walkLimit: Number(data.get("walkLimit") || 1000),
    reservations: data.get("reservations") === "on",
  };
}

function buildPlan(answers) {
  const day = getAmsterdamDay(answers.crawlDate);
  const startHour = timeToHour(answers.startTime);
  const isAllNight = answers.duration === "all-night";
  const effectiveDuration = isAllNight ? Math.max(6, 28 - startHour) : answers.duration;
  const stopCount = isAllNight ? 6 : answers.pace === "relaxed" ? 3 : answers.pace === "lively" ? 5 : 4;
  const stopLength = isAllNight ? 46 : answers.pace === "relaxed" ? 62 : answers.pace === "lively" ? 44 : 52;
  const travelPad = isAllNight || answers.pace === "lively" ? 10 : 14;
  const budgetRank = { low: 1, medium: 2, high: 3 };

  const scored = venues
    .map((venue) => {
      const openScore = openScoreForVenue(venue, day, startHour, effectiveDuration);
      const tagScore = answers.vibes.reduce((score, vibe) => score + (venue.tags.includes(vibe) ? 7 : 0), 0);
      const moodScore = venue.moods.includes(answers.groupMood) ? 4 : 0;
      const areaScore = answers.area === "any" || venue.area === answers.area ? 4 : -2;
      const priceGap = Math.abs(budgetRank[venue.price] - budgetRank[answers.budget]);
      const priceScore = 3 - priceGap * 2;
      const sizeScore = venue.smallGroup && answers.groupSize > 4 ? -9 : answers.groupSize > 8 && venue.needsBooking ? -5 : 1;
      const lateScore = answers.vibes.includes("late-night") && closesAfter(venue, day, 25.5) ? 4 : 0;
      return {
        venue,
        score: openScore + tagScore + moodScore + areaScore + priceScore + sizeScore + lateScore,
      };
    })
    .filter((item) => item.score > -20)
    .sort((a, b) => b.score - a.score);

  const route = chooseRoute(scored, answers, day, startHour, stopCount);
  const scheduled = scheduleRoute(route, answers, stopLength, travelPad, day, startHour);
  const totalWalk = scheduled.reduce((sum, stop, index) => {
    if (index === 0) return sum;
    return sum + walkingMeters(scheduled[index - 1].venue, stop.venue);
  }, 0);

  return {
    stops: scheduled,
    totalWalk,
    stopCount: scheduled.length,
    day,
    endHour: scheduled.length ? scheduled[scheduled.length - 1].endHour : startHour + answers.duration,
    routeName: routeNameFor(answers, scheduled),
    backup: backupFor(answers, scheduled, day),
  };
}

function chooseRoute(scored, answers, day, startHour, stopCount) {
  const chosen = [];
  const candidates = scored.map((item) => item);
  const preferredLeg = answers.walkLimit;
  const softLeg = answers.walkLimit === 600 ? 900 : answers.walkLimit === 1000 ? 1700 : 2400;
  const first = candidates
    .map((item) => {
      const nearby = candidates.filter((other) => other.venue !== item.venue && walkingMeters(item.venue, other.venue) <= softLeg).length;
      return {
        ...item,
        routeScore: item.score + nearby * 1.6 + (isOpenAt(item.venue, day, startHour) ? 3 : 0),
      };
    })
    .sort((a, b) => b.routeScore - a.routeScore)[0]?.venue;

  if (first) chosen.push(first);

  while (chosen.length < stopCount && chosen.length < candidates.length) {
    const previous = chosen[chosen.length - 1];
    const next = candidates
      .filter((item) => !chosen.includes(item.venue))
      .map((item) => ({
        venue: item.venue,
        baseScore: item.score,
        distance: previous ? walkingMeters(previous, item.venue) : 0,
        variety: tagOverlap(chosen, item.venue) > 1 ? -3 : 2,
      }))
      .sort((a, b) => {
        const aPenalty = a.distance > softLeg ? 18 : a.distance > preferredLeg ? 5 : 0;
        const bPenalty = b.distance > softLeg ? 18 : b.distance > preferredLeg ? 5 : 0;
        const aScore = a.baseScore + a.variety - a.distance / 260 - aPenalty;
        const bScore = b.baseScore + b.variety - b.distance / 260 - bPenalty;
        return bScore - aScore;
      })[0];

    if (!next) break;
    chosen.push(next.venue);
  }

  if (chosen.length < Math.min(3, stopCount)) {
    candidates.forEach((item) => {
      if (chosen.length < Math.min(3, stopCount) && !chosen.includes(item.venue)) chosen.push(item.venue);
    });
  }

  return chosen;
}

function scheduleRoute(route, answers, stopLength, travelPad, day, startHour) {
  let current = startHour;
  return route.map((venue, index) => {
    if (index > 0) {
      const meters = walkingMeters(route[index - 1], venue);
      current += Math.max(8, Math.round((meters / 78 + travelPad) / 5) * 5) / 60;
    }

    const adjustedStart = nextOpenTime(venue, day, current);
    const start = adjustedStart ?? current;
    const end = start + stopLength / 60;
    current = end;

    return {
      venue,
      startHour: start,
      endHour: end,
      isOpen: isOpenAt(venue, day, start),
      closesSoon: closesWithin(venue, day, start, stopLength / 60 + 0.15),
    };
  });
}

function renderPlan(plan, answers) {
  emptyState.hidden = true;
  results.hidden = false;

  const routeUrl = buildDirectionsUrl(plan.stops.map((stop) => stop.venue));
  const vibeLine = makeVibeLine(answers, plan);
  const warnings = plan.stops
    .filter((stop) => stop.closesSoon || shouldWarn(stop.venue, answers))
    .map((stop) => warningFor(stop, answers))
    .filter(Boolean);

  results.innerHTML = `
    <article class="route-hero">
      <div>
        <p class="eyebrow">${escapeHtml(plan.routeName)}</p>
        <h2>${escapeHtml(vibeLine.title)}</h2>
        <p>${escapeHtml(vibeLine.copy)}</p>
        <div class="route-stats" aria-label="Route stats">
          <div class="stat"><b>${plan.stopCount}</b><span>Stops</span></div>
          <div class="stat"><b>${formatDistance(plan.totalWalk)}</b><span>Walk total</span></div>
          <div class="stat"><b>${formatHour(plan.endHour)}</b><span>Wrap time</span></div>
        </div>
      </div>
      <img src="${fallbackImage}" alt="Cocktails on a bar counter" />
    </article>

    <div class="summary-row">
      <div class="pill-list">
        ${answers.vibes.slice(0, 4).map((vibe) => `<span class="pill">${labelFor(vibe)}</span>`).join("")}
        <span class="pill">${labelFor(answers.pace)} pace</span>
        <span class="pill">${answers.groupSize} ${answers.groupSize === 1 ? "person" : "people"}</span>
      </div>
      <a class="secondary-action" href="${routeUrl}" target="_blank" rel="noreferrer">Open route</a>
    </div>

    <div class="venue-list">
      ${plan.stops.map((stop, index) => renderStop(stop, index, plan.stops[index - 1], answers)).join("")}
    </div>

    <article class="backup-box">
      <p class="eyebrow">Plan B</p>
      <h3>${escapeHtml(plan.backup.title)}</h3>
      <p>${escapeHtml(plan.backup.copy)}</p>
      ${warnings.length ? `<div class="warning">${escapeHtml(warnings.join(" "))}</div>` : ""}
    </article>
  `;

  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderStop(stop, index, previousStop, answers) {
  const venue = stop.venue;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`;
  const leg = previousStop ? renderLeg(previousStop.venue, venue) : "";
  const warning = warningFor(stop, answers);

  return `
    ${leg}
    <article class="venue-card">
      <div class="time-badge">
        <div>${formatHour(stop.startHour)}<span>${index + 1}</span></div>
      </div>
      <div class="venue-main">
        <div class="venue-top">
          <h3>${escapeHtml(venue.name)}</h3>
          <a class="venue-link" href="${venue.source.url}" target="_blank" rel="noreferrer">Check venue</a>
        </div>
        <p>${escapeHtml(venue.vibe)}</p>
        <p><strong>${escapeHtml(venue.bestFor)}</strong></p>
        <div class="venue-meta">
          <span class="meta">${escapeHtml(venue.area)}</span>
          <span class="meta">${labelFor(venue.price)}</span>
          <span class="meta">${formatHour(stop.startHour)}-${formatHour(stop.endHour)}</span>
          <a class="meta" href="${mapsUrl}" target="_blank" rel="noreferrer">Map</a>
        </div>
        ${warning ? `<div class="warning">${escapeHtml(warning)}</div>` : ""}
      </div>
    </article>
  `;
}

function renderLeg(from, to) {
  const meters = walkingMeters(from, to);
  const minutes = Math.max(4, Math.round(meters / 78));
  return `
    <div class="leg" aria-label="Walk to next venue">
      <div class="leg-line"></div>
      <div>${minutes} min walk, about ${formatDistance(meters)}</div>
    </div>
  `;
}

function renderSourceLinks() {
  const uniqueSources = Array.from(new Map(venues.map((venue) => [venue.source.label, venue.source])).values());
  sourceLinks.innerHTML = uniqueSources
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");
}

function warningFor(stop, answers) {
  const venue = stop.venue;
  if (!stop.isOpen) return `${venue.name} may not be open at this time. Check before you commit.`;
  if (stop.closesSoon) return `${venue.name} closes close to this slot, so treat it as a quick round.`;
  if (answers.reservations && venue.needsBooking && answers.groupSize > 4) {
    return `${venue.name} is better with a booking or smaller group.`;
  }
  if (answers.reservations && venue.smallGroup && answers.groupSize > 4) {
    return `${venue.name} is intimate. Keep it as an optional stop for this group size.`;
  }
  return "";
}

function shouldWarn(venue, answers) {
  return answers.reservations && ((venue.needsBooking && answers.groupSize > 4) || (venue.smallGroup && answers.groupSize > 4));
}

function backupFor(answers, stops, day) {
  const backup = venues.find((venue) => !stops.some((stop) => stop.venue === venue) && closesAfter(venue, day, 25));
  if (backup) {
    return {
      title: `${backup.name} is your safety valve`,
      copy: `${backup.vibe} Save it if a queue, rain, or group wobble changes the route. ${backup.note}`,
    };
  }
  return {
    title: "Keep one short hop in reserve",
    copy: "Amsterdam nights are compact. If the group loses steam, skip the furthest stop and end where the room feels best.",
  };
}

function makeVibeLine(answers, plan) {
  const starts = `${formatHour(timeToHour(answers.startTime))} start`;
  const hasMusic = answers.vibes.includes("live-music");
  const hasBeer = answers.vibes.includes("craft-beer");
  const hasCocktails = answers.vibes.includes("cocktails");

  if (hasMusic) {
    return {
      title: "Conversation first, music late.",
      copy: `A ${starts}, measured walking, and a finish that can get louder without forcing the whole night to shout.`,
    };
  }

  if (hasBeer && hasCocktails) {
    return {
      title: "Beer to begin, cocktails to sharpen the edges.",
      copy: `This route keeps the early rounds relaxed, then moves toward tighter rooms and better late-night drinks.`,
    };
  }

  if (hasCocktails) {
    return {
      title: "A cocktail crawl with room to breathe.",
      copy: `Expect polished drinks, short transfers, and enough variety that the night does not become four versions of the same Negroni.`,
    };
  }

  return {
    title: "A friendly Amsterdam crawl without overthinking it.",
    copy: `The route favors open venues, sensible walking, and stops that can handle a group of ${answers.groupSize}.`,
  };
}

function routeNameFor(answers, stops) {
  const area = answers.area === "any" ? dominantArea(stops) : answers.area;
  const mood = {
    friends: "Friends' route",
    date: "Date-night route",
    work: "Work-crew route",
    visitors: "Visitors' route",
  }[answers.groupMood];
  return `${mood} through ${area}`;
}

function dominantArea(stops) {
  const counts = stops.reduce((map, stop) => {
    map[stop.venue.area] = (map[stop.venue.area] || 0) + 1;
    return map;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Amsterdam";
}

function tagOverlap(chosen, venue) {
  const used = new Set(chosen.flatMap((item) => item.tags));
  return venue.tags.filter((tag) => used.has(tag)).length;
}

function openScoreForVenue(venue, day, startHour, duration) {
  if (isOpenAt(venue, day, startHour)) return 8;
  if (nextOpenTime(venue, day, startHour) && nextOpenTime(venue, day, startHour) <= startHour + duration) return 2;
  return -12;
}

function isOpenAt(venue, day, hour) {
  return (venue.hours[day] || []).some(([open, close]) => hour >= open && hour < close);
}

function nextOpenTime(venue, day, hour) {
  const range = (venue.hours[day] || []).find(([open, close]) => hour <= close && (hour >= open || open - hour <= 1.5));
  if (!range) return null;
  return Math.max(hour, range[0]);
}

function closesWithin(venue, day, hour, span) {
  const range = (venue.hours[day] || []).find(([open, close]) => hour >= open && hour < close);
  return range ? hour + span > range[1] : true;
}

function closesAfter(venue, day, hour) {
  return (venue.hours[day] || []).some(([, close]) => close >= hour);
}

function walkingMeters(a, b) {
  const km = haversineKm(a.lat, a.lng, b.lat, b.lng);
  return Math.round(km * 1240);
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function buildDirectionsUrl(route) {
  if (route.length < 2) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(route[0]?.address || "Amsterdam bars")}`;
  }
  const origin = route[0].address;
  const destination = route[route.length - 1].address;
  const waypoints = route.slice(1, -1).map((venue) => venue.address).join("|");
  const params = new URLSearchParams({
    api: "1",
    travelmode: "walking",
    origin,
    destination,
  });
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function getAmsterdamDay(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.getDay();
}

function todayValue() {
  const today = new Date();
  const offset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - offset).toISOString().slice(0, 10);
}

function timeToHour(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours + minutes / 60;
}

function formatHour(hour) {
  const normalized = ((hour % 24) + 24) % 24;
  let hours = Math.floor(normalized);
  let minutes = Math.round((normalized - hours) * 60);
  if (minutes === 60) {
    hours = (hours + 1) % 24;
    minutes = 0;
  }
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function formatDistance(meters) {
  if (meters < 1000) return `${Math.round(meters / 10) * 10} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

function labelFor(value) {
  return {
    "craft-beer": "Craft beer",
    "live-music": "Live music",
    "late-night": "Late night",
    cocktails: "Cocktails",
    terrace: "Terrace",
    hidden: "Hidden gems",
    relaxed: "Relaxed",
    balanced: "Balanced",
    lively: "Lively",
    low: "Easy-going",
    medium: "Mixed budget",
    high: "Treat night",
  }[value] || value;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
