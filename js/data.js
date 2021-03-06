const books = [{
  "thumb_url": "/books/thumb/klienty-na-vsyu-zhizn",
  "name": "Клиенты на всю жизнь",
  "desc": "",
  "price": 69700,
  "id": "klienty-na-vsyu-zhizn",
  "type": "marketing",
  "author":"Карл Сьюэлл",
  "publish": "МИФ",
  "year": "2010",
  "bind": "мягкий",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/tsennye-resheniya",
  "name": "Ценные решения",
  "desc": "Как работать с ценами, чтобы прибыль росла",
  "price": 63700,
  "id": "tsennye-resheniya",
  "type": "marketing",
  "author":"Роман Тарасенко",
  "publish": "МИФ",
  "year": "2012",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/45-tatuirovok-prodavana",
  "name": "45 татуировок продавана",
  "desc": "Правила для тех, кто продаёт и управляет продажами",
  "price": 67600,
  "id": "45-tatuirovok-prodavana",
  "type": "business",
  "author":"Максим Батырев",
  "publish": "АСТ",
  "year": "2010",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/dnevnik-khudozhnika-naturalista",
  "name": "Дневник художника-натуралиста",
  "desc": "Как рисовать животных, птиц, растения и пейзажи",
  "price": 169500,
  "id": "dnevnik-khudozhnika-naturalista",
  "type": "creativity",
  "author":"Джон Лоуз",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/otkrytoe-myshlenie",
  "name": "Открытое мышление",
  "desc": "Как выйти за пределы своей точки зрения",
  "price": 62500,
  "id": "otkrytoe-myshlenie",
  "type": "business",
  "author":"Арбингер",
  "publish": "МИФ",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/ne-delay-eto",
  "name": "Не делай это",
  "desc": "Тайм-менеджмент для творческих людей",
  "price": 85500,
  "id": "ne-delay-eto",
  "type": "creativity",
  "author":"Дональд Рос",
  "publish": "КСД",
  "year": "2018",
  "bind": "мягкий",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/ya-khochu-bolshe-idey",
  "name": "Я хочу больше идей!",
  "desc": "Более 100 техник и упражнений для развития творческого мышления",
  "price": 66700,
  "id": "ya-khochu-bolshe-idey",
  "type": "creativity",
  "author":"Стив Роулинг",
  "publish": "МИФ",
  "year": "2018",
  "bind": "мягкий",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/urban-jungle",
  "name": "Urban Jungle",
  "desc": "Как создать уютный интерьер с помощью растений",
  "price": 80700,
  "id": "urban-jungle",
  "type": "design",
  "author":"Игорь Йосифович",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "en",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/na-kryuchke",
  "name": "На крючке",
  "desc": "Как создавать продукты, формирующие привычки",
  "price": 59500,
  "id": "na-kryuchke",
  "type": "marketing",
  "author":"Нир Эяль",
  "publish": "МИФ",
  "year": "2015",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/vmeste-bystree",
  "name": "Вместе быстрее",
  "desc": "12 принципов командной эффективности",
  "price": 102500,
  "id": "vmeste-bystree",
  "type": "business",
  "author":"Лора Стэк",
  "publish": "КСД",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/iskrenniy-servis",
  "name": "Искренний сервис",
  "desc": "Как мотивировать сотрудников сделать для клиента больше, чем достаточно. Даже когда шеф не смотрит",
  "price": 63700,
  "id": "iskrenniy-servis",
  "type": "psychology",
  "author":"Лора Стэк",
  "publish": "Олимп-Бизнес",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/okhotnik-za-ideyami",
  "name": "Охотник за идеями",
  "desc": "Как найти дело жизни и сделать мир лучше",
  "price": 67100,
  "id": "okhotnik-za-ideyami",
  "type": "business",
  "author":"Семён Кибало",
  "publish": "Олимп-Бизнес",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/psikhologiya",
  "name": "Психология",
  "desc": "Люди, концепции, эксперименты",
  "price": 68800,
  "id": "psikhologiya",
  "type": "psychology",
  "author":"Пол Клейман",
  "publish": "Олимп-Бизнес",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "en"
}, {
  "thumb_url": "/books/thumb/tramp-i-epokha-postpravdy",
  "name": "Трамп и эпоха постправды",
  "desc": "Он предлагает провокационное, но при этом сбалансированное расследование истоков разворачивающейся культурно-общественной и политической ситуации в Америке.",
  "price": 72200,
  "id": "tramp-i-epokha-postpravdy",
  "type": "science",
  "author":"Кен Уилбер",
  "publish": "АСТ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/biznes-kak-igra",
  "name": "Бизнес как игра",
  "desc": "Грабли российского бизнеса и неожиданные решения",
  "price": 69700,
  "id": "biznes-kak-igra",
  "type": "marketing",
  "author":"Дмитрий Борисов",
  "publish": "Эксмо",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "en"
}, {
  "thumb_url": "/books/thumb/udovolstvie-ot-x",
  "name": "Удовольствие от x",
  "desc": "Увлекательная экскурсия в мир математики от одного из лучших преподавателей в мире",
  "price": 80500,
  "id": "udovolstvie-ot-x",
  "type": "science",
  "author":"Стивен Строгац",
  "publish": "Эксмо",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/analiticheskaya-kultura",
  "name": "Аналитическая культура",
  "desc": "От сбора данных до бизнес-результатов",
  "price": 108400,
  "id": "analiticheskaya-kultura",
  "type": "business",
  "author":"Дорис Бахманн-Медик",
  "publish": "КСД",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/marketing-ot-potrebitelya",
  "name": "Маркетинг от потребителя",
  "desc": "",
  "price": 121500,
  "id": "marketing-ot-potrebitelya",
  "type": "marketing",
  "author":"Роджер Бест",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/strategiya-e-mail-marketinga",
  "name": "Стратегия e-mail-маркетинга",
  "desc": "Эффективные рассылки для вашего бизнеса",
  "price": 72200,
  "id": "strategiya-e-mail-marketinga",
  "type": "marketing",
  "author":"Виталий Александров",
  "publish": "Олимп-Бизнес",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "ru",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/ogilvi-o-reklame",
  "name": "Огилви о рекламе",
  "desc": "Многочисленные истории реальных проектов, блестящих идей, а иногда и неудачных решений.",
  "price": 129600,
  "id": "ogilvi-o-reklame",
  "type": "marketing",
  "author":"Дэвид Огилви",
  "publish": "Олимп-Бизнес",
  "year": "2012",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/obnovit-stranitsu",
  "name": "Обновить страницу",
  "desc": "О трансформации Microsoft и технологиях будущего от первого лица",
  "price": 82000,
  "id": "obnovit-stranitsu",
  "type": "programming",
  "author":"Сатья Наделла",
  "publish": "МИФ",
  "year": "2015",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/putevoditel-po-lzhi",
  "name": "Путеводитель по лжи",
  "desc": "Критическое мышление в эпоху постправды",
  "price": 76100,
  "id": "putevoditel-po-lzhi",
  "type": "psychology",
  "author":"Дэниел Левитин",
  "publish": "МИФ",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/risovyy-shturm-i-esche-21-sposob-myslit-nestandartno",
  "name": "Рисовый штурм и еще 21 способ мыслить нестандартно",
  "desc": "Эта книга научит вас мыслить нестандартно и находить неординарные решения проблем.",
  "price": 82900,
  "id": "risovyy-shturm-i-esche-21-sposob-myslit-nestandartno",
  "type": "psychology",
  "author":"Майкл Микалко",
  "publish": "МИФ",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/sdelano-chtoby-prilipat",
  "name": "Сделано, чтобы прилипать",
  "desc": "Почему одни идеи выживают, а другие умирают",
  "price": 71400,
  "id": "sdelano-chtoby-prilipat",
  "type": "design",
  "author":"Чип Хиз",
  "publish": "МИФ",
  "year": "2018",
  "bind": "мягкий",
  "lng": "русский",
  "isnew": true
}, {
  "thumb_url": "/books/thumb/gibkiy-um",
  "name": "Гибкий ум",
  "desc": "Как видеть вещи иначе и думать нестандартно",
  "price": 80500,
  "id": "gibkiy-um",
  "type": "psychology",
  "author":"Бахрах Эстанислао",
  "publish": "Эксмо",
  "year": "2018",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/zarazitelnyy",
  "name": "Заразительный",
  "desc": "Психология сарафанного радио. Как продукты и идеи становятся популярными",
  "price": 70100,
  "id": "zarazitelnyy",
  "type": "marketing",
  "author":"Йон Бергер",
  "publish": "Эксмо",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/kak-privesti-dela-v-poryadok",
  "name": "Как привести дела в порядок",
  "desc": "Искусство продуктивности без стресса",
  "price": 76700,
  "id": "kak-privesti-dela-v-poryadok",
  "type": "business",
  "author":"Дэвид Аллен",
  "publish": "КСД",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "ru"
}, {
  "thumb_url": "/books/thumb/sozdavaya-bestseller",
  "name": "Создавая бестселлер",
  "desc": "Шаг за шагом к захватывающему сюжету, сильной сцене и цельной композиции",
  "price": 62500,
  "id": "sozdavaya-bestseller",
  "type": "creativity",
  "author":"Марта Олдерсон",
  "publish": "КСД",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/marketing-v-sotsialnykh-setyakh",
  "name": "Маркетинг в социальных сетях",
  "desc": "Это первое руководство по маркетингу в социальных сетях от российского практика.",
  "price": 73500,
  "id": "marketing-v-sotsialnykh-setyakh",
  "type": "marketing",
  "author":"Дамир Халилов",
  "publish": "МИФ",
  "year": "2015",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/nudge",
  "name": "Nudge",
  "desc": "Архитектура выбора",
  "price": 86500,
  "id": "nudge",
  "type": "psychology",
  "author":"Ричард Талер",
  "publish": "МИФ",
  "year": "2011",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/imarketing",
  "name": "iМаркетинг",
  "desc": "Работаем по системе",
  "price": 69700,
  "id": "imarketing",
  "type": "marketing",
  "author":"Ричард Талер",
  "publish": "Олимп-Бизнес",
  "year": "2016",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/gen-direktora",
  "name": "Ген директора",
  "desc": "17 правил позитивного менеджмента по-русски",
  "price": 73100,
  "id": "gen-direktora",
  "type": "business",
  "author":"Владимир Моженков",
  "publish": "Олимп-Бизнес",
  "year": "2014",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/psikhologiya-ubezhdeniya",
  "name": "Психология убеждения",
  "desc": "50 доказанных способов быть убедительным",
  "price": 80500,
  "id": "psikhologiya-ubezhdeniya",
  "type": "marketing",
  "author":"Роберт Чалдини",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/fioletovaya-korova",
  "name": "Фиолетовая корова",
  "desc": "Сделайте свой бизнес выдающимся",
  "price": 67600,
  "id": "fioletovaya-korova",
  "type": "business",
  "author":"Сет Годин",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/tsvetovoy-kvest-goroda",
  "name": "Цветовой квест. ГОРОДА",
  "desc": "30 непростых картин по номерам",
  "price": 63500,
  "id": "tsvetovoy-kvest-goroda",
  "type": "creativity",
  "author":"Джоанна Вебстер",
  "publish": "МИФ",
  "year": "2016",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/akvarelnye-peyzazhi",
  "name": "Акварельные пейзажи",
  "desc": "Основы, техники, эксперименты",
  "price": 82000,
  "id": "akvarelnye-peyzazhi",
  "type": "creativity",
  "author":"Лев Нецветаев",
  "publish": "МИФ",
  "year": "2017",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/dao-fiziki",
  "name": "Дао физики",
  "desc": "Исследование параллелей между современной физикой и восточной философией",
  "price": 60800,
  "id": "dao-fiziki",
  "type": "science",
  "author":"Фритьоф Капра",
  "publish": "МИФ",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/sozdayte-lichnyy-brend",
  "name": "Создайте личный бренд",
  "desc": "Как находить возможности, развиваться и выделяться",
  "price": 55200,
  "id": "sozdayte-lichnyy-brend",
  "type": "design",
  "author":"Юрген Саленбахер",
  "publish": "АСТ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/sdvig",
  "name": "Сдвиг",
  "desc": "Как выжить в стремительном будущем",
  "price": 85000,
  "id": "sdvig",
  "type": "science",
  "author":"Джой Ито",
  "publish": "КСД",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/pyataya-distsiplina",
  "name": "Пятая дисциплина",
  "desc": "Искусство и практика обучающейся организации",
  "price": 120700,
  "id": "pyataya-distsiplina",
  "type": "business",
  "author":"Питер Сенге",
  "publish": "МИФ",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/shkola-ceo",
  "name": "Школа CEO",
  "desc": "Мастер-классы от 20 глобальных лидеров",
  "price": 74400,
  "id": "shkola-ceo",
  "type": "business",
  "author":"Кирилл Кравченко",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/superpotrebiteli",
  "name": "Суперпотребители",
  "desc": "Кто это и почему они так важны для вашего бизнеса",
  "price": 87500,
  "id": "superpotrebiteli",
  "type": "marketing",
  "author":"Эдди Юн",
  "publish": "Эксмо",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/kak-ustroena-ekonomika",
  "name": "Как устроена экономика",
  "desc": "",
  "price": 73100,
  "id": "kak-ustroena-ekonomika",
  "type": "science",
  "author":"Ха-Джун Чанг",
  "publish": "Олимп-Бизнес",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/dzen-kamera",
  "name": "Дзен-камера",
  "desc": "Шесть уроков творческого развития и осознанности",
  "price": 84000,
  "id": "dzen-kamera",
  "type": "creativity",
  "author":"Дэвид Ульрих",
  "publish": "Олимп-Бизнес",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/liderstvo-i-samoobman",
  "name": "Лидерство и самообман",
  "desc": "Жизнь, свободная от шор",
  "price": 63700,
  "id": "liderstvo-i-samoobman",
  "type": "business",
  "author":"Институт Арбингера",
  "publish": "Олимп-Бизнес",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/instrumenty-marketinga-dlya-otdela-prodazh",
  "name": "Инструменты маркетинга для отдела продаж",
  "desc": "«Оружие» для менеджеров по продажам до встречи с клиентами, на встрече и после встречи с ними",
  "price": 67100,
  "id": "instrumenty-marketinga-dlya-otdela-prodazh",
  "type": "marketing",
  "author":"Екатерина Уколова",
  "publish": "Олимп-Бизнес",
  "year": "2013",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/kak-delaetsya-kino",
  "name": "Как делается кино",
  "desc": "",
  "price": 61600,
  "id": "kak-delaetsya-kino",
  "type": "creativity",
  "author":"",
  "publish": "КСД",
  "year": "2015",
  "bind": "мягкий",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/glavnoe-v-istorii-iskusstv",
  "name": "Главное в истории искусств",
  "desc": "Ключевые работы, темы, направления, техники",
  "price": 85000,
  "id": "glavnoe-v-istorii-iskusstv",
  "type": "design",
  "author":"Ниа Гулд",
  "publish": "МИФ",
  "year": "2018",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/marketing-bez-byudzheta",
  "name": "Маркетинг без бюджета",
  "desc": "50 работающих инструментов",
  "price": 117700,
  "id": "marketing-bez-byudzheta",
  "type": "marketing",
  "author":"Игорь Манн",
  "publish": "МИФ",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/vzlom-marketinga",
  "name": "Взлом маркетинга",
  "desc": "Наука о том, почему мы покупаем",
  "price": 83700,
  "id": "vzlom-marketinga",
  "type": "marketing",
  "author":"Фил Барден",
  "publish": "МИФ",
  "year": "2016",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/smeshat-no-ne-vzbaltyvat",
  "name": "Смешать, но не взбалтывать",
  "desc": "Рецепты организации мероприятий",
  "price": 79500,
  "id": "smeshat-no-ne-vzbaltyvat",
  "type": "marketing",
  "author":"Александр Шумович",
  "publish": "Олимп-Бизнес",
  "year": "2017",
  "bind": "твёрдый",
  "lng": "русский"
}, {
  "thumb_url": "/books/thumb/strategiya-golubogo-okeana",
  "name": "Стратегия голубого океана",
  "desc": "Как найти или создать рынок, свободный от других игроков",
  "price": 97300,
  "id": "strategiya-golubogo-okeana",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/puteshestviya-vo-vremeni",
  "name": "Путешествия во времени",
  "desc": "",
  "price": 87000,
  "id": "puteshestviya-vo-vremeni",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/osnovy-kalligrafii-i-letteringa",
  "name": "Основы каллиграфии и леттеринга",
  "desc": "",
  "price": 58600,
  "id": "osnovy-kalligrafii-i-letteringa",
  "type": "creativity"
}, {
  "thumb_url": "/books/thumb/byt-nachalnikom-eto-normalno",
  "name": "Быть начальником — это нормально",
  "desc": "Пошаговый план, который поможет вам стать тем менеджером, в котором нуждается ваша команда",
  "price": 73100,
  "id": "byt-nachalnikom-eto-normalno",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/scrum",
  "name": "Scrum",
  "desc": "Революционный метод управления проектами",
  "price": 87500,
  "id": "scrum",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/golaya-ekonomika",
  "name": "Голая экономика",
  "desc": "Разоблачение унылой науки",
  "price": 74400,
  "id": "golaya-ekonomika",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/zarazitelnyy",
  "name": "Заразительный",
  "desc": "Психология сарафанного радио. Как продукты и идеи становятся популярными",
  "price": 70100,
  "id": "zarazitelnyy",
  "type": "marketing"
}, {
  "thumb_url": "/books/thumb/kak-rozhdayutsya-emotsii",
  "name": "Как рождаются эмоции",
  "desc": "Революция в понимании мозга и управлении эмоциями",
  "price": 108000,
  "id": "kak-rozhdayutsya-emotsii",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/teoriya-igr",
  "name": "Теория игр",
  "desc": "Искусство стратегического мышления в бизнесе и жизни",
  "price": 89500,
  "id": "teoriya-igr",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/odurachennye-sluchaynostyu",
  "name": "Одураченные случайностью",
  "desc": "О скрытой роли шанса в бизнесе и жизни",
  "price": 88500,
  "id": "odurachennye-sluchaynostyu",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/komu-nuzhna-matematika",
  "name": "Кому нужна математика?",
  "desc": "Понятная книга о том, как устроен цифровой мир",
  "price": 79500,
  "id": "komu-nuzhna-matematika",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/zlye-samarityane",
  "name": "Злые самаритяне",
  "desc": "Миф о свободной торговле и секретная история капитализма",
  "price": 89500,
  "id": "zlye-samarityane",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/chelovek-reshayuschiy",
  "name": "Человек решающий",
  "desc": "Как построить организацию будущего, где решения принимает каждый",
  "price": 64600,
  "id": "chelovek-reshayuschiy",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/kak-ne-oshibatsya",
  "name": "Как не ошибаться",
  "desc": "Сила математического мышления",
  "price": 98500,
  "id": "kak-ne-oshibatsya",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/v-efire-sarafannoe-radio",
  "name": "В эфире — сарафанное радио",
  "desc": "Практическое руководство по рекомендательному маркетингу",
  "price": 63700,
  "id": "v-efire-sarafannoe-radio",
  "type": "marketing"
}, {
  "thumb_url": "/books/thumb/marketing-na-100-remiks",
  "name": "Маркетинг на 100%: ремикс",
  "desc": "Как стать хорошим менеджером по маркетингу",
  "price": 67600,
  "id": "marketing-na-100-remiks",
  "type": "marketing"
}, {
  "thumb_url": "/books/thumb/nepriyatie-peremen",
  "name": "Неприятие перемен",
  "desc": "Как преодолеть сопротивление изменениям и раскрыть потенциал организации",
  "price": 82400,
  "id": "nepriyatie-peremen",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/atomy-u-nas-doma",
  "name": "Атомы у нас дома",
  "desc": "Удивительная наука за повседневными вещами",
  "price": 86500,
  "id": "atomy-u-nas-doma",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/i-botaniki-delayut-biznes-1-2",
  "name": "И ботаники делают бизнес 1+2",
  "desc": "Удивительная история основателя «Додо Пиццы» Федора Овчинникова: от провала до миллиона",
  "price": 71800,
  "id": "i-botaniki-delayut-biznes-1-2",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/rabota-v-radost",
  "name": "Работа в радость",
  "desc": "Бизнес-модель будущего",
  "price": 77300,
  "id": "rabota-v-radost",
  "type": "business"
}, {
  "thumb_url": "/books/thumb/neizbezhno",
  "name": "Неизбежно",
  "desc": "12 технологических трендов, которые определяют наше будущее",
  "price": 97500,
  "id": "neizbezhno",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/simpsony-i-ikh-matematicheskie-sekrety",
  "name": "Симпсоны и их математические секреты",
  "desc": "",
  "price": 64600,
  "id": "simpsony-i-ikh-matematicheskie-sekrety",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/prelomlenie",
  "name": "Преломление",
  "desc": "Наука видеть иначе",
  "price": 97500,
  "id": "prelomlenie",
  "type": "science"
}, {
  "thumb_url": "/books/thumb/literaturnyy-master-klass",
  "name": "Литературный мастер-класс",
  "desc": "Учитесь у Толстого, Чехова, Диккенса, Хемингуэя и многих других современных и классических авторов",
  "price": 77300,
  "id": "literaturnyy-master-klass",
  "type": "creativity"
}, {
  "thumb_url": "/books/thumb/vse-nachalniki-delayut-eto",
  "name": "Все начальники делают это",
  "desc": "Пошаговое руководство по решению (почти) всех проблем менеджера",
  "price": 74400,
  "id": "vse-nachalniki-delayut-eto",
  "type": "business"
}];