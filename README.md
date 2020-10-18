# Programmeerimine II tunnis tehtu

##  Alustuseks
* NodeJS https://nodejs.org/en/
  * Serveris töötav javascript
  * Tasuta
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
  * C - Create (POST)
  * R - Reade (GET)
  * U - Update (PUT)
  * D - Delete (DELETE)

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

## Esimeses loengus tegime:
* Alustasime lihtsa Node.js API-ga kasutades express-i
* Tegime /api/ping endpoindi, mille abil saame kontrollida, kas API töötab ja mis annab vastuseks 200 - OK response ja JSON-i infoga: { success: true }
* Tegime kasutajate endpoindid:
  * GET /api/users - tagastab kõik kasutajad
  * GET /api/users/:id - tagastab kasutaja vastavalt id-le
  * POST /api/users - saab luua uue kasutaja - vajalikud väljad: firstName, lastName, email, password. Tagastab loodud kasutaja.
  * PUT /api/users - muudab kasutaja andmed - vajalikud väljad: id ja üks muudetavatest väljadest (firstName, lastName, email või password). Tagastab muudetud kasutaja andmed
  * DELETE /api/users - kustutab kasutaja - vajalik väli: id. Tagastab vastuseks 200 - OK response ja JSON-i infoga: { success: true }
  
## Esimene kodutöö - tähtaeg enne järgmist loengut (31.10.2020)
1. Mõelda välja projekt, millel oleks vaja vähemalt 3 - 4 endpointi. Näiteks koduste tööde üle arvestamise API, mille endpoindid oleks õppejõud, õppeaine, kodune töö vms. Eriti hea ja soovitav oleks variant, kus saate seda projekti siduda mõne teise aine kodutööga.
1. Luua vastavalt oma projektile API, mis sisaldaks vajalikke endpointe koos võimalusega igast endpoindist infot välja pärida, luua, muuta ja kustutada, nii nagu loengus näidise tegime.
1. Teha minimaalne kontroll endpointidele saadetava info kontrollimiseks - kas on olemas, kas vastab mingitele nõuetele jne.
1. Hoia oma kood alusest peale Githubis - kindlasti kasuta ka .gitignore (Node template) faili.
1. Jaga oma projekti Githubi linki õppejõuga.
1. Ole valmis järgmises loengus oma tehtut tutvustama

#### Mõned märkused loengust:
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
