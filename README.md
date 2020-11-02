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
R - Read | GET | ![Create](docs/images/READ.jpg)
U - Update | PUT | ![Create](docs/images/UPDATE.jpg)
D - Delete | DELETE | ![Create](docs/images/DELETE.jpg)

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

* Moodulid
  * module.exports = myModule;
  * const myModule = require('myModule');
  * samast kataloogist const myModule = require('./myModule');
  * kataloogist, mis on samm ülevalpool const myModule = require('../myModule');
* API struktuur
  * Controller
  * Service
  * Routes
  * Helpers

## Milleks üldse koodi struktureerida?
* Praeguseks oli API-l kokku 4 endpointi, milles sai teha päringuid andmete lugemiseks, kirjutamiseks, muutmiseks ja kustutamiseks. Programmikoodi oli kokku 640 rida, kusjuures loogikat ja kontrolle oli tehtud väga minimaalselt. Mis siis, kui endpointe oleks rohkem? näiteks 20 või 40 vi 100? Kokkuvõttes läheks kood väga raskelt loetavaks. Struktureerimisega saame jagada koodi vastavalt selle eesmärgile väiksemateks tükkideks, mis annab koodile parema loetavuse, taaskasutatavuse ja ka testimise.
* Algselt näeb sellest API-st päringu tegemine välja selliselt:
![API sphagetti](https://github.com/mrttlu/esimene/blob/main/docs/images/Algne%20api.jpeg)
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


# Kolmanda loengu teemad (14. november)
* Kodutööde esitlemine
* Middleware https://expressjs.com/en/guide/writing-middleware.html
  * Milleks middleware'i kasutada?
* Autentimine ja autoriseerimine
  * JSON Web Token https://jwt.io/
  * Bcrypt https://www.npmjs.com/package/bcrypt


# Neljanda loengu teemad (28. november)
* Kodutööde esitlemine
* Andmebaasiga liidestamine
  * Google Firestore https://firebase.google.com/docs/firestore/quickstart
  * NoSQL document database https://www.mongodb.com/nosql-explained

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

