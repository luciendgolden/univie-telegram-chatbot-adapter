import { CategoryName } from "../interfaces/enums";
import { FaqCategories } from "../interfaces";

export const faqCategories: FaqCategories = {
    categories: [
        {
            name: CategoryName.HELP,
            description: "Here you can get some useful information about help topics",
            subCategory: [
                {
                    name: "COVID",
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
                    name: "Emergency",
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