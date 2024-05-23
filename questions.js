const quizes = [
  {
    question: 'Kāda veida atkritumiem ir paredzēti brūnie konteineri?',
    answers: ['bioloģiskajiem atkritumiem', 'tekstilam', 'automašīnu riepām'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Cik kg atkritumu viens Latvijas iedzīvotājs  saražo vidēji gadā',
    answers: ['100 kg', '478 kg', '1220 kg'],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Kurš energoresursu veids ir vispopulārākais Latvijā?',
    answers: ['hidroenerğija', 'saules enerğija', 'vēja enerğija'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Kāds ir visbiežāk sastopamais ūdens piesārņojuma veids?',
    answers: ['ķīmiskais', 'fizikālais', 'bioloģiskais'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Cik daudz procentu no Latvijas teritorijas ir meži?',
    answers: ['44%', '52%', '61%'],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Par cik procentiem ES siltumnīcefekta gāzu emisijas ir jāsamazina līdz 2030. gadam?',
    answers: ['par 10%', 'par 33%', 'par 55%'],
    correct: 2,
    hint: ' ',
  },
  {
    question: 'Par cik lielu daļu emisiju procentos ir atbildīga ātrā mode? ',
    answers: ['10%', '20%', '5%'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Bioloģiskais ūdens piesārņojums iekļauj…',
    answers: [
      'rūpnieciskās ķīmiskās vielas, pesticīdi, medikamenti',
      'sadzīves atkritumi, radioaktīvie sārņi, siltuma piesārņojums.',
      'ūdens objektam neraksturīgi dzīvnieki, baktērijas, augi, sēnes un vīrusi.',
    ],
    correct: 2,
    hint: ' ',
  },
  {
    question: 'Kas ir EKO pēda? ',
    answers: [
      'cilvēka gadā saražoto atkritumu rādītājs',
      'cilvēka ietekmes uz vidi aprēķināšanas un atspoguļošanas metode',
      'meža piesārņojuma atspoguļošana, aprēķinot mežā izmesto atkritumu daudzumu.',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Par cik lielu daļu emisiju procentos ir atbildīga ātrā mode? ',
    answers: ['10%', '20%', '5%'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Kura gāze galvenokārt atbild par siltuma saglabāšanu Zemes atmosfērā?',
    answers: ['skābeklis', 'ogļskābā gāze', 'slāpeklis'],
    correct: 0,
    hint: 'Gāzes ķīmiskā formula ir CO2 ',
  },
  {
    question: ' Kā globālā sasilšana ietekmē ledu Ziemeļpolā un Dienvidpolā',
    answers: [
      'tā padara tos lielākus',
      'tā izraisa to kustību un samazināšanos',
      'nav ietekmes',
    ],
    correct: 1,
    hint: 'Ledus siltuma ietekmē kūst. ',
  },
  {
    question:
      'Kādas ir vistraģiskākās sekas dzīvniekiem, ja globālā sasilšana turpināsies?',
    answers: [
      'palielināsies biodiversitāte',
      'samazināsies dzīvnieku dzīvesvieta',
      'sugas izmirs',
    ],
    correct: 2,
    hint: 'Globālā sasilšana negatīvi ietekmē dzīvnieku daudzveidību.',
  },
  {
    question: 'Kāds ir viens no globālās sasilšanas iemesliem?',
    answers: [
      'koku stādīšana',
      ' fosilo kurināmo, piemēram, ogles un naftas dedzināšana',
      'plastmasas pudeļu pārstrāde',
    ],
    correct: 1,
    hint: '',
  },
  {
    question:
      ' Kura cilvēka darbība izdala visvairāk siltumnīcefekta gāzes atmosfērā?',
    answers: [
      'riteņbraukšana',
      'matu žāvētāja lietošana',
      'automašīnu un kravas automobiļu vadīšana',
    ],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Kurš atjaunojamās enerģijas avots palīdz samazināt globālo sasilšanu?',
    answers: ['saules enerģija', 'ogļu degšana', 'dabasgāzes izmantošana'],
    correct: 0,
    hint: ' ',
  },
  {
    question: ' Kā globālā sasilšana ietekmē laika apstākļus?',
    answers: [
      'tā nemaina laika apstākļus ',
      ' tā izraisa biežākas un stiprākas vētras',
      ' tā padara laika apstākļus maigākus un prognozējamākus',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Ko ikviens  var darīt, lai palīdzētu samazināt globālo sasilšanu?',
    answers: [
      ' biežāk braukt ar auto, nevis iet vai braukt ar velosipēdu',
      ' taupīt enerģiju, izslēdzot gaismas un ierīces, kad tās netiek izmantotas',
      ' ikdienā izšķērdīgāk  lietot pārtiku un ūdeni ',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Kas  no  minētā nav globālās sasilšanas sekas?',
    answers: [
      'palielinās jūras līmenis',
      'dzīvnieku populāciju pieaugums',
      ' ledāju  kušana',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Kādi atkritumi Latvijā procentuāli (34,2%) visvairāk tiek radīti? ',
    answers: [
      'bioloģiski noārdāmie',
      'plastmasas atkritumi',
      'stikla atkritumi',
    ],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Līdz cik procentiem līdz 2035.gadam jāsamazina poligonos noglabāto atkritumu īpatsvars?',
    answers: ['līdz 10%', 'līdz 20%', 'līdz 36%'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Pasaulē ik gadu viena trešdaļa no saražotās pārtikas nonāk atkritumos.  Cik daudz tas ir?',
    answers: ['1,3 miljardi tonnu', ' 1000 tonnu', '5 miljoni tonnu'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Ūdens ir svarīgs pārtikas ražošanas resurss. Cik litru ūdens nepieciešams,lai saražotu 1 kg šokolādes?',
    answers: ['15 litri', '5366 litri', '17196 litri'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Kur tiek izniekota vislielākā daļa pārtikas (53%)?',
    answers: ['ražošanas procesā', 'tirdzniecībā', 'mājsaimniecībā'],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Ātrā mode bieži noved pie pircēju nesaudzīgas izturēšanās pret iegādātajiem apģērbiem. Kā sauc  kustību, kas tiecas modes industriju padarīt atbildīgāku pret tās ietekmi uz vidi?',
    answers: ['ilgtspējīga mode', 'ekoloģiska mode', 'drošas vides mode'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Pēdējo 15 gadu laikā apģērba ražošanas apmēri ir dubultojušies un ir aprēķināts, ka tekstila industrija rada vairāk ogļskābās gāzes izmešu nekā…',
    answers: [
      'kuģniecība un lidojumi kopā',
      'visas pārtikas ražošana Vācijā',
      'fosilie kurināmie Lietuvā un Igaunijā',
    ],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Ir aprēķināts, ka ik sekundi atkritumu konteiners ar apģērbu nonāk atkritumu poligonos vai tiek sadedzināts. Cik daudz no tā tiek pārstrādāts?',
    answers: ['1%', '5%', '10%'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Kā sauc procesu, kad atmosfērā tiek emitēts tikai tik liels siltumnīcefekta gāzu apjoms, kādu spēj absorbēt daba – meži, okeāni un augsne?',
    answers: ['absorbācija', 'emitācija', 'klimatneitralitāte'],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Katru gadu marta pēdējā sestdienā ir simboliska gaismas izslēgšanas akcija visā pasaulē. Kā to sauc?',
    answers: ['tumsas stunda', 'gaismas stunda', 'zemes stunda'],
    correct: 2,
    hint: ' ',
  },
  {
    question: 'Kas ir Zero Waste?',
    answers: [
      'modes preču zīmols',
      ' bezatkritumu kustība',
      'inovatīvs pārtikas produkts',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Cik kg pārtikas atkritumu gadā rada  viens iedzīvotājs Latvijā?',
    answers: ['57 kg', '113 kg', '255 kg'],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Cik kg pārtikas atkritumu gadā rada  viens iedzīvotājs Latvijā?',
    answers: ['saldēt produktus', 'aiznest produktus kaimiņam', 'noslēpt'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Kāpēc elektromobiļi ir labs veids, kā palīdzēt samazināt globālo sasilšanu?',
    answers: [
      'tie neizdala siltumnīcefekta gāzes atmosfērā',
      'tie ir mazi un mobili',
      'tie nemaksā dārgi',
    ],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Kurus no šiem laikapstākļiem var pasliktināt globālā sasilšana?',
    answers: ['lietus temperatūra', 'viesuļvētras', 'sniega krāsa'],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Fosilais kurināmais, tāpat kā gāze, ko ievietojam automašīnās, nāk no…',
    answers: [
      'dabas muzeja',
      'interneta',
      'organismiem, galvenokārt aļģēm, kas radās pirms miljoniem gadu',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Globālās sasilšanas rezultātā okeāns kļūst siltāks, kā rezultātā…',
    answers: [
      'vairāk cilvēku brīvdienas pavada pludmalē',
      'palielinās okeānā ziepju un šampūnu līmenis',
      'koraļļu rifi zaudē krāsu',
    ],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Kāpēc ir ieteicams izslēgt apgaismojumu un citu elektroniku, kad tās nelieto?',
    answers: [
      'jo tai apnicis spīdēt',
      'jo visa enerģija nāk no spēkstacijas, kur, iespējams, sadedzina fosilo  kurināmo',
      'lai vecāki nedomātu, ka jūs spēlējat videospēles',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Pārtika ir pirmās nepieciešamības prece. Kad saražoto pārtiku izmetam, kas vēl tiek izšķiests?',
    answers: ['ūdens', 'trauku mazgājamais līdzeklis', 'salvetes'],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Ir zināms, ka vidēji pasaulē tiek izmesti 30% saražotās pārtikas. Kura ēdienu grupa tiek izmesta visvairāk?',
    answers: ['piena produkti', 'miltu izstrādājumi', 'augļi un dārzeņi'],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Cik lielā apjomā Baltijas jūru ir ietekmējusi eitrofikācija (ūdens aizaugšana)?',
    answers: ['42%', '97%', '64%'],
    correct: 2,
    hint: ' ',
  },
  {
    question: 'Kas ir zaļā domāšana?',
    answers: [
      'zaļi sapņi naktī',
      'pieeja, kas veicina ilgtspējīgu attieksmi pret ikdienas paradumiem',
      'perfekta nezāļu izravēšana dārzā',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Latvijas tirgū gadā tiek novietotas vairāk nekā 41 000 tonnas plastmasas iepakojuma, savukārt pārstrādāt var tikai  aptuveni 19 000 tonnas, jo  Latvijā 40% no veikalu plauktos sastopamo preču iepakojumiem ir…',
    answers: ['no krāsaina materiāla', 'pārāk maza izmēra', 'ir daudzslāņu'],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Kā noteikts Eiropas Zaļajā kursā , Eiropa ir apņēmusies līdz 2050. gadam kļūt …',
    answers: [
      'klimatneitrāla',
      'inovatīva celtniecības jomā',
      'kuģošanas līderi',
    ],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Kas ir aprites ekonomika?',
    answers: [
      'patēriņa modelis, kas paredz produktu lietošanu pēc iespējas ilgākā laikā',
      'jauns biznesa modelis',
      'lineārās ekonomikas modelis',
    ],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Ik gadu vairāk nekā 2,2 miljardi tonnu atkritumu rodas…',
    answers: ['Latvijā', 'Eiropas Savienībā', 'pasaulē'],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Kas ir atjaunojamā enerģija?Tā ir enerģija, ko iegūst no …',
    answers: ['saules, vēja, ūdens', 'kalnu ledājiem', 'lielas jaudas motora'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Cik laika nepieciešams, lai pilnībā sadalītos plastmasas pudele?',
    answers: ['15 gadi', '100 gadi', '450 gadi'],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Cik % no visas elektroenerģijas Latvijā saražo 3 lielākās HES - Rīgas, Plāviņu, Ķeguma?',
    answers: ['44%', '53%', '61%'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Pārstrādājot 100 alumīnija skārdenes, var iegūt tik daudz enerģijas, lai izgaismotu istabu …',
    answers: ['vienu dienu', '8 dienas', 'divas nedēļas'],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Rūpnieciskas iekārtas PET pudeles vispirms pārstrādā smalkās pārslās, un no tām var izgatavot ..',
    answers: ['apģērbu, segas', 'pārtikas produktus', 'sadzīves tehniku'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Kā palīdzēt pasaulei?',
    answers: [
      'ēst tikai imprtētos produktus',
      'nelaist gaisā balonus',
      'katru pavasari uzrakt dobes',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Kā palīdzēt pasaulei?',
    answers: [
      'ēst tikai imprtētos produktus',
      'nelaist gaisā balonus',
      'katru pavasari uzrakt dobes',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Kuras krāsas konteinerā ir jāizmet vecais ledusskapis?',
    answers: [
      'var gan zaļajā, gan dzeltenajā',
      'tikai zilajā',
      'nevienā, tas jānodod  šķirošanas punktā',
    ],
    correct: 2,
    hint: ' ',
  },
  {
    question:
      'Sadzīves atkritumiem sadaloties, rodas gāzes, kas ir kaitīgas cilvēku un dzīvnieku veselībai. Tā ir..',
    answers: ['oglekļa dioksīds un metāns', 'ūdeņradis', 'vēdergāzes'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Sadedzinot atkritumus nepiemērotos apstākļos (ugunskurā, krāsnī), rodas cilvēka veselībai kaitīgi izmeši ',
    answers: ['pelni', 'smiltis', 'smagie metāli'],
    correct: 2,
    hint: ' ',
  },
  {
    question: 'Mežu izciršanu var ierobežot, …',
    answers: [
      'piedaloties protesta akcijās',
      'nododot pārstrādei makulatūru',
      'apliekot mežu ar ekoloģisko žogu',
    ],
    correct: 1,
    hint: ' ',
  },
  {
    question:
      'Papīra izejmateriāls ir celuloze, ko galvenokārt iegūst no koksnes. Lai saražotu vienu tonnu celulozes, ir jānocērt …',
    answers: ['4-5 koki', '12-14 koki', '20 koki'],
    correct: 1,
    hint: ' ',
  },
  {
    question: 'Jūras līmeņa celšanās ir pārspīlēta',
    answers: ['tas ir mīts', 'tā ir patiesība', '50/50'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Vulkāni emitē vairāk CO2 (ogļskābā gāze) nekā cilvēku darbība',
    answers: ['tas ir mīts', 'tā ir patiesība', '50/50'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Vulkāni emitē vairāk CO2 (ogļskābā gāze) nekā cilvēku darbība',
    answers: ['tas ir mīts', 'tā ir patiesība', '50/50'],
    correct: 0,
    hint: ' ',
  },
  {
    question: 'Kas ir Kioto protokols, ka ratificēja LR Saeima 2002.gadā?',
    answers: [
      'ES valstu prezidentu protokols par Japānas glābšanu',
      ' ANO vispārējās konvencijas par klimata pārmaiņām protokols',
      'protokols par katras valsts savākto sadzīves atkritumu daudzumu',
    ],
    correct: 0,
    hint: 'https://lv.wikipedia.org/wiki/ANO_visp%C4%81r%C4%93j%C4%81_konvencija_par_klimata_p%C4%81rmai%C5%86%C4%81m ',
  },
  {
    question:
      'Klimata pārmaiņu starpvaldību Padome (IPCC) ir galvenā ir galvenā starptautiskā organiz ācija, kas izveidota klimata   pārmaiņu seku mazināšanai. Pašlaik Padomē piedalās 195 ANO dalībvalstis. Kur atrodas šī Padome?',
    answers: ['Vašingtonā', 'Briselē', 'Ženēvā'],
    correct: 0,
    hint: 'https://lv.wikipedia.org/wiki/ANO_visp%C4%81r%C4%93j%C4%81_konvencija_par_klimata_p%C4%81rmai%C5%86%C4%81m ',
  },
  {
    question:
      'Ar klimatu saistītie ekonomiskie zaudējumi pēdējos 40 gados pasaulē ir… ',
    answers: ['samazinājušies', 'palielinājušies', 'palikuši nemainīgi'],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Starptautiskā sabiedrība ir vienisprātis, ka globālā sasilšana jānotur krietni zem… ',
    answers: ['+10°C', '+5° C', '+2° C '],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Cik procentu no ES budžeta tiks izlietoti cīņai pret klimata pārmaiņām?',
    answers: ['10%', '30%', '50% '],
    correct: 0,
    hint: ' ',
  },
  {
    question:
      'Iedzīvotāju grupas, kas ir visvairāk pakļautas klimata pārmaiņu ietekmei, ir sievietes,bezdarbnieki, atstumtie cilvēki un …',
    answers: [
      'cilvēki ar zemiem ienākumiem',
      'cilvēki ar augstiem ienākumiem',
      'miljonāri',
    ],
    correct: 0,
    hint: ' ',
  },
];

module.exports = quizes;
