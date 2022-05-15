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
                            question: "Can I get COVID-tested?",
                            answer: "- Generally, each person gets up to 5 free test-kits a month for testing at home\nhttps://cw8.lead-horizon.org/public/welcome (available in Ukrainian). There are categories of people that have to be tested more regularly (Verordnung COVID-19-ScreeningV)\n- Free COVID-tests at Sport&Fun Halle "
                        },
                        {
                            question: "Can I get vaccinated?",
                            answer: "Free vaccination at Austria Center. Passport/ID is needed"
                        },
                        {
                            question: "Is my vaccine X valid in Austria? ",
                            answer: "XXX"
                        },
                    ]
                },
                {
                    name: "Urgent help",
                    questions: [
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