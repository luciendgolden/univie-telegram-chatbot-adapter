import {CategoryName} from "../interfaces/enums";
import {FaqCategories} from "../interfaces";

export const faqCategories: FaqCategories = {
    categories: [
        {
            name: CategoryName.HELP,
            description: "Тут ви можете отримати корисну інформацію про теми довідки 🎯",
            subCategory: [
                {
                    name: "🆘 Emergency",
                    questions: [
                        {
                            question: "Emergency services",
                            answer: "Emergency services throughout Europe: 112" +
                                "\nFire service: 122" +
                                "\nPolice: 133" +
                                "\nAmbulance: 144" +
                                "\nRound-the-clock pharmacy: +43 1455"
                        },
                        {
                            question: "Location in a shelter",
                            answer: "Emergency help for location in a shelter\n" +
                                "Federal Agency for Care and Support\n" +
                                "+43 1 2676 870 9460 \n" +
                                "https://www.bbu.gv.at/ukraine\n"
                        },
                        {
                            question: "Volunteer refugees hotline",
                            answer: "Volunteer hotline on general issues for refugees +43 800 220202"
                        },
                        {
                            question: "“Caritas” charity hotline",
                            answer: "“Caritas” charity hotline\n" +
                                "on entry, stay and accommodation questions: +4351776380\n"
                        },
                        {
                            question: "Centers for refugees",
                            answer: "State reception centers for refugees." +
                                "\nWe ask you now to apply to government agencies that provide shelter, medical, legal, psychological support and provide all the necessary things!"
                        },
                        {
                            question: "Embassy of Ukraine in Vienna",
                            answer: "Address: Naaffgasse 23, 1180 Vienna" +
                                "\nPhone: +43 1479 71 72" +
                                "\nEmergencies: +43 1 479717252" +
                                "\nhttps://austria.mfa.gov.ua/ (official site may not work due to cyber attacks)\n" +
                                "https://www.facebook.com/ukremb.at/\n"
                        },
                        {
                            question: "SOS\nI need urgent medical help",
                            answer: "Hot lines, contact info:\nhttps://helpforukraine.at/ekstrena-dopomoha"
                        },
                        {
                            question: "I need urgent psychological help",
                            answer: "Kriseninterventionszentrum Wien\nTel.: 01/4069595, Montag bis Freitag 10:00 bis 17:00 Uhr\nAmbulanz zur Bewältigung von akuten psychosozialen Krisen\nwww.kriseninterventionszentrum.at\n\nPsychosoziale Dienste Wien\nPsychiatrische Soforthilfe und mobiler Krisendienst, 24-h\nNotdienst: Tel.:01/31330\nPsychoSozialeInformation - Sozialpsychische Ambulanz\nTerminvereinbarung: Tel.: 01/400053060\n1030 Wien, Modecenterstraße 14-A-2\nwww.psdßwien.at\n\nAKH\nAmbulanz und Notfall: 01/4040035470\n1090 Wien, Währinger Gürtel 18-20\n24/7"
                        },
                        {
                            question: "I need medical help",
                            answer: "All displaced Ukrainians can get free medical help according to\nhttps://www.gesundheitskasse.at/cdscontent/?contentid=10007.884366&portal=oegkportal\n\nDisplaced persons dont need to get an e-card, only a social security number.\n\nFind doctor: https://www.docfinder.at/ look for Ärzt*innen für Allgemeinmedizin\n\n24/7 pharmacies: https://www.nachtapotheke.wien/\n\nPDF that I sent to Lilia"
                        },
                    ]
                },
                {
                    name: "🚄 Get to Austria",
                    questions: [
                        {
                            question: "Telegram groups/wesites for transportation",
                            answer: "Various groups for transportation:\n" +
                                "\n • Transport (Telegram group)\nhttps://t.me/+Vd-r0QaoV4c3MTY8\n" +
                                "\n • Request transport to Austria - Team Project 316 (form)\nhttps://airtable.com/shrDjoqyEP4FqDbMi\n" +
                                "\n • View transport offers - Team Project 316 (table)\n" +
                                "https://airtable.com/shrDHDOfIF8GJH6ZU\n" +
                                "\n • warhelp.eu - We will take you from the border (website)\n" +
                                "https://warhelp.eu/needs/\n" +
                                "\n • We help to leave (Telegram group) - The chart to support those who are leaving Ukraine right now and need help \n" +
                                "https://t.me/huiiivoiiine\n" +
                                "\n • Borders of Ukraine (Telegram group)\n" +
                                "https://t.me/+P5Toy99Os203YjVi\n" +
                                "\n • Monitoring queues at borders (table)\nhttps://docs.google.com/spreadsheets/d/e/2PACX-1vTmKNAxZn2cPpBqPHnRx9Hc_GPzfi7U92h05hkNuES6pA8l7IcbfdRELMkTbWGDF\n" +
                                "\n • Help on the Ukrainian-Hungarian Border (Telegram group)\n" +
                                "https://t.me/helpinhungary\n" +
                                "\n • To Vienna from Poland, Hungary, Slovakia (Telegram group)\n" +
                                "https://t.me/transferToVienna\n"
                        },
                        {
                            question: "Bus",
                            answer: "Carrier (transporter):  Flixbus" +
                                "\n" +
                                "\n Flixbus transports Ukrainians from the Polish border to Europe for free." +
                                "Ticket applications are accepted online or by e-mail." +
                                "\nhttps://www.autocentre.ua/news/flixbus-besplatno-perevozit-ukraintsev-ot-polskoj-granitsy-v-evropu-1390372.html"
                        },
                        {
                            question: "Railway",
                            answer: "🇦🇹 Austrian Railway - https://www.oebb.at/en/" +
                                "\nInformation for Ukrainians - https://www.oebb.at/de/neuigkeiten/ukraine-hilfe" +
                                "\n" +
                                "\n🇵🇱 Polish Railway - https://rozklad-pkp.pl/" +
                                "\n • Przemyśl (direct train at 10:40)\n" +
                                "Przemyśl Główny - Wien Hbf\n" +
                                "\n • Warsaw (direct train at 06:09, 14:20, 19:49)\n" +
                                " Warsaw Central - Wien Hbf \n" +
                                "\n• Katowice (direct train at 00:02, 04:55, 09:04, 14:54, 17:06)\n" +
                                "Katowice - Wien Hbf\n" +
                                "\n" +
                                "\n🇭🇺 Hungarian Railway - https://jegy.mav.hu/" +
                                "\n • Záhony (direct train at 04:05)" +
                                "\nZáhony - Wien Hauptbahnhof (Bécs)\n" +
                                "\n • Budapest (direct trains every hour from 05:40 to 20:40)" +
                                "\nBudapest-Keleti - Wien Hauptbahnhof (Bécs)\n" +
                                "\n" +
                                "\n🇸🇰 Slovak Railway https://www.zssk.sk/en/" +
                                "\n • Kosice (direct train at 07:11)\n" +
                                "Kosice - Wien Hbf\n"
                        },
                        {
                            question: "By car",
                            answer: "From March 18, 2022, cars with Ukrainian license plates are temporarily exempted from paying tolls for travel on Austrian highways and expressways (vignettes)." +
                                "\nSource:\nhttps://www.asfinag.at/ueber-uns/presse/pressemeldungen/unburokratische-hilfe-fur-fluchtende-aus-der-ukraine-keine-vignettenpflicht-fur-pkw-mit-ukrainischen-kennzeichen/"
                        },
                        {
                            question: "For drivers with a truck",
                            answer: "📣 To the attention of truck carriers:" +
                                "\nAustria 🇦🇹 has made it possible to transport humanitarian goods to Ukraine 🇺🇦 both bilaterally and in transit, without the use of permits and tolls on Austrian motorways and expressways." +
                                "❗️ To perform such transportation, it is necessary to fill in the application form, which can be accessed via the link, and send them to the e-mail address\n👉 ausnahmenahme@asfinag.at" +
                                "\n" +
                                "\n☝️ Note that the exemption from tolls for the carriage of humanitarian goods applies to all types of vehicles - from cars to trucks and buses." +
                                "\nSource:\nhttps://www.asfinag.at/maut-vignette/mautordnung/"
                        },
                    ]
                },
                {
                    name: "🏫 Reception centers",
                    questions: [
                        {
                            question: "Vienna",
                            answer: "Currently, 2 state reception centers for forcedly displaced people from Ukraine have been opened:" +
                                "\n1. Humanitarian Arrival Center \"Sport & Fun-Halle\"\n" +
                                "Engerthstraße 267/269, next to the U2 Stadion subway station\n" +
                                "Works around the clock every day.\n" +
                                "2. Data collection and consultation center\n" +
                                "Bruno-Kreisky-Platz 1, Austria Center Vienna, near the U1 Kaisermühlen subway\n" +
                                "Opening hours: Monday to Friday from 08:00 to 18:00 (Please note that visits are currently only possible by invitation" +
                                "The latest official information on the work of the centers is published on the website of the City of Vienna:\nhttps://start.wien.gv.at/ukraine/" +
                                "\n" +
                                "\n" +
                                "The following services are available at the Vienna Arrival Humanitarian Center:\n" +
                                "• First aid\n" +
                                "• Search for temporary housing\n" +
                                "• Medical and psychosocial care\n" +
                                "• Food and drink\n" +
                                "• Information on orientation in Vienna\n" +
                                "• Testing for coronavirus\n" +
                                "• The thorough questions are referred to the data collection and consultation center (Austria Center Vienna).\n" +
                                "\n" +
                                "\n" +
                                "The following services are provided at the data collection and consultation center:\n" +
                                "• Initial consultation, clarification of further needs and general consultation on social issues\n" +
                                "• Housing advice / housing assistance\n" +
                                "• Medical consultations and assistance\n" +
                                "• Psychological help\n" +
                                "• Legal advice on legal norms governing the status of foreigners\n" +
                                "• Possibilities of testing and vaccination\n" +
                                "\n" +
                                "\n" +
                                "How to get to Engerthstrasse from the main train station (Hauptbahnhof)?\n" +
                                "The Humanitarian Arrival Center can be reached by public transport (subway, bus, tram) or by car. Currently, displaced people from Ukraine can use all public transport in Vienna free of charge and without a ticket, it is enough to show a passport or another document.\n" +
                                "To get to the Humanitarian Arrival Center of Vienna by public transport from the main train station (Hauptbahnhof), take the U1 subway in the direction of Leopoldau, get to Praterstern station, change to the U2 subway in the direction of Aspernstraße or Seestadt and get to Stadion walk about 5 minutes.\n"
                        },
                        {
                            question: "Graz",
                            answer: "Humanitarian Arrival Center in Graz, Messehalle D at Messeplatz 1, 8010 Graz (open 24 hours a day)"
                        },
                        {
                            question: "Linz",
                            answer: "Humanitarian Arrival Center in Linz at Volkshaus Bindermichl Uhlandgasse 5, 4020 Linz"
                        },
                        {
                            question: "Salzburg",
                            answer: "Arrival center in Salzburg at Messezentrum, Halle 4, 5020 Salzburg\n" +
                                "https://www.salzburg.gv.at/gesellschaft_/Seiten/ankunftszentrum.aspx\n"
                        },
                    ]
                },
                {
                    name: "🎒 Humanitarian aid",
                    questions: [
                        {
                            question: "Ukrainian warehouse",
                            answer: "A variety of material assistance can be obtained at the Ukrainian warehouse.\n" +
                                "Address: Landstraßer Hauptstraße 137, 1030 Wien\n"
                        },
                        {
                            question: "Organizations",
                            answer: "You can also contact the relevant organizations:" +
                                "\nhttps://www.adra.at/" +
                                "\nhttps://nachbarschaftszentren.at/ukraine" +
                                "\nhttps://www.caritas-leo.at/unsere-hilfe/ausgabestellen" +
                                "\nhttps://www.thefeelgoodstore.at/"
                        },
                    ]
                },
                {
                    name: "🏠 Housing",
                    questions: [
                        {
                            question: "Volunteer initiatives",
                            answer: "\n• Homes for Ukraine\nhttps://homesforukraine.eu/uk/home-ukr/" +
                                "\n" +
                                "\n • Facebook group \"Housing for refugees from Ukraine\" (in Germany)\n" +
                                "https://www.facebook.com/groups/288084393475832/?ref=share" +
                                "\n" +
                                "\n • CEU4Ukraine Request for accommodation (contact form)\n" +
                                "https://forms.office.com/pages/responsepage.aspx?id=E1nE2VN24kuSC72wOGOBhF7F8TQ1-HVInQHqbTMuGE9UNjhaVklZMDFCREI5Nk0wMjBUQkdCMzZFVC4u" +
                                "\n" +
                                "\n • Request accommodation in Austria - Team Project 316 (form)\n" +
                                "https://airtable.com/shrKCFXhjS2T4UOPk" +
                                "\n" +
                                "\n• A place to stay in Austria - http://warhelp.eu/places/ (form)\n" +
                                "https://docs.google.com/forms/d/e/1FAIpQLSfyj2-ww7AJkR0PFOym1iRg6lXFqKqTrf435VwLAsR_8RI_wA/viewform" +
                                "\n" +
                                "\n • EU4UA\n" +
                                "https://ua.eu4ua.org/" +
                                "\n" +
                                "\n • Telegram group \"Ukrainians in Austria: (info channel) housing for refugees\"\n" +
                                "https://t.me/Shelter_in_Austria"
                        },
                        {
                            question: "Private offers",
                            answer: "\n • Website for housing search across Europe\n" +
                                "https://icanhelp.host/" +
                                "\n" +
                                "\n • Host4Ukraine (English)\n" +
                                "https://www.host4ukraine.com/"
                        },
                        {
                            question: "Hotel initiatives",
                            answer: "\n • Wombat’s Hostels Refugees from Ukraine: We Have Rooms For You!\n" +
                                "https://www.wombats-hostels.com/blog/refugees-ukraine-rooms-for-you?fbclid=IwAR2qEWK7_Zlh2hHmfmolyl7D_XA7B11r0MmV7AcOfJu0rIRSePEVhucSphU" +
                                "\n" +
                                "\n • ÖHV #HotellerieHilft - Hotel Industry Helps (German)\n" +
                                "https://www.oehv.at/ueber-uns/mitgliederverzeichnis/hotelleriehilft/\n" +
                                "https://www.hospitalitysupport.org/apply-now?type=guest"
                        },
                        {
                            question: "Human Rights Initiative CEU",
                            answer: "Human Rights Initiative CEU (added 05.03.22) \nhttps://www.instagram.com/hrsi.ceu/"
                        },
                        {
                            question: "Housing for refugees (groups/tables)",
                            answer: "\n • UA / Housing for refugees (WhatsApp group) \nhttps://chat.whatsapp.com/GUQA39fW5Md8InJUqz6IAR" +
                                "\n" +
                                "\n • Ukrainian Support - Housing (table) \nhttps://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358" +
                                "\n" +
                                "\n • Supporting 🇺🇦 friends - Accommodation (table) \nhttps://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358" +
                                "\n" +
                                "\n • BUDDY group for Ukrainians and fleeing third-country nationals last minute housing requests (Telegram group) \nhttps://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358" +
                                "\n" +
                                "\n • International Organization for Cultural Diversity (English) \nhttps://www.instagram.com/icdo.at/" +
                                "\n" +
                                "\n • Austrian initiative IMMO HILFT for the homeless" +
                                "\nhttps://immo-hilft.at/" +
                                "\nhttps://www.instagram.com/immo_hilft/?utm_medium=copy_link"
                        },
                        {
                            question: "Real estate",
                            answer: "\n • Willhaben Immobilien: https://www.willhaben.at/iad/immobilien" +
                                "\n" +
                                "\n • ImmoScout24: https://www.immobilienscout24.at/" +
                                "\n" +
                                "\n • Real estate section of the newspaper Der Standard: https://immobilien.derstandard.at/immobiliensuche/" +
                                "\n" +
                                "\n • Apartments in Vienna without commission: https://www.facebook.com/groups/2016076738427452" +
                                "\n" +
                                "\n • AirBnB: https://www.airbnb.com/"
                        },
                    ]
                },
                {
                    name: "🚍 Transport",
                    questions: [
                        {
                            question: "Travel for free",
                            answer: "• Austrian Railways (ÖBB) by 30 June \nSource: https://www.unsereoebb.at/en/artikel/2022/vertriebenen-helfen" +
                                "\n" +
                                "\n • Vienna public transport (Wiener Lienien - metro, buses, trams) until May 30 \nSource: https: //www.wienerlinien.at/unterst%C3%BCtzung-f%C3%BCr-menschen-die-aus-der- ukraine-gefl% C3% BCchtet-sind" +
                                "\n" +
                                "\n • Buses and trains of the Eastern Transport Association (VOR) \nSource: https://www.vor.at/aktuelles/news/ukraine-fluechtlinge-koennen-alle-verkehrsmittel-im-vor-gratis-nutzen" +
                                "\n" +
                                "\n • Cars with Ukrainian license plates are also exempt from tolls \nSource: https: //www.asfinag.at/ueber-uns/presse/pressemeldungen/unburokratische-hilfe-fur-fluchtende-aus-der-ukraine-keine-vignettenpflicht- fur-pkw-mit-ukrainischen-kennzeichen/"
                        },
                        {
                            question: "Trip planning",
                            answer: "\n • Wienmobil mobile application\nhttps://www.wienerlinien.at/wienmobil-app" +
                                "\n" +
                                "\n • Site \"From A to B\nhttps://app.wien.gv.at/covidtestanmeldung/" +
                                "\n" +
                                "\n • Scotty Railroad Service\nhttps://fahrplan.oebb.at/webapp/"
                        },
                    ]
                },
                {
                    name: "🩺 Health",
                    questions: [
                        {
                            question: "Apply to doctors",
                            answer: "❗ Austria allows you to apply to all doctors and medical institutions that deal with state insurance (in Vienna - WGKK) with a Ukrainian passport without additional documents.\n" +
                                "Official confirmation letter to doctors:\n" +
                                "220308_VPI_Krankenbehandlung_Fluechtlinge_Ukraine.pdf - https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c7da0cf-8349-4339-9963-23719ec04c32/220308_VPI_Krankenbehandlu"
                        },
                        {
                            question: "Hospitals",
                            answer: "You can get free medical care at the following facilities:" +
                                "\n • Lorenz Beler 24-Hour Ambulance:\nDonaueschingenstrasse 13, 1200 Vienna" +
                                "\n" +
                                "\n • Brothers of Mercy Hospital. They also accept here without health insurance or documents:\n Johannes-von-Gott-Platz 1, 1020 Vienna" +
                                "\n" +
                                "\n • Amber Med Medical Center: \nOberlaaer Straße 300/306, 1230 Vienna" +
                                "\n" +
                                "\n • Neunerhaus Hospital provides general medical care, dental and ophthalmic care without insurance: \nMargaretenstraße 166, 1050 Vienna"
                        },
                        {
                            question: "Ukrainian-speaking doctors",
                            answer: "Therapists" +
                                "\n • Dr. Sonja Dolezal: \nhttps://www.praxisplan.at/2985529128/1084/Sonja-Dolezal/1" +
                                "\n" +
                                "\n • Dr. Taissia Rusnak: \nhttps://www.praxisplan.at/7121852254/1084/Taissia-Rusnak/1" +
                                "\n" +
                                "\n • Dr. Oleh Korsh: \nhttps://www.praxisplan.at/2712938380/1084/Oleh-Korsh/1" +
                                "\n" +
                                "\n • Dr. Nina Krasser: \nhttps://www.praxisplan.at/1004219464/1084/Nina-Krasser/1" +
                                "\n" +
                                "\n • Dr. Nikolai Korpan (General and visceral surgery):\nhttps://www.praxisplan.at/2333236974/1084/Nikolai-Korpan/1" +
                                "\n" +
                                "\n • Dr. Alexander Lendel (Dermatologist-venereologist): \nhttps://www.praxisplan.at/7921856494/1084/Alexander-Lendel/1" +
                                "\n" +
                                "\n • Dr. Igor Pona (Plastic Surgeon): \nhttps://www.praxisplan.at/8141949586/1084/Igor-Pona/1" +
                                "\n" +
                                "\n • Dr. Ioannis Stavrou (Neurosurgeon): \nhttps://www.praxisplan.at/1720943250/1084/Ioannis-Stavrou/1" +
                                "\n" +
                                "💡 Please note that some doctors do not have a contract with an insurance company, so their services are paid for by the patient and are not covered by the insurance company.\n"
                        },
                        {
                            question: "Dentists",
                            answer: "You can get free medical care at the following facilities:" +
                                "\n • Dr. Florian Rummer: \nhttps://goo.gl/maps/FUye2r6QocCSo85Y7" +
                                "\n" +
                                "\n • Dr. Georg Winkler:\n https://goo.gl/maps/6hjYv5niFd9oxmUH8"
                        },
                        {
                            question: "Psychological support ",
                            answer: "Psychological support for Ukrainians: \nhttps://storinka.at/sos-avstriya/psyhologichna-dopomoga/psyhologichna-pidtrymka-lyudyam-z-ukrayiny/" +
                                "\n" +
                                "\nPsychological support project for children and adults \"Poruch\" - regular online meetings \n https://poruch.me/"
                        },
                    ]
                },
                {
                    name: "🎓 Legal support",
                    questions: [
                        {
                            question: "Free legal advice",
                            answer: "Free legal advice at Zimmermangasse 8"
                        },
                        {
                            question: "\"Temporary protection\" in Austria",
                            answer: "An article on \"temporary protection\" in Austria\n" +
                                "https://storinka.at/korysna-informatsiya/pravovi-pytannya/tymchasovyj-zahyst-v-avstriyi/\n"
                        },
                        {
                            question: "Immigration FAQ",
                            answer: "Answers to Frequently Asked Questions from the Immigration Office (English and German)\n" +
                                "https://www.bfa.gv.at/news.aspx?id=7138695A2B6150634156493D\n"
                        },
                        {
                            question: "Telegram group chat",
                            answer: "A group in the Telegram where you can ask questions\n" +
                            "https://t.me/+s4iuhlcTYAg3OTBk\n" +
                                "If you need photos for documents, the Foto Schuster studio offers to take them for free:\n +" +
                                "https://www.fotoschuster.at/kontakt"
                        },
                        {
                            question: "General info",
                            answer: "At the level of the European Union and the Austrian Ministry of the Interior, a decision has been" +
                                "taken to grant a temporary humanitarian right to stay\n" +
                                "https://ec.europa.eu/commission/presscorner/detail/uk/IP_22_1469" +
                            "(German vorübergehender Schutz) for all citizens of Ukraine.\n" +
                                "As of March 4, 2022, according to official information from the Chancellor, the Minister" +
                                "of the Interior and other officials of Austria, it is known:\n" +
                                "1. The status of temporary protection, preliminary, will be as follows: The right to stay legally" +
                                "in Austria for one year with the possibility of extending the permit. Fast procedure of registration of" +
                                "the document (certificate) in the presence of the document of the citizen of Ukraine (passport)." +
                                "Accelerated access to the labor market (the right to work legally in Austria). Following this status," +
                                "Austria intends to provide access to health care, schools and kindergartens. There is no specific information" +
                                "on financial support at the moment, but humanitarian aid will be provided.\n" +
                                "\n2. If you have housing and costs for accommodation for the near future, then without an urgent need:\n" +
                                "a. It is not recommended to apply to the police for refugee status (Asylrecht).\n" +
                                "b. It is recommended to wait for information on the temporary special status mentioned above." +
                                "You can stay in Austria on humanitarian grounds, even if your visa-free days are over. Austria and other" +
                                "EU countries are not currently deporting refugees to Ukraine due to hostilities and threats to the lives of Ukrainians.\n" +
                                "\n3. In case of urgent need for humanitarian aid (housing, funds, food, medical emergency care)," +
                                "it is necessary to apply to the state coordination point for humanitarian aid to Ukrainians - Bundesagentur für Betreuungs-" +
                                "und Unterstützungsleistungen \n+43126768709460\n" +
                                "(abbreviated - BBU).\n" +
                                "\n4. Refugee status (Asylrecht) is associated with many negative consequences compared to the new planned temporary protection mechanism." +
                                "In particular, at the time of the procedure:\n" +
                                "1. Bureaucratic and long procedure, which can last more than 6 months.\n" +
                                "2. Delivery of a passport, restrictions on leaving Austria.\n" +
                                "3. Prohibition of work for the first 3 months. After this period, the maximum salary is limited, a work permit is required.\n" +
                                "Both statuses include housing, social benefits, social insurance, and access to children's education."
                        },
                    ]
                },
                {
                    name: "💬 Groups on social networks",
                    questions: [
                        {
                            question: "Facebook",
                            answer: "Hilfe für die Ukraine\n" +
                                "Facebook https://www.facebook.com/hilfefuerdieukraine \n" +
                                "Instagram https://www.instagram.com/hilfefuerdieukraine/\n " +
                                "Twitter https://twitter.com/support_ua_22\n" +
                                "\nUkrainische Jugend in Österreich / Ukrainian Youth Society in Austria\n" +
                                "https://www.facebook.com/groups/tuma.austria/\n" +
                                "\nUkrainians in Austria\n" +
                                "https://www.facebook.com/groups/1601969910048927\n" +
                                "\nZUM - Salzburg Ukrainian Youth\n" +
                                "https://www.facebook.com/groups/432176894742646\n" +
                                "\nUkrainian community Tyrol\n" +
                                "https://www.facebook.com/groups/1034554430605816\n" +
                                "\nUkrainians in Vienna - work in Austria, news, advertising\n" +
                                "https://www.facebook.com/groups/ukrvienna/\n" +
                                "\nUkrainian mothers in Austria / Ukrainische Mütter in Österreich\n" +
                                "https://www.facebook.com/groups/2765767900206746\n"
                        },
                        {
                            question: "Telegram",
                            answer: "Ukraine Austria: Chat for mutual assistance to Ukrainians in Austria" +
                            "\nhttps://t.me/ukraineat" +
                                "\nUkrainians in Austria" +
                                "https://t.me/austriaukr\n" +
                                "\nAustria helps Ukraine\n" +
                                "https://t.me/austria_helps_ukraine\n" +
                                "\nVienna Help for Ukraine" +
                                "https://t.me/warhelpukraine\n" +
                                "\nHumanitarian aid for refugees from Ukraine in Vienna! 🇦🇹🇺🇦" +
                                "https://t.me/+AJ1-1jrgsKZlOWQy\n" +
                                "\nUkrainian community Tyrol\n" +
                                "https://t.me/+F1o-kdGLZiAxNTg0\n" +
                                "\nBUDDY-Gruppe für Ukrainer*innen UND Drittstaatsangehörige auf der Flucht, Last Minute Anfragen für Accommodation & Co\n" +
                                "https://t.me/+mv2EYRzkvdZlZWNk"
                        },
                        {
                            question: "Vaccination",
                            answer: "Detailed information on vaccination, actions in case of suspected coronavirus and current restrictions can be found here - https://www.integrationsfonds.at/coronainfo/ua/"
                        },
                    ]
                },
                {
                    name: "ℹ️ Information websites",
                    questions: [
                        {
                            question: "Vienna information page",
                            answer: "Start Wien: Vienna information page\n" +
                                "https://start.wien.gv.at/ukraine "
                        },
                        {
                            question: "Federal agency for employment and support services",
                            answer: "Bundesagentur für Betreuungs- und Unterstützungsleistungen\n" +
                            "Federal agency for employment and support services\n" +
                            "https://www.bbu.gv.at/"
                        },
                        {
                            question: "Ukrainians in Vienna",
                            answer: "Ukrainians in Vienna (website) Website with all the necessary information for people who fled to Vienna\n" +
                                "https://ukrainians-in-vienna.at/ "
                        },
                        {
                            question: "Catalog of information",
                            answer: "Catalog of information for many EU countries\n" +
                                "https://allhelpua.info/"
                        },
                        {
                            question: "Information and entertainment website",
                            answer: "Storinka.at\n" +
                            "Information and entertainment website for Ukrainians in Austria.\n" +
                                "https://storinka.at/"
                        },
                        {
                            question: "Behavior in Austria",
                            answer: "Behavior in Austria:\n" +
                            "https://storinka.at/sos-avstriya/pam-yatka-pro-povedinku-v-avstrii/"
                        },
                        {
                            question: "Help Ukraine",
                            answer: "This page provides information on information about Ukraine and all of them.\n" +
                            "https://www.helpukraine.at/"
                        },
                        {
                            question: "Facebook",
                            answer: "Austria stands with Ukraine - Austria supports Ukraine\n" +
                            "https://www.facebook.com/groups/austriahelpsukraine\n" +
                            "Vienna Front\n" +
                            "https://www.facebook.com/groups/videnskiyfront"
                        },
                    ]
                },
                {
                    name: "💱 Money exchange",
                    questions: [
                        {
                            question: "Erste Bank",
                            answer: "In Erste Bank branches with cash registers (ie not in any) you can exchange hryvnias" +
                                "for euros (maximum € 300). There are also free accounts for refugees."
                        },
                        {
                            question: "Reiffeisen Bank",
                            answer: " There is information that hryvnia is also exchanged at Reiffeisen Bank branches" +
                                "(in particular at Friedrich-Wilhelm-Raiffeisen-Platz 1, 1020 Wien), and a free refugee account can be opened."
                        },
                    ]
                },
                {
                    name: "🏫 Schools and kindergartens",
                    questions: [
                        {
                            question: "Ukrainian Training Center in Vienna",
                            answer: "The Ukrainian Training Center in Vienna began its work on April 1, 2022. The institution has 120 children." +
                                "Professional educators help 10th and 11th graders to finish the school year and prepare for university entrance or" +
                                "decide on a further path. The center will operate until the end of August 2022.\n" +
                                "For all questions, please contact: eec-vienna@interface-wien.at\n" +
                                "Address: Tegetthoffstraße 1, 1010 Wien (5th floor)\n" +
                                "http://interface-wien.at/\n"
                        },
                        {
                            question: "Saturday Ukrainian school",
                            answer: "https://ukr-schule.at/uk\n" +
                            "Address: Beethoven Platz 1, 1010 Wien\n" +
                            "Contact telephones (daily from 09:00 to 20:00): +43 676 674 03 77 and +43 664 354 69 17\n" +
                                "Director - Anna Krachkovska: direktor@ukr-schule.at"
                        },
                        {
                            question: "Integration School in Vienna",
                            answer: "The integration school is designed to facilitate the entry of migrants into working life. German language courses will prepare you to study in German. The school has primary, secondary, higher and polytechnic classes. Support is also provided for people who do not have the financial capacity and access to attend cultural and sporting events.\n" +
                                "To register, send your name and surname, telephone number, residence address in Vienna. Answers to the questions can also be obtained at: ukraine.help.school@gmx.at\n"
                        },
                        {
                            question: "Austrian public schools",
                            answer: "You can write an email to marina.bernatovic@bildung-wien.gv.at\n" +
                            "Enter your child's name, date of birth and address in the email.\n" +
                            "Information for families with school-age children can be found on the website of the" +
                                "Vienna Department of Education: bildung-wien.gv.at/service/Krieg-in-der-Ukraine\n" +
                            "Information letter from the Vienna Department of Education for Newly arrived families in Vienna in Ukrainian:\nbildung-wien.gv.at" +
                                "Look for places in the kindergartens\n" +
                                "https://start.wien.gv.at/ukraine/ua/kindergartenplatz"
                        },
                    ]
                },
                {
                    name: "👧 Children and entertainment",
                    questions: [
                        {
                            question: "Babysitting",
                            answer: "The Humanitarian Arrival Center in Vienna (Engerthstraße 267-269, 1020 Vienna) offers hourly childcare."
                        },
                        {
                            question: "Tours",
                            answer: "Free tours of Vienna\n" +
                            "https://t.me/storiesvienna"
                        },
                        {
                            question: "Panchenko Dance Studio",
                            answer: "Sports dances in Ukrainian for displaced children,\n" +
                                "\n" +
                                "Konstantin Panchenko\n" +
                                "https://www.facebook.com/groups/2765767900206746/user/100007530610697,\n" +
                                "Nadiya Panchenko\n" +
                                "https://www.facebook.com/groups/2765767900206746/user/100001600452334\n" +
                                "\n" +
                                "Tuesday 15:45 (5-8 years)\n" +
                                "Friday 19:15 (9-14 years)\n" +
                                "All children who want to continue or start doing sports ballroom dancing are invited to our studio. These classes will be free for forcedly displaced children. We conduct training in Ukrainian!\n" +
                                "To register, send a message with your child's name and year of birth.\n" +
                                "We hope that we will be able to help children distract themselves from everyday problems.\n" +
                                "☎️ +4367764013797\n"
                        },
                        {
                            question: "We do good (Telegram)",
                            answer: "Chat for parents who want to bring their children a little fun and distract from the war. We will draw, play, dance, sculpt from plasticine 3 times a week from 10 to 13 hours.\n" +
                            "https://t.me/+pRcItmLYfMYyZWIy"
                        },
                        {
                            question: "Children: Together for the kids (Vienna) (Telegram)",
                            answer: "https://t.me/+TAPj0F7e4xg1ODg0"
                        },
                        {
                            question: "Resources for children",
                            answer: "We share useful resources to help parents distract children while in shelter ⬇️" +
                                "\n🔰Ranok Publishing House provides children's books in electronic format for FREE! Just go to BaraBuk's website" +
                                "(https://bit.ly/35pwNKw) and download to be able to read with children even without internet access!" +
                                "\n🔰In the Telegram-channel Pavlush and Yalush (https://t.me/pavlushaiyava) you can download" +
                                "audio tales, which will also be available without the Internet." +
                                "\n🔰Another Telegram channel with audio Cossacks [[https://t.me/kazky_ukr](https://t.me/kazky_ukr)" +
                                "Ukrainian. All audio tapes can be downloaded and listened to offline." +
                                "\n🔰 Yakaboo has opened free access to audio and e-books in the mobile application (https://bit.ly/3CcZG92)." +
                                "\n🔰 The New Ukrainian School organized a series of informative online meetings with" +
                                "teachers (https://bit.ly/3sDR87P). The meeting schedule is updated daily." +
                                "\n🔰 MEGOGO has opened free access to cartoons, movies and audio tales (https://bit.ly/35KLwjg)." +
                                "\n🔰 Almost three dozen e-books from the Old Lion Publishing House for Children (http://bitly.ws/oQDE)\n" +
                                "can be downloaded for free.\n" +
                                "\nSource: Child Psychologist https://www.facebook.com/dytyachyjpsyholog/posts/1946017022261223\n" +
                                "and the Publishing House Staryi Lev“”\n" +
                                "https://www.facebook.com/starlev\n" +
                                "\n" +
                                "Yoga classes (daily from 11:00 to 12:00):\n" +
                                "https://instagram.com/dasprema.wien\n"
                        },
                    ]
                },
                {
                    name: "🅿️ Parking in Vienna",
                    questions: [
                        {
                            question: "General rules",
                            answer: "Since March 2022, there have been generalized rules governing paid short-term parking" +
                                "throughout Vienna. Parking is only possible with a parking ticket (Parkschein) or a \"parking sticker\" for residents (Parkpickerl)."
                        },
                        {
                            question: "Short-term parking areas (Kurzparkzone)",
                            answer: "Almost the entire territory of Vienna is a short-term parking area, which is subject to the following rules:" +
                                "\n- Monday to Friday from 9 am to 10 pm (excluding public holidays)\n" +
                                "- The maximum duration of parking is two hours\n" +
                                "- On the map of Vienna you can find specially marked parking areas\n" +
                                "There are various short-term parking rules on the shopping streets of Vienna, which are marked with corresponding signs.\n" +
                                "The rules governing short-term parking do not apply to single-track vehicles such as mopeds and motorcycles.\m" +
                                "According to the general rules, you can park for free from 22:00 to 9:00 (at night) on weekdays, and around the" +
                                "clock on weekends and holidays, unless otherwise specified by the corresponding road sign."
                        },
                        {
                            question: "Parking coupons and payment by mobile phone",
                            answer: "Parking coupons are issued in paper form and electronically via mobile phone:\nhttps://www.handyparken.at/" +
                                "Points of sale of parking tickets:\n" +
                                "- Tobacco kiosks\n" +
                                "- Cigarette vending machines\n" +
                                "- Gas stations\n" +
                                "- Post offices\n" +
                                "- Pre-sale points of Wiener Linien\n" +
                                "- Vienna ticket machines (Wiener Linien)\n" +
                                "- Vienna Tourist Information Center\n" +
                                "💵 Price for 30 minutes: 1.10 euros\n" +
                                "In short-term parking areas, you need a parking ticket from the first minute of parking," +
                                "even for short stops, such as unloading luggage. Free 15-minute parking tickets are available" +
                                "at the hotel, at the tobacco kiosks, at the tourist information center, and via the mobile phone \nhttps://www.handyparken.at/." +
                                "Free 15-minute parking tickets cannot be combined with other types of parking tickets.\n" +
                                "The parking ticket must be completely filled in and placed in a well-accessible place under the windshield." +
                                "When using several parking tickets at the same time, each ticket must indicate the same time of arrival." +
                                "Drivers with disabilities must have a parking ticket in accordance with §29B of the 1960 Road Traffic Regulations" +
                                "(European Parking Ticket) in order to park cars in Vienna's short-term parking areas indefinitely." +
                                "The coupon should be placed in a well-accessible place under the windshield. This rule also applies to" +
                                "disabled people who are passengers."
                        },
                        {
                            question: "Parking for residents",
                            answer: "In all areas of Vienna there are parking spaces designed specifically for residents," +
                                "which can not be occupied even with a valid parking ticket (violators face a fine!)." +
                                "These areas are marked with signs prohibiting stopping and parking, with additional plates" +
                                "except for cars with parking stickers for the X-th district, as well as cars for the disabled (wheelchair symbol)." +
                                "Attention: the parking ban also applies on weekends and holidays!"
                        },
                        {
                            question: "Park & Ride parking lots and garages",
                            answer: "To visit the city, we recommend that you change from the car to public transport." +
                                "On the outskirts of the city you can find the possibility of inexpensive parking in the Viennese" +
                                "parking lot Park & ​​Ride:\nhttps://www.wien.info/en/travel-info/to-and-around/park-ride-354906\n" +
                                "at a price of 3.60 euros in day. All Park & ​​Ride parking lots are in the immediate vicinity of" +
                                "the metro, so you can quickly and easily get to the city center." +
                                "In the city center or near the center you have a dense network of garages at higher rates." +
                                "An overview of all parking garages and parking lots in Vienna can be found at:\nwww.parken.at/wien"
                        },
                    ]
                },
                {
                    name: "💼 Job search",
                    questions: [
                        {
                            question: "Austrian Employment Service (AMS)",
                            answer: "Information in Ukrainian from the Austrian Employment Service (AMS):\n" +
                                "https://www.ams.at/arbeitsuchende/arbeiten-in-oesterreich-und-der-eu/ukraine\n"
                        },
                        {
                            question: "General resources",
                            answer: "https://www.willhaben.at/jobs/\n" +
                            "https://www.karriere.at/jobs/platform"
                        },
                        {
                            question: "Resources for Ukrainians",
                            answer: "https://hireforukraine.org/\n" +
                                "https://www.jobs-for-ukraine.at\n" +
                                "https://www.ukrainejobs.at/\n" +
                                "https://www.uatalents.com/\n" +
                                "https://happymonday.ua/\n" +
                                "https://awesomic.crew.work/jobs\n" +
                                "https://helpukrainians.jooble.org/\n" +
                                "https://www.hiretohelp.com/\n" +
                                "https://ua.jooble.org\n" +
                                "https://www.welcometothejungle.com/en\n" +
                                "https://indeed.com/\n" +
                                "https://jobs.dou.ua/vacancies/?remote\n" +
                                "https://remoteukraine.org/\n" +
                                "https://hireforukraine.org/\n" +
                                "https://www.jobs4ukraine.eu/\n" +
                                "https://imagine-ukraine.org/\n" +
                                "https://cutt.ly/pA3sAaG\n" +
                                "https://vpteam.io/candidates/search\n" +
                                "https://www.helpwithjobfinding.org/"
                        },
                        {
                            question: "English-language work in Austria",
                            answer: "https://englishjobsearch.at/](https://englishjobsearch.at/\n" +
                                "https://www.entaincareers.com/jobs/?Keywords=&IndustryID=&VacancyTypeID=&Postcode=&radius=40&LocationID=1980&LocationID=#"
                        },
                        {
                            question: "Facebook/Telegram",
                            answer: "Work in Austria (Facebook group)\n" +
                                "https://www.facebook.com/groups/jobinaustria/\n" +
                                "Work for Ukrainian architects and designers\n" +
                                "https://forms.office.com/pages/responsepage.aspx?id=JObcZn8a6U6Gh63Q9C8VfnOQvu8EfD5Fn_1J0ofv-gtUNURYVUowUDZFOVE3S1dUTUJIMkRERENSNiQlQCN0PW" +
                                "Jobs in Austria, vacancies (Facebook group)\n" +
                                "https://www.facebook.com/groups/dawairabota/\n" +
                                "Channel in telegram to look for work in Europe\n" +
                                "https://t.me/outjob\n" +
                                "You can indicate your nickname in the telegram and the services you can provide:\n" +
                                "https://t.me/workadojobs/1241" +
                                "Channel in telegram to look for work in Europe\n" +
                                "https://t.me/outjob\n" +
                                "Vacancies in the field of IT and creative industries:\n" +
                                "https://t.me/casesjobs" +
                                "Progressive vacancies in Ukraine:\n" +
                                "https://t.me/lobbyx" +
                                "Creative vacancies in Ukraine:\n" +
                                "https://t.me/cresume"
                        },
                    ]
                },
                {
                    name: "🐱 Help for animals",
                    questions: [
                        {
                            question: "Emergency",
                            answer: "Round-the-clock emergency services for animals\n" +
                                "+43 1 699 24 80\n"
                        },
                        {
                            question: "Protection of Animals of Austria",
                            answer: "Society for the Protection of Animals of Austria (German)\n" +
                            "https://www.tierschutz-austria.at"
                        },
                        {
                            question: "Volkshilfe animal care",
                            answer: "Volkshilfe supports refugees in animal care:\n" +
                                "\n" +
                                "• Animal feed and equipment\n" +
                                "• Veterinary care\n" +
                                "• Accommodation of animals if they are not allowed in the temporary residence of refugees\n" +
                                "\n" +
                                "Phone: +43 676 878 445 14 (Monday to Sunday from 8:00 to 20:00)\n" +
                                "\n" +
                                "E-mail: agft@volkshilfe-wien.at\n"
                        },
                        {
                            question: "Free veterinary care/help",
                            answer: "Neunerhaus offers free veterinary care.\n" +
                            "https://www.neunerhaus.at/hilfe/tier/" +
                                "If someone came with animals and need help,  here it is free:\n" +
                                "It is Tierambulanz am Wasserpark, 1210 Wien.\n" +
                                "\n" +
                                "1. http://tierambulanz-am-wasserpark.at/\n" +
                                "Languages: German, English, Hand & Foot\n" +
                                "\n" +
                                "2. https://www.tierquartier.at/ueber-uns/\n" +
                                "\n" +
                                "Help specifically with parrots: 0660 5560800 or office@papageienschutz.org\n"
                        },
                    ]
                },
                {
                    name: "🇦🇹 German language courses",
                    questions: [
                        {
                            question: "Free German course from a Ukrainian",
                            answer: "Free German course from Michael Babytsch\n" +
                                "https://t.me/deutschfueraliens_kurs\n" +
                                "https://www.instagram.com/deutsch_fuer_aliens_/\n"
                        },
                        {
                            question: "Free German language courses",
                            answer: "Free German language courses\n" +
                            "Telegram: +43 664 488 74 86\n" +
                            "Instagram: @language__guide\n" +
                            "Registration form:\nhttps://docs.google.com/forms/d/1sW1wgCkOm6DW_SuVpXIdQexaFxDErWT7wcY2B85DI0w/edit?ts=6220c1b7"
                        },
                        {
                            question: "Enrollment to free courses",
                            answer: "Enrollment in free German language courses for refugees\n" +
                                "    \n" +
                                "     Registration form: https://docs.google.com/forms/d/1sW1wgCkOm6DW_SuVpXIdQexaFxDErWT7wcY2B85DI0w/\n" +
                                "     Telegram: https://t.me/languageguidevienna\n" +
                                "     German lessons for children in Vienna: https://viagerman.com/student/\n" +
                                "     Help for beginners with self-study: https://www.kleine-deutsch-hilfe.at/Start-UA.htm"
                        },
                    ]
                },
                {
                    name: "😷 COVID",
                    questions: [
                        {
                            question: "What are current COVID regulations?\nWhat’s 2G/2,5G/3G?\nWhat's a green passport?",
                            answer: "https://www.wien.gv.at/menschen/integration/corona-mehrsprachiger-info-service.html\n\n!!! A green passport for vaccination and a green passport for car insurance are different things"
                        },
                        {
                            question: "Testing for COVID",
                            answer: "Free tests for coronavirus are conducted at the Vienna Humanitarian Center (Engerthstraße 267-269, 1020 Vienna). You can find other opportunities to test for coronavirus following the link Testangebote: https://coronavirus.wien.gv.at/faq-english/#Testangebote\n" +
                                "\n" +
                                "You need to register at the link: https://app.wien.gv.at/covidtestanmeldung/\n" +
                                "\n" +
                                "You can be tested without Austrian health insurance.\n"
                        },
                        {
                            question: "Vaccination",
                            answer: "Detailed information on vaccination, actions in case of suspected coronavirus and current restrictions can be found here - https://www.integrationsfonds.at/coronainfo/ua/"
                        },
                    ]
                },
                {
                    name: "🎓 Support of scientists",
                    questions: [
                        {
                            question: "Scientific projects for Ukraine",
                            answer: "Scientific projects for Ukraine.pdf -\n" +
                                "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcc15890-3381-4605-8c4f-c217459881a4/Scientific_projects_for_Ukraine.pdf"
                        },
                        {
                            question: "Labs",
                            answer: "List of labs supporting Ukrainian Scientists\n" +
                            "https://docs.google.com/spreadsheets/d/1jGFCqP2kj1ZAN6xy6EoRN1bozaggk9VEsbzYaIkkYcQ/htmlview#gid=0"
                        },
                        {
                            question: "Targeted scholarships",
                            answer: "Humboldt also provides targeted scholarships\n" +
                                "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/philipp-schwartz-initiative\n"
                        },
                        {
                            question: "Self-employment",
                            answer: "Self-employment for students and scientists in war\n" +
                            "https://www.tuwien.at/tu-wien/aktuelles/news/news/hilfsmassnahmen-fuer-studierende-und-wissenschaftler-innen-aus-kriegsgebieten"
                        },
                        {
                            question: "#ScienceForUkraine",
                            answer: "Our mission is to collect and disseminate information about support opportunities at the university," +
                                "national, and international level for graduate students and researchers directly affiliated to a ukraine academic institution.\n" +
                            "https://scienceforukraine.eu/"
                        },
                        {
                            question: "Financial aid from OH students ",
                            answer: "You can get financial aid from OH students:\n" +
                                "https://www.oeh.ac.at/soforthilfe?fbclid=IwAR0r7EhgNA5hyosCZbJhdQ-tZI6GbWS9YqPu4sTVoek3MoR8Xx1HrwvBHO8"
                        },
                    ]
                },
            ]
        },
        {
            name: CategoryName.HOUSING,
            description: "XXX",
            subCategory: []
        },
        {
            name: CategoryName.MEDICINE,
            description: "XXX",
            subCategory: []
        },
        {
            name: CategoryName.PETS,
            description: "XXX",
            subCategory: []
        },
        {
            name: CategoryName.STUDYING,
            description: "XXX",
            subCategory: []
        },
        {
            name: CategoryName.TRANSPORTATION,
            description: "XXX",
            subCategory: []
        },
    ]
}