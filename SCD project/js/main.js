// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('nav-links--open');
        });

        // Close menu when a link is clicked (mobile)
        navLinks.addEventListener('click', function (event) {
            if (event.target.classList.contains('nav-link')) {
                navLinks.classList.remove('nav-links--open');
            }
        });
    }
});


// ====tour-detail.html (one place for all tours) ====

const tourData = {
    'skardu-escape': {
        title: 'Skardu Valley Escape – 5 Days',
        breadcrumbName: 'Skardu Valley Escape – 5 Days',
        destinationName: 'Skardu',
        location: 'Skardu, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Ideal for groups & families',
        price: 'Rs 12,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/skardu lake.jpg',
        mainImage: 'images/skardu lake.jpg',
        gallery: [
            'images/skardu lake.jpg',
            'images/skardu d.jpg',
            'images/skardu.jpg'
        ],
        overview:
            'Discover the beauty of Skardu Valley – crystal‑clear lakes, snow‑capped peaks and starry skies. ' +
            'This 5‑day package covers the main highlights with comfortable transport, handpicked hotels ' +
            'and experienced local guides.',
        highlights: [
            'Visit Shangrila (Lower Kachura) & Upper Kachura Lake',
            'Full‑day excursion to Deosai National Park (seasonal)',
            'Scenic viewpoints and photo stops along the Indus River',
            'Comfortable hotel stays with breakfast included'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival in Skardu & City Tour',
                text: 'Arrival in Skardu, hotel check‑in and short rest. ' +
                      'Afternoon visit to local viewpoints and Skardu Bazaar.'
            },
            {
                title: 'Day 2 – Shangrila & Upper Kachura Lake',
                text: 'Full‑day visit to Shangrila Resort and Upper Kachura Lake with time for boating, ' +
                      'short walks and photography.'
            },
            {
                title: 'Day 3–4 – Deosai & Free Day',
                text: 'Day trip to Deosai National Park (if open in season), followed by a flexible day for ' +
                      'optional activities or relaxation in Skardu.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Check‑out from hotel and transfer to Skardu Airport or onward travel.'
            }
        ],
        included: [
            'Transport from Skardu airport / bus stand to hotel and back',
            '4 nights hotel accommodation (twin sharing)',
            'Daily breakfast',
            'Local guide / tour coordinator',
            'All mentioned sightseeing as per itinerary'
        ],
        excluded: [
            'Flights or long‑distance transport to Skardu',
            'Lunches and dinners',
            'Entry tickets, boating or chairlift fees',
            'Personal expenses and tips',
            'Travel insurance'
        ],
        nextDeparture: '20 Jul 2025',
        minGroup: 'Min. 4 people'
    },

    'skardu-deosai': {
        title: 'Skardu & Deosai Adventure – 5 Days',
        breadcrumbName: 'Skardu & Deosai Adventure – 5 Days',
        destinationName: 'Skardu',
        location: 'Skardu, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Adventure‑focused small groups',
        price: 'Rs 15,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/skardu d.jpg',
        mainImage: 'images/skardu d.jpg',
        gallery: [
            'images/skardu d.jpg',
            'images/skardu lake.jpg',
            'images/skardu.jpg'
        ],
        overview:
            'Designed for adventure lovers who want to spend more time in Deosai National Park and remote ' +
            'valleys around Skardu, while still enjoying comfortable stays.',
        highlights: [
            'Extended time in Deosai National Park',
            'Visit Sheosar Lake (seasonal access)',
            'Village visits and local cultural experiences',
            'Comfortable jeeps for off‑road sections'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival & Skardu Highlights',
                text: 'Arrival, hotel check‑in and short exploration of Skardu town and viewpoints.'
            },
            {
                title: 'Day 2 – Shangrila & Upper Kachura',
                text: 'Visit iconic lakes and resort areas with plenty of photo stops.'
            },
            {
                title: 'Day 3–4 – Deosai Plains Adventure',
                text: 'Two days focused on Deosai Plains and surrounding areas (weather and road conditions ' +
                      'permitting), with picnic lunch and scenic stops.'
            },
            {
                title: 'Day 5 – Departure from Skardu',
                text: 'Final breakfast, free time and transfer for departure.'
            }
        ],
        included: [
            '4 nights hotel stay',
            'Transport for all listed sightseeing',
            'Daily breakfast',
            'Jeep for Deosai excursion',
            'Local guide / coordinator'
        ],
        excluded: [
            'Flights to/from Skardu',
            'Lunches, dinners and personal snacks',
            'Entry tickets and optional activities',
            'Travel insurance and personal expenses'
        ],
        nextDeparture: '05 Aug 2025',
        minGroup: 'Min. 6 people'
    },

    // Naran tours
    'naran-alpine': {
        title: 'Naran Alpine Adventure – 5 Days',
        breadcrumbName: 'Naran Alpine Adventure – 5 Days',
        destinationName: 'Naran',
        location: 'Naran & Kaghan Valley, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Suitable for families & friends',
        price: 'Rs 10,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/naran lake.jpg',
        mainImage: 'images/naran lake.jpg',
        gallery: [
            'images/naran lake.jpg',
            'images/Narann.jpg',
            'images/naran lake.jpg'
        ],
        overview:
            'Explore the best of Naran & Kaghan Valley including Saif‑ul‑Malook, Lulusar Lake and Babusar Top ' +
            'with comfortable transport and time to relax by the river.',
        highlights: [
            'Boat ride at Saif‑ul‑Malook (weather permitting)',
            'Drive to Lulusar Lake & Babusar Top',
            'Evening walks and tea at riverside hotels',
            'Flexible pace suitable for families'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival in Naran',
                text: 'Travel to Naran, hotel check‑in and evening stroll along the river or bazaar.'
            },
            {
                title: 'Day 2 – Saif‑ul‑Malook Lake',
                text: 'Jeep ride to Saif‑ul‑Malook, free time for boating and photography.'
            },
            {
                title: 'Day 3 – Lulusar Lake & Babusar Top',
                text: 'Full‑day excursion through Kaghan Valley to high mountain passes and lakes.'
            },
            {
                title: 'Day 4 – Free Day for Short Hikes',
                text: 'Optional short hikes or simply relax at the hotel and enjoy the scenery.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Check‑out and travel back towards Islamabad / Lahore or next destination.'
            }
        ],
        included: [
            'Return transport from Islamabad / Abbottabad (depending on package)',
            '4 nights hotel accommodation',
            'Breakfast daily',
            'Local guidance and basic coordination'
        ],
        excluded: [
            'Lunches, dinners and snacks',
            'Jeep charges for Saif‑ul‑Malook & other side trips',
            'Entry tickets and boating fees',
            'Personal expenses and insurance'
        ],
        nextDeparture: '10 Jul 2025',
        minGroup: 'Min. 4 people'
    },

    'naran-lakes': {
        title: 'Naran Lakes & Meadows – 5 Days',
        breadcrumbName: 'Naran Lakes & Meadows – 5 Days',
        destinationName: 'Naran',
        location: 'Naran & Kaghan Valley, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Nature & photography focused',
        price: 'Rs 13,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/Narann.jpg',
        mainImage: 'images/Narann.jpg',
        gallery: [
            'images/Narann.jpg',
            'images/naran lake.jpg',
            'images/Narann.jpg'
        ],
        overview:
            'A relaxed itinerary focusing on alpine lakes and green meadows around Naran, ' +
            'with more time for photography and easy walks.',
        highlights: [
            'Saif‑ul‑Malook and nearby meadows',
            'Picnic by rivers and streams',
            'Golden hour photography at viewpoints',
            'Gentle pace with flexible free time'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival & Evening Walk',
                text: 'Arrival in Naran, check‑in, and an easy walk to enjoy the valley atmosphere.'
            },
            {
                title: 'Day 2 – Saif‑ul‑Malook & Surroundings',
                text: 'Visit Saif‑ul‑Malook and nearby points with ample time for photos.'
            },
            {
                title: 'Day 3 – Lakes & Meadows Day Trip',
                text: 'Discover less crowded spots and viewpoints in the valley.'
            },
            {
                title: 'Day 4 – Free Day',
                text: 'Use this day for your favourite spots, shopping, or rest.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Return journey after breakfast.'
            }
        ],
        included: [
            'Transport within Naran Valley',
            '4 nights hotel (twin sharing)',
            'Daily breakfast',
            'Basic guiding'
        ],
        excluded: [
            'Transport to/from Naran from your city',
            'Lunches, dinners & personal expenses',
            'Entry tickets and optional activities',
            'Insurance and any extra excursions'
        ],
        nextDeparture: '22 Aug 2025',
        minGroup: 'Min. 4 people'
    },

    // Lahore tours
    'lahore-heritage': {
        title: 'Lahore Heritage & Food Tour – 5 Days',
        breadcrumbName: 'Lahore Heritage & Food Tour – 5 Days',
        destinationName: 'Lahore',
        location: 'Lahore, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Culture & food lovers',
        price: 'Rs 8,000',
        priceNote: 'per person · 5 Days (excluding meals)',
        heroImage: 'images/lahore.jpg',
        mainImage: 'images/lahore.jpg',
        gallery: [
            'images/lahore.jpg',
            'images/oldlahore.jpg',
            'images/lahore.jpg'
        ],
        overview:
            'Experience Lahore’s Mughal architecture, colourful bazaars and legendary street food ' +
            'with guided visits and curated tastings.',
        highlights: [
            'Badshahi Mosque & Lahore Fort',
            'Walled City & Shahi Hammam',
            'Food Street and famous local eateries',
            'Time for shopping in traditional bazaars'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival & Evening Food Street',
                text: 'Arrival in Lahore, hotel check‑in and evening visit to a popular food street.'
            },
            {
                title: 'Day 2 – Lahore Fort & Old City',
                text: 'Guided tour of Lahore Fort, Badshahi Mosque and surrounding heritage sites.'
            },
            {
                title: 'Day 3 – Museums & Modern Lahore',
                text: 'Visit key museums or parks and explore modern areas like Liberty / Gulberg.'
            },
            {
                title: 'Day 4 – Shopping & Local Experiences',
                text: 'Free time for markets and optional activities such as Wagah Border ceremony.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Free time before transfer for onward travel.'
            }
        ],
        included: [
            '4 nights hotel stay in Lahore',
            'Daily breakfast',
            'Guided heritage walk in Old City',
            'Transport for major sightseeing'
        ],
        excluded: [
            'Inter‑city transport to/from Lahore',
            'Lunches, dinners & snacks',
            'Entry tickets to monuments and museums',
            'Personal shopping and expenses'
        ],
        nextDeparture: '01 Sep 2025',
        minGroup: 'Min. 4 people'
    },

    'lahore-culture': {
        title: 'Lahore Culture & Shopping Escape – 5 Days',
        breadcrumbName: 'Lahore Culture & Shopping Escape – 5 Days',
        destinationName: 'Lahore',
        location: 'Lahore, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Friends & couples',
        price: 'Rs 9,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/oldlahore.jpg',
        mainImage: 'images/oldlahore.jpg',
        gallery: [
            'images/oldlahore.jpg',
            'images/lahore.jpg',
            'images/oldlahore.jpg'
        ],
        overview:
            'A relaxed Lahore program that mixes light heritage visits with plenty of time ' +
            'for shopping and café‑hopping in the city.',
        highlights: [
            'Short heritage tour of key Mughal sites',
            'Plenty of shopping time in Anarkali & other markets',
            'Modern cafes and food courts',
            'Flexible daily schedule'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival & Night Drive',
                text: 'Arrive in Lahore, check‑in and optional night drive through key city spots.'
            },
            {
                title: 'Day 2 – Short Heritage Highlights',
                text: 'Visit 2–3 main monuments and then head to markets for shopping.'
            },
            {
                title: 'Day 3–4 – Shopping & Free Time',
                text: 'Flexible days to explore malls, local shops and cafés at your own pace.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Check‑out and transfer for onward travel.'
            }
        ],
        included: [
            '4 nights hotel in central Lahore',
            'Daily breakfast',
            'Short guided tour on one day',
            'Transport for planned sightseeing'
        ],
        excluded: [
            'All shopping costs',
            'Most lunches & dinners',
            'Any additional transfers requested by guests',
            'Personal expenses & insurance'
        ],
        nextDeparture: '15 Sep 2025',
        minGroup: 'Min. 4 people'
    },

    // Bahawalpur tours
    'bahawalpur-palaces': {
        title: 'Bahawalpur Palaces & Forts – 5 Days',
        breadcrumbName: 'Bahawalpur Palaces & Forts – 5 Days',
        destinationName: 'Bahawalpur',
        location: 'Bahawalpur & Cholistan Desert, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Culture & history lovers',
        price: 'Rs 11,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/Bahawalpur palace.jpg',
        mainImage: 'images/Bahawalpur palace.jpg',
        gallery: [
            'images/Bahawalpur palace.jpg',
            'images/Bahawalpur.jpg',
            'images/Bahawalpur palace.jpg'
        ],
        overview:
            'Discover the royal heritage of Bahawalpur with visits to Noor Mahal, Darbar Mahal ' +
            'and nearby forts, plus a taste of the Cholistan Desert.',
        highlights: [
            'Guided visits to Noor Mahal & Darbar Mahal',
            'Day trip to Derawar Fort',
            'Short desert experience near Cholistan',
            'Local food and cultural insights'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival & City Orientation',
                text: 'Arrive in Bahawalpur, check‑in and short orientation drive in the city.'
            },
            {
                title: 'Day 2 – Palaces Tour',
                text: 'Visit Noor Mahal, Darbar Mahal and surrounding gardens.'
            },
            {
                title: 'Day 3 – Derawar Fort Excursion',
                text: 'Full‑day trip to Derawar Fort, photo stops and desert views.'
            },
            {
                title: 'Day 4 – Free Day / Local Markets',
                text: 'Option to revisit favourite places or explore markets.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Check‑out and onward travel.'
            }
        ],
        included: [
            '4 nights hotel accommodation',
            'Daily breakfast',
            'Transport for palaces & Derawar Fort',
            'Local guide / coordinator'
        ],
        excluded: [
            'Inter‑city transport to Bahawalpur',
            'Lunches, dinners & snacks',
            'Entry tickets to palaces and forts',
            'Personal expenses and insurance'
        ],
        nextDeparture: '03 Oct 2025',
        minGroup: 'Min. 6 people'
    },

    'bahawalpur-desert': {
        title: 'Cholistan Desert Camping – 5 Days',
        breadcrumbName: 'Cholistan Desert Camping – 5 Days',
        destinationName: 'Bahawalpur',
        location: 'Bahawalpur & Cholistan Desert, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Adventure & camping',
        price: 'Rs 12,500',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/Bahawalpur.jpg',
        mainImage: 'images/Bahawalpur.jpg',
        gallery: [
            'images/Bahawalpur.jpg',
            'images/Bahawalpur palace.jpg',
            'images/Bahawalpur.jpg'
        ],
        overview:
            'Spend more time inside the Cholistan Desert with overnight camping, local music ' +
            'and starry skies, while still visiting the main forts.',
        highlights: [
            'Overnight desert camping',
            'Traditional music & bonfire (subject to conditions)',
            'Derawar Fort visit',
            'Local desert village experience'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrive in Bahawalpur',
                text: 'City orientation and preparation for your desert adventure.'
            },
            {
                title: 'Day 2 – Palaces & Heritage',
                text: 'Visit key palaces and historical sites in Bahawalpur.'
            },
            {
                title: 'Day 3–4 – Cholistan Desert Camping',
                text: 'Travel to Cholistan, set up camp, enjoy local music and explore dune landscapes.'
            },
            {
                title: 'Day 5 – Return & Departure',
                text: 'Return to Bahawalpur, short rest and onward travel.'
            }
        ],
        included: [
            'Transport for desert and city tours',
            'Camping gear and basic camp setup',
            'Breakfast + simple meals in camp (as per plan)',
            'Local guide and support staff'
        ],
        excluded: [
            'Transport from your home city to Bahawalpur',
            'Personal sleeping bags (optional upgrade)',
            'Extra snacks, drinks and activities',
            'Insurance and personal expenses'
        ],
        nextDeparture: '18 Oct 2025',
        minGroup: 'Min. 8 people'
    },

    // Muree tours
    'muree-getaway': {
        title: 'Muree Hills Getaway – 5 Days',
        breadcrumbName: 'Muree Hills Getaway – 5 Days',
        destinationName: 'Muree',
        location: 'Muree & surroundings, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Families & couples',
        price: 'Rs 9,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/Murree.jpg',
        mainImage: 'images/Murree.jpg',
        gallery: [
            'images/Murree.jpg',
            'images/mu.jpg',
            'images/Murree.jpg'
        ],
        overview:
            'Classic hill‑station escape including Mall Road, Patriata and main viewpoints with enough ' +
            'free time to relax in the cool climate.',
        highlights: [
            'Evening walks on Mall Road',
            'Chairlift / cable car at Patriata (ticket not included)',
            'Viewpoints and short forest walks',
            'Mild itinerary suitable for all ages'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival & Evening Walk',
                text: 'Arrive in Muree, check‑in and explore Mall Road in the evening.'
            },
            {
                title: 'Day 2 – Patriata (New Murree)',
                text: 'Day trip to Patriata with optional chairlift and cable car rides.'
            },
            {
                title: 'Day 3–4 – Viewpoints & Free Time',
                text: 'Short drives to viewpoints and time for rest or self‑exploration.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Check‑out and return journey.'
            }
        ],
        included: [
            '4 nights hotel in Muree',
            'Daily breakfast',
            'Local transport for planned sightseeing'
        ],
        excluded: [
            'Transport from your city to Muree',
            'Chairlift / cable car tickets',
            'Lunches, dinners & personal expenses',
            'Insurance'
        ],
        nextDeparture: '10 Jun 2025',
        minGroup: 'Min. 4 people'
    },

    'muree-ayubia': {
        title: 'Muree & Ayubia Nature Escape – 5 Days',
        breadcrumbName: 'Muree & Ayubia Nature Escape – 5 Days',
        destinationName: 'Muree',
        location: 'Muree, Ayubia & Nathia Gali, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Nature & light hiking',
        price: 'Rs 9,500',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/mu.jpg',
        mainImage: 'images/mu.jpg',
        gallery: [
            'images/mu.jpg',
            'images/Murree.jpg',
            'images/mu.jpg'
        ],
        overview:
            'Combine Muree with Ayubia and Nathia Gali for refreshing forest walks, viewpoints ' +
            'and cooler temperatures.',
        highlights: [
            'Trips to Ayubia and Nathia Gali',
            'Optional chairlift rides',
            'Pine forests and short walking trails',
            'Plenty of scenic photo spots'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival in Muree',
                text: 'Check‑in and evening free time.'
            },
            {
                title: 'Day 2 – Ayubia & Chairlift',
                text: 'Visit Ayubia, optional chairlift ride and forest walks.'
            },
            {
                title: 'Day 3 – Nathia Gali',
                text: 'Trip to Nathia Gali for further walks and viewpoints.'
            },
            {
                title: 'Day 4 – Free Day',
                text: 'Relax in Muree or revisit favourite spots.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Return journey after breakfast.'
            }
        ],
        included: [
            'Hotel in Muree or shared nights between locations',
            'Daily breakfast',
            'Transport for Ayubia & Nathia Gali excursions'
        ],
        excluded: [
            'Inter‑city transport to Muree',
            'Entry tickets and chairlift fees',
            'Meals other than breakfast',
            'Personal expenses & insurance'
        ],
        nextDeparture: '01 Jul 2025',
        minGroup: 'Min. 4 people'
    },

    // Ziarat tours
    'ziarat-retreat': {
        title: 'Ziarat Nature Retreat – 5 Days',
        breadcrumbName: 'Ziarat Nature Retreat – 5 Days',
        destinationName: 'Ziarat',
        location: 'Ziarat, Balochistan, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Nature & relaxation',
        price: 'Rs 10,000',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/ziarat mountain.jpg',
        mainImage: 'images/ziarat mountain.jpg',
        gallery: [
            'images/ziarat mountain.jpg',
            'images/ziarat building.jpg',
            'images/ziarat mountain.jpg'
        ],
        overview:
            'Peaceful retreat in Ziarat, surrounded by ancient juniper forests, cool air and ' +
            'simple mountain life – perfect for a slow holiday.',
        highlights: [
            'Walks in the juniper forest',
            'Visit to Quaid‑e‑Azam Residency (Ziarat Residency)',
            'Evenings with bonfire (weather permitting)',
            'Relaxed pace and simple mountain environment'
        ],
        itinerary: [
            {
                title: 'Day 1 – Arrival in Ziarat',
                text: 'Travel to Ziarat, check‑in and evening walk around town.'
            },
            {
                title: 'Day 2–3 – Forest & Local Sights',
                text: 'Gentle walks in the juniper forest and visit to local attractions.'
            },
            {
                title: 'Day 4 – Free Day',
                text: 'Relaxation, optional short hikes or village visits.'
            },
            {
                title: 'Day 5 – Departure',
                text: 'Check‑out and drive back towards Quetta or your next destination.'
            }
        ],
        included: [
            '4 nights guest house / hotel stay',
            'Breakfast each morning',
            'Local guidance for forest walks'
        ],
        excluded: [
            'Transport to/from Ziarat (from Quetta or other cities)',
            'Lunches, dinners & snacks',
            'Entry tickets where applicable',
            'Insurance and personal expenses'
        ],
        nextDeparture: '12 Sep 2025',
        minGroup: 'Min. 4 people'
    },

    'ziarat-quetta': {
        title: 'Ziarat Forest & Quetta Highlights – 5 Days',
        breadcrumbName: 'Ziarat Forest & Quetta Highlights – 5 Days',
        destinationName: 'Ziarat & Quetta',
        location: 'Ziarat & Quetta, Balochistan, Pakistan',
        duration: '5 Days / 4 Nights',
        shortDuration: '5D',
        groupInfo: 'Mixed nature & city',
        price: 'Rs 11,500',
        priceNote: 'per person · 5 Days',
        heroImage: 'images/ziarat building.jpg',
        mainImage: 'images/ziarat building.jpg',
        gallery: [
            'images/ziarat building.jpg',
            'images/ziarat mountain.jpg',
            'images/ziarat building.jpg'
        ],
        overview:
            'Spend peaceful days in the juniper forests of Ziarat and add a short visit to Quetta ' +
            'for markets and local sights.',
        highlights: [
            'Juniper forest walks',
            'Visit to Ziarat Residency',
            'Short city tour of Quetta',
            'Time for local shopping and food'
        ],
        itinerary: [
            {
                title: 'Day 1–3 – Ziarat Stay',
                text: 'Arrive in Ziarat, enjoy forest walks, local sightseeing and fresh air.'
            },
            {
                title: 'Day 4 – Drive to Quetta & City Tour',
                text: 'Travel to Quetta, explore key markets and viewpoints.'
            },
            {
                title: 'Day 5 – Departure from Quetta',
                text: 'Free time and onward travel.'
            }
        ],
        included: [
            'Accommodation in Ziarat and 1 night in Quetta',
            'Breakfast daily',
            'Transport between Ziarat and Quetta',
            'Basic city tour in Quetta'
        ],
        excluded: [
            'Transport from your home city to Quetta',
            'Lunches, dinners & personal expenses',
            'Tickets for any optional attractions',
            'Insurance'
        ],
        nextDeparture: '25 Sep 2025',
        minGroup: 'Min. 4 people'
    }
};


// ==== MAIN SCRIPT ====

document.addEventListener('DOMContentLoaded', function () {
    // Mobile nav toggle (same for all pages)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('nav-links--open');
        });

        navLinks.addEventListener('click', function (event) {
            if (event.target.classList.contains('nav-link')) {
                navLinks.classList.remove('nav-links--open');
            }
        });
    }

    // Only run tour-detail logic on tour-detail.html
    if (!document.body.classList.contains('tour-detail-page')) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const tourId = params.get('tour') || 'skardu-escape';
    const tour = tourData[tourId] || tourData['skardu-escape'];

    // --- Fill hero ---
    const heroEl = document.querySelector('.tour-detail-hero');
    if (heroEl && tour.heroImage) {
        heroEl.style.backgroundImage =
            `linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(15, 118, 110, 0.7)), url("${tour.heroImage}")`;
    }

    const titleEl = document.getElementById('tour-title');
    const breadcrumbEl = document.getElementById('tour-breadcrumb-name');
    const locEl = document.getElementById('tour-location');
    const durEl = document.getElementById('tour-duration');
    const groupEl = document.getElementById('tour-group-info');
    const priceMetaEl = document.getElementById('tour-price-meta');

    if (titleEl) titleEl.textContent = tour.title;
    if (breadcrumbEl) breadcrumbEl.textContent = tour.breadcrumbName || tour.title;

    if (locEl) {
        locEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${tour.location}`;
    }
    if (durEl) {
        durEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${tour.duration}`;
    }
    if (groupEl) {
        groupEl.innerHTML = `<i class="fa-solid fa-users"></i> ${tour.groupInfo}`;
    }
    if (priceMetaEl) {
        priceMetaEl.innerHTML = `<i class="fa-solid fa-bolt"></i> From ${tour.price}`;
    }

    // Also update page <title>
    document.title = `${tour.title} | Global Pathways Travel`;

    // --- Gallery ---
    const mainImg = document.getElementById('tour-main-image');
    const thumb1 = document.getElementById('tour-thumb-1');
    const thumb2 = document.getElementById('tour-thumb-2');
    const thumb3 = document.getElementById('tour-thumb-3');

    if (mainImg) {
        mainImg.src = tour.mainImage || tour.heroImage;
        mainImg.alt = tour.title;
    }
    const gallery = tour.gallery || [];
    if (thumb1 && gallery[0]) thumb1.src = gallery[0];
    if (thumb2 && gallery[1]) thumb2.src = gallery[1];
    if (thumb3 && gallery[2]) thumb3.src = gallery[2];

    // --- Overview & highlights ---
    const overviewEl = document.getElementById('tour-overview');
    if (overviewEl) overviewEl.textContent = tour.overview;

    const highlightsEl = document.getElementById('tour-highlights-list');
    if (highlightsEl) {
        highlightsEl.innerHTML = '';
        (tour.highlights || []).forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            highlightsEl.appendChild(li);
        });
    }

    // --- Itinerary ---
    const itineraryEl = document.getElementById('tour-itinerary');
    if (itineraryEl) {
        itineraryEl.innerHTML = '';
        (tour.itinerary || []).forEach(day => {
            const block = document.createElement('div');
            block.className = 'day-block';
            block.innerHTML = `
                <h3 class="day-title">${day.title}</h3>
                <p class="day-text">${day.text}</p>
            `;
            itineraryEl.appendChild(block);
        });
    }

    // --- Included / Excluded ---
    const includedEl = document.getElementById('tour-included-list');
    if (includedEl) {
        includedEl.innerHTML = '';
        (tour.included || []).forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            includedEl.appendChild(li);
        });
    }

    const excludedEl = document.getElementById('tour-excluded-list');
    if (excludedEl) {
        excludedEl.innerHTML = '';
        (tour.excluded || []).forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            excludedEl.appendChild(li);
        });
    }

    // --- Booking sidebar ---
    const priceMainEl = document.getElementById('tour-price-main');
    const priceNoteEl = document.getElementById('tour-price-note');
    const nextDepEl = document.getElementById('tour-next-departure');
    const lengthShortEl = document.getElementById('tour-length-short');
    const minGroupEl = document.getElementById('tour-min-group');
    const bookingBtn = document.getElementById('tour-booking-button');

    if (priceMainEl) priceMainEl.textContent = tour.price;
    if (priceNoteEl) priceNoteEl.textContent = tour.priceNote || 'per person';
    if (nextDepEl) {
        nextDepEl.innerHTML = `<i class="fa-regular fa-calendar"></i> Next departure: ${tour.nextDeparture}`;
    }
    if (lengthShortEl) {
        lengthShortEl.innerHTML = `<i class="fa-solid fa-clock"></i> ${tour.duration}`;
    }
    if (minGroupEl) {
        minGroupEl.innerHTML = `<i class="fa-solid fa-users"></i> ${tour.minGroup}`;
    }
    if (bookingBtn) {
        const message = encodeURIComponent(
            `I want to book the "${tour.title}" tour. Please share details.`
        );
        bookingBtn.href = `https://wa.me/923431981245?text=${message}`;
    }
});