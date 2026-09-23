export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'Inloggen' | 'Wachtwoord' | 'Account' | 'Betalingen' | 'Opwaarderen' | 'Contact' | 'Telefoon' | 'Financieel';
}

export interface NavSection {
  id: string;
  title: string;
  shortTitle: string;
}

export const siteContent = {
  metadata: {
    title: "PayPal Nederland Klantenservice | Login, Contact & Account Help",
    description:
      "Heeft u hulp nodig met PayPal Nederland? Vind oplossingen voor PayPal inloggen, wachtwoord wijzigen, betalingen, accountproblemen en klantenservice.",
    url: "paypal-nederland-klantenservice-nl",
  },

  hero: {
    h1: "PayPal Nederland Klantenservice – Hulp bij Account, Betalingen en Inloggen",
    intro1:
      "Heeft u problemen met uw PayPal account, login, betalingen of abonnementen? Op deze website vindt u handige informatie en oplossingen voor veelvoorkomende PayPal problemen. Of u nu hulp nodig heeft met PayPal inloggen, wachtwoord wijzigen, account herstellen, betalingen controleren of contact opnemen met klantenservice, hier vindt u de juiste stappen.",
    intro2:
      "PayPal wordt wereldwijd gebruikt voor veilige online betalingen. Soms kunnen gebruikers echter problemen ervaren zoals een geblokkeerd account, vergeten wachtwoord, mislukte betaling of problemen met transacties. Met de juiste informatie kunt u deze problemen sneller oplossen.",
  },

  loginProblems: {
    id: "login-problemen",
    heading: "PayPal Login Problemen Oplossen",
    subheading: "Kunt u niet inloggen bij PayPal?",
    lead: "Problemen met inloggen kunnen verschillende oorzaken hebben, zoals:",
    causes: [
      "Vergeten wachtwoord",
      "Verkeerde inloggegevens",
      "Problemen met verificatie",
      "Geblokkeerde accounttoegang",
      "Problemen met tweestapsverificatie",
    ],
    closing:
      "Controleer eerst of uw e-mailadres en wachtwoord correct zijn. Als u uw wachtwoord bent vergeten, kunt u de hersteloptie gebruiken om opnieuw toegang tot uw account te krijgen.",
  },

  passwordChange: {
    id: "wachtwoord-wijzigen",
    heading: "PayPal Wachtwoord Wijzigen",
    subheading: "Hoe wijzig ik mijn PayPal wachtwoord?",
    intro:
      "Het regelmatig wijzigen van uw wachtwoord helpt om uw account veilig te houden.",
    lead: "Volg deze stappen:",
    steps: [
      "Log in op uw PayPal account.",
      "Ga naar accountinstellingen.",
      "Kies de optie voor beveiliging.",
      "Selecteer wachtwoord wijzigen.",
      "Maak een nieuw sterk wachtwoord aan.",
    ],
    closing:
      "Gebruik altijd een uniek wachtwoord dat u niet voor andere websites gebruikt.",
  },

  accountRecovery: {
    id: "account-herstellen",
    heading: "PayPal Account Herstellen",
    subheading: "Hoe herstel ik mijn PayPal account?",
    intro:
      "Als u geen toegang meer heeft tot uw account, kunt u proberen uw account te herstellen.",
    lead: "Veelvoorkomende redenen voor herstel:",
    reasons: [
      "U bent uw wachtwoord vergeten",
      "U heeft geen toegang tot uw oude telefoonnummer",
      "Uw account is tijdelijk beperkt",
      "U ziet verdachte activiteiten",
    ],
    closing:
      "Controleer uw accountgegevens en volg de verificatiestappen om opnieuw toegang te krijgen.",
  },

  paymentProblems: {
    id: "betalingsproblemen",
    heading: "PayPal Betalingsproblemen",
    subheading: "Waarom werkt mijn PayPal betaling niet?",
    intro:
      "Soms kan een betaling worden geweigerd door verschillende redenen:",
    causes: [
      "Onvoldoende saldo",
      "Problemen met gekoppelde bankrekening",
      "Beveiligingscontrole",
      "Verlopen kaartgegevens",
      "Technische problemen",
    ],
    closing:
      "Controleer altijd uw betaalgegevens en transactiegeschiedenis om de oorzaak te vinden.",
  },

  balance: {
    id: "opwaarderen",
    heading: "PayPal Opwaarderen",
    subheading: "Hoe kan ik mijn PayPal saldo opwaarderen?",
    intro:
      "Gebruikers kunnen hun PayPal account koppelen aan beschikbare betaalmethoden om betalingen eenvoudiger te maken.",
    lead: "Controleer:",
    checks: [
      "Gekoppelde bankrekening",
      "Betaalkaartgegevens",
      "Transactiebevestigingen",
    ],
    closing:
      "Bij problemen met opwaarderen kunt u uw accountinstellingen controleren.",
  },

  contact: {
    id: "contact",
    heading: "PayPal Contact Nederland",
    subheading: "Hoe neem ik contact op met PayPal klantenservice?",
    intro:
      "Heeft u hulp nodig met uw account, betaling of transactie? Dan kunt u gebruikmaken van de officiële PayPal ondersteuningsmogelijkheden.",
    lead: "Veelvoorkomende onderwerpen waarvoor gebruikers ondersteuning zoeken:",
    topics: [
      "Accountproblemen",
      "Betalingsvragen",
      "Terugbetalingen",
      "Onbekende transacties",
      "Beveiligingsproblemen",
    ],
    closing:
      "Controleer altijd de officiële PayPal contactmogelijkheden voor actuele ondersteuning.",
  },

  refund: {
    id: "refund-en-klachten",
    heading: "PayPal Refund en Klachten",
    subheading: "Hoe vraag ik een PayPal terugbetaling aan?",
    intro:
      "Wanneer er een probleem is met een aankoop of betaling, kunnen gebruikers de beschikbare opties binnen hun PayPal account bekijken.",
    lead: "Mogelijke situaties:",
    situations: [
      "Product niet ontvangen",
      "Verkeerde betaling",
      "Ongeautoriseerde transactie",
      "Probleem met verkoper",
    ],
    closing:
      "Bewaar altijd uw betalingsgegevens en communicatie als bewijs.",
  },

  phoneNumber: {
    id: "telefoonnummer",
    heading: "PayPal Telefoonnummer Nederland",
    subheading: "Hoe kan ik PayPal telefonisch bereiken?",
    intro:
      "Veel gebruikers zoeken naar het PayPal telefoonnummer Nederland voor directe hulp.",
    lead: "Voor vragen over:",
    topics: [
      "Account toegang",
      "Betalingen",
      "Facturatie",
      "Transacties",
      "Beveiliging",
    ],
    closing:
      "kunt u de officiële PayPal ondersteuningspagina gebruiken om de juiste contactmethode te vinden.",
  },

  faqs: {
    id: "faq",
    heading: "FAQ – PayPal Nederland",
    items: [
      {
        id: 1,
        question: "Hoe log ik in op mijn PayPal account?",
        answer:
          "Ga naar de PayPal website of app en gebruik uw geregistreerde  e-mailadres en wachtwoord om in te loggen.",
        category: "Inloggen",
      },
      {
        id: 2,
        question: "Wat moet ik doen als ik mijn PayPal wachtwoord vergeten ben?",
        answer:
          'Gebruik de optie "Wachtwoord vergeten" om uw account te herstellen via de beschikbare verificatiemethoden.',
        category: "Wachtwoord",
      },
      {
        id: 3,
        question: "Waarom kan ik geen betaling doen met PayPal?",
        answer:
          "Controleer uw saldo, gekoppelde betaalmethoden en eventuele beveiligingsmeldingen in uw account.",
        category: "Betalingen",
      },
      {
        id: 4,
        question: "Hoe wijzig ik mijn telefoonnummer bij PayPal?",
        answer:
          "Ga naar uw accountinstellingen en update uw persoonlijke gegevens.",
        category: "Account",
      },
      {
        id: 5,
        question: "Hoe neem ik contact op met PayPal Nederland?",
        answer:
          "Gebruik de officiële PayPal klantenservicekanalen voor hulp met account- en betalingsvragen.",
        category: "Contact",
      },
      {
        id: 6,
        question: "Hoe kan ik inloggen bij PayPal?",
        answer:
          "Ga naar de officiële PayPal-website of gebruik de PayPal-app en voer uw e-mailadres en wachtwoord in. Gebruik alleen de officiële PayPal-inlogpagina.",
        category: "Inloggen",
      },
      {
        id: 7,
        question: "Waar kan ik PayPal inloggen?",
        answer:
          "U kunt via de officiële PayPal-website inloggen op uw account. Controleer altijd het webadres voordat u uw inloggegevens invoert.",
        category: "Inloggen",
      },
      {
        id: 8,
        question: "Hoe kan ik mijn PayPal-account opwaarderen?",
        answer:
          "De beschikbare manieren om geld aan uw PayPal-account toe te voegen kunnen per land en account verschillen. Controleer de opties die in uw PayPal-account worden weergegeven.",
        category: "Opwaarderen",
      },
      {
        id: 9,
        question: "Wat is de huidige koers van PayPal Holdings stock?",
        answer:
          "PayPal Holdings, Inc. is beursgenoteerd onder het symbool PYPL. De actuele aandelenkoers verandert voortdurend en moet bij een actuele beursbron worden gecontroleerd.",
        category: "Financieel",
      },
      {
        id: 10,
        question: "Hoe werkt PayPal login?",
        answer:
          "Open de officiële PayPal-inlogpagina, voer uw geregistreerde e-mailadres en wachtwoord in en volg eventuele beveiligingsstappen.",
        category: "Inloggen",
      },
      {
        id: 11,
        question: "Hoe kan ik PayPal contacteren?",
        answer:
          "Gebruik de officiële PayPal-contactpagina om beschikbare contactmogelijkheden voor uw land en probleem te bekijken.",
        category: "Contact",
      },
      {
        id: 12,
        question: "Hoe bereik ik de PayPal klantenservice?",
        answer:
          "Log indien mogelijk in op uw PayPal-account en ga naar de Help- of Contact-sectie. Daar worden de beschikbare ondersteuningsmogelijkheden weergegeven.",
        category: "Contact",
      },
      {
        id: 13,
        question: "Hoe kan ik PayPal bellen?",
        answer:
          "De beschikbare telefonische ondersteuning kan afhankelijk zijn van uw land en account. Controleer het officiële PayPal Contact Center voordat u belt.",
        category: "Telefoon",
      },
      {
        id: 14,
        question: "Heeft PayPal een klantenservice 070-nummer?",
        answer:
          "Controleer de officiële PayPal-contactpagina voor Nederland. Gebruik geen telefoonnummer uit een onbekende website of zoekresultaat zonder verificatie.",
        category: "Telefoon",
      },
      {
        id: 15,
        question: "Wat is het PayPal Nederland telefoonnummer?",
        answer:
          "Het officiële telefoonnummer kan wijzigen en kan afhankelijk zijn van uw situatie. Controleer daarom rechtstreeks de officiële PayPal-contactpagina.",
        category: "Telefoon",
      },
      {
        id: 16,
        question: "Wat is het PayPal telefoonnummer voor Nederland?",
        answer:
          "Voor Nederlandse klanten is het verstandig het actuele nummer via de officiële PayPal-website te controleren voordat u contact opneemt.",
        category: "Telefoon",
      },
      {
        id: 17,
        question: "Heeft PayPal een 0800-telefoonnummer?",
        answer:
          "Niet elk telefoonnummer dat online wordt genoemd, is officieel. Controleer de actuele contactgegevens rechtstreeks bij PayPal.",
        category: "Telefoon",
      },
      {
        id: 18,
        question: "Wat is het officiële PayPal telefoonnummer?",
        answer:
          "Het officiële nummer vindt u via de Help- en Contact-sectie van PayPal. Controleer altijd de website voordat u persoonlijke gegevens deelt.",
        category: "Telefoon",
      },
      {
        id: 19,
        question: "Hoe kan ik PayPal Nederland contacteren?",
        answer:
          "Ga naar de officiële PayPal-website, kies Help of Contact en selecteer Nederland. De beschikbare contactopties worden daar weergegeven.",
        category: "Contact",
      },
      {
        id: 20,
        question: "Hoe neem ik contact op met PayPal Nederland?",
        answer:
          "U kunt de officiële Help- en Contactpagina gebruiken voor ondersteuning met betalingen, accountproblemen, terugbetalingen en andere vragen.",
        category: "Contact",
      },
      {
        id: 21,
        question: "Hoe kan ik mijn PayPal-wachtwoord wijzigen?",
        answer:
          "Log in op PayPal, open uw accountinstellingen en zoek naar de beveiligings- of wachtwoordopties. Als u niet kunt inloggen, gebruik dan de optie voor wachtwoordherstel.",
        category: "Wachtwoord",
      },
      {
        id: 22,
        question: "Hoe bereik ik PayPal Customer Service?",
        answer:
          "Gebruik de officiële PayPal Help- of Contactpagina. Afhankelijk van uw probleem kunnen verschillende contactmogelijkheden beschikbaar zijn.",
        category: "Contact",
      },
      {
        id: 23,
        question: "Hoe kan ik de PayPal klantenservice bellen?",
        answer:
          "Controleer eerst het officiële PayPal Contact Center voor Nederland. Gebruik uitsluitend een telefoonnummer dat rechtstreeks door PayPal wordt verstrekt.",
        category: "Telefoon",
      },
      {
        id: 24,
        question: "Hoe kan ik via e-mail contact opnemen met PayPal?",
        answer:
          "De beschikbare bericht- of contactopties kunnen verschillen. Log in op PayPal en controleer de Help- of Contact-sectie voor de mogelijkheden.",
        category: "Contact",
      },
      {
        id: 25,
        question: "Hoe kan ik inloggen op mijn PayPal-account?",
        answer:
          "Open PayPal via de officiële website of app en gebruik uw geregistreerde gegevens. Deel uw wachtwoord of verificatiecodes nooit met anderen.",
        category: "Inloggen",
      },
      {
        id: 26,
        question: "Wat is het PayPal klantenservice telefoonnummer?",
        answer:
          "Controleer het actuele nummer via de officiële PayPal-contactpagina. Dit voorkomt dat u een verouderd of onbetrouwbaar nummer gebruikt.",
        category: "Telefoon",
      },
      {
        id: 27,
        question: "Hoe kan ik mijn telefoonnummer bij PayPal wijzigen?",
        answer:
          "Log in op uw PayPal-account, ga naar uw persoonlijke gegevens of accountinstellingen en wijzig uw telefoonnummer. Mogelijk moet u het nieuwe nummer verifiëren.",
        category: "Account",
      },
    ] as FAQItem[],
  },
};

export const navigationLinks: NavSection[] = [
  {
    id: siteContent.loginProblems.id,
    title: siteContent.loginProblems.heading,
    shortTitle: "PayPal Login Problemen Oplossen",
  },
  {
    id: siteContent.passwordChange.id,
    title: siteContent.passwordChange.heading,
    shortTitle: "PayPal Wachtwoord Wijzigen",
  },
  {
    id: siteContent.accountRecovery.id,
    title: siteContent.accountRecovery.heading,
    shortTitle: "PayPal Account Herstellen",
  },
  {
    id: siteContent.paymentProblems.id,
    title: siteContent.paymentProblems.heading,
    shortTitle: "PayPal Betalingsproblemen",
  },
  {
    id: siteContent.balance.id,
    title: siteContent.balance.heading,
    shortTitle: "PayPal Opwaarderen",
  },
  {
    id: siteContent.contact.id,
    title: siteContent.contact.heading,
    shortTitle: "PayPal Contact Nederland",
  },
  {
    id: siteContent.refund.id,
    title: siteContent.refund.heading,
    shortTitle: "PayPal Refund en Klachten",
  },
  {
    id: siteContent.phoneNumber.id,
    title: siteContent.phoneNumber.heading,
    shortTitle: "PayPal Telefoonnummer Nederland",
  },
  {
    id: siteContent.faqs.id,
    title: siteContent.faqs.heading,
    shortTitle: "FAQ – PayPal Nederland",
  },
];
