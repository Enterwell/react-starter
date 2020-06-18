# Enterwell React starter

Ovaj dokument predstavlja službenu dokumentaciju React startera. React starter je nastao zbog želje da se unificiraju svi React projekti koje ćemo u budućnosti razvijati. U ovom dokumentu će stoga biti objašnjeni i navedeni sljedeće zaključci oko kojih su se Enterwell starješine usuglasile nakon višesatnih dogovora:

* arhitektura aplikacije
* organizacija projekta, odnosno njegovih mapa i datoteka
* preporuka paketa koji su se pokazali korisnima u prošlosti
* poneki _tips and tricks_ 

## Zašto React i zašto Next.js?

[React](https://reactjs.org/) je jedna od mnoštva JavaScript librarya i frameworka čiji je cilj olakšati izgradnju korisničkih sučelja. Iza Reacta stoji Facebook čiji projekt to i jest, a što osigurava određenu sigurnost da to nije samo još jedna tehnologija koja će biti hypeana mjesec dana te potom zaboravljena. Zašto se baš React odabrao za razvoj aplikacija, a ne recimo Vue ili Angular, to ne znam, no pošto se pokazalo da je dosta lako i brzo razvijati aplikacije korištenjem njega, nije bilo potrebe za promjenom.

[Next.js](https://nextjs.org/) je jedan od React frameworka koji smo relativno nedavno odlučili koristiti zajedno s Reactom. Njegovo korištenje omogućava lakšu konfiguraciju projekata (bez potrebe za petljanjem s [webpackom](https://webpack.js.org/)), pruža potporu za pre-rendering stranica i još mnoge druge stvari.

## Struktura projekta

U rootu React projekta se nalaze sve konfiguracijske datoteke alata koji se koriste tijekom developmenta i builda aplikacije te mape s različitim cjelinama aplikacije. 

### Datoteke u rootu projekta

* `.babelrc` - služi za konfiguriranje [Babela](https://babeljs.io/)
* `.eslintrc` - služi za konfiguriranje [ESLinta](https://eslint.org/) 
* `.eslintignore` - služi za definiranje datoteka koje neće biti zahvaćene ESLintom
* `.gitignore` - služi za definiranje datoteka čije promjene [Git](https://git-scm.com/) neće pratiti
* `package.json` - služi da definiranje paketa koji se u aplikaciji koriste (tzv. `dependencies` i `devDependencies`)
* `yarn.lock` - služi [Yarnu](https://classic.yarnpkg.com/en/) da zna koje točno verzije paketa je potrebno instalirati
* `next.config.js` - služi za navođenje ne-defaultnih konfiguracija Next.jsa
* `README.md` - služi za opis projekta - kako ga pokrenuti, neke osnovne stvari o paketima koji se koriste ili neki drugi savjeti osobama koje će u budućnosti raditi na projektu

### Mape u rootu projekta

* `app-models` - mjesto gdje se čuvaju svi tzv. app-modeli koji postoje unutar aplikacije 
* `component-models` - mjesto gdje se čuvaju svi tzv. component-modeli koji postoje unutar aplikacije
* `components` - mjesto gdje se čuvaju sve komponente koje nisu vezane uz samo jedan `view` (tzv. *shared components*)
* `config` - gdje se čuvaju različite konfiguracijske datoteke koje koristi sama aplikacija (npr. kofiguracija internacionalizacije, Material-UI teme ili nešto drugo)
* `helpers` - mjesto gdje se čuvaju svi tzv. helperi koji postoje unutar aplikacije
* `mappers` - mjesto gdje se čuvaju svi tzv. maperi koji postoje unutar aplikacije
* `models` - mjesto gdje se čuvaju svi modeli koji postoje unutar aplikacije
* `pages` - mjesto čije podmape i datoteke tvore hijerarhiju dostupnim ruta aplikacije
* `public` - mjesto gdje se čuvaju svi statički resursi aplikacije (npr. slike, svg-ovi i datoteke koje se mogu preuzeti kroz aplikaciju)
* `repositories` - mjesto gdje se čuvaju svi repozitoriji` koji postoje unutar aplikacije
* `services` - mjesto gdje se čuvaju svi servisi koji postoje unutar aplikacije
* `styles` - mjesto gdje se čuvaju svi globalni stilovi koji postoje unutar aplikacije
* `view-models` - mjesto gdje se čuvaju svi tzv. view-modeli koji postoje unutar aplikacije
* `views` - mjesto gdje se čuvaji svi tzv. viewovi i samo za njih vezane komponente

Detaljnije o tome što su pojedini od ovih entiteta može se pročitati u dijelu o arhitekturi React starter aplikacije.

## Arhitektura


## Imenovanje

Imenovanje je nešto što uvijek izazive prijepore jer većina nas ima neki svoj stil koji preferira. I tijekom dogovaranja ovog React startera bilo je takvih problema, i svak je vukao na svoju stranu. Bilo je teško, a tvorci Reacta nisu bili baš od pomoći, pošto nikakva službena konvencija ne postoji. Promatranjem drugih React projekata, došli smo do odluka opisanih u nastavku.

### Imenovanje mapa

* Prilikom imenovanja mapa u root mapi, koristi se `kebab-case` (sve riječi se pišu malim slovima i međusobno su odvojene crticom)
* Prilikom imenovanja mapa u podmapama, koristi se `PascalCase` (sve riječ se pišu velikim početnim slovom i međusobno nisu odvojene)
* Iznimka od prošlog pravila su podmape mapa `pages` i `public` koje se također pišu `kebab-caseom`

### Imenovanje datoteka

* Konfiguracijske datoteke root mape ne podliježu nikakvim pravilima već se pišu u obliku koji je zahtjevan od strane alata koji ih koriste
* Sve datoteke u `pages` i `styles` mapama pišu se `kebab-caseom`
* Sve datoteke koje predstavljaju React komponente te datoteke iz koji se `exporta` neka klasa ili više funkcija pišu se `PascalCaseom`
* Datoteke iz koji se `exporta` instanca neke klase ili objekt pišu se `camelCaseom` (prva riječ se piše malim početnim slovom, a preostale velikim te međusobno nisu odvojene)
* Datoteke "lokalnih" stilova pišu se `PascalCaseom` uz ekstenziju `.module.scss` 
* Datoteke iz `public` mape ne podliježu nikakvim pravilima

## Paketi

Pogledom na `package.json` može se okvirno dobiti dojam o nekim paketima koji se koriste. U React starter su uključeni samo osnovni paketi za koje smatramo da će uvijek biti korišteni u aplikaciji, no tu je još i cijeli set drugih paketa koji se koriste po potrebi.

### Defaultni paketi 

U nastavku su navedeni paketi koji su po defaultu dodani u projekt te koji će se vrlo vjerojatno koristiti u aplikaciji. Ukoliko se ispostavi da za nekim od njih nema potrebe, slobodno ih se može izbaciti. Napomena: nisu opisani paketi koji predstavljaju alate za pomoć developmenta i builda aplikacije.

* [`react`](https://reactjs.org/) / [`react-dom`](https://reactjs.org/docs/react-dom.html) - library čija je uloga već ranije opisana,a koji stoji i u samom nazivu startera što implicira da ga je nemoguće ne koristiti 
* [`mobx`](https://mobx.js.org/README.html) / [`mobx-react-lite`](https://mobx-react.js.org/) - state management library koji omogućava odvajanje aplikacijske logike od iscrtavanja komponenti (omogućava da promjene podataka izazovu ponovno renderiranje komponenata - ima sličan učinak kao i state komponente samo nije nužno vezan za nju)
* [`@material-ui/core`](https://material-ui.com/) / [`@material-ui/icons`](https://material-ui.com/components/material-icons/) - kolekcija React komponenata i ikona koja omogućava da ne izmišljamo toplu vodu pisanjem vlastitih button, input i inih komponenti
* [`axios`](https://github.com/axios/axios) - HTTP klijent koji omogućava jednostavnu komunikaciju aplikacije sa serverom odnosno API-jem
* [`noty`](https://ned.im/noty/#/) - library korišten za prikazivanje notifikacija unutar aplikacije
* [`clsx`](https://github.com/lukeed/clsx) - paket koji pojednostavljuje uvjetovano postavljanje klasa HTML elementima/React komponenatam

### Dodatni paketi

Pošto cilj ovog startera nije pretrpat ga sa svim mogućim paketima koji bi se mogli koristit, mnoge od njih će trebati dodatno dodati po potrebi. U nastavku je naveden popis paketa koje je preporučeno koristiti ukoliko se javi potreba za opisanom funkcionalnošću aplikacije koju taj paket pruža. 

Ukoliko nijedan od navedenih paketa ne odgovara željama i potrebama, potrebno je dodati neki po vlastitom izboru. [npm](https://www.npmjs.com/) je mjesto gdje se može pronaći poneki paket za svakog.

* [`@enterwell/react-form-validation`](https://github.com/Enterwell/react-form-validation) - "domaći" paket za rad s React formama koji prvenstveno omogućava njihovu laganu validaciju
* [`@enterwell/enum-helper`](https://github.com/Enterwell/js-enum-helper) - također "domaći" paket koji olakšava rad s enumima
* [`@material-ui/lab`](https://material-ui.com/components/about-the-lab/) - dodatna kolekcija Material-UI komponenti koje još nisu postale sastavni dio core kolekcije
* [`@material-ui/pickers`](https://material-ui-pickers.dev/) - kolekcija komponenata za odabir vremena i datuma također razvijena od strane Material-UI tima
* [`sentry`](https://sentry.io/welcome/) - paket za praćenje pogrešaka aplikacije (tzv. _error monitoring_)
* [`i18next`](https://www.i18next.com/) / [`react-i18next`](https://react.i18next.com/) - framework za internacionalizaciju aplikacije s minimalnim overheadom
* [`moment`](https://momentjs.com/) - library koji olakšava rad datumima i vremenima
