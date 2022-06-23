import {CategoryName} from "../interfaces/enums";
import {FaqCategories} from "../interfaces";

export const faqCategories: FaqCategories = {
    categories: [
        {
            name: CategoryName.HELP,
            description: "Тут Ви можете отримати інформацію про екстренні сервіси, ценри прийому, гуманітарну допомогу та юридичну підтримку 🎯",
            subCategory: [
                {
                    name: "🆘 Екстренні ситуації",
                    questions: [
                        {
                            question: "Екстренні сервіси",
                            answer: "Служби екстреної допомоги по всій Європі: 112" +
                                "\nТелефон пожежної служби: 122" +
                                "\nПоліція: 133" +
                                "\nШвидка медична допомога: 144" +
                                "\nЦілодобова аптека: +43 1455"
                        },
                        {
                            question: "Розміщення у притулку",
                            answer: "Екстрена допомога з розміщенням у притулку\n" +
                                "Федеральне агентство з догляду та підтримки\n\n" +
                                "+43 1 2676 870 9460 \n" +
                                "https://www.bbu.gv.at/ukraine\n"
                        },
                        {
                            question: "Волонтерська гаряча лінія",
                            answer: "Волонтерська гаряча лінія із загальних питань для біженців +43 800 220202"
                        },
                        {
                            question: "Гаряча лінія Caritas",
                            answer: "Гаряча лінія благодійної організації Caritas\n" +
                                "з питань в'їзду, перебування та проживання: +4351776380\n"
                        },
                        {
                            question: "Центри прийому біженців",
                            answer: "Державні центри прийому біженців." +
                                "\nПросимо Вас наразі звертатись до державних установ, які надають прихисток, медичну, юридичну, психологічну підтримки і забезпечують всіма необхідними речами!    "
                        },
                        {
                            question: "Посольство України у Відні",
                            answer: "Адреса: Naaffgasse 23, 1180 Vienna" +
                                "\nТелефон: +43 1479 71 72" +
                                "\nДля екстренних випадків: +43 1 479717252" +
                                "\nhttps://austria.mfa.gov.ua/ (офіційний сайт може не працювати через кібератаки)\n" +
                                "https://www.facebook.com/ukremb.at/\n"
                        },
                        {
                            question: "SOS\nМені потрібна термінова медична допомога",
                            answer: "Гарячі лінії, контактна інформація:\nhttps://helpforukraine.at/ekstrena-dopomoha"
                        },
                        {
                            question: "Мені потрібна термінова психологічна допомога",
                            answer: "Kriseninterventionszentrum Wien\nTel.: 01/4069595, з понеділка по п’ятницю з 10:00 до 17:00\n" +
                                "Швидка допомога для лікування гострих психосоціальних криз\nwww.kriseninterventionszentrum.at\n\nPsychosoziale Dienste Wien\nPsychiatrische Soforthilfe und mobiler Krisendienst, 24-h\nNotdienst: Tel.:01/31330\nPsychoSozialeInformation - Sozialpsychische Ambulanz\nTerminvereinbarung: Tel.: 01/400053060\n1030 Wien, Modecenterstraße 14-A-2\nwww.psdßwien.at\n\nAKH\nAmbulanz und Notfall: 01/4040035470\n1090 Wien, Währinger Gürtel 18-20\n24/7"
                        },
                        {
                            question: "Мені потрібна медична допомога",
                            answer: "Усі переміщені українці можуть отримати безкоштовну медичну допомогу згідно з\nhttps://www.gesundheitskasse.at/cdscontent/?contentid=10007.884366&portal=oegkportal\n\nПереміщеним особам не потрібно отримувати електронну картку, лише номер соціального страхування.\n\nЗнайти лікаря: https://www.docfinder.at/ шукайте лікарів загальної практики\n\n24/7 аптеки: https://www.nachtapotheke.wien/\n\n"
                        },
                    ]
                },
                {
                    name: "🏫 Центри прийому",
                    questions: [
                        {
                            question: "Vienna",
                            answer: "Зараз відкриті 2 державних центри прийому вимушено переміщених осіб з України:" +
                                "\n1. Гуманітарний центр прибуття \"Sport & Fun-Halle\"\n" +
                                "Engerthstraße 267/269,  поруч зі станцією метро U2 Stadion\n" +
                                "1. Працює цілодобово кожен день.\n" +
                                "2. Центр збору данних та консультацій\n\n" +
                                "Bruno-Kreisky-Platz 1, Austria Center Vienna, біля метро U1 Kaisermühlen subway\n" +
                                "Часи роботи: з понеділка по п'ятницю з 8:00 до 18:00 (Увага: наразі відвідування можливо лише за запрошенням. " +
                                "Найсвіжіша офіційна інформація щодо роботи центрів публікується на сторінці міста Відень:\nhttps://start.wien.gv.at/ukraine/" +
                                "\n" +
                                "\n" +
                                "У гуманітарному центрі прибуття Відня надають такі послуги:\n" +
                                "• Перша медична допомога\n" +
                                "• Пошук тимчасового житла\n" +
                                "• Медична та психосоціальна допомога\n" +
                                "• Харчування та напої\n" +
                                "• Інформування про орієнтацію у Відні\n" +
                                "• Тестування на коронавірус\n" +
                                "• З ґрунтовними питаннями перенаправляють в центр збору данних та консультацій (Austria Center Vienna).\n" +
                                "\n" +
                                "\n" +
                                "### **У центрі збору данних та консультацій надають такі послуги:\n" +
                                "• Первинна консультація, з’ясування подальших потреб та загальні консультації щодо соціальних питань\n" +
                                "• Консультації щодо житла / допомога з пошуком житла\n" +
                                "• Медичні консультації та допомога\n" +
                                "• Психологічна допомога\n" +
                                "• Юридичні консультації щодо правових норм, які регулюють статус іноземців\n" +
                                "• Можливості тестування та вакцинації\n" +
                                "\n" +
                                "\n" +
                                "Як доїхати на Engerthstrasse від головного залізничного вокзалу (Hauptbahnhof)?\n" +
                                "До Гуманітарного центру прибуття можна дістатися громадським транспортом (метро, автобус, трамвай) або автомобілем. Наразі вимушено переміщені особи з України можуть користуватися всім громадським транспортом Відня безкоштовно та без квитка, достатньо показати закордонний паспорт, чи інший документ.\n" +
                                "Щоб доїхати до Гуманітарного центру прибуття Відня громадським транспортом від головного залізничного вокзалу (Hauptbahnhof), необхідно сісти на гілку метро U1 в напрямку Leopoldau, доїхати до станції Praterstern, пересісти на гілку метро U2 у напрямку Aspernstraße або Seestadt та доїхати до станції Stadion, потім пройти пішки приблизно 5 хвилин.\n"
                        },
                        {
                            question: "Грац",
                            answer: "Гуманітарний центр прибуття в місті Грац, Messehalle D за адресою Messeplatz 1, 8010 Graz (працює цілодобово кожен день)"
                        },
                        {
                            question: "Лінц",
                            answer: "Гуманітарний центр прибуття у місті Лінц за адресою Volkshaus Bindermichl Uhlandgasse 5, 4020 Linz"
                        },
                        {
                            question: "Зальцбург",
                            answer: "Центр прибуття у місті Зальцбург за адресою Messezentrum, Halle 4, 5020 Salzburg\n" +
                                "https://www.salzburg.gv.at/gesellschaft_/Seiten/ankunftszentrum.aspx\n"
                        },
                    ]
                },
                {
                    name: "🎒 Гуманітарна допомога",
                    questions: [
                        {
                            question: "Український склад",
                            answer: "Різноманітну речову допомогу можна отримати на українському складі.\n" +
                                "Адреса: Landstraßer Hauptstraße 137, 1030 Wien\n" +
                                "Години роботи: понеділок, вівторок, четвер з 9 до 11 та по середах з 14 по 16."
                        },
                        {
                            question: "Організації",
                            answer: "Також можна звернутися до профільних організацій:" +
                                "\nhttps://www.adra.at/" +
                                "\nhttps://nachbarschaftszentren.at/ukraine" +
                                "\nhttps://www.caritas-leo.at/unsere-hilfe/ausgabestellen" +
                                "\nhttps://www.thefeelgoodstore.at/"
                        },
                    ]
                },
                {
                    name: "🎓 Юридична підтримка",
                    questions: [
                        {
                            question: "Безкоштовна юридична підтримка",
                            answer: "Безкоштовна юридична підтримка на Zimmermangasse 8"
                        },
                        {
                            question: "\"Тимчасовий захист\" в Австрії",
                            answer: "Стаття про \"тимчасовий захист\" в Австрії\n" +
                                "https://storinka.at/korysna-informatsiya/pravovi-pytannya/tymchasovyj-zahyst-v-avstriyi/\n"
                        },
                        {
                            question: "Часті відповіді про іміграцію",
                            answer: "Відповіді на часті запитання від управління з імміграції (англійською та німецькою)\n\n" +
                                "https://www.bfa.gv.at/news.aspx?id=7138695A2B6150634156493D\n"
                        },
                        {
                            question: "Група в Телеграмі",
                            answer: "Група в Телеграмі, де можна поставити питання \n" +
                            "https://t.me/+s4iuhlcTYAg3OTBk\n" +
                                "Якщо вам необхідні фото на документи, то студія Foto Schuster пропонує зробити їх безкоштовно:\n +" +
                                "https://www.fotoschuster.at/kontakt"
                        },
                        {
                            question: "Загальна інформація",
                            answer: "На рівні Євросоюзу та Міністерства внутрішніх справ Австрії прийнято рішення" +
                                " про надання тимчасового гуманітарного права на перебування\n" +
                                "https://ec.europa.eu/commission/presscorner/detail/uk/IP_22_1469" +
                            "(англ. temporary protection; нім. vorübergehender Schutz) для всіх громадян України.\n" +
                                "Станом на 4 березня 2022 року, згідно з офіційною інформацією від канцлера, міністра внутрішніх справ та інших офіційних представників Австрії, відомо:\n" +
                                "1. Статус тимчасового захисту, попередньо, буде виглядати наступним чином: Право на легальне перебування в Австрії на рік з можливістю продовжити термін дії дозволу. Швидка процедура оформлення документу (посвідчення) при наявності документу громадянина України (паспорт). Прискорений доступ до ринку праці (право легально працювати в Австрії). Після оформлення цього статусу, Австрія наміряна надавати доступ до медичного забезпечення, шкіл і дитячих садочків. Конкретної інформації про фінансову підтримку наразі немає, але буде надаватися гуманітарна допомога.\n" +
                                "\n2. Якщо у вас є житло та кошти на проживання на найближчий час, то без гострої необхідності::\n" +
                                "a. Не рекомендується звертатися до поліції за наданням статусу біженця (Asylrecht).\n" +
                                "b. Рекомендується дочекатися інформації щодо тимчасового вищевказаного особливого статусу. Ви можете перебувати на території Австрії на гуманітарних підставах, навіть якщо дні по «безвізу» закінчилися. Австрія та інші країни ЄС на даний момент не проводять депортацію біженців в Україну, у зв’язку з воєнними діями і загрози життю українців.\n" +
                                "\n3. 3. За термінової необхідності у гуманітарній допомозі (житло, кошти, харчі, медичне термінове забезпечення) необхідно звертатися до державної координаційної точки гуманітарної допомоги українцям - Bundesagentur für Betreuungs- und Unterstützungsleistungen +[43126768709460](tel:+43126768709460) (скорочено - BBU).\n" +
                                "\n4. Статус біженця (Asylrecht) пов'язаний з багатьма негативними наслідками в порівнянні з новим запланованим механізмом тимчасового захисту. Зокрема, на час проведення процедури::\n" +
                                "1. Бюрократична і довга процедура, яка може тривати більше 6 міс.\n" +
                                "2. Здача паспорта, обмеження на виїзд з Австрії.\n" +
                                "3. Заборона на працю перші 3 місяці. Після цього строку обмежений максимальний розмір зарплати, необхідний дозвіл на роботу.\n" +
                                "Обидва статуси включають в себе надання житла, соціальних виплат, соціального страхування, доступ до освіти дітей."
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
                            answer: "Украина Австрия: Чат взаимопомощи украинцам в Австрии (група у Телеграмі)" +
                            "\nhttps://t.me/ukraineat" +
                                "\nУкраїнці в Австрії " +
                                "https://t.me/austriaukr\n" +
                                "\nAustria helps Ukraine\n" +
                                "https://t.me/austria_helps_ukraine\n" +
                                "\nVienna Help for Ukraine" +
                                "https://t.me/warhelpukraine\n" +
                                "\nГуманитарная помощь для украинских беженцев из Украины в Вене! 🇦🇹🇺🇦" +
                                "https://t.me/+AJ1-1jrgsKZlOWQy\n" +
                                "\nУкраїнська громада Тіроль \n" +
                                "https://t.me/+F1o-kdGLZiAxNTg0\n" +
                                "\nBUDDY-Gruppe für Ukrainer*innen UND Drittstaatsangehörige auf der Flucht, Last Minute Anfragen für Accommodation & Co\n" +
                                "https://t.me/+mv2EYRzkvdZlZWNk"
                        }
                    ]
                },
                {
                    name: "ℹ️ Інформаційні сайти",
                    questions: [
                        {
                            question: "інформаційна сторінка Відня",
                            answer: "Start Wien: інформаційна сторінка міста Відень \n" +
                                "https://start.wien.gv.at/ukraine "
                        },
                        {
                            question: "Bundesagentur für Betreuungs- und Unterstützungsleistungen",
                            answer: "Bundesagentur für Betreuungs- und Unterstützungsleistungen\n" +
                            "Федеральне агентство з питань зайнятості та підтримки\n" +
                            "https://www.bbu.gv.at/"
                        },
                        {
                            question: "Ukrainians in Vienna",
                            answer: "Ukrainians in Vienna (сайт) Сайт со всей необходимой информацией для людей, бежавших в Вену\n" +
                                "https://ukrainians-in-vienna.at/ "
                        },
                        {
                            question: "Каталог інформації",
                            answer: "Каталог інформації для багатьох країн ЄС:\n" +
                                "https://allhelpua.info/"
                        },
                        {
                            question: "Інформаційно-розважальний сайт",
                            answer: "Storinka.at\n" +
                            "Інформаційно-розважальний сайт для українців Австрії.\n" +
                                "https://storinka.at/"
                        },
                        {
                            question: "Памʼятка про поведінку в Австрії",
                            answer: "Пам’ятка про поведінку в Австрії:\n" +
                            "https://storinka.at/sos-avstriya/pam-yatka-pro-povedinku-v-avstrii/"
                        },
                        {
                            question: "Help Ukraine",
                            answer: "Цей сайт містить інформацію для біженців з України та всіх, хто хоче допомогти.\n" +
                            "https://www.helpukraine.at/"
                        },
                        {
                            question: "Facebook",
                            answer: "Austria stands with Ukraine - Австрія підтримує Україну\n" +
                            "https://www.facebook.com/groups/austriahelpsukraine\n" +
                            "Vienna Front\n" +
                            "https://www.facebook.com/groups/videnskiyfront"
                        },
                    ]
                },
                {
                    name: "💱 Обмін валюти",
                    questions: [
                        {
                            question: "Erste Bank",
                            answer: "У відділеннях Erste Bank з касою (тобто не в будь-якому) ви можете поміняти гривні на євро (максимум €300). Також там відкривають безкоштовні рахунки для біженців."
                        },
                        {
                            question: "Reiffeisen Bank",
                            answer: " Є інформація, що гривні також міняють у відділеннях Reiffeisen Bank (зокрема за адресою Friedrich-Wilhelm-Raiffeisen-Platz 1, 1020 Wien), а також відкривають безкоштовний рахунок для біженців."
                        },
                    ]
                }
            ]
        },
        {
            name: CategoryName.HOUSING,
            description: "У цьому розділі надається інформація про доступне житло для біженців",
            subCategory: [
                {
                    name: "🏠 Пошук житла",
                    questions: [
                        {
                            question: "Волонтерські ініціативи",
                            answer: "\n• Homes for Ukraine\nhttps://homesforukraine.eu/uk/home-ukr/" +
                                "\n" +
                                "\n • Facebook-група \"Житло для бiжинцiв з Украïни\" (в Німеччині)\n" +
                                "https://www.facebook.com/groups/288084393475832/?ref=share" +
                                "\n" +
                                "\n • CEU4Ukraine Запит на розміщення (контактна форма)\n" +
                                "https://forms.office.com/pages/responsepage.aspx?id=E1nE2VN24kuSC72wOGOBhF7F8TQ1-HVInQHqbTMuGE9UNjhaVklZMDFCREI5Nk0wMjBUQkdCMzZFVC4u" +
                                "\n" +
                                "\n • Запросити житло в Австрії - Team Project 316 (форма)\n" +
                                "https://airtable.com/shrKCFXhjS2T4UOPk" +
                                "\n" +
                                "\n• Місце де залишитися в Австрії - http://warhelp.eu/places/ (форма)\n" +
                                "https://docs.google.com/forms/d/e/1FAIpQLSfyj2-ww7AJkR0PFOym1iRg6lXFqKqTrf435VwLAsR_8RI_wA/viewform" +
                                "\n" +
                                "\n • EU4UA\n" +
                                "https://ua.eu4ua.org/" +
                                "\n" +
                                "\n • Телеграм-група \"Українці в Австрії: (інфоканал) житло для біженців\"\n" +
                                "https://t.me/Shelter_in_Austria"
                        },
                        {
                            question: "Приватні пропозиції",
                            answer: "\n • Сайт для пошуку житла по всій Европі \n" +
                                "https://icanhelp.host/" +
                                "\n" +
                                "\n • Host4Ukraine (англійська)\n" +
                                "https://www.host4ukraine.com/"
                        },
                        {
                            question: "Ініціативи готелів",
                            answer: "\n • Wombat’s Hostels Refugees from Ukraine: We Have Rooms For You!\n" +
                                "https://www.wombats-hostels.com/blog/refugees-ukraine-rooms-for-you?fbclid=IwAR2qEWK7_Zlh2hHmfmolyl7D_XA7B11r0MmV7AcOfJu0rIRSePEVhucSphU" +
                                "\n" +
                                "\n • ÖHV #HotellerieHilft - Готельна Індустрія Допомагає (німецькою)\n" +
                                "https://www.oehv.at/ueber-uns/mitgliederverzeichnis/hotelleriehilft/\n" +
                                "https://www.hospitalitysupport.org/apply-now?type=guest"
                        },
                        {
                            question: "Ініціатива Human Rights Initiative CEU",
                            answer: "Human Rights Initiative CEU (added 05.03.22) \nhttps://www.instagram.com/hrsi.ceu/"
                        },
                        {
                            question: "Житло для біженців групи/таблиці)",
                            answer: "\n • UA / Житло для біженців (група у WhatsApp) \nhttps://chat.whatsapp.com/GUQA39fW5Md8InJUqz6IAR" +
                                "\n" +
                                "\n • Українська підтримка - Ukrainian Support - Житло (таблиця) \nhttps://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358" +
                                "\n" +
                                "\n • Supporting 🇺🇦 friends - Житло (таблиця) \nhttps://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358" +
                                "\n" +
                                "\n • Група BUDDY для українців ТА громадян третіх країн, які втікають, запити на житло в останню хвилину (група у Telegram) group) \nhttps://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358" +
                                "\n" +
                                "\n • *іжнародна організація культурного різноманіття (англійська) \nhttps://www.instagram.com/icdo.at/" +
                                "\n" +
                                "\n • Австрійська ініціатива IMMO HILFT для безпритульних**" +
                                "\nhttps://immo-hilft.at/" +
                                "\nhttps://www.instagram.com/immo_hilft/?utm_medium=copy_link"
                        },
                        {
                            question: "Сайти пошуку нерохомості",
                            answer: "\n • Willhaben Immobilien: https://www.willhaben.at/iad/immobilien" +
                                "\n" +
                                "\n • ImmoScout24: https://www.immobilienscout24.at/" +
                                "\n" +
                                "\n • Розділ нерухомості газети Der Standard: https://immobilien.derstandard.at/immobiliensuche/" +
                                "\n" +
                                "\n • Квартири у Відні без комісії: https://www.facebook.com/groups/2016076738427452" +
                                "\n" +
                                "\n • AirBnB: https://www.airbnb.com/"
                        },
                    ]
                }
            ]
        },
        {
            name: CategoryName.MEDICINE,
            description: "У цьому розділі Ви зможете знайти інормацію про записи до лікарів, психологів та інформацію щодо коронавірусу",
            subCategory: [
                {
                    name: "🩺 Здоров’я",
                    questions: [
                        {
                            question: "Звернутися до лікаря",
                            answer: "❗ Австрія дозволяє звертатись до всіх лікарів та медзакладів, що обсуговують за державною страхівкою (у Відні - WGKK) з українським закордонним паспортом без додаткових документів. Офіційний лист-підтвердження до лікарів :\n" +
                                "220308_VPI_Krankenbehandlung_Fluechtlinge_Ukraine.pdf - https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c7da0cf-8349-4339-9963-23719ec04c32/220308_VPI_Krankenbehandlu"
                        },
                        {
                            question: "Лікарні",
                            answer: "Ви можете отримати безкоштовну медичну допомогу в таких закладах:" +
                                "\n • Цілодобова лікарня швидкої медичної допомоги імені Лоренца Белера (Lorenz Beler):\nDonaueschingenstrasse 13, 1200 Vienna" +
                                "\n" +
                                "\n • Лікарня братів милосердя. Тут приймають також без медичного страхування чи документів:\n Johannes-von-Gott-Platz 1, 1020 Vienna" +
                                "\n" +
                                "\n • Медичний центр Amber Med Medical Center: \nOberlaaer Straße 300/306, 1230 Vienna" +
                                "\n" +
                                "\n • Лікарня Neunerhaus Hospital надає загальну медичну допомогу, стоматологічну і офтальмологічну допомогу без страхування: \nMargaretenstraße 166, 1050 Vienna"
                        },
                        {
                            question: "Україномовні лікарі",
                            answer: "Терапевти" +
                                "\n • Dr. Sonja Dolezal: \nhttps://www.praxisplan.at/2985529128/1084/Sonja-Dolezal/1" +
                                "\n" +
                                "\n • Dr. Taissia Rusnak: \nhttps://www.praxisplan.at/7121852254/1084/Taissia-Rusnak/1" +
                                "\n" +
                                "\n • Dr. Oleh Korsh: \nhttps://www.praxisplan.at/2712938380/1084/Oleh-Korsh/1" +
                                "\n" +
                                "\n • Dr. Nina Krasser: \nhttps://www.praxisplan.at/1004219464/1084/Nina-Krasser/1" +
                                "\n" +
                                "\n • Dr. Nikolai Korpan (Загальна та вісцеральна хірургія):\nhttps://www.praxisplan.at/2333236974/1084/Nikolai-Korpan/1" +
                                "\n" +
                                "\n • Dr. Alexander Lendel (Шкірник-венеролог): \nhttps://www.praxisplan.at/7921856494/1084/Alexander-Lendel/1" +
                                "\n" +
                                "\n • Dr. Igor Pona (Пластичний хірург): \nhttps://www.praxisplan.at/8141949586/1084/Igor-Pona/1" +
                                "\n" +
                                "\n • Dr. Ioannis Stavrou (NeurНейрохірургosurgeon): \nhttps://www.praxisplan.at/1720943250/1084/Ioannis-Stavrou/1" +
                                "\n" +
                                "💡 Зверніть увагу, що деякі лікарі не мають договору з страховою компанією, тому їх послуги оплачуються пацієнтом і не покриваються страховою компанією.\n"
                        },
                        {
                            question: "Стоматологи",
                            answer: "• Dr. Florian Rummer: \nhttps://goo.gl/maps/FUye2r6QocCSo85Y7" +
                                "\n" +
                                "• Dr. Georg Winkler:\n https://goo.gl/maps/6hjYv5niFd9oxmUH8"
                        },
                        {
                            question: "Психологічна підтримка для українців",
                            answer: "Психологічна підтримка для українців: \nhttps://storinka.at/sos-avstriya/psyhologichna-dopomoga/psyhologichna-pidtrymka-lyudyam-z-ukrayiny/" +
                                "\n" +
                                "\nПроект психологічної підтримки для дітей і дорослих  \"Поруч\" - регулярні онлайн-зустрічі \n https://poruch.me/"
                        },
                    ]
                },
                {
                    name: "😷 Коронавірус",
                    questions: [
                        {
                            question: "Які чинні правила щодо COVID?\nЩо таке 2G/2,5G/3G?\nЩо таке зелений паспорт?",
                            answer: "https://www.wien.gv.at/menschen/integration/corona-mehrsprachiger-info-service.html\n\n! Зелений паспорт для вакцинації і зелений паспорт для страхування автомобіля – це різні речі"
                        },
                        {
                            question: "Тестування на коронавірус",
                            answer: "Безкоштовні тести** на коронавірус проводяться в Гуманітарному центрі прибуття Відня (Engerthstraße 267-269, 1020 Відень). Інші можливості зробити тест на коронавірус Ви знайдете за посиланням: https://coronavirus.wien.gv.at/faq-english/#Testangebote\n" +
                                "\n" +
                                "Треба зареєструватись за посиланням: https://app.wien.gv.at/covidtestanmeldung/\n" +
                                "\n" +
                                "Тестуватись можна не маючи австрійського медичного страхування.\n"
                        },
                        {
                            question: "Вакцинація",
                            answer: "Детальну інформацію про вакцинацію, дії у випадку підозри на захворювання коронавірусом та поточні обмеження ви можете знайти тут - https://www.integrationsfonds.at/coronainfo/ua/"
                        },
                    ]
                }
            ]
        },
        {
            name: CategoryName.PETS,
            description: "У цьому розділі надана інформація про допомогу тваринам",
            subCategory: [
                {
                    name: "🐱 Допомога для тварин",
                    questions: [
                        {
                            question: "Екстренна допомога",
                            answer: "Цілодобова служби екстреної допомоги тваринам\n" +
                                "+43 1 699 24 80\n"
                        },
                        {
                            question: "Захист тварин Австрії",
                            answer: "Товариство захисту тварин Австрії (німецькою)\n" +
                                "https://www.tierschutz-austria.at"
                        },
                        {
                            question: "Організація Volkshilfe",
                            answer: "Volkshilfe підтримує біженців у догляді за тваринами:\n" +
                                "\n" +
                                "• Корми та обладнання для тварин\n" +
                                "• Ветеринарна допомога\n" +
                                "• Розміщення тварин, якщо вони не допускаються до тимчасового місця проживання біженців\n" +
                                "\n" +
                                "Телефон: +43 676 878 445 14 (з понеділка по неділю з 8:00 до 20:00)\n" +
                                "\n" +
                                "Електронна пошта: agft@volkshilfe-wien.at\n"
                        },
                        {
                            question: "Безкоштовна ветеринарна допомога",
                            answer: "Neunerhaus пропонує безкоштовну ветеринарну допомогу.\n" +
                                "https://www.neunerhaus.at/hilfe/tier/" +
                                "Якщо хтось приїхав з тваринами і потрібна допомога тут лікують безкоштовно:\n" +
                                "Це Tierambulanz на Wasserpark, 1210 Wien.\n" +
                                "\n" +
                                "1. http://tierambulanz-am-wasserpark.at/\n" +
                                "Languages: German, English, Hand & Foot\n" +
                                "\n" +
                                "2. https://www.tierquartier.at/ueber-uns/\n" +
                                "\n" +
                                "Допомога конкретно з папугами: 0660 5560800 or office@papageienschutz.org\n"
                        },
                    ]
                }
            ]
        },
        {
            name: CategoryName.JOBS,
            description: "У розділі Робота Ви можете знайти інформацію щодо пошуку роботи",
            subCategory: [
                {
                    name: "💼 Пошук роботи",
                    questions: [
                        {
                            question: "Австрійський Центр Зайнятості (AMS)",
                            answer: "Інформація українською від австрійської служби зайнятості (AMS):\n" +
                                "https://www.ams.at/arbeitsuchende/arbeiten-in-oesterreich-und-der-eu/ukraine\n"
                        },
                        {
                            question: "Загальні ресурси",
                            answer: "https://www.willhaben.at/jobs/\n" +
                                "https://www.karriere.at/jobs/platform"
                        },
                        {
                            question: "Ресурси для українців",
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
                            question: "Англомовна робота в Австрії",
                            answer: "https://englishjobsearch.at/](https://englishjobsearch.at/\n" +
                                "https://www.entaincareers.com/jobs/?Keywords=&IndustryID=&VacancyTypeID=&Postcode=&radius=40&LocationID=1980&LocationID=#"
                        },
                        {
                            question: "Facebook/Telegram",
                            answer: "Работа в Австрии (Facebook group)\n" +
                                "https://www.facebook.com/groups/jobinaustria/\n" +
                                "Робота для українських архітекторів/ок та дизайнерів/ок\n" +
                                "https://forms.office.com/pages/responsepage.aspx?id=JObcZn8a6U6Gh63Q9C8VfnOQvu8EfD5Fn_1J0ofv-gtUNURYVUowUDZFOVE3S1dUTUJIMkRERENSNiQlQCN0PW" +
                                "Работа в Австрии, вакансии (Facebook group)\n" +
                                "https://www.facebook.com/groups/dawairabota/\n" +
                                "Канал в телеграмі по пошуку роботи в Європі\n" +
                                "https://t.me/outjob\n" +
                                "Ви можете вказати свій нікнейм у телеграмі та послуги, які ви можете надавати:\n" +
                                "https://t.me/workadojobs/1241" +
                                "Вакансії в галузі IT та креативних індустрій:\n" +
                                "https://t.me/casesjobs" +
                                "Прогресивні вакансії в Україні:\n" +
                                "https://t.me/lobbyx" +
                                "Креативні вакансії в Україні:\n" +
                                "https://t.me/cresume"
                        },
                    ]
                }
            ]
        },
        {
            name: CategoryName.STUDYING,
            description: "Тут надана інформація про школи та садки, курси німецької, підтримку науковців та розваги для дітей",
            subCategory: [
                {
                    name: "🏫 Школи та дитячі садки",
                    questions: [
                        {
                            question: "Український навчальний центр у Відні",
                            answer: "Український Навчальний Центр у Відні розпочав свою роботу 1 квітня 2022 року. В закладі навчаються 120 дітей. Професійні педагоги допомагають учням 10-го та 11-го класів закінчити навчальний рік та підготуватися до вступу в університет або визначитися з подальшим шляхом. Центр працюватиме до кінця серпня 2022 року.\n" +
                                "Зі всіх питань звертайтеся, будь ласка, за імейлом: uec-vienna@interface-wien.at\n" +
                                "Адреса: Tegetthoffstraße 1, 1010 Wien  (5 поверх)\n" +
                                "http://interface-wien.at/\n"
                        },
                        {
                            question: "Суботня українська школа",
                            answer: "https://ukr-schule.at/uk\n" +
                                "Адреса: Beethoven Platz 1, 1010 Wien\n" +
                                "Контактні телефони (щодня з 09:00 до 20:00): +43 676 674 03 77 and +43 664 354 69 17\n" +
                                "Директорка - Анна Крачковська: direktor@ukr-schule.at"
                        },
                        {
                            question: "Інтеграційна школа у Відні",
                            answer: "Інтеграційна школа призначена полегшити вступ мігрантів у трудове життя. Курси німецької мови підготують до навчання німецькою мовою. Школа має початкові, середно-освітні, вищі та політехнічні класи. Також надається підтримка людям, які не мають фінансової можливості та доступу відвідувати культурні та спортивні заходи.\n" +
                                "Для реєстрації надішліть ваше ім'я та прізвище, номер телефону, адресу прописки у Відні. Відповіді на питання також можна отримати за адресою: ukraine.help.school@gmx.at\n"
                        },
                        {
                            question: "Австрійська державна школа",
                            answer: "Ви можете написати мейл на адресу marina.bernatovic@bildung-wien.gv.at\n" +
                                "В мейлі вкажіть ім’я дитини, дату народження та адресу проживання.\n" +
                                "Інформацію для сімей з дітьми шкільного віку можна знайти на сайті управління освіти у Відня:: bildung-wien.gv.at/service/Krieg-in-der-Ukraine\n" +
                                "Інформаційний лист від управління освіти у Відні для \"новоприбулих сімей у Відні\" українською мовою:\nbildung-wien.gv.at" +
                                "Пошук місць у дитячих садочках Відня\n" +
                                "https://start.wien.gv.at/ukraine/ua/kindergartenplatz"
                        },
                    ]
                },
                {
                    name: "🇦🇹 Курси німецької мови",
                    questions: [
                        {
                            question: "Безкоштовний курс німецької від українця",
                            answer: "Безкоштовний курс німецької від Michael Babytsch\n" +
                                "https://t.me/deutschfueraliens_kurs\n" +
                                "https://www.instagram.com/deutsch_fuer_aliens_/\n"
                        },
                        {
                            question: "Безкоштовні курси німецької мови",
                            answer: "Безкоштовні курси німецької мови\n" +
                                "Telegram: +43 664 488 74 86\n" +
                                "Instagram: @language__guide\n" +
                                "Форма реєстрації:\nhttps://docs.google.com/forms/d/1sW1wgCkOm6DW_SuVpXIdQexaFxDErWT7wcY2B85DI0w/edit?ts=6220c1b7"
                        },
                        {
                            question: "Запис на безкоштовні курси",
                            answer: "Запис на безкоштовні курси німецької мови для біжанців\n" +
                                "    \n" +
                                "     Форма реєстрації: https://docs.google.com/forms/d/1sW1wgCkOm6DW_SuVpXIdQexaFxDErWT7wcY2B85DI0w/\n" +
                                "     Telegram: https://t.me/languageguidevienna\n" +
                                "     Заняття німецькою для дітей у Відні: https://viagerman.com/student/\n" +
                                "     Допомога початківцям із самостійним вивченням: https://www.kleine-deutsch-hilfe.at/Start-UA.htm"
                        },
                    ]
                },
                {
                    name: "🎓 Підтримка науковців",
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
                            question: "Цільові стипендії",
                            answer: "Гумбольдт надає цільові стипендії\n" +
                                "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/philipp-schwartz-initiative\n"
                        },
                        {
                            question: "Допомога студентам та науковцям",
                            answer: "Заходи допомоги студентам та науковцям із зон бойових дій\n" +
                                "https://www.tuwien.at/tu-wien/aktuelles/news/news/hilfsmassnahmen-fuer-studierende-und-wissenschaftler-innen-aus-kriegsgebieten"
                        },
                        {
                            question: "#ScienceForUkraine",
                            answer: "Наша місія – збирати та поширювати інформацію про можливості підтримки на університетському, національному та міжнародному рівнях для аспірантів та науковців, які безпосередньо пов’язані з українською академічною установою.\n" +
                                "https://scienceforukraine.eu/"
                        },
                        {
                            question: "Грошова допомога від студентів OH",
                            answer: "Можна отримати грошову допомогу від OH студентам:\n" +
                                "https://www.oeh.ac.at/soforthilfe?fbclid=IwAR0r7EhgNA5hyosCZbJhdQ-tZI6GbWS9YqPu4sTVoek3MoR8Xx1HrwvBHO8"
                        },
                    ]
                },
                {
                    name: "👧 Діти і розваги",
                    questions: [
                        {
                            question: "Догляд за дітьми ",
                            answer: "У Гуманітарному центрі прибуття Відня (Engerthstraße 267-269, 1020 Відень) пропонується погодинний догляд за дітьми."
                        },
                        {
                            question: "Екскурсії",
                            answer: "Безкоштовні екскурсії Віднем\n" +
                                "https://t.me/storiesvienna"
                        },
                        {
                            question: "Panchenko Dance Studio",
                            answer: "Спортивні танці українською мовою для дітей-переселенців,\n" +
                                "\n" +
                                "Констянтин Панченко\n" +
                                "https://www.facebook.com/groups/2765767900206746/user/100007530610697,\n" +
                                "Надія Панченко\n" +
                                "https://www.facebook.com/groups/2765767900206746/user/100001600452334\n" +
                                "\n" +
                                "Вівторок 15:45 (5-8 років)\n" +
                                "Пʼятниця 19:15 (9-14 років)\n" +
                                "Всіх дітей, які мають бажання продовжити або почати займатись спортивними бальними танцями, запрошуємо до нашої студії. Ці заняття будуть безкоштовні для дітей-переселенців. Тренування проводимо українською мовою!\n" +
                                "Для реестрації надсилайте повідомлення з ім‘ям та прізвищем дитини, а також роком народження.\n" +
                                "Сподіваємось, що ми зможемо допомогти дітям відволіктись від буденних проблем.\n" +
                                "☎️ +4367764013797\n"
                        },
                        {
                            question: "Творимо добро  (Telegram)",
                            answer: "Чат для батьків, які хочуть привести своїх діток трошки порозважатись, та відволіктись від війни. Ми будемо малювати, гратись, танцювати, ліпити з пластиліну 3 рази на тиждень з 10 до 13 години.\n" +
                                "https://t.me/+pRcItmLYfMYyZWIy"
                        },
                        {
                            question: "Діти: Together for the kids (Vienna) (Telegram)",
                            answer: "https://t.me/+TAPj0F7e4xg1ODg0"
                        },
                        {
                            question: "Ресурси для дітей",
                            answer: "Ділимось корисними ресурсами, що допоможуть батькам відволікти діток під час перебування в укритті ⬇️" +
                                "\n🔰Видавництво Ранок БЕЗКОШТОВНО надає дитячі книги в електронному форматі! Просто заходьте на сайт БараБука" +
                                "(https://bit.ly/35pwNKw) та завантажуйте, щоб мати змогу читати з дітками навіть без доступу до Інтернету!" +
                                "\n🔰У Telegram-каналі Павлуша і Ялуша  (https://t.me/pavlushaiyava) можна завантажити аудіоказки, які також будуть доступні без Інтернету" +
                                "\n🔰Ще один Telegram-канал з аудіоказаками https://t.me/kazky_ukr" +
                                "українською. Усі аудіоказки можна завантажити і слухати без зв’язку." +
                                "\n🔰 Yakaboo відкрили безкоштовний доступ до аудіо- та електронних книжок в мобільному додатку (https://bit.ly/3CcZG92)." +
                                "\n🔰 Нова Українська Школа організувала серію пізнавальних онлайн-зустрічей із вчителями (https://bit.ly/3sDR87P). Розклад зустрічей оновлюється щодня." +
                                "\n🔰 MEGOGO відкрили безкоштовний доступ до мультиків, фільмів та аудіоказок (https://bit.ly/35KLwjg)." +
                                "\n🔰 Майже три десятки електронних книг Видавництва Старого Лева для діток (http://bitly.ws/oQDE)\n" +
                                "можна завантажити безкоштовно.\n" +
                                "\nДжерело: Дитячий психолог https://www.facebook.com/dytyachyjpsyholog/posts/1946017022261223\n" +
                                "і Видавництво Старого Лева\n" +
                                "https://www.facebook.com/starlev\n" +
                                "\n" +
                                "Заняття з йоги (щоденно з 11:00 до 12:00):\n" +
                                "https://instagram.com/dasprema.wien\n"
                        },
                    ]
                }
            ]
        },
        {
            name: CategoryName.TRANSPORTATION,
            description: "У розділі Транспорт Ви можете знайти інформацію щодо безкоштовного проїзду, дороги в Австрію та паркування",
            subCategory: [
                {
                    name: "🚄 Доїхати до Австрії",
                    questions: [
                        {
                            question: "Різноманітні групи/сайти щодо перевезень",
                            answer: "Various groups for transportation:\n" +
                                "\n • Транспорт (Telegram)\nhttps://t.me/+Vd-r0QaoV4c3MTY8\n" +
                                "\n • Запросити транспорт до Австрії - Team Project 316 (форма)\nhttps://airtable.com/shrDjoqyEP4FqDbMi\n" +
                                "\n • Переглянути транспортні пропозиції  - Team Project 316 (таблиця)\n" +
                                "https://airtable.com/shrDHDOfIF8GJH6ZU\n" +
                                "\n • warhelp.eu - Заберемо вас з кордону (сайт)\n" +
                                "https://warhelp.eu/needs/\n" +
                                "\n • Помогаем уехать (Telegram group) - Чат поддержки тех, кто уезжает из Украины прямо сейчас и нуждается в помощи \n" +
                                "https://t.me/huiiivoiiine\n" +
                                "\n • Кордони України (Telegram)\n" +
                                "https://t.me/+P5Toy99Os203YjVi\n" +
                                "\n • Моніторинг черг на кордонах (таблиця)\nhttps://docs.google.com/spreadsheets/d/e/2PACX-1vTmKNAxZn2cPpBqPHnRx9Hc_GPzfi7U92h05hkNuES6pA8l7IcbfdRELMkTbWGDF\n" +
                                "\n • Помощь на украинско-венгерской Границе (Telegram)\n" +
                                "https://t.me/helpinhungary\n" +
                                "\n • До Вены из Польши, Венгрии, Словакии (Telegram)\n" +
                                "https://t.me/transferToVienna\n"
                        },
                        {
                            question: "Автобус",
                            answer: "Carrier (Перевізник):  Flixbus" +
                                "\n" +
                                "\n Flixbus безкоштовно перевозить українців з польської границі в Європу." +
                                "Заявки на білети приймаються онлайн або через електронну пошту" +
                                "\nhttps://www.autocentre.ua/news/flixbus-besplatno-perevozit-ukraintsev-ot-polskoj-granitsy-v-evropu-1390372.html"
                        },
                        {
                            question: "Залізниця",
                            answer: "🇦🇹 Австрійська залізниця - https://www.oebb.at/en/" +
                                "\nІнформація для українців - https://www.oebb.at/de/neuigkeiten/ukraine-hilfe" +
                                "\n" +
                                "\n🇵🇱 Польська залізниця - https://rozklad-pkp.pl/" +
                                "\n • Перемишль (прямий поїзд о 10:40)\n" +
                                "Przemyśl Główny - Wien Hbf\n" +
                                "\n • Варшава (прямий поїзд о 06:09, 14:20, 19:49)\n" +
                                " Warsaw Central - Wien Hbf \n" +
                                "\n• Катовіце (прямий поїзд о 00:02, 04:55, 09:04, 14:54, 17:06)\n" +
                                "Katowice - Wien Hbf\n" +
                                "\n" +
                                "\n🇭🇺 Угорська залізниця - https://jegy.mav.hu/" +
                                "\n • Захонь (прямий поїзд о 04:05)" +
                                "\nZáhony - Wien Hauptbahnhof (Bécs)\n" +
                                "\n • Будапешт (прямі поїзди щогодини з 05:40 до 20:40)" +
                                "\nBudapest-Keleti - Wien Hauptbahnhof (Bécs)\n" +
                                "\n" +
                                "\n🇸🇰 Словацька залізниця https://www.zssk.sk/en/" +
                                "\n • Кошиці (Кошіце) (прямий поїзд о 07:11)\n" +
                                "Kosice - Wien Hbf\n"
                        },
                        {
                            question: "Автомобілістам",
                            answer: "З 18.03.2022 легкові автомобілі з українськими номерними знаками тимчасово звільнені від сплати дорожніх зборів за проїзд на австрійських автомагістралях та швидкісних дорогах (віньєти)." +
                                "\nДжерело:\nhttps://www.asfinag.at/ueber-uns/presse/pressemeldungen/unburokratische-hilfe-fur-fluchtende-aus-der-ukraine-keine-vignettenpflicht-fur-pkw-mit-ukrainischen-kennzeichen/"
                        },
                        {
                            question: "Для перевізників з вантажівками",
                            answer: "📣 До уваги перевізників з вантажівками:" +
                                "\nАвстрія🇦🇹 надала можливість здійснювати перевезення гуманітарних вантажів до України🇺🇦 як в двосторонньому сполученні, так і в транзитному, без використання дозволів та оплати дорожніх зборів за проїзд на австрійських автомагістралях та швидкісних дорогах." +
                                "❗️ Для виконання такого перевезення необхідно заповнити заявку, форми яких розміщено за посиланням та відправити їх на електронну адресу \n👉 ausnahmenahme@asfinag.at" +
                                "\n" +
                                "\n☝️ Зазначимо, звільнення від сплати дорожніх зборів при перевезенні гуманітарних вантажів  стосується всіх типів транспортних засобів – від легкових до вантажівок та автобусів." +
                                "\nДжерело:\nhttps://www.asfinag.at/maut-vignette/mautordnung/"
                        },
                    ]
                },
                {
                    name: "🚍 Транспорт",
                    questions: [
                        {
                            question: "Безкоштовний проїзд",
                            answer: "• Залізницею Австрії (ÖBB) до 30 червня \nДжерело: https://www.unsereoebb.at/en/artikel/2022/vertriebenen-helfen" +
                                "\n" +
                                "\n • Громадським транспортом Відня (Wiener Lienien – метро, автобуси, трамваї) до 30 червня \nДжерело: https: //www.wienerlinien.at/unterst%C3%BCtzung-f%C3%BCr-menschen-die-aus-der- ukraine-gefl% C3% BCchtet-sind" +
                                "\n" +
                                "\n • Автобусами та поїздами транспортного об’єднання східного регіону (VOR)  \nДжерело: https://www.vor.at/aktuelles/news/ukraine-fluechtlinge-koennen-alle-verkehrsmittel-im-vor-gratis-nutzen" +
                                "\n" +
                                "\n • Від оплати дорожнього мита також звільнені авто з українськими номерами  \nДжерело: https: //www.asfinag.at/ueber-uns/presse/pressemeldungen/unburokratische-hilfe-fur-fluchtende-aus-der-ukraine-keine-vignettenpflicht- fur-pkw-mit-ukrainischen-kennzeichen/" +
                                "\n • З 1 червня автівкам з українськими номерами для парківки у Відні необхідний Parkpickerl https://www.wien.gv.at/amtshelfer/verkehr/parken/kurzparkzone/parkpickerl.html."
                        },
                        {
                            question: "Планування подорожі",
                            answer: "\n • Мобільний додаток\nhttps://www.wienerlinien.at/wienmobil-app" +
                                "\n" +
                                "\n • Сайт \"Від A до Б\nhttps://app.wien.gv.at/covidtestanmeldung/" +
                                "\n" +
                                "\n • Служба залізниці Scotty\nhttps://fahrplan.oebb.at/webapp/"
                        },
                    ]
                },
                {
                    name: "🅿️ Паркування у Відні",
                    questions: [
                        {
                            question: "Зони короткочасної стоянки (Kurzparkzone)",
                            answer: "Майже вся територія Відня є зоною короткочасної стоянки, на яку поширюються такі правила:" +
                                "\n- з понеділка по п'ятницю з 9 до 22 години (за винятком святкових днів)\n" +
                                "- максимальна тривалість паркування становить **дві години\n" +
                                "- на карті міста Відня https://www.wien.gv.at/stadtplan/grafik.aspx?lang=de-AT&bookmark=6VwWRWh6s0XGtM5GvxgdRu5RpllVn3Cmmkeu25v6MZj6Cg-b-b можете знайти спеціально позначені паркувальні зони\n" +
                                "На торгових вулицях Відня можуть діяти різні правила короткочасної стоянки, які позначені відповідними знаками.\n" +
                                "Правила, що регулюють короткочасну стоянку, не поширюються на одноколійні транспортні засоби, такі як мопеди і мотоцикли.\m" +
                                "За загальними правилами паркуватися можна **безкоштовно** з 22:00 до 9:00 (вночі) у будні дні, і цілодобово у вихідні та святкові дні, якщо інше не вказано відповідним дорожнім знаком. До 15-го березня діє виключення з правил для автомобілів з українськими номерами (див. перший абзац на цій сторінці).\n"
                        },
                        {
                            question: "## Паркувальні талони і оплата телефоном",
                            answer: "Паркувальні талони видаються в паперовому вигляді і в електронному вигляді за допомогою :\nhttps://www.handyparken.at/" +
                                "Пункти продажу паркувальних талонів:\n" +
                                "- Тютюнові кіоски\n" +
                                "- Автомати з продажу сигарет\n" +
                                "- Автозаправні станції\n" +
                                "- Поштові відділення\n" +
                                "- Пункти попереднього продажу Віденських ліній (Wiener Linien)\n" +
                                "- Автомати з продажу квитків Віденських ліній (Wiener Linien)\n" +
                                "- Віденський Центр туристичної інформації\n" +
                                "💵 Ціна за 30 хвилин: 1,10 євро\n" +
                                "У зонах короткочасної стоянки Вам з першої хвилини паркування необхідний паркувальний талон, навіть для коротких зупинок, наприклад, щоб вивантажити багаж. У вашому розпорядженні є безкоштовні 15-хвилинні паркувальні талони, які можна отримати в готелі, в тютюнових кіосках, в центрі туристичної інформації, а також за допомогою мобільного телефону https://www.handyparken.at/. Безкоштовні 15-хвилинні паркувальні талони не можна комбінувати з іншими видами паркувальних талонів." +
                                "Паркувальний талон повинен бути повністю заповнений і поміщений на добре доступному для огляду місці під лобовим склом. При використанні декількох паркувальних талонів одночасно на кожному талоні має бути вказано один і той же час приїзду." +
                                "Водії з обмеженими можливостями повинні мати паркувальний талон згідно §29B Правил дорожнього руху 1960 (Європейський паркувальний талон), щоб паркувати автомобілі у віденських зонах короткочасної стоянки необмежену кількість часу. Талон слід помістити на добре доступному для огляду місці під лобовим склом. Це правило також поширюється на інвалідів, які є пасажирами."
                        },
                        {
                            question: "Парковка для резидентів",
                            answer: "У всіх районах Відня є паркувальні місця, призначені спеціально для резидентів, які не можна займати навіть з дійсним паркувальним талоном (порушникам загрожує штраф!). Дані зони позначені знаками, що забороняють зупинку і парковку, з додатковими табличками «за винятком автомобілів з паркувальними наклейками для Х-го району, а також автомобілів для інвалідів (символ інвалідного візка)». Увага: заборона паркування також діє і у вихідні та святкові дні!"
                        },
                        {
                            question: "Стоянки та гаражі Park & Ride",
                            answer: " Для відвідування міста рекомендуємо вам пересісти з автомобіля в громадський транспорт. На околиці міста можна знайти можливість недорогої парковки на віденських стоянках Park & Ride https://www.wien.info/en/travel-info/to-and-around/park-ride-354906 за ціною від 3,60 євро в день. Всі стоянки Park & Ride знаходяться в безпосередній близькості від метро, тому ви зможете швидко і зручно дістатися до центру міста.\n" +
                                "У центрі міста або недалеко від центру у вашому розпорядженні знаходиться щільна мережа гаражів за більш високими тарифами. Огляд всіх паркувальних гаражів і стоянок Відня ви знайдете на сайті \nwww.parken.at/wien"
                        },
                    ]
                }
            ]
        }
    ]
}