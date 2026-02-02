# Aplikacion MVC per Dhurimin e Gjakut

Ky projekt implementon nje aplikacion web me arkitekture MVC (Model-View-Controller) per menaxhimin e kerkesave per gjak, njoftimeve dhe profilit te dhuruesve.

## Struktura

- **Models**: Struktura e entiteteve si Perdoruese, Administrator, Dhurues, Kerkese, Njoftim dhe Lokacion.
- **Views**: Faqe EJS per panelin e administratorit, dhuruesit dhe listat e kerkesave.
- **Controllers**: Logjika e rrjedhjes se aplikacionit dhe menaxhimi i te dhenave.

## Nisja lokale

```bash
npm install
npm start
```

Aplikacioni hapet ne `http://localhost:3000`.

## Kredenciale testuese

- Administrator: `admin@bloodapp.com` / `admin123`
- Dhurues (shembull): `blerim@gmail.com` / `donor123`

## Publish

Per te gjeneruar folderin `publish/` me aplikacionin e gatshem per publikim:

```bash
npm run publish
```

Folderi `publish/` do te permbaje versionin e publikuar me te gjitha fajllat e nevojshem.
