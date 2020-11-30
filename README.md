# Programmeerimine II loengutes tehtu

#  Alustuseks
* API - Application Programming Interface
  * Liides, mille kaudu süsteemid saavad omavahel infot jagada
  * Backend - frontend
  * Backend - backend
  * Andmed, mida vahetatakse on sageli JSON kujul
* NodeJS https://nodejs.org/en/
  * Serveris töötav javascript
  * Tasuta
  * Lihtne alustada
  * Asünkroonne ja sündmustepõhine
  * Ühelõimeline, kuid hästi skaleeruv
  * https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm
* NPM - Node Package Manager
  * Online repositoorium Node.js projektide jaoks http://npmjs.org/
  * Käsurealt kasutatav utiliit nimetatud repositooriumiga suhtlemiseks (pakkide paigaldamiseks, versioonide ja sõltuvuste haldamiseks)
  * NPM-i käsud https://docs.npmjs.com/cli-documentation/cli
  * package.json - fail, mis sisaldab projekti kohta informatsiooni (näiteks projekti nimi, sõltuvused jne) https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/
  * npm init - uue package.json faili loomine (npm init -y loob package.json faili ilma küsimusi esitamata)
  * npm install - npm paki paigaldamine (--save-dev võtme lisamine lisab paki arenduse sõltuvusena - seda pakki on vaja ainult arendamiseks nt nodemon) Samuti projekti sõltuvuste paigaldamiseks (Näiteks laete githubist alla node projekti, siis ei ole sellega kaasas sõltuvusi, vaid need on kirjeldatud package.json failis ja seetõttu on vaja käivitada käsk npm install kaustas, kus asub package.json fail)
  * node_modules - kaust, kuhu paigaldatakse kõik npm pakid ja sõltuvused (seda kausta ei ole vaja projektiga kuhugi üles laadida, see kaust tekitatakse uuesti vastavalt package.json failile)
* Express
  * Väga populaarne Node.js veebirakenduste raamistik https://expressjs.com/
* Postman - API testimise platvorm https://www.postman.com/
* JSON - JavaScript Object Notation https://www.json.org/json-en.html
  * Lihtne ja loetav andmevahetusformaat
  * { "key": "value" }
* HTTP request meetodid https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
  * GET - määratud ressursi pärimine (näiteks GET /api/users tagastab kasutajate nimekirja)
  * POST - määratud ressursile üksuse edastamine (näiteks POST /api/users päringuga saadetakse kasutaja andmed uue kasutaja lisamiseks andmebaasi)
  * PUT - määratud ressursile üksuse edastamine olemasoleva üksuse muutmiseks (näiteks PUT /api/users päringuga saadetakse kaasa andmed olemasoleva kasutaja andmete muutmiseks)
  * DELETE - kustutab määratud ressursi (näiteks DELETE /api/users/:id kustutab kasutaja määratud id-ga) (Loengus saatsime delete requestiga id kaasa päringu bodys mitte parameetrina, nagu siin näites)
* CRUD API

Name | Http method | Image
-----|--------|------
C - Create | POST | ![Create](docs/images/CREATE.jpg)
R - Read | GET | ![Read](docs/images/READ.jpg)
U - Update | PUT | ![Put](docs/images/UPDATE.jpg)
D - Delete | DELETE | ![Delete](docs/images/DELETE.jpg)

* HTTP Respons koodid https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  * **Edukad:**
  * 200 - OK
  * 201 - Created
  * **Vead**
  * 400 - Bad request
  * 401 - Unauthorized
  * 403 - Forbidden
  * 404 - Not Found
  * **Serveri vead**
  * 500 - Internal Server Error
  
* Selleks, et alustada projekti nii, et see oleks kohe alguses Githubis, siis soovitan teha nii:
 1. Logi Githubi sisse
 1. Vajuta Repositories nuppu
 1. Vajuta rohelist New nuppu
 1. Pane repositooriumile nimi (Repository name)
 1. Vali Private või Public
 1. Pane linnuke Add a README file ette
 1. Pane linnuke Add .gitignore ette
 1. Vali .gitignore template: Node
 1. Vajuta Create Repository nuppu
 1. Avanenud lehel vajuta rohelist Code nuppu ja kopeeri sealt repositooriumi link (näit: https://github.com/mrttlu/test.git)
 1. Mine oma arvutis terminalis (command promptis) kausta, kuhu soovid projekti kausta tekitada
 1. Kirjuta: git clone repositooriumi link (git clone https://github.com/mrttlu/test.git) ja vajuta enter klahvi
 1. Võid loodud kausta hakata koodi kirjutama 
 
* Kirjutatud koodi githubi laadimine:
  * terminalis (command promptis) kirjuta:
  * git add .
  * git commit -m 'Kirjeldus selle kohta, mida vahepeal teinud oled vms'
  * git push
  
* .gitignore fail - fail, milles kirjeldatakse failid ja kaustad, mida ei soovita üles laadida koodihalduskeskkonda
  * Node projektide puhul ei ole vaja üles laadida node_modules kausta, kuna see on tihti üsna suuremahuline ja seda on lihtne uuesti taasluua (npm install)
  * Githubi poolt loodud node .gitignore faili näidis: https://github.com/mrttlu/esimene/blob/main/.gitignore

* Career Karma .gitignore Files: A Guide for Beginners: https://careerkarma.com/blog/gitignore/

# Esimese loengu teemad (16. oktoober)
* Sissejuhatus ainesse
* Github
* Nodejs
* Npm
* Express
* Postman
* Json
* Projekti tutvustus ja alustamine.

## Esimese loengu slaidid
https://github.com/mrttlu/esimene/blob/main/docs/1.%20loeng.pdf

## Esimeses loengus tegime:
* Alustasime lihtsa Node.js API-ga kasutades express-i
* Tegime /api/ping endpoindi, mille abil saame kontrollida, kas API töötab ja mis annab vastuseks 200 - OK response ja JSON-i infoga: { success: true }
* Tegime kasutajate endpoindid:
  * GET /api/users - tagastab kõik kasutajad
  * GET /api/users/:id - tagastab kasutaja vastavalt id-le
  * POST /api/users - saab luua uue kasutaja - vajalikud väljad: firstName, lastName, email, password. Tagastab loodud kasutaja.
  * PUT /api/users - muudab kasutaja andmed - vajalikud väljad: id ja üks muudetavatest väljadest (firstName, lastName, email või password). Tagastab muudetud kasutaja andmed
  * DELETE /api/users - kustutab kasutaja - vajalik väli: id. Tagastab vastuseks 200 - OK response ja JSON-i infoga: { success: true }
  * Esimese loengu kood: https://github.com/mrttlu/esimene/tree/dc73fd29aa3c5a5d8c4d5dc1f78bc60cbeb78810
  
## Esimene kodutöö - tähtaeg enne järgmist loengut (31.10.2020)
1. Mõelda välja projekt, millel oleks vaja vähemalt 3 - 4 endpointi. Näiteks koduste tööde üle arvestamise API, mille endpoindid oleks õppejõud, õppeaine, kodune töö vms. Eriti hea ja soovitav oleks variant, kus saate seda projekti siduda mõne teise aine kodutööga.
1. Luua vastavalt oma projektile API, mis sisaldaks vajalikke endpointe koos võimalusega igast endpoindist infot välja pärida, luua, muuta ja kustutada, nii nagu loengus näidise tegime.
1. Teha minimaalne kontroll endpointidele saadetava info kontrollimiseks - kas on olemas, kas vastab mingitele nõuetele jne.
1. Hoia oma kood alusest peale Githubis - kindlasti kasuta ka .gitignore (Node template) faili.
1. Jaga oma projekti Githubi linki õppejõuga.
1. Ole valmis järgmises loengus oma tehtut tutvustama

## Esimese loengu lõpetuseks:

#### Tähelepanekud:
* Postmanist body saatmisel (POST, PUT, DELETE päringute tegemisel) märgi 'raw' ja siis 'JSON'
* Postmanist JSON-i saatmisel peavad olema nii key-d, kui valued olema topeltjutumärkide vahel: { "fistName": "Juku" }
* Praegu kasutame andmebaasi asemel lihtsalt massiive, et alguses oleks lihtsam - ei ole ideaalne lahendus, kuid testimiseks kõlbab.
* Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
* Kui kontrollid näiteks id väärtust, kas see on tõene või väär, siis 0 väärtuse puhul loetakse see vääraks.
* Me teeme ainult API-t, me ei tee frontendi :)

#### Esimeses loengus viidatud lingid
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
* https://nodejs.org/en/
* https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/
* https://expressjs.com/
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
* https://www.json.org/json-en.html

# Teise loengu teemad (31. oktoober)
* Kodutööde esitlemine
  * Mida mina kodutööna tegin?
  * Minu idee on teha kodutööde üle arvestuse pidamise API, mis sisaldab järgmisi endpointe:
  1. users - kasutajad (id, firstName, lastName, email, password)
  1. lecturers - õppejõud/õpetajad (id, firstName, lastName, email, userId)
  1. subjects - õppeaine (id, name, lecturerId, userId)
  1. homeworks - kodused tööd (id, description, dueDate, subjectId, userId)
  * Igale endpoindile saab saata päringuid nii ressursi kuvamiseks, loomiseks, muutmiseks, kui ka kustutamiseks.
  * Iga ressurss sisaldab userId-d, sest kui API-l on erinevad kasutajad, siis userId kaudu saab omavahel siduda ressursi ja kasutaja (igal kasutajal oma ressursid).
  * Minu kodutöö: https://github.com/mrttlu/esimene/tree/20ab360f2e42f77c3a1c3d9804953ebbecd87e94

## Teise loengu slaidid
https://github.com/mrttlu/esimene/blob/main/docs/2.%20loeng.pdf

* Moodulid
  * Moodulite abil on võimalik jagada kood eraldi failidesse ja vajaduse korral neid importida.
  * Mooduli tegemiseks tuleb selle sisu eksportida, näiteks:
  ```javascript
  // defineerime konfiguratsiooni objekti
  const config = {
    port: 3000,
    databasePassword: 'secret'
  };
  // Ekspordime selle objekti - ilma selleta selle faili sisu mujale importida ei saa!
  module.exports = config;
  ```
  * Teises failis saab seda faili nüüd kasutada nii:
  ```javascript
  // Impordime config faili sisu ja paneme selle myConfig konstanti
  const myConfig = require('./config'); // .js laiendit ei ole vaja kirjutada, Node saab sellest ise aru

  // Näitame konsoolis config moodulist imporditud pordi numbrit
  console.log(myConfig.port);
  ```
  * Samast kataloogist importides pannakse faili nime ette './', näiteks: const myConfig = require('./config');
  * Kataloogist, mis on samm ülevalpool pannakse nime ette '../', näiteks const myConfig = require('../config');
* API struktuur
  * Controller
  * Service
  * Routes
  * Helpers

## Milleks üldse koodi struktureerida?
* Praeguseks on API-l kokku 4 endpointi, milles saab teha päringuid andmete lugemiseks, kirjutamiseks, muutmiseks ja kustutamiseks. Programmikoodi on kokku 640 rida, kusjuures loogikat ja kontrolle on tehtud väga minimaalselt. Mis siis, kui endpointe oleks rohkem? näiteks 20 või 40 vi 100? Kokkuvõttes läheks kood väga raskelt loetavaks. Struktureerimisega saame jagada koodi vastavalt selle eesmärgile väiksemateks tükkideks, mis annab koodile parema loetavuse, taaskasutatavuse ja ka testimise.
* Algselt näeb sellest API-st päringu tegemine välja selliselt:
![API sphagetti](docs/images/spaghetti.jpeg)
* Struktureerimise eesmärk on jagada kood tükkideks vastavalt ülesannetele.
  * Kui API-le tuleb päring, siis:
  * Router saadab päringu vastavale kontrollerile
  * Kontroller teeb:
    * Esmase kontrolli (kas vajalikud andmed on olemas)
    * Vaatab, mida on vaja vastuse tegemiseks
    * Küsib vastavatelt teenustelt vajalikud andmed
    * Moodustab vastuse kliendile
    * Saadab vastuse kliendile tagasi
    * Vajadusel kirjutab logisse, jms.
  * Teenused teevad päringuid andmebaasidesse ja saadavad vastuse kontrollerile
  * Lisaks võivad olla veel erinevad abiprogrammid, middlewared jms, mida meie koodis hetkel veel ei ole
* Teises loengus tehtud struktuuri tagajärjel näeb kasutaja pärimine välja selline (hetkel meil küll puuduv teenuses kontroll selle kohta, kas selline kasutaja eksisteerib):
![API Controller and service](docs/images/ControllerAndService.jpeg)

## Teises loengus tegime
* Tegime controllerite ja teenuste jaoks eraldi kaustad
  * /api/controllers
  * /api/services
* Liigutasime index.js alt kõik mis puudutas kasutajaid /api/controllers/usersController.js faili
* Liigutasime usersController.js alt kõik mis puudutas kasutajate tegevusi 'andmebaasiga' /api/services/usersService.js faili
* Kood peale teist loengut: https://github.com/mrttlu/esimene/tree/c22fec22b5c1da5e676226e0c6b4909c796964b1

## Kodutöö
* Teha iga ressursi jaoks oma controller ja service
* Kõik ressurssidega seotud tegevused jagada controllerite ja service-te alla nii, nagu loengus tegime kasutajatega

#### Tähelepanekud
* Tuleb andmemudel korralikult läbi mõelda - mis on millega seotud
* Endpointide juures peaks hoidma ühtset stiili - kui on endpoint /api/users siis peaks siit saama kätte konkreetselt kasutajat puudutavat informatsiooni. Kui on vaja näiteks saada kätte ühe kasutajaga seotud muud andmed - näiteks kõik kodutööd, mis sellel kasutajal on, siis saab teha sellise endpoindi: /api/users/:id/homeworks , kus id on kasutaja id. Siis ei teki segadust, mida see id kusagil parasjagu tähendab.
* Giti kasutamise mured
  * Kuidas oma olemasolev projekt git-i üles laadida - https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  * Git cheat sheet - https://education.github.com/git-cheat-sheet-education.pdf
  * Traversy Media 33 minutit pikk video sellest, mis on git ja kuidas sellega alustada jms. - https://www.youtube.com/watch?v=SWYqp7iY_Tc
  * Teiste ja oma projekti saab oma arvutisse kloonida käsuga: git clone repositooriumi link (näiteks git clone https://github.com/mrttlu/esimene.git)
  * Giti repositooriumi lingi saab rohelise Code nupu alt:
  ![Giti repositooriumi link](docs/images/gitAadress.png)
  * Peale kloonimist pead kindlasti minema kloonitud repositooriumi kausta (näiteks cd esimene)
  * Kui oled repo alla klooninud, siis enne kui selle käivitada saad, tuleb sõltuvused alla laadida käsuga npm install (seda tuleb teha selles kaustas, kus on fail package.json)
* Node programmi saab käivitada käsuga node failinimi.js (meil siiani node index.js)
* Kui ei taha peale igat muudatust programmi seisma ja uuesti käima panna, võib kasutada sellist programmi, nagu nodemon (https://nodemon.io/), mis saab ise aru, kui failides tehakse muudatusi ja peale salvestamist paneb ise automaatselt programmi korra kinni ja kohe uuesti käima. Selleks tuleb see kõigepealt paigaldada (npm install -g nodemon (linuxi ja maci all tahab võibolla ka sudo käsku ette - sudo npm install -g nodemon)) ja peale seda käivitada node programm käsuga nodemon failinimi.js (nodemon index.js).


# Kolmanda loengu teemad (14. november)
* Kodutööde esitlemine
* Parooli hashimine
  * Bcrypt https://www.npmjs.com/package/bcrypt
* Middleware:
  * Kirjutamine: https://expressjs.com/en/guide/writing-middleware.html
  * Kasutamine: https://expressjs.com/en/guide/using-middleware.html
  * Milleks middleware'i kasutada?
  * Järjekord on oluline
* Autentimine ja autoriseerimine
  * JSON Web Token https://www.npmjs.com/package/jsonwebtoken

## Kolmandas loengus tegime
* Parooli hashimine
Praegu on meil 'andmebaasis' kasutaja parool salvestatud lihtsalt tavalise stringina. Kui pärime kasutajate andmeid, on andmete hulgas parool kenasti näha ja loetav. See ei ole hea praktika. Paroolid peavad olema andmebaasis salvestatud sellisel kujul, et neid ei oleks võimalik sellisel kujul lugeda, et on aru saada, mis parooliga tegemist on. Selleks kasutatakse parooli hashimist.
Nodes saame kasutada sellist npm pakki, nagu bcrypt (https://www.npmjs.com/package/bcrypt). Bcrypt on funktsioon andmete krüpteerimiseks. Sellest, mis bcrypt on ja kuidas see täpsemalt toimib, saate lugeda näiteks Dan Arias'e artiklist siin: https://auth0.com/blog/hashing-in-action-understanding-bcrypt/
Meie API-s peaks bcrypti kasutamine käima nii, et kui me loome uue kasutaja, siis enne, kui kasutaja andmed 'andmebaasi' salvestatakse, hashitakse parool ära ja tavalise stringi asemel salvestatakse 'andmebaasi' hashitud parool.
Selle jaoks lisame oma API-le uue teenuse 'hashService.js' ja sinna lisame kaks funktsiooni, millest üks on parooli hashimiseks ja teine on hiljem parooli võrdlemiseks hashiga.
Lisaks paigaldame bcrypt'i käsuga npm install bcrypt
hashService.js fail näeb välja selline:
```javascript
// Impordime bcrypt'i
const bcrypt = require('bcrypt');
// Järgnev muutuja määrab ära, kui palju peab tööd tegema parooli hashimiseks (mida suurem number, seda rohkem on vaja vaeva näha)
const saltRounds = 10;
// Defineerime teenuse objekti
const hashService = {};

// Funktsioon parooli hashimiseks - funktsioon tagastab hashitud parooli
hashService.hash = (password) => {
  const hash = bcrypt.hash(password, saltRounds);
  return hash;
}

// Funktsioon parooli võrdlemiseks hashiga - funktsioon tagastab true või false vastavalt võrdlemise tulemusele
hashService.compare = (password, hash) => {
  const match = bcrypt.compare(password, hash);
  return match;
}
// Ekspordime selle objekti, et saaksime seda teenust mujal kasutada
module.exports = hashService;
```
Kuna parooli hashimine on tegevus, mis võtab aega, siis node eripärast lähtudes (asünkroonsus) võib juhtuda olukord, kus parooli hashimine võtab aega nii kaua, et koodi täitmine läheb enne edasi, kui parool hashitud saab. Seetõttu peame ütlema programmi koodile, et ära enne järgmise koodirea juurde liigu, kui hashimine on tehtud. Selleks saame kasutada async/await funktsionaalsust.
```javascript
// Kui teame, et mingi funktsiooni sees toimub aeganõudev tegevus, siis peame kasutama selle funktsiooni deklareerimise juures async märksõna
const timeConsumingFunction = async () => {
  // Kui tahame ära oodata vastuse, enne kui kood edasi läheb, kasutame await märksõna
  const result = await someFunction();
  // Vastus tagastatakse alles siis, kui result on käes
  return result;
}
```
Async/await muutub eriti oluliseks siis, kui hakkame oma API-t andmebaasiga liidestama, sest andmete pärimine võtab tihtipeale aega.

Funktsioonid hashService faili sees tuleb teha selliseks:
```javascript

// Funktsioon parooli hashimiseks - funktsioon tagastab hashitud parooli
hashService.hash = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

// Funktsioon parooli võrdlemiseks hashiga - funktsioon tagastab true või false vastavalt võrdlemise tulemusele
hashService.compare = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
}
```
Meeles peab seejuures pidama seda, et async/await märksõnu on vaja kasutada nüüd ka nendes funktsioonides, mis hashimise funktsioone välja kutsuma hakkavad (usersService ja usersController)

Nüüd, kui meil on olemas teenud, mis oskab parooli hashida, saame seda kasutada kasutaja andmete salvestamisel.
Andmete salvestamisega tegeleb usersService funktsioon 'create'
```javascript
// Hashsimise teenuse kasutamiseks peame selle kõigepealt importima
const hashService = require('./hashService');

// Kasutaja lisamise funktsioon
usersService.create = async (user) => {
  user.id = users.length;
  // Hashime loodava kasutaja parooli ja asendame selle kasutaja objektis saadud hashiga
  user.password = await hashService.hash(user.password);
  // Lisame kasutaja 'andmebaasi'
  users.push(user);

  // Tagastame kasutaja
  return user;
}
```
Tähelepanu peab pöörama sellele, et kuna peame ootama ära hashimise teenusest tagastatava tulemuse, siis peame ka siin kasutama async/await'i

Samuti peab lisama async/await ka usersControllerisse, mis eelneva teenuse välja kutsub:
```javascript
usersController.create = async (req, res) => {
  // Uue kasutaja loomine
  const newUser = await usersService.create(user);
}
```
* Parooli hashimise projekti lisamine on näha siin videos: https://youtu.be/5AeA-T6EcLE

* Middleware
  * Mis on middleware?
  Middleware funktsioonid on funktsioonid, millel on juurdepääs päringuobjektile (req), vastuseobjektile (res) ja järgmisele funktsioonile rakenduse päringu-vastuse tsüklis. Next funktsioon on Express-ruuteri funktsioon, mis käivitamisel käivitab middleware praeguse middleware’i järel.
  * Middleware saab:
    * Käivitada koodi
    * Teha muudatusi request ja response objektides
    * Lõpetada request-response tsüklit
    * Kutsuda välja järjekorrast järgmine middleware
  * Meeles peab pidama, et kui middleware ei lõpeta päringu-vastuse tsüklit (näiteks res.status(200).json…), siis peab middleware kutsuma välja next() funktsiooni, muidu jääb rakendus ‘rippuma’

  Logimise middleware näide:
  ```javascript
  // Funktsioon päringute logimiseks konsooli
  const logger = (req, res, next) => {
    // Väljastatakse konsooli päringu tegemise kuupäev ja päringu aadress (endpoint, millele päring tehti)
    console.log(new Date(), req.url);
    // Next funktsiooni käivitamine annab järjekorra üle järgmisele middleware'le
    next();
  }
  ```
  Selleks, et middleware't kasutada saaks, peab selle registreerima, seejuures on oluline see, et seda tuleb teha enne route'de defineerimist.
  ```javascript
  app.use(logger);

  app.get('/api/users', usersService.read);
  ```
  Skeemi peal näeb middleware kasutamine välja nii:
  ![Middleware](docs/images/Middleware.jpeg)
* Middleware kasutamine on näha siin videos: https://youtu.be/85WCggg575A
## Mida me ei jõudnud kolmandas loengus teha
* JSON Web Token - https://jwt.io/introduction/
  * JSON WEB TOKEN (JWT) on avatud standard, mis määratleb kompaktse ja iseseisva viisi teabe turvaliseks edastamiseks osapoolte vahel JSON-objektina. Seda teavet saab kontrollida ja usaldada, kuna see on digitaalselt allkirjastatud. JWT-sid saab allkirjastada parooliga või avaliku / privaatse võtmepaari abil RSA või ECDSA abil.
  * JWT struktuur
    * Header
      * Päis koosneb tavaliselt kahest osast: loa tüübist, milleks on JWT, ja kasutatavast allkirjastamise algoritmist, näiteks HMAC SHA256 või RSA.
    * Payload
      * Tokeni teine osa on kasulik koormus, mis sisaldab nõudeid.
    * Signature
      * Allkirjaosa loomiseks peate võtma kodeeritud päise, kodeeritud kasuliku koormuse, parooli, päises määratud algoritmi ja selle allkirjastama.
  * Millal JWT-d kasutada?
    * Autoriseerimine: see on kõige tavalisem stsenaarium JWT kasutamiseks. Kui kasutaja on sisse logitud, sisaldab iga järgmine taotlus JWT-d, mis võimaldab kasutajal juurde pääseda selle märgiga lubatud marsruutidele, teenustele ja ressurssidele.
    * Teabevahetus: JSON-i veebimärgid on hea viis turvaliselt osapoolte vahel teavet edastada. Kuna JWT-sid saab allkirjastada - näiteks kasutades avaliku / privaatse võtme paare -, võite olla kindel, et saatjad on need, kes nad end ütlevad. Lisaks, kuna allkiri arvutatakse päise ja kasuliku koormuse abil, saate ka kontrollida, kas sisu ei ole muudetud
* JWT lisamine projektile on näha siin videos: https://youtu.be/dPuKKJcCGd8

# Neljanda loengu teemad (28. november)
* Kodutööde esitlemine
* Andmebaasiga liidestamine
  * MySQL

* Kõigepealt tuleks arvutisse installeerida MySQL-i server (https://dev.mysql.com/downloads/mysql/) või kasutada mingit olemasolevat varianti
* Kes oskab, sellel soovitan kasutada MySQLi Dockeri konteinerit (https://hub.docker.com/_/mysql)
* Seejärel tulks luua andmebaasi mudel, luua andmebaas ja tabelid.
  * Mina tegin sellise andmebaasi mudeli: ![dbModel](docs/images/dbModel.png)
  * Mudeli loomiseks on kasutatu MySQL Workbench tööriista (https://dev.mysql.com/downloads/workbench/), mille abil on väga mugav võtta otse andmebaasiga ühendust, teha tabeleid, luua nende vahel seoseid, teha päringuid jne.
  * Andmebaasi tabelite loomise päringud on paringud.sql failis.
* Paigalda oma API-le mysql2 npm pakk (https://www.npmjs.com/package/mysql2) - npm install mysql2
* Nagu ka loengus, teeme andmebaasi ühenduse jaoks eraldi faili db.js - sinna impordime mysql2 teegi, loome andmebaasi ühenduse ja ekspordime selle, et seda oleks võimalik eraldi teenuste all kasutada.

db.js fail võiks välja näha siis selline:
```javascript
  // Impordime config.js failist andmebaasiühenduse jaoks vajalikud muutujad
  const { dbConfig } = require('./config')
  // Impordime mysql2 teegi ja omistame selle mysql konstanti
  const mysql = require('mysql2');
  // Impordime Node util teegi selleks, et saaksime hiljem mysql andmebaasi ühendust kasutada sünkroonselt async/await-iga
  const util = require('util');

  // Loome andmebaasi ühenduse jaoks config objekti
  const config = {
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
};
// Loome ühenduse andmebaasiga
const connection = mysql.createConnection(config);
// Muudame query callback funktsiooni Promise-ks
connection.query = util.promisify(connection.query);
// Ekspordime ühenduse
module.exports = connection;
```

* Nagu näha, siis eeldab ühenduse loomine config failis dbConfig kirje olemasolu. Need ühenduseks vajalikud parameetrid peaksid olema jällegi eraldi failis, mida githubi ei salvestata, sest muu hulgas sisaldab näiteks parooli. Selle, kuidas config.js fail välja näeb, saab vaadata config.sample.js failist.
config.sample.js faili sisu:
```javascript
const config = {
  port: 3000,
  jwtSecret: 'secret',
  dbConfig: {
    url: 'localhost',
    user: 'root',
    password: 'password',
    database: 'homeworks'
  }
}

module.exports = config;
```
* Nüüd on võimalik hakata andmebaasi kasutama teenuste all.
* Selleks tuleb teenuse all kõigepealt importida andmebaasi ühendus ja siis saab hakata juba päringuid kirjutama
```javascript
const hashService = require('./hashService');
const db = require('../../db');

usersService = {};

// Return list of users
usersService.read = async () => {
  const users = await db.query(`SELECT id, firstName, lastName, email FROM users`);
  return users;
}
```
* SQL-päringute käivitamisel peab meeles pidama seda, et kui päringud sisaldavad kasutaja poolt saadetud infot (näiteks e-mail, parool, ükskõik mida klient API-sse saadab), siis annab see võimaluse kasutada SQL injection rünnakut. (Selle kohta saab lugeda näiteks PortSwigger'i artiklist siit: https://portswigger.net/web-security/sql-injection).
* SQL injectioni vältimiseks tuleb kasutada parameetrilisi päringuid, kus kasutaja poolt saadetud muutujaid ei kirjutata otse päringusse sisse.
```javascript
// Selle asemel, et kirjutada kasutaja poolt saadetud infot otse päringusse kujul:
const users = await db.query(`SELECT * FROM users WHERE email = email`);

// Tuleks seda teha sellisel kujul:
const users = await db.query(`SELECT * FROM users WHERE email = ?`, [email]);

// Kui muutujaid on rohkem siis tuleb ikkagi muutujate asemele päringusse kirjutada ? ja pärast [] sisse lihtsalt muutujad komadega eraldatult
const res = await db.query(`INSERT INTO users SET firstName = ?, lastName = ?, email = ?, password = ?`, [user.firstName, user.lastName, user.email, user.password]);
```
# Viienda loengu teemad (18. detsember)
* Kodutööde esitlemine
* Testimine
* Automaattestid
  * Jest
  * Supertest

# Eksam (9.jaanuar)
* Oma projekti esitlemine
* Küsimused / vastused
* Individuaalne tagasiside

