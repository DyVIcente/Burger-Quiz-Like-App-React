const questions = [
  {
    question: 'Que veulent dire les chiffres au fond des verres de cantine ?',
    options: [
      'C’est l’âge que vous avez et le plus jeune va chercher l’eau.',
      'C’est la note que vous aurez à l’interro de cet après-midi.',
      'C’est le nombre de filles avec qui vous sortirez dans la vie.',
      'On sait pas, ça reste un mystère mais on est tous sur le coup…',
    ],
    answer: 'On sait pas, ça reste un mystère mais on est tous sur le coup…',
  },
  {
    question:
      'Si on avait persuadé Elvis Presley et Bob Marley de s’accoupler, on aurait pu obtenir?',
    options: [
      'Elvis Marley, le rasta king.',
      'Une baleine blanche avec des dreads.',
      'Des tubes comme « Spliff me tender » ou « Could you be cruel »',
      'Oui mais alors on dit n’importe quoi et toutes les réponses sont possibles.',
    ],
    answer:
      'Oui mais alors on dit n’importe quoi et toutes les réponses sont possibles.',
  },
  {
    question:
      'Selon la légende, pourquoi la ligne ferroviaire Moscou - St Petersbourg fait-elle un détour de 17km ?',
    options: [
      'Parce que les ouvriers étaient bourrés.',
      'Parce que le froid a tordu les rails.',
      'Parce que le Tsar avait laissé un doigt dépasser de sa règle.',
      'Parce qu’avant il y avait un village qui a disparu depuis.',
    ],
    answer: 'Parce que le Tsar avait laissé un doigt dépasser de sa règle.',
  },
  {
    question: 'Quel est le vice caché de Sherlock Holmes ?',
    options: [
      'Il est zoophile.',
      'Il est pigiste au Figaro.',
      'Il est cocaïnomane.',
      'Il mange ses crottes de nez.',
    ],
    answer: 'Il est cocaïnomane.',
  },
  {
    question: 'Quand la série "Derrick" s’est arrêtée, son scénariste avait :',
    options: ['74 ans.', '84 ans.', '94 ans.', 'Honte.'],
    answer: '84 ans.',
  },
  {
    question:
      'Quel sport pratique-t-on si on a un autocollant en forme de poing sur sa voiture ?',
    options: [
      'Le fist-fucking.',
      'La boxe anglaise.',
      'Le karaté.',
      'La boxe en voiture.',
    ],
    answer: 'Le karaté.',
  },
  {
    question: 'Quel est le cri de l’aigle Milan ?',
    options: ['Il huit.', 'Il neuf.', 'Il dix.', 'Il deux-cent-cinquante.'],
    answer: 'Il huit.',
  },
  {
    question: 'Qui a dit "je vis mon quotidien au jour le jour" ?',
    options: [
      'Jacques Chirac, nu sur la terrasse du fort de Brégançon.',
      'Jean-Jacques Goldman, passant faire un retrait à la SACEM.',
      'Valéry Giscard-d’Estaing, avant de se coucher.',
      'Aziz du loft, avec 50 micros pour l’enregistrer.',
    ],
    answer: 'Aziz du loft, avec 50 micros pour l’enregistrer.',
  },
  {
    question:
      'Laquelle de ces phrases contient toutes les lettres de l’alphabet ?',
    options: [
      'Servez ce whisky aux petits juges blonds qui fument.',
      'Goldorak a pété mon xylophone en peau de zèbre.',
      'Zorro et Xéna la guerrière font du kung-fu au Quatar.',
      'Wolfgang a crié « AZTYPOQGFGMSXVBUUU!! »',
    ],
    answer: 'Servez ce whisky aux petits juges blonds qui fument.',
  },
  {
    question:
      'Parmi ces affirmations sur les noms de villes, laquelle est correcte ?',
    options: [
      'Avignon est le croisement de la ville d’Avi et la ville de Gnon.',
      'Budapest est le croisement de la ville de Buda et la ville de Pest.',
      'Biarritz est le croisement de la ville de Biar avec l’hôtel « Le Ritz ».',
      'Amsterdam est le croisement d’un hamster et d’une dame.',
    ],
    answer:
      'Budapest est le croisement de la ville de Buda et la ville de Pest.',
  },
  {
    question:
      'Un seul de ces ustensiles de cuisine à consonance sexuelle n’existe pas, lequel ?',
    options: ['Lèchefrite.', 'Cul-de-poule.', 'Ouvre-boîte.', 'Démonte-pneu.'],
    answer: 'Démonte-pneu.',
  },
  {
    question: 'Quel tatouage Johnny Depp a-t-il sur le bras droit ?',
    options: [
      'Un tatouage « Winona Forever ».',
      'Un tatouage « Wine Forever » qui veut dire « ivrogne pour toujours ».',
      'Un tatouage « Willow Forever ».',
      'Un tatouage « Oui-Go Forever », en hommage à la SNCF.',
    ],
    answer:
      'Un tatouage « Wine Forever » qui veut dire « ivrogne pour toujours ».',
  },
  {
    question: 'Qu’est-ce que le Parapluie bulgare ?',
    options: [
      'Un parapluie en Bulgarie.',
      'Un resto-basket en Slovénie.',
      'Une position sexuelle en Ukraine.',
      'Un parapluie armé développé par le KGB.',
    ],
    answer: 'Un parapluie armé développé par le KGB.',
  },
  {
    question:
      'Quel objet appartenant à Neil Armstrong s’est vendu 27 350$ aux enchères ?',
    options: [
      'Un chèque de 10,5$.',
      'Une maquette de fusée de son enfance.',
      'Une lettre qu’il avait laissé à sa femme avant de partir.',
      'Une de ses crottes de nez qui contenait de la poussière de lune.',
    ],
    answer: 'Un chèque de 10,5$.',
  },
  {
    question: 'Quelle était la plus grande peur de Staline ?',
    options: [
      'De se prendre une bombe nucléaire.',
      'De se faire assassiner.',
      'De tomber amoureux.',
      'De ressembler à Super Mario.',
    ],
    answer: 'De se faire assassiner.',
  },
  {
    question: 'A quel âge est mort ce bon vieux Mathusalem ?',
    options: [
      '123 ans.',
      '578 ans.',
      '969 ans.',
      'Il est toujours vivant et aurait été aperçu au VIP ROOM de St Tropez l’été dernier.',
    ],
    answer: '969 ans.',
  },
  {
    question: 'Quel est l’origine du mot "SWAG" ?',
    options: [
      'C’est l’acronyme de « Secretly We Are Gay ».',
      'C’est le verlan de « GAWS » en anglais qui veut dire « trop stylé ».',
      'C’est le dérivé du verbe « to swagger » inventé par W. Shakespeare en 1590.',
      'On en a aucune idée. Il y a des questions comme ça, sans réponses.',
    ],
    answer:
      'C’est le dérivé du verbe « to swagger » inventé par W. Shakespeare en 1590.',
  },
  {
    question: 'D’après vous, quelle était la taille de Napoléon ?',
    options: [
      '1,65m, Comme Bruno Mars.',
      '1,68m, Comme Nicolas Sarkozy.',
      '1,69m, Comme Tom Cruise.',
      '1,89m, Comme Alain Chabat.',
    ],
    answer: '1,69m, Comme Tom Cruise.',
  },
  {
    question: 'Une seule de ces affirmations est vraie, laquelle ?',
    options: [
      'Richard Nixon a traversé la douane avec une mallette pleine de weed pour Louis Armstrong.',
      'John F. Kennedy a traversé la douane avec une mallette pleine de coke pour Elvis Presley',
      'Barack Obama a traversé la douane avec une mallette pleine de LSD pour Jay-Z.',
      'Donald Trump a traversé la douane pour raccompagner un mexicain chez lui.',
    ],
    answer:
      'Richard Nixon a traversé la douane avec une mallette pleine de weed pour Louis Armstrong.',
  },
  {
    question:
      'Une seule de ces affirmations sur ces acteurs champions d’arts martiaux est complètement vraie, laquelle ?',
    options: [
      'Jackie Chan a enregistré 20 albums.',
      'Bruce Lee a écrit 20 livres.',
      'Steven Seagal a construit 20 maisons.',
      'Chuck Norris a peint 20 autoportraits avec ses poings.',
    ],
    answer: 'Jackie Chan a enregistré 20 albums.',
  },
  {
    question: 'En 1951 Disney a sorti une BD dans laquelle...',
    options: [
      'Mickey était soviétique.',
      'Dingo était marchand d’armes.',
      'Mickey et Dingo étaient des dealers d’amphétamines.',
      'Minnie rencontre des gens qu’elle ne connaissait pas et sympathise avec eux : « Thank you Jackie and Mickey ».',
    ],
    answer: 'Mickey et Dingo étaient des dealers d’amphétamines.',
  },
  {
    question: 'D’où vient l’expression "passer une nuit blanche" ?',
    options: [
      'Des chevaliers du Moyen Âge qui passaient une nuit à prier, habillés en blanc avant leur adoubement.',
      'Des femmes de la cour sous Louis XIV, qui avaient le visage poudré de blanc pour des soirées qui duraient jusqu’au petit matin.',
      'Des soldats américains qui prenaient de la coke pendant la guerre de 39-45.',
      'Du cardinal de Richelieu qui avait pris la Dame Blanche en stop et l’aurait honorée toute la nuit.',
    ],
    answer:
      'Des chevaliers du Moyen Âge qui passaient une nuit à prier, habillés en blanc avant leur adoubement.',
  },
  {
    question: 'Un seul de ces jouets ratés n’existe pas, est-ce ?',
    options: [
      'Une figurine Tarzan qui se fait plaisir en secouant le manche.',
      'Un Spiderman gonflable, mais au mauvais endroit.',
      'Un pistolet à bonbons, pour apprendre aux enfants à se tirer une balle dans la bouche;',
      'Une liste de Noël de Schindler, pour apprendre aux enfants que les nazis n’étaient pas tous mauvais.',
    ],
    answer:
      'Une liste de Noël de Schindler, pour apprendre aux enfants que les nazis n’étaient pas tous mauvais.',
  },
  {
    question: 'Comment l’hippopotame fait-il popo ?',
    options: [
      'Il disperse ses crottes avec sa queue pour marquer son territoire.',
      'Il doit arrêter toute activité pour ne faire que ça, tellement c’est long et pénible.',
      'Il expulse un gros rondin d’un coup et c’est assez spectaculaire.',
      'Il ne fait jamais caca, d’où sa taille.',
    ],
    answer:
      'Il disperse ses crottes avec sa queue pour marquer son territoire.',
  },
  {
    question:
      'Lequel de ces titres "jeux de mots" de Libé est une invention de notre part ?',
    options: [
      'Climat : les calottes sont cuites.',
      'Tapas nocturnes.',
      'L’Apple aux oeufs d’or.',
      'Parle à Mocky, ma tête est malade.',
    ],
    answer: 'Tapas nocturnes',
  },
  {
    question: 'Parmi ces 4 voitures, laquelle a vraiment existé ?',
    options: [
      'La Skoda « Tapina ».',
      'La Nissan « Gigolo ».',
      'La Mazda « Laputa ».',
      'La Fiat « 500 l’amour et 200 la pipe ».',
    ],
    answer: 'La Mazda « Laputa ».',
  },
  {
    question: 'Au Moyen Âge, comment étaient décorés les sapins de Noël ?',
    options: [
      'Avec des courgettes.',
      'Avec des fruits de saison.',
      'Avec les bijoux de la dernière mariée de la famille.',
      'Avec les bijoux de famille du dernier marié. Une tradition qui s’est perdue pour des raisons évidentes.',
    ],
    answer: 'Avec des fruits de saison.',
  },
  {
    question:
      'Une seule de ces célébrités a été videur de boîte de nuit dans sa jeunesse. Est-ce :',
    options: [
      'Steven Seagal, évidemment.',
      'Guillaume Gallienne, curieusement.',
      'Didier Deschamps, pourquoi pas.',
      'Le pape François, tant qu’a faire.',
    ],
    answer: 'Le pape François, tant qu’a faire.',
  },
  {
    question: 'Lequel de ces magazines flippants n’existe pas ?',
    options: [
      'Crimes magazine.',
      'Menaces actuelles.',
      'Commando magazine.',
      'Enquêtes sexuelles.',
    ],
    answer: 'Menaces actuelles.',
  },
  {
    question:
      'Laquelle de ces informations concernant les réseaux sociaux est vraie ?',
    options: [
      'Snapchat conserve toutes vos photos et vidéos et peut vous extorquer comme bon lui semble.',
      'Facebook peut enregistrer des sons et des vidéos à partir de votre téléphone sans votre consentement.',
      'Chaque tweet posté aux États-Unis est vérifié par le FBI.',
      'Personne n’a jamais trouvé de boulot grâce à Linkedin.',
    ],
    answer:
      'Facebook peut enregistrer des sons et des vidéos à partir de votre téléphone sans votre consentement.',
  },
  {
    question: 'Lequel de ces livres n’a pas réellement été publié ?',
    options: [
      '« L’extraordinaire voyage du Fakir qui était resté coincé dans une armoire Ikea ».',
      '« Le cercle littéraire des Amateurs d’Épluchures de Patates ».',
      '« Ne dites pas à mère que je suis voyante, elle me croit libraire à Vancouver ».',
      '« Le gratin de courgettes ne faisait pas partie du deal ».',
    ],
    answer: '« Le gratin de courgettes ne faisait pas partie du deal ».',
  },
  {
    question: 'Quels sont les animaux les plus présents sur Terre ?',
    options: [
      'Les vers de terre.',
      'Les fourmis.',
      'Les mouches.',
      'Les éléphants, mais ils se cachent.',
    ],
    answer: 'Les vers de terre.',
  },
  {
    question: 'Dans l’Antiquité, sur quoi les romains prêtaient-t-il serment ?',
    options: [
      'Une Bible, comme tout le monde.',
      'Les lauriers de César.',
      'Un album d’Astérix.',
      'Leurs testicules.',
    ],
    answer: 'Leurs testicules.',
  },
  {
    question:
      'D’où vient l’expression "Garde tes amis près de toi et tes ennemis encore plus près" ?',
    options: [
      'De Chin Tsé, général Chinois du XIème siècle avant JC.',
      'De Nicolas Machiavel, penseur humaniste italien de la renaissance.',
      'De Michael Corleone, dans « le Parrain II ».',
      'De Manuel Valls dans « En marche vers l’enfer ».',
    ],
    answer: 'De Michael Corleone, dans « le Parrain II ».',
  },
  {
    question: 'Pourquoi Superman porte-t-il son slip sur son pantalon ?',
    options: [
      'Pour le salir moins vite.',
      'Parce que personne n’ose lui faire la remarque.',
      'Parce que c’est super dur de se changer dans une cabine téléphonique.',
      'Il n’y a aucune explication officielle à cette question.',
    ],
    answer: 'Il n’y a aucune explication officielle à cette question.',
  },
  {
    question:
      'À Pasadena en Californie, que faut-il pour utiliser un piège à souris ?',
    options: [
      'Une cachette pour les pièges à souris.',
      'Un permis de chasse.',
      'Un doctorat en sourilogie.',
      'La bénédiction d’un prêtre.',
    ],
    answer: 'Un permis de chasse.',
  },
  {
    question: 'Quel est le vrai nom de Michael Keaton ?',
    options: [
      'Michael Jackson.',
      'Michael Douglas.',
      'Michael Jordan.',
      'Michael Keaton.',
    ],
    answer: 'Michael Douglas.',
  },
  {
    question: 'Lequel de ces requins existe-vraiment ?',
    options: [
      'Le requin-citron.',
      'Le requin-fraise.',
      'Le requin-banane.',
      'Le requin-chocolat-pistache.',
    ],
    answer: 'Le requin-citron.',
  },
  {
    question: 'Laquelle de ces infos sur Gerard Depardieu est vraie ?',
    options: [
      'Il a été la voix française de Mel Gibson.',
      'Il a été la voix française de Kevin Costner.',
      'Il a été la voix française de John Travolta.',
      'Il a été la voix française de Vladimir Poutine.',
    ],
    answer: 'Il a été la voix française de Kevin Costner.',
  },
  {
    question: 'Quel métier Bernard Tapis n’a-t-il pas fait ?',
    options: ['Chanteur.', 'Animateur télé.', 'Vendeur de télé.', 'Jongleur.'],
    answer: 'Jongleur.',
  },
  {
    question: 'Alain Delon a un CAP de ?',
    options: [
      'Philosophie orientale.',
      'Charcutier.',
      'Menuisier.',
      'Reconnaissance en paternité.',
    ],
    answer: 'Charcutier.',
  },
  {
    question:
      'Le président des États-Unis s’appelle Donald J. Trump. Mais ce "J" est l’initiale de quel prénom ?',
    options: [
      '« John », tout simplement.',
      '« Jamel », ça m’étonnerait.',
      '« Jésus », ça serait logique.',
      '« Jacqueline », mais j’y crois pas trop.',
    ],
    answer: '« John », tout simplement.',
  },
  {
    question:
      'Laquelle de ces propositions dont on est persuadés qu’elles n’existent pas, existe ?',
    options: [
      'La planète Pandora, du film Avatar.',
      'Le Mordor, du Seigneur des anneaux.',
      'La planète Tatooine, de Star Wars.',
      'L’amie noire de Nadine Morano.',
    ],
    answer: 'La planète Pandora, du film Avatar.',
  },
  {
    question:
      'Lequel de ces tweets le président Donald Trump n’a-t-il pas envoyé ?',
    options: [
      'Robert Pattinson ne devrait pas se remettre avec Kirsten Stewart.',
      'Fusillade dans une école au Texas. Les premières infos n’ont pas l’air terribles.',
      'Il gèle et neige à New-York, on a besoin du réchauffement climatique !',
      'J’adore mes petites mains, j’ai l’impression d’avoir une grosse bite.',
    ],
    answer:
      'J’adore mes petites mains, j’ai l’impression d’avoir une grosse bite.',
  },
  {
    question:
      'En 1945 un groupe clandestin de combattants juifs fut fondé pour punir les criminels de guerre nazis. Quel était leur nom ?',
    options: [
      'Les Avengers.',
      'La Justice League.',
      'Les Inglorious Basterds.',
      'Les Rabbins des Bois.',
    ],
    answer: 'Les Avengers.',
  },
  {
    question:
      'Uwe Boll est un réalisateur qui a souvent été critiqué pour la nullité absolue de ses films. Qu’a t’il fait à ses détracteurs les plus virulents ?',
    options: [
      'Il a fait un film sur eux et les a tous fait mourir au scénario.',
      'Il s’est efforcé de faire un film encore plus mauvais et leur a dédié.',
      'Il leur a montré « Turf » pour prouver qu’il y a toujours pire.',
      'Il les a défiés à la boxe et les a défoncés un par un.',
    ],
    answer: 'Il les a défiés à la boxe et les a défoncés un par un.',
  },
  {
    question: 'Pourquoi les flamants roses sont-ils roses ?',
    options: [
      'Parce qu’ils sont roses, c’est comme ça. Est-ce qu’on demande à Eric Zemmour pourquoi il est blanc?',
      'Parce qu’ils bouffent trop de crevettes.',
      'Parce que le plumage, blanc d’origine, absorbe les rayons du soleil mais ne restitue que la couleur rose.',
      'Parce qu’ils sont hyper girly.',
    ],
    answer: 'Parce qu’ils bouffent trop de crevettes.',
  },
  {
    question:
      'En plongée, que signifie le geste pouce et index joints faisant un cercle ?',
    options: [
      'Je lui ai mis la rondelle comme ça.',
      'Ta blague elle vaut zéro.',
      'Je vais bien tout va bien.',
      'Vas-y, vise là dedans avec ton harpon.',
    ],
    answer: 'Je vais bien tout va bien.',
  },
  {
    question: 'Quel musée n’existe pas parmi les musées suivants ?',
    options: [
      '« Le musée du cafard à Plano », Texas.',
      '« Le musée Jacques Chirac », à Tulle en Corrèze.',
      '« Le musée des déchets » à Finsig, Allemagne.',
      '« Le musée des CRS », à Vélizy.',
    ],
    answer: '« Le musée Jacques Chirac », à Tulle en Corrèze.',
  },
  {
    question:
      'Ok, c’est relou mais j’aime bien. Où n’y a-t-il pas de contrepèterie ?',
    options: [
      'Les nouilles cuisent au jus de cane.',
      'Le Pont-Neuf fait soixante-pieds.',
      'Les laborieuses populations du Cap.',
      'Il y a deux couilles sous la bite.',
    ],
    answer: 'Il y a deux couilles sous la bite.',
  },

  // ajoutez autant de questions que vous le souhaitez ici...
]

export default questions
