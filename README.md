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

