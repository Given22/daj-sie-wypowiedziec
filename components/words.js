require("../assets/zdjecia/.png")

const data = [
    {
        pl: "ja",
        eng: "I",
        link: require("../assets/zdjecia/ja.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ty",
        eng: "you",
        link: require("../assets/zdjecia/ty.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "on",
        eng: "he",
        link: require("../assets/zdjecia/on.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ona",
        eng: "she",
        link: require("../assets/zdjecia/ona.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ono",
        eng: "it",
        link: require("../assets/zdjecia/ono.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "my",
        eng: "we",
        link: require("../assets/zdjecia/my.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "wy",
        eng: "you",
        link: require("../assets/zdjecia/wy.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "oni/one",
        eng: "they",
        link: require("../assets/zdjecia/oni.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "mama",
        eng: "mother",
        link: require("../assets/zdjecia/mama.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "tata",
        eng: "father",
        link: require("../assets/zdjecia/tata.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "dziadek",
        eng: "grandpa",
        link: require("../assets/zdjecia/dziadek.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "babcia",
        eng: "grandma",
        link: require("../assets/zdjecia/babcia.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "siostra",
        eng: "sister",
        link: require("../assets/zdjecia/siostra.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "brat",
        eng: "brother",
        link: require("../assets/zdjecia/brat.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "elektryk",
        eng: "electrician",
        link: require("../assets/zdjecia/elektryk.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "policjant",
        eng: "policeman",
        link: require("../assets/zdjecia/policjant.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "strażak",
        eng: "firefighter",
        link: require("../assets/zdjecia/strażak.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "lekarz",
        eng: "doctor",
        link: require("../assets/zdjecia/lekarz.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "pielęgniarka",
        eng: "nurse",
        link: require("../assets/zdjecia/pielęgniarka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "sprzedawca",
        eng: "salesman",
        link: require("../assets/zdjecia/sprzedawca.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "taksówkarz",
        eng: "taxi driver",
        link: require("../assets/zdjecia/taksówkarz.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "fryzjer",
        eng: "hairdresser",
        link: require("../assets/zdjecia/fryzjer.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kierowca",
        eng: "driver",
        link: require("../assets/zdjecia/kierowca.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "listonosz",
        eng: "postman",
        link: require("../assets/zdjecia/listonosz.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kurier",
        eng: "deliveryman",
        link: require("../assets/zdjecia/kurier.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "nauczyciel",
        eng: "teacher",
        link: require("../assets/zdjecia/nauczyciel.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "sąsiad",
        eng: "neighbour",
        link: require("../assets/zdjecia/sąsiad.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "przyjaciel",
        eng: "friend",
        link: require("../assets/zdjecia/przyjaciel.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "tak",
        eng: "yes",
        link: require("../assets/zdjecia/tak.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "nie",
        eng: "no",
        link: require("../assets/zdjecia/nie.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "noga",
        eng: "leg",
        link: require("../assets/zdjecia/noga.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ręka",
        eng: "arm",
        link: require("../assets/zdjecia/ręka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "głowa",
        eng: "head",
        link: require("../assets/zdjecia/głowa.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ciało",
        eng: "body",
        link: require("../assets/zdjecia/ciało.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "klatka piersiowa",
        eng: "chest",
        link: require("../assets/zdjecia/klatka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "palec",
        eng: "finger",
        link: require("../assets/zdjecia/palec.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "oko",
        eng: "eye",
        link: require("../assets/zdjecia/oko.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "nos",
        eng: "nose",
        link: require("../assets/zdjecia/nos.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ucho",
        eng: "ear",
        link: require("../assets/zdjecia/ucho.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "usta",
        eng: "mouth",
        link: require("../assets/zdjecia/usta.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "włosy",
        eng: "hair",
        link: require("../assets/zdjecia/włosy.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "stopa",
        eng: "foot",
        link: require("../assets/zdjecia/stopa.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "dłoń",
        eng: "hand",
        link: require("../assets/zdjecia/dłoń.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "brew",
        eng: "eyebrow",
        link: require("../assets/zdjecia/brew.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "serce",
        eng: "heart",
        link: require("../assets/zdjecia/serce.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "łokieć",
        eng: "elbow",
        link: require("../assets/zdjecia/łokieć.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kolano",
        eng: "knee",
        link: require("../assets/zdjecia/kolano.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "pięta",
        eng: "heel",
        link: require("../assets/zdjecia/pięta.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kciuk",
        eng: "thumb",
        link: require("../assets/zdjecia/kciuk.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "brzuch",
        eng: "belly",
        link: require("../assets/zdjecia/brzuch.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "telefon",
        eng: "phone",
        link: require("../assets/zdjecia/telefon.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "komputer",
        eng: "PC",
        link: require("../assets/zdjecia/komputer.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "laptop",
        eng: "laptop",
        link: require("../assets/zdjecia/laptop.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ładowarka",
        eng: "charger",
        link: require("../assets/zdjecia/ładowarka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "zegar",
        eng: "clock",
        link: require("../assets/zdjecia/zegar.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "słuchawki",
        eng: "headphones",
        link: require("../assets/zdjecia/słuchawki.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "telewizor",
        eng: "TV",
        link: require("../assets/zdjecia/telewizor.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "zegarek",
        eng: "watch",
        link: require("../assets/zdjecia/zegarek.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "pralka",
        eng: "washing machine",
        link: require("../assets/zdjecia/pralka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "zmywarka",
        eng: "dishwasher",
        link: require("../assets/zdjecia/zmywarka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "piekarnik",
        eng: "oven",
        link: require("../assets/zdjecia/piekarnik.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "mikrofala",
        eng: "microwave",
        link: require("../assets/zdjecia/mikrofala.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "czajnik",
        eng: "kettle",
        link: require("../assets/zdjecia/czajnik.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "lampka",
        eng: "lamp",
        link: require("../assets/zdjecia/lampka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "latarka",
        eng: "flashlight",
        link: require("../assets/zdjecia/latarka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "myszka",
        eng: "mouse",
        link: require("../assets/zdjecia/myszka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "klawiatura",
        eng: "keyboard",
        link: require("../assets/zdjecia/klawiatura.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ekran",
        eng: "screen",
        link: require("../assets/zdjecia/ekran.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "odkurzacz",
        eng: "vacuum",
        link: require("../assets/zdjecia/odkurzacz.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "waga",
        eng: "scale",
        link: require("../assets/zdjecia/waga.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "maszynka do golenia",
        eng: "razor",
        link: require("../assets/zdjecia/maszynka do golenia.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "lodówka",
        eng: "fridge",
        link: require("../assets/zdjecia/lodówka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "toster",
        eng: "toaster",
        link: require("../assets/zdjecia/toster.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kuchenka",
        eng: "stove",
        link: require("../assets/zdjecia/kuchenka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "samochód",
        eng: "car",
        link: require("../assets/zdjecia/samochód.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "autobus",
        eng: "bus",
        link: require("../assets/zdjecia/autobus.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "tramwaj",
        eng: "tram",
        link: require("../assets/zdjecia/tramwaj.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "pociąg",
        eng: "train",
        link: require("../assets/zdjecia/pociąg.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "samolot",
        eng: "plane",
        link: require("../assets/zdjecia/samolot.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "deska",
        eng: "skateboard",
        link: require("../assets/zdjecia/deska.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "hulajnoga",
        eng: "scooter",
        link: require("../assets/zdjecia/hulajnoga.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "rower",
        eng: "bicycle",
        link: require("../assets/zdjecia/rower.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "helikopter",
        eng: "helicopter",
        link: require("../assets/zdjecia/helikopter.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "prom",
        eng: "ferry",
        link: require("../assets/zdjecia/prom.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "börek",
        eng: "börek",
        link: require("../assets/zdjecia/börek.png"),
    },
    {
        pl: "piwo",
        eng: "beer",
        link: require("../assets/zdjecia/piwo.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "alkohol",
        eng: "alcohol",
        link: require("../assets/zdjecia/alkohol.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "chleb",
        eng: "bread",
        link: require("../assets/zdjecia/chleb.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "masło",
        eng: "butter",
        link: require("../assets/zdjecia/masło.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "parówki",
        eng: "sausages",
        link: require("../assets/zdjecia/parówki.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "keczup",
        eng: "ketchup",
        link: require("../assets/zdjecia/keczup.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ser",
        eng: "cheese",
        link: require("../assets/zdjecia/ser.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "woda",
        eng: "water",
        link: require("../assets/zdjecia/woda.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "sok",
        eng: "juice",
        link: require("../assets/zdjecia/sok.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "mięso",
        eng: "meat",
        link: require("../assets/zdjecia/mięso.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kawa",
        eng: "coffee",
        link: require("../assets/zdjecia/kawa.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "napoje gazowane",
        eng: "carbonated drinks",
        link: require("../assets/zdjecia/napoje gazowane.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "słodycze",
        eng: "candy",
        link: require("../assets/zdjecia/słodycze.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "czekolada",
        eng: "chocolate",
        link: require("../assets/zdjecia/czekolada.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "chipsy",
        eng: "chips",
        link: require("../assets/zdjecia/chipsy.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "warzywa",
        eng: "vegetables",
        link: require("../assets/zdjecia/warzywa.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "owoce",
        eng: "fruits",
        link: require("../assets/zdjecia/owoce.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ryba",
        eng: "fish",
        link: require("../assets/zdjecia/ryba.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "dom",
        eng: "house",
        link: require("../assets/zdjecia/dom.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "salon",
        eng: "living room",
        link: require("../assets/zdjecia/salon.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kuchnia",
        eng: "kitchen",
        link: require("../assets/zdjecia/kuchnia.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "łazienka",
        eng: "bathroom",
        link: require("../assets/zdjecia/łazienka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "sypialnia",
        eng: "bedroom",
        link: require("../assets/zdjecia/sypialnia.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "korytarz",
        eng: "corridor",
        link: require("../assets/zdjecia/korytarz.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "schody",
        eng: "stairs",
        link: require("../assets/zdjecia/schody.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "piwnica",
        eng: "basement",
        link: require("../assets/zdjecia/piwnica.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "poddasze",
        eng: "attic",
        link: require("../assets/zdjecia/poddasze.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "balkon",
        eng: "balcony",
        link: require("../assets/zdjecia/balkon.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "stół",
        eng: "table",
        link: require("../assets/zdjecia/stół.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "krzesło",
        eng: "chair",
        link: require("../assets/zdjecia/krzesło.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "drzwi",
        eng: "door",
        link: require("../assets/zdjecia/drzwi.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "okno",
        eng: "window",
        link: require("../assets/zdjecia/okno.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "szafa",
        eng: "wardrobe",
        link: require("../assets/zdjecia/szafa.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "biurko",
        eng: "desk",
        link: require("../assets/zdjecia/biurko.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "komoda",
        eng: "dresser",
        link: require("../assets/zdjecia/komoda.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "łóżko",
        eng: "bed",
        link: require("../assets/zdjecia/łóżko.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kwadrat",
        eng: "square",
        link: require("../assets/zdjecia/kwadrat.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "trójkąt",
        eng: "triangle",
        link: require("../assets/zdjecia/trójkąt.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "okrąg",
        eng: "circle",
        link: require("../assets/zdjecia/okrąg.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "prostokąt",
        eng: "rectangle",
        link: require("../assets/zdjecia/prostokąt.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "sześcian",
        eng: "cube",
        link: require("../assets/zdjecia/sześcian.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kula",
        eng: "sphere",
        link: require("../assets/zdjecia/kula.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "kino",
        eng: "cinema",
        link: require("../assets/zdjecia/kino.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "sklep",
        eng: "shop",
        link: require("../assets/zdjecia/sklep.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "centrum handlowe",
        eng: "shopping mall",
        link: require("../assets/zdjecia/centrum handlowe.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "szkoła",
        eng: "school",
        link: require("../assets/zdjecia/szkoła.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "przystanek",
        eng: "bus stop",
        link: require("../assets/zdjecia/przystanek.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "szpital",
        eng: "hospital",
        link: require("../assets/zdjecia/szpital.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "biblioteka",
        eng: "library",
        link: require("../assets/zdjecia/biblioteka.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "dworzec",
        eng: "station",
        link: require("../assets/zdjecia/dworzec.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "zoo",
        eng: "zoo",
        link: require("../assets/zdjecia/zoo.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "plac zabaw",
        eng: "playground",
        link: require("../assets/zdjecia/plac zabaw.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "restauracja",
        eng: "restaurant",
        link: require("../assets/zdjecia/restauracja.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "basen",
        eng: "swimming pool",
        link: require("../assets/zdjecia/basen.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "las",
        eng: "forest",
        link: require("../assets/zdjecia/las.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "ulica",
        eng: "street",
        link: require("../assets/zdjecia/ulica.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "poczta",
        eng: "post office",
        link: require("../assets/zdjecia/poczta.png"),
        rodzaj: "rzeczownik"
    },
    {
        pl: "pomogę",
        eng: "help",
        link: require("../assets/zdjecia/pomogę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "chcę",
        eng: "want",
        link: require("../assets/zdjecia/chcę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "proszę",
        eng: "please",
        link: require("../assets/zdjecia/proszę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "dziękuje",
        eng: "thank",
        link: require("../assets/zdjecia/dziękuje.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "mam",
        eng: "have",
        link: require("../assets/zdjecia/mam.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "idę do",
        eng: "go to",
        link: require("../assets/zdjecia/idę do.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "jadę",
        eng: "drive",
        link: require("../assets/zdjecia/jadę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "chodzę",
        eng: "walk",
        link: require("../assets/zdjecia/chodzę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "jem",
        eng: "eat",
        link: require("../assets/zdjecia/jem.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "piję",
        eng: "drink",
        link: require("../assets/zdjecia/piję.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "uczę się",
        eng: "learn",
        link: require("../assets/zdjecia/uczę się.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "śpię",
        eng: "sleep",
        link: require("../assets/zdjecia/śpię.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "siedzę",
        eng: "sit",
        link: require("../assets/zdjecia/siedzę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "leżę",
        eng: "lie",
        link: require("../assets/zdjecia/leżę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "piszę",
        eng: "write",
        link: require("../assets/zdjecia/piszę.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "mówię",
        eng: "speak",
        link: require("../assets/zdjecia/mówię.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "czytać",
        eng: "read",
        link: require("../assets/zdjecia/czytać.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "oglądać",
        eng: "watch",
        link: require("../assets/zdjecia/oglądać.png"),
        rodzaj: "czasownik"
    },
    {
        pl: "zielony",
        eng: "green",
        link: require("../assets/zdjecia/zielony.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "czerwony",
        eng: "red",
        link: require("../assets/zdjecia/czerwony.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "żółty",
        eng: "yellow",
        link: require("../assets/zdjecia/żółty.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "niebieski",
        eng: "blue",
        link: require("../assets/zdjecia/niebieski.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "różowy",
        eng: "pink",
        link: require("../assets/zdjecia/różowy.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "biały",
        eng: "white",
        link: require("../assets/zdjecia/biały.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "czarny",
        eng: "black",
        link: require("../assets/zdjecia/czarny.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "brązowy",
        eng: "brown",
        link: require("../assets/zdjecia/brązowy.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "trudny",
        eng: "difficult",
        link: require("../assets/zdjecia/trudny.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "łatwy",
        eng: "easy",
        link: require("../assets/zdjecia/łatwy.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "niski",
        eng: "short",
        link: require("../assets/zdjecia/niski.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "wysoki",
        eng: "tall",
        link: require("../assets/zdjecia/wysoki.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "gruby",
        eng: "fat",
        link: require("../assets/zdjecia/gruby.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "chudy",
        eng: "thin",
        link: require("../assets/zdjecia/chudy.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "prosty",
        eng: "straight",
        link: require("../assets/zdjecia/prosty.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "krzywy",
        eng: "curved",
        link: require("../assets/zdjecia/krzywy.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "okrągły",
        eng: "round",
        link: require("../assets/zdjecia/okrągły.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "kwadratowy",
        eng: "square",
        link: require("../assets/zdjecia/kwadratowy.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "prostokątny",
        eng: "rectangular",
        link: require("../assets/zdjecia/prostokątny.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "trójkątny",
        eng: "traingular",
        link: require("../assets/zdjecia/trójkątny.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "sześcienny",
        eng: "cubic",
        link: require("../assets/zdjecia/sześcienny.png"),
        rodzaj: "przymiotnik"
    },
    {
        pl: "dzień dobry",
        eng: "good morning",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "do widzenia",
        eng: "goodbye",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "hej",
        eng: "hey",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "dziękuje",
        eng: "thank you",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "przepraszam",
        eng: "I'm sorry",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "jak się czujesz",
        eng: "How do you feel?",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "Która jest godzina",
        eng: "What's the time?",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "Jak dojdę do...?",
        eng: "How can I get to...?",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "Gdzie znajdę...?",
        eng: "Where can I find...?",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "możesz mi pomóc",
        eng: "Could you help me?",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "potrzebuje pomocy",
        eng: "I need help.",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "dlaczego",
        eng: "why",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "jak",
        eng: "how",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "gdzie",
        eng: "where",
        link: "",
        rodzaj: "wyrażenie"
    },
    {
        pl: "po co",
        eng: "what for",
        link: "",
        rodzaj: "wyrażenie"
    }

]
