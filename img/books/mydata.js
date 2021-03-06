const books = [
 {
"thumb_url": "klienty-na-vsyu-zhizn",
"name": "Клиенты на всю жизнь",
"desc": "",
"price": 69700,
"id": "klienty-na-vsyu-zhizn",
"type": "marketing"
},
{
"thumb_url": "tsennye-resheniya",
"name": "Ценные решения",
"desc": "Как работать с ценами, чтобы прибыль росла",
"price": 63700,
"id": "tsennye-resheniya",
"type": "marketing"
},
{
"thumb_url": "45-tatuirovok-prodavana",
"name": "45 татуировок продавана",
"desc": "Правила для тех, кто продаёт и управляет продажами",
"price": 67600,
"id": "45-tatuirovok-prodavana",
"type": "business"
},
{
"thumb_url": "dnevnik-khudozhnika-naturalista",
"name": "Дневник художника-натуралиста",
"desc": "Как рисовать животных, птиц, растения и пейзажи",
"price": 169500,
"id": "dnevnik-khudozhnika-naturalista",
"type": "creativity"
},
{
"thumb_url": "otkrytoe-myshlenie",
"name": "Открытое мышление",
"desc": "Как выйти за пределы своей точки зрения",
"price": 62500,
"id": "otkrytoe-myshlenie",
"type": "business"
},
{
"thumb_url": "ne-delay-eto",
"name": "Не делай это",
"desc": "Тайм-менеджмент для творческих людей",
"price": 85500,
"id": "ne-delay-eto",
"type": "creativity"
},
{
"thumb_url": "ya-khochu-bolshe-idey",
"name": "Я хочу больше идей!",
"desc": "Более 100 техник и упражнений для развития творческого мышления",
"price": 66700,
"id": "ya-khochu-bolshe-idey",
"type": "creativity"
},
{
"thumb_url": "urban-jungle",
"name": "Urban Jungle",
"desc": "Как создать уютный интерьер с помощью растений",
"price": 80700,
"id": "urban-jungle",
"type": "creativity"
},
{
"thumb_url": "na-kryuchke",
"name": "На крючке",
"desc": "Как создавать продукты, формирующие привычки",
"price": 59500,
"id": "na-kryuchke",
"type": "marketing"
},
{
"thumb_url": "vmeste-bystree",
"name": "Вместе быстрее",
"desc": "12 принципов командной эффективности",
"price": 102500,
"id": "vmeste-bystree",
"type": "business"
},
{
"thumb_url": "iskrenniy-servis",
"name": "Искренний сервис",
"desc": "Как мотивировать сотрудников сделать для клиента больше, чем достаточно. Даже когда шеф не смотрит",
"price": 63700,
"id": "iskrenniy-servis",
"type": "marketing"
},
{
"thumb_url": "okhotnik-za-ideyami",
"name": "Охотник за идеями",
"desc": "Как найти дело жизни и сделать мир лучше",
"price": 67100,
"id": "okhotnik-za-ideyami",
"type": "business"
},
{
"thumb_url": "psikhologiya",
"name": "Психология",
"desc": "Люди, концепции, эксперименты",
"price": 68800,
"id": "psikhologiya",
"type": "science"
},
{
"thumb_url": "tramp-i-epokha-postpravdy",
"name": "Трамп и эпоха постправды",
"desc": "",
"price": 72200,
"id": "tramp-i-epokha-postpravdy",
"type": "science"
},
{
"thumb_url": "biznes-kak-igra",
"name": "Бизнес как игра",
"desc": "Грабли российского бизнеса и неожиданные решения",
"price": 69700,
"id": "biznes-kak-igra",
"type": "business"
},
{
"thumb_url": "udovolstvie-ot-x",
"name": "Удовольствие от x",
"desc": "Увлекательная экскурсия в мир математики от одного из лучших преподавателей в мире",
"price": 80500,
"id": "udovolstvie-ot-x",
"type": "science"
},
{
"thumb_url": "analiticheskaya-kultura",
"name": "Аналитическая культура",
"desc": "От сбора данных до бизнес-результатов",
"price": 108400,
"id": "analiticheskaya-kultura",
"type": "business"
},
{
"thumb_url": "marketing-ot-potrebitelya",
"name": "Маркетинг от потребителя",
"desc": "",
"price": 121500,
"id": "marketing-ot-potrebitelya",
"type": "marketing"
},
{
"thumb_url": "strategiya-e-mail-marketinga",
"name": "Стратегия e-mail-маркетинга",
"desc": "Эффективные рассылки для вашего бизнеса",
"price": 72200,
"id": "strategiya-e-mail-marketinga",
"type": "marketing"
},
{
"thumb_url": "ogilvi-o-reklame",
"name": "Огилви о рекламе",
"desc": "",
"price": 129600,
"id": "ogilvi-o-reklame",
"type": "marketing"
},
{
"thumb_url": "obnovit-stranitsu",
"name": "Обновить страницу",
"desc": "О трансформации Microsoft и технологиях будущего от первого лица",
"price": 82000,
"id": "obnovit-stranitsu",
"type": "business"
},
{
"thumb_url": "putevoditel-po-lzhi",
"name": "Путеводитель по лжи",
"desc": "Критическое мышление в эпоху постправды",
"price": 76100,
"id": "putevoditel-po-lzhi",
"type": "science"
},
{
"thumb_url": "risovyy-shturm-i-esche-21-sposob-myslit-nestandartno",
"name": "Рисовый штурм и еще 21 способ мыслить нестандартно",
"desc": "",
"price": 82900,
"id": "risovyy-shturm-i-esche-21-sposob-myslit-nestandartno",
"type": "creativity"
},
{
"thumb_url": "sdelano-chtoby-prilipat",
"name": "Сделано, чтобы прилипать",
"desc": "Почему одни идеи выживают, а другие умирают",
"price": 71400,
"id": "sdelano-chtoby-prilipat",
"type": "creativity"
},
{
"thumb_url": "gibkiy-um",
"name": "Гибкий ум",
"desc": "Как видеть вещи иначе и думать нестандартно",
"price": 80500,
"id": "gibkiy-um",
"type": "creativity"
},
{
"thumb_url": "zarazitelnyy",
"name": "Заразительный",
"desc": "Психология сарафанного радио. Как продукты и идеи становятся популярными",
"price": 70100,
"id": "zarazitelnyy",
"type": "marketing"
},
{
"thumb_url": "kak-privesti-dela-v-poryadok",
"name": "Как привести дела в порядок",
"desc": "Искусство продуктивности без стресса",
"price": 76700,
"id": "kak-privesti-dela-v-poryadok",
"type": "business"
},
{
"thumb_url": "sozdavaya-bestseller",
"name": "Создавая бестселлер",
"desc": "Шаг за шагом к захватывающему сюжету, сильной сцене и цельной композиции",
"price": 62500,
"id": "sozdavaya-bestseller",
"type": "creativity"
},
{
"thumb_url": "marketing-v-sotsialnykh-setyakh",
"name": "Маркетинг в социальных сетях",
"desc": "",
"price": 73500,
"id": "marketing-v-sotsialnykh-setyakh",
"type": "marketing"
},
{
"thumb_url": "nudge",
"name": "Nudge",
"desc": "Архитектура выбора",
"price": 86500,
"id": "nudge",
"type": "science"
},
{
"thumb_url": "imarketing",
"name": "iМаркетинг",
"desc": "Работаем по системе",
"price": 69700,
"id": "imarketing",
"type": "marketing"
},
{
"thumb_url": "gen-direktora",
"name": "Ген директора",
"desc": "17 правил позитивного менеджмента по-русски",
"price": 73100,
"id": "gen-direktora",
"type": "business"
},
{
"thumb_url": "psikhologiya-ubezhdeniya",
"name": "Психология убеждения",
"desc": "50 доказанных способов быть убедительным",
"price": 80500,
"id": "psikhologiya-ubezhdeniya",
"type": "marketing"
},
{
"thumb_url": "fioletovaya-korova",
"name": "Фиолетовая корова",
"desc": "Сделайте свой бизнес выдающимся",
"price": 67600,
"id": "fioletovaya-korova",
"type": "marketing"
},
{
"thumb_url": "tsvetovoy-kvest-goroda",
"name": "Цветовой квест. ГОРОДА",
"desc": "30 непростых картин по номерам",
"price": 63500,
"id": "tsvetovoy-kvest-goroda",
"type": "creativity"
},
{
"thumb_url": "akvarelnye-peyzazhi",
"name": "Акварельные пейзажи",
"desc": "Основы, техники, эксперименты",
"price": 82000,
"id": "akvarelnye-peyzazhi",
"type": "creativity"
},
{
"thumb_url": "dao-fiziki",
"name": "Дао физики",
"desc": "Исследование параллелей между современной физикой и восточной философией",
"price": 60800,
"id": "dao-fiziki",
"type": "science"
},
{
"thumb_url": "sozdayte-lichnyy-brend",
"name": "Создайте личный бренд",
"desc": "Как находить возможности, развиваться и выделяться",
"price": 55200,
"id": "sozdayte-lichnyy-brend",
"type": "creativity"
},
{
"thumb_url": "sdvig",
"name": "Сдвиг",
"desc": "Как выжить в стремительном будущем",
"price": 85000,
"id": "sdvig",
"type": "science"
},
{
"thumb_url": "pyataya-distsiplina",
"name": "Пятая дисциплина",
"desc": "Искусство и практика обучающейся организации",
"price": 120700,
"id": "pyataya-distsiplina",
"type": "business"
},
{
"thumb_url": "shkola-ceo",
"name": "Школа CEO",
"desc": "Мастер-классы от 20 глобальных лидеров",
"price": 74400,
"id": "shkola-ceo",
"type": "business"
},
{
"thumb_url": "superpotrebiteli",
"name": "Суперпотребители",
"desc": "Кто это и почему они так важны для вашего бизнеса",
"price": 87500,
"id": "superpotrebiteli",
"type": "marketing"
},
{
"thumb_url": "kak-ustroena-ekonomika",
"name": "Как устроена экономика",
"desc": "",
"price": 73100,
"id": "kak-ustroena-ekonomika",
"type": "science"
},
{
"thumb_url": "dzen-kamera",
"name": "Дзен-камера",
"desc": "Шесть уроков творческого развития и осознанности",
"price": 84000,
"id": "dzen-kamera",
"type": "creativity"
},
{
"thumb_url": "liderstvo-i-samoobman",
"name": "Лидерство и самообман",
"desc": "Жизнь, свободная от шор",
"price": 63700,
"id": "liderstvo-i-samoobman",
"type": "business"
},
{
"thumb_url": "instrumenty-marketinga-dlya-otdela-prodazh",
"name": "Инструменты маркетинга для отдела продаж",
"desc": "«Оружие» для менеджеров по продажам до встречи с клиентами, на встрече и после встречи с ними",
"price": 67100,
"id": "instrumenty-marketinga-dlya-otdela-prodazh",
"type": "marketing"
},
{
"thumb_url": "kak-delaetsya-kino",
"name": "Как делается кино",
"desc": "",
"price": 61600,
"id": "kak-delaetsya-kino",
"type": "creativity"
},
{
"thumb_url": "glavnoe-v-istorii-iskusstv",
"name": "Главное в истории искусств",
"desc": "Ключевые работы, темы, направления, техники",
"price": 85000,
"id": "glavnoe-v-istorii-iskusstv",
"type": "creativity"
},
{
"thumb_url": "marketing-bez-byudzheta",
"name": "Маркетинг без бюджета",
"desc": "50 работающих инструментов",
"price": 117700,
"id": "marketing-bez-byudzheta",
"type": "marketing"
},
{
"thumb_url": "vzlom-marketinga",
"name": "Взлом маркетинга",
"desc": "Наука о том, почему мы покупаем",
"price": 83700,
"id": "vzlom-marketinga",
"type": "marketing"
},
{
"thumb_url": "smeshat-no-ne-vzbaltyvat",
"name": "Смешать, но не взбалтывать",
"desc": "Рецепты организации мероприятий",
"price": 79500,
"id": "smeshat-no-ne-vzbaltyvat",
"type": "marketing"
},
{
"thumb_url": "strategiya-golubogo-okeana",
"name": "Стратегия голубого океана",
"desc": "Как найти или создать рынок, свободный от других игроков",
"price": 97300,
"id": "strategiya-golubogo-okeana",
"type": "business"
},
{
"thumb_url": "puteshestviya-vo-vremeni",
"name": "Путешествия во времени",
"desc": "",
"price": 87000,
"id": "puteshestviya-vo-vremeni",
"type": "science"
},
{
"thumb_url": "osnovy-kalligrafii-i-letteringa",
"name": "Основы каллиграфии и леттеринга",
"desc": "",
"price": 58600,
"id": "osnovy-kalligrafii-i-letteringa",
"type": "creativity"
},
{
"thumb_url": "byt-nachalnikom-eto-normalno",
"name": "Быть начальником — это нормально",
"desc": "Пошаговый план, который поможет вам стать тем менеджером, в котором нуждается ваша команда",
"price": 73100,
"id": "byt-nachalnikom-eto-normalno",
"type": "business"
},
{
"thumb_url": "scrum",
"name": "Scrum",
"desc": "Революционный метод управления проектами",
"price": 87500,
"id": "scrum",
"type": "business"
},
{
"thumb_url": "golaya-ekonomika",
"name": "Голая экономика",
"desc": "Разоблачение унылой науки",
"price": 74400,
"id": "golaya-ekonomika",
"type": "science"
},
{
"thumb_url": "zarazitelnyy",
"name": "Заразительный",
"desc": "Психология сарафанного радио. Как продукты и идеи становятся популярными",
"price": 70100,
"id": "zarazitelnyy",
"type": "marketing"
},
{
"thumb_url": "kak-rozhdayutsya-emotsii",
"name": "Как рождаются эмоции",
"desc": "Революция в понимании мозга и управлении эмоциями",
"price": 108000,
"id": "kak-rozhdayutsya-emotsii",
"type": "science"
},
{
"thumb_url": "teoriya-igr",
"name": "Теория игр",
"desc": "Искусство стратегического мышления в бизнесе и жизни",
"price": 89500,
"id": "teoriya-igr",
"type": "science"
},
{
"thumb_url": "odurachennye-sluchaynostyu",
"name": "Одураченные случайностью",
"desc": "О скрытой роли шанса в бизнесе и жизни",
"price": 88500,
"id": "odurachennye-sluchaynostyu",
"type": "science"
},
{
"thumb_url": "komu-nuzhna-matematika",
"name": "Кому нужна математика?",
"desc": "Понятная книга о том, как устроен цифровой мир",
"price": 79500,
"id": "komu-nuzhna-matematika",
"type": "science"
},
{
"thumb_url": "zlye-samarityane",
"name": "Злые самаритяне",
"desc": "Миф о свободной торговле и секретная история капитализма",
"price": 89500,
"id": "zlye-samarityane",
"type": "science"
},
{
"thumb_url": "chelovek-reshayuschiy",
"name": "Человек решающий",
"desc": "Как построить организацию будущего, где решения принимает каждый",
"price": 64600,
"id": "chelovek-reshayuschiy",
"type": "business"
},
{
"thumb_url": "kak-ne-oshibatsya",
"name": "Как не ошибаться",
"desc": "Сила математического мышления",
"price": 98500,
"id": "kak-ne-oshibatsya",
"type": "science"
},
{
"thumb_url": "v-efire-sarafannoe-radio",
"name": "В эфире — сарафанное радио",
"desc": "Практическое руководство по рекомендательному маркетингу",
"price": 63700,
"id": "v-efire-sarafannoe-radio",
"type": "marketing"
},
{
"thumb_url": "marketing-na-100-remiks",
"name": "Маркетинг на 100%: ремикс",
"desc": "Как стать хорошим менеджером по маркетингу",
"price": 67600,
"id": "marketing-na-100-remiks",
"type": "marketing"
},
{
"thumb_url": "nepriyatie-peremen",
"name": "Неприятие перемен",
"desc": "Как преодолеть сопротивление изменениям и раскрыть потенциал организации",
"price": 82400,
"id": "nepriyatie-peremen",
"type": "business"
},
{
"thumb_url": "atomy-u-nas-doma",
"name": "Атомы у нас дома",
"desc": "Удивительная наука за повседневными вещами",
"price": 86500,
"id": "atomy-u-nas-doma",
"type": "science"
},
{
"thumb_url": "i-botaniki-delayut-biznes-1-2",
"name": "И ботаники делают бизнес 1+2",
"desc": "Удивительная история основателя «Додо Пиццы» Федора Овчинникова: от провала до миллиона",
"price": 71800,
"id": "i-botaniki-delayut-biznes-1-2",
"type": "business"
},
{
"thumb_url": "rabota-v-radost",
"name": "Работа в радость",
"desc": "Бизнес-модель будущего",
"price": 77300,
"id": "rabota-v-radost",
"type": "business"
},
{
"thumb_url": "neizbezhno",
"name": "Неизбежно",
"desc": "12 технологических трендов, которые определяют наше будущее",
"price": 97500,
"id": "neizbezhno",
"type": "science"
},
{
"thumb_url": "simpsony-i-ikh-matematicheskie-sekrety",
"name": "Симпсоны и их математические секреты",
"desc": "",
"price": 64600,
"id": "simpsony-i-ikh-matematicheskie-sekrety",
"type": "science"
},
{
"thumb_url": "prelomlenie",
"name": "Преломление",
"desc": "Наука видеть иначе",
"price": 97500,
"id": "prelomlenie",
"type": "science"
},
{
"thumb_url": "literaturnyy-master-klass",
"name": "Литературный мастер-класс",
"desc": "Учитесь у Толстого, Чехова, Диккенса, Хемингуэя и многих других современных и классических авторов",
"price": 77300,
"id": "literaturnyy-master-klass",
"type": "creativity"
},
{
"thumb_url": "vse-nachalniki-delayut-eto",
"name": "Все начальники делают это",
"desc": "Пошаговое руководство по решению (почти) всех проблем менеджера",
"price": 74400,
"id": "vse-nachalniki-delayut-eto",
"type": "business"
}
];
// export default data;
