'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Banner
    'banner.text': 'New arrivals just dropped — shop the latest Chrispology collection.',
    'banner.cta': 'Shop now →',

    // Header
    'nav.ourStory': 'Our Story',
    'nav.details': 'Details',

    // Hero
    'hero.label': 'New Collection — 2025',
    'hero.headline1': 'Wear What You',
    'hero.headline2': 'Believe In',
    'hero.sub': 'Chrispology — faith-inspired streetwear crafted for those who carry their identity boldly.',
    'hero.shopBtn': 'Shop New Arrivals',
    'hero.storyBtn': 'Our Story',

    // New Arrivals
    'arrivals.label': 'Just Dropped',
    'arrivals.title': 'New Arrivals',

    // Categories
    'categories.label': 'Browse',
    'categories.title': 'Shop by Category',
    'categories.all': 'All',
    'categories.suits': 'Suits',
    'categories.shirts': 'Shirts',
    'categories.golfShirts': 'Golf Shirts',
    'categories.bottoms': 'Bottoms',
    'categories.accessories': 'Accessories',
    'categories.bags': 'Bags',
    'categories.onSale': 'On Sale',

    // Filters
    'filter.search': 'Search products…',
    'filter.featured': 'Featured',
    'filter.priceLow': 'Price: Low → High',
    'filter.priceHigh': 'Price: High → Low',
    'filter.nameAZ': 'Name: A → Z',
    'filter.filters': 'Filters',
    'filter.clearAll': 'Clear all',
    'filter.maxPrice': 'Max Price',
    'filter.availability': 'Availability',
    'filter.inStock': 'In Stock',
    'filter.onSale': 'On Sale',
    'filter.showing': 'Showing',
    'filter.items': 'items',
    'filter.item': 'item',
    'filter.noItems': 'No items match your search.',

    // Product detail
    'product.back': '← Back',
    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.reviews': 'reviews',
    'product.selectSize': 'Select Size',
    'product.buyWhatsApp': 'Buy via WhatsApp',
    'product.selectFirst': 'Select a size to continue',
    'product.selectNote': 'Please select a size before ordering',
    'product.details': 'Product Details',
    'product.material': 'Material',
    'product.fit': 'Fit',
    'product.care': 'Care',
    'product.category': 'Category',
    'product.notFound': 'Product not found',
    'product.goBack': 'Go back',

    // Contact / Our Story
    'story.badge': 'The Brand',
    'story.title': 'Our Story',
    'story.intro': "Chrispology wasn't born in a boardroom. It started with a conviction — that faith deserves to be worn, not hidden.",
    'story.toc': 'On this page',
    'story.s1Title': 'Where It Started',
    'story.s1p1': 'Chrispology was founded in Midrand, South Africa, by a small group of creatives who believed that streetwear could carry a deeper message. What started as hand-printed tees shared among friends quickly grew into something bigger.',
    'story.s1p2': 'The name itself is a statement — a fusion of identity, belief, and culture. Every piece we make is designed to spark a conversation, to make the wearer feel seen, and to remind them of who they are.',
    'story.s2Title': 'What We Stand For',
    'story.s2p1': "We don't do fast fashion. Every drop is intentional — limited quantities, quality materials, and designs that mean something. We stand for authenticity over hype, identity over trends.",
    'story.v1Label': 'Faith-Driven',
    'story.v1Desc': 'Every design rooted in purpose',
    'story.v2Label': 'Limited Drops',
    'story.v2Desc': 'Quality over quantity, always',
    'story.v3Label': 'Community First',
    'story.v3Desc': 'Built by and for the culture',
    'story.s3Title': "Where We're Going",
    'story.s3p1': "Chrispology is more than a clothing brand — it's a movement. We're building toward pop-up events, collaborations with local artists, and eventually a flagship store in Johannesburg.",
    'story.s3p2': "If you wear Chrispology, you're not just a customer. You're part of the story. And the story is just getting started.",
    'story.quote': '"Wear what you believe in. Live what you wear."',

    // Contact section
    'contact.label': 'Get In Touch',
    'contact.title': 'Contact Us',
    'contact.sub': "Have a question about an order, a collab idea, or just want to say what's up? We're here for it.",
    'contact.emailLabel': 'Email',
    'contact.emailDesc': 'We reply within 24 hours.',
    'contact.locationLabel': 'Location',
    'contact.locationDesc': 'Based in Midrand, Johannesburg.',
    'contact.locationVal': 'Midrand, Gauteng, South Africa',
    'contact.phoneLabel': 'Phone',
    'contact.phoneDesc': 'Mon–Fri, 9am–5pm SAST.',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.whatsappDesc': 'Quickest way to reach us.',
    'contact.whatsappVal': 'Chat on WhatsApp',

    // FAQ
    'faq.label': 'Got Questions?',
    'faq.title': 'FAQ',
    'faq.q1': 'How do I place an order?',
    'faq.a1': 'Browse the shop, click on a product, select your size, then tap "Buy via WhatsApp". You\'ll be connected directly with us to confirm and complete your order.',
    'faq.q2': 'What sizes do you offer?',
    'faq.a2': 'Most pieces come in XS through XXL. Size availability varies per product and is shown on each product page. Out-of-stock sizes are clearly marked.',
    'faq.q3': 'Do you ship nationwide?',
    'faq.a3': 'Yes — we ship across South Africa. Delivery times and costs are confirmed at the time of your WhatsApp order.',
    'faq.q4': 'Can I return or exchange an item?',
    'faq.a4': 'We accept exchanges within 7 days of delivery for unworn, unwashed items with tags intact. Contact us via WhatsApp or email to initiate.',
    'faq.q5': 'How long does delivery take?',
    'faq.a5': 'Standard delivery is 3–5 business days. Express options may be available — ask us when ordering.',
    'faq.q6': 'Are your products limited edition?',
    'faq.a6': 'Many of our drops are limited. Once a size or style sells out, it may not return. We recommend ordering early when a new drop lands.',
    'faq.q7': 'How do I know my size?',
    'faq.a7': "Each product page lists the fit type (e.g. Oversized, Regular). When in doubt, size up — or message us and we'll guide you.",

    // Login
    'login.restricted': 'Restricted Area',
    'login.warning': 'This section is for Chrispology administrators only. If you are a customer, please go back to the',
    'login.homepage': 'homepage',
    'login.title': 'Admin Login',
    'login.sub': 'Sign in to manage products',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.signingIn': 'Signing in…',
    'login.signIn': 'Sign In',

    // Details / Admin
    'details.adminOnly': 'Admin Only',
    'details.title': 'Product Manager',
    'details.sub': 'Add new products to the Chrispology store',
    'details.signOut': 'Sign Out',
    'details.addProduct': 'Add New Product',
    'details.name': 'Product Name',
    'details.namePlaceholder': 'e.g. Faith Over Fear Tee',
    'details.description': 'Description',
    'details.descPlaceholder': 'Describe the product…',
    'details.price': 'Price (R)',
    'details.salePrice': 'Sale Price (R)',
    'details.optional': 'optional',
    'details.category': 'Category',
    'details.badge': 'Badge',
    'details.badgeNone': 'None',
    'details.sizes': 'Available Sizes',
    'details.material': 'Material',
    'details.materialPlaceholder': '100% Cotton',
    'details.fit': 'Fit',
    'details.fitPlaceholder': 'Oversized',
    'details.care': 'Care',
    'details.carePlaceholder': 'Machine Wash Cold',
    'details.newArrival': 'Mark as New Arrival (appears in the New Arrivals carousel)',
    'details.images': 'Product Images',
    'details.uploadImages': 'Upload Images',
    'details.uploading': 'Uploading…',
    'details.saving': 'Saving…',
    'details.save': 'Add Product',
    'details.clear': 'Clear',
    'details.loading': 'Loading…',
    'details.imageError': 'Image upload failed',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.home': 'Home',
    'footer.shop': 'Shop',
    'footer.story': 'Our Story',
    'footer.faq': 'FAQ',
    'footer.terms': 'Terms & Privacy',
  },
  fr: {
    // Banner
    'banner.text': 'Nouvelles arrivées — découvrez la dernière collection Chrispology.',
    'banner.cta': 'Acheter maintenant →',

    // Header
    'nav.ourStory': 'Notre Histoire',
    'nav.details': 'Détails',

    // Hero
    'hero.label': 'Nouvelle Collection — 2025',
    'hero.headline1': 'Portez Ce En Quoi',
    'hero.headline2': 'Vous Croyez',
    'hero.sub': 'Chrispology — vêtements de rue inspirés par la foi, conçus pour ceux qui portent leur identité avec fierté.',
    'hero.shopBtn': 'Voir les Nouveautés',
    'hero.storyBtn': 'Notre Histoire',

    // New Arrivals
    'arrivals.label': 'Vient de Sortir',
    'arrivals.title': 'Nouvelles Arrivées',

    // Categories
    'categories.label': 'Parcourir',
    'categories.title': 'Acheter par Catégorie',
    'categories.all': 'Tout',
    'categories.suits': 'Costumes',
    'categories.shirts': 'Chemises',
    'categories.golfShirts': 'Polos',
    'categories.bottoms': 'Bas',
    'categories.accessories': 'Accessoires',
    'categories.bags': 'Sacs',
    'categories.onSale': 'En Solde',

    // Filters
    'filter.search': 'Rechercher des produits…',
    'filter.featured': 'En vedette',
    'filter.priceLow': 'Prix : Croissant',
    'filter.priceHigh': 'Prix : Décroissant',
    'filter.nameAZ': 'Nom : A → Z',
    'filter.filters': 'Filtres',
    'filter.clearAll': 'Tout effacer',
    'filter.maxPrice': 'Prix Maximum',
    'filter.availability': 'Disponibilité',
    'filter.inStock': 'En Stock',
    'filter.onSale': 'En Solde',
    'filter.showing': 'Affichage de',
    'filter.items': 'articles',
    'filter.item': 'article',
    'filter.noItems': 'Aucun article ne correspond à votre recherche.',

    // Product detail
    'product.back': '← Retour',
    'product.inStock': 'En Stock',
    'product.outOfStock': 'Rupture de Stock',
    'product.reviews': 'avis',
    'product.selectSize': 'Choisir la Taille',
    'product.buyWhatsApp': 'Acheter via WhatsApp',
    'product.selectFirst': 'Choisissez une taille pour continuer',
    'product.selectNote': 'Veuillez choisir une taille avant de commander',
    'product.details': 'Détails du Produit',
    'product.material': 'Matière',
    'product.fit': 'Coupe',
    'product.care': 'Entretien',
    'product.category': 'Catégorie',
    'product.notFound': 'Produit introuvable',
    'product.goBack': 'Retour',

    // Contact / Our Story
    'story.badge': 'La Marque',
    'story.title': 'Notre Histoire',
    'story.intro': "Chrispology n'est pas née dans une salle de réunion. Elle est née d'une conviction — que la foi mérite d'être portée, pas cachée.",
    'story.toc': 'Sur cette page',
    'story.s1Title': 'Les Débuts',
    'story.s1p1': "Chrispology a été fondée à Midrand, en Afrique du Sud, par un petit groupe de créatifs qui croyaient que le streetwear pouvait porter un message plus profond. Ce qui a commencé par des t-shirts imprimés à la main partagés entre amis est rapidement devenu quelque chose de plus grand.",
    'story.s1p2': "Le nom lui-même est une déclaration — une fusion d'identité, de croyance et de culture. Chaque pièce que nous créons est conçue pour susciter une conversation, pour que le porteur se sente vu et se souvienne de qui il est.",
    'story.s2Title': 'Ce Pour Quoi Nous Nous Battons',
    'story.s2p1': "Nous ne faisons pas de fast fashion. Chaque lancement est intentionnel — quantités limitées, matériaux de qualité et designs qui ont du sens. Nous défendons l'authenticité plutôt que le battage médiatique, l'identité plutôt que les tendances.",
    'story.v1Label': 'Guidé par la Foi',
    'story.v1Desc': 'Chaque design ancré dans un but',
    'story.v2Label': 'Lancements Limités',
    'story.v2Desc': 'La qualité avant la quantité, toujours',
    'story.v3Label': 'Communauté Avant Tout',
    'story.v3Desc': 'Construit par et pour la culture',
    'story.s3Title': 'Notre Direction',
    'story.s3p1': "Chrispology est plus qu'une marque de vêtements — c'est un mouvement. Nous construisons vers des événements pop-up, des collaborations avec des artistes locaux, et éventuellement un magasin phare à Johannesburg.",
    'story.s3p2': "Si vous portez Chrispology, vous n'êtes pas seulement un client. Vous faites partie de l'histoire. Et l'histoire ne fait que commencer.",
    'story.quote': '"Portez ce en quoi vous croyez. Vivez ce que vous portez."',

    // Contact section
    'contact.label': 'Nous Contacter',
    'contact.title': 'Contactez-Nous',
    'contact.sub': "Une question sur une commande, une idée de collaboration, ou juste envie de dire bonjour ? Nous sommes là.",
    'contact.emailLabel': 'Email',
    'contact.emailDesc': 'Nous répondons sous 24 heures.',
    'contact.locationLabel': 'Localisation',
    'contact.locationDesc': 'Basé à Midrand, Johannesburg.',
    'contact.locationVal': 'Midrand, Gauteng, Afrique du Sud',
    'contact.phoneLabel': 'Téléphone',
    'contact.phoneDesc': 'Lun–Ven, 9h–17h SAST.',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.whatsappDesc': 'Le moyen le plus rapide de nous joindre.',
    'contact.whatsappVal': 'Discuter sur WhatsApp',

    // FAQ
    'faq.label': 'Des Questions ?',
    'faq.title': 'FAQ',
    'faq.q1': 'Comment passer une commande ?',
    'faq.a1': 'Parcourez la boutique, cliquez sur un produit, sélectionnez votre taille, puis appuyez sur "Acheter via WhatsApp". Vous serez directement mis en contact avec nous pour confirmer et finaliser votre commande.',
    'faq.q2': 'Quelles tailles proposez-vous ?',
    'faq.a2': 'La plupart des pièces sont disponibles du XS au XXL. La disponibilité des tailles varie selon le produit et est indiquée sur chaque page produit. Les tailles en rupture de stock sont clairement signalées.',
    'faq.q3': 'Livrez-vous dans tout le pays ?',
    'faq.a3': "Oui — nous livrons dans toute l'Afrique du Sud. Les délais et coûts de livraison sont confirmés lors de votre commande WhatsApp.",
    'faq.q4': 'Puis-je retourner ou échanger un article ?',
    'faq.a4': "Nous acceptons les échanges dans les 7 jours suivant la livraison pour les articles non portés, non lavés avec les étiquettes intactes. Contactez-nous via WhatsApp ou email pour initier l'échange.",
    'faq.q5': 'Quel est le délai de livraison ?',
    'faq.a5': 'La livraison standard est de 3 à 5 jours ouvrables. Des options express peuvent être disponibles — demandez-nous lors de la commande.',
    'faq.q6': 'Vos produits sont-ils en édition limitée ?',
    'faq.a6': "Beaucoup de nos lancements sont limités. Une fois qu'une taille ou un style est épuisé, il peut ne pas revenir. Nous recommandons de commander tôt lors d'un nouveau lancement.",
    'faq.q7': 'Comment connaître ma taille ?',
    'faq.a7': "Chaque page produit indique le type de coupe (ex. Oversize, Regular). En cas de doute, prenez la taille au-dessus — ou contactez-nous et nous vous guiderons.",

    // Login
    'login.restricted': 'Zone Restreinte',
    'login.warning': 'Cette section est réservée aux administrateurs de Chrispology. Si vous êtes un client, veuillez retourner à la',
    'login.homepage': "page d'accueil",
    'login.title': 'Connexion Admin',
    'login.sub': 'Connectez-vous pour gérer les produits',
    'login.email': 'Email',
    'login.password': 'Mot de passe',
    'login.signingIn': 'Connexion…',
    'login.signIn': 'Se Connecter',

    // Details / Admin
    'details.adminOnly': 'Admin Seulement',
    'details.title': 'Gestionnaire de Produits',
    'details.sub': 'Ajouter de nouveaux produits à la boutique Chrispology',
    'details.signOut': 'Se Déconnecter',
    'details.addProduct': 'Ajouter un Produit',
    'details.name': 'Nom du Produit',
    'details.namePlaceholder': 'ex. T-shirt Foi Plutôt que Peur',
    'details.description': 'Description',
    'details.descPlaceholder': 'Décrivez le produit…',
    'details.price': 'Prix (R)',
    'details.salePrice': 'Prix Soldé (R)',
    'details.optional': 'optionnel',
    'details.category': 'Catégorie',
    'details.badge': 'Badge',
    'details.badgeNone': 'Aucun',
    'details.sizes': 'Tailles Disponibles',
    'details.material': 'Matière',
    'details.materialPlaceholder': '100% Coton',
    'details.fit': 'Coupe',
    'details.fitPlaceholder': 'Oversize',
    'details.care': 'Entretien',
    'details.carePlaceholder': 'Lavage machine à froid',
    'details.newArrival': 'Marquer comme Nouvelle Arrivée (apparaît dans le carrousel)',
    'details.images': 'Images du Produit',
    'details.uploadImages': 'Télécharger des Images',
    'details.uploading': 'Téléchargement…',
    'details.saving': 'Enregistrement…',
    'details.save': 'Ajouter le Produit',
    'details.clear': 'Effacer',
    'details.loading': 'Chargement…',
    'details.imageError': "Échec du téléchargement de l'image",

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.home': 'Accueil',
    'footer.shop': 'Boutique',
    'footer.story': 'Notre Histoire',
    'footer.faq': 'FAQ',
    'footer.terms': 'Conditions & Confidentialité',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('chrispology-lang') as Language;
    if (stored === 'en' || stored === 'fr') setLanguageState(stored);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('chrispology-lang', lang);
  };

  const t = (key: string): string =>
    (translations[language] as Record<string, string>)[key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
