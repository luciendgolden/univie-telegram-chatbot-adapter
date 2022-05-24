import {CategoryName} from "../interfaces/enums";
import {FaqCategories} from "../interfaces";

export const faqCategories: FaqCategories = {
    categories: [
        {
            name: CategoryName.HELP,
            description: "Here you can get some useful information about help topics",
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
            ]
        },
        {
            name: CategoryName.REGISTRATION,
            description: "Here you can get some useful information about registration topics",
            subCategory: []
        },
        {
            name: CategoryName.STUDYING,
            description: "Here you can get some useful information about studying topics",
            subCategory: []
        },
        {
            name: CategoryName.DAILY_NEEDS,
            description: "Here you can get some useful information about daily needs topics",
            subCategory: []
        },
        {
            name: CategoryName.OFFERS_FOR_REFUGEES,
            description: "Here you can get some useful information about offers for refugees topics",
            subCategory: []
        },
    ]
}