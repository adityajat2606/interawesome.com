import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: '',
  },
  footer: {
    tagline: 'Trusted directory for brands and buyers',
  },
  hero: {
    badge: 'Featured on the directory',
    title: ['Find the right business,', 'faster—with clear listings you can trust.'],
    description:
      'Search companies, services, and local operators in one calm directory. Every listing is structured for quick scanning, location context, and confident next steps.',
    primaryCta: {
      label: 'Browse business listings',
      href: '/listings',
    },
    searchPlaceholder: 'Search companies and businesses',
    focusLabel: 'Focus',
    featureCardBadge: 'Directory spotlight',
    featureCardTitle: 'Fresh listings anchor the homepage experience.',
    featureCardDescription:
      'New and notable businesses stay visible at the top while the rest of the platform stays fully connected underneath.',
  },
  home: {
    metadata: {
      title: 'Business listings and trusted local discovery',
      description:
        'Explore verified-style business listings, classifieds, and supporting formats in a clean directory built for scanning and action.',
      openGraphTitle: 'Business listings and trusted local discovery',
      openGraphDescription:
        'Discover businesses, offers, and related content through a structured listing-first experience.',
      keywords: [
        'business directory',
        'company listings',
        'local services',
        'B2B listings',
        'classifieds',
        'brand discovery',
        'business search',
      ],
    },
    introBadge: 'How we present listings',
    introTitle: 'A directory-first surface for brands, buyers, and browsers.',
    introParagraphs: [
      'Interawesome is organized around business listings so visitors can compare operators, read context quickly, and move to contact or classified follow-ups without noisy feeds.',
      'Articles, visuals, profiles, and resources stay available as supporting lanes—useful when you need depth, but never competing with the core listing rhythm.',
      'Whether someone arrives from search, referral, or curiosity, the layout keeps trust cues, categories, and geography easy to see at a glance.',
    ],
    sideBadge: 'Why it feels different',
    sidePoints: [
      'Listing-first hierarchy with calmer supporting sections.',
      'Utility-first cards built for scan speed and clarity.',
      'Lightweight motion that stays out of the way on slower devices.',
      'Cohesive navy–teal system tuned for professional directories.',
    ],
    primaryLink: {
      label: 'Open listings',
      href: '/listings',
    },
    secondaryLink: {
      label: 'Browse classifieds',
      href: '/classifieds',
    },
  },
  cta: {
    badge: 'Grow your presence',
    title: 'Put your business where decision-makers already browse.',
    description:
      'Claim a structured listing surface with categories, imagery, and contact paths that match how people evaluate vendors today.',
    primaryCta: {
      label: 'Create your listing',
      href: '/register',
    },
    secondaryCta: {
      label: 'Talk with us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and guides',
    description: 'Editorial pieces, explainers, and long reads that support listing discovery.',
  },
  listing: {
    title: 'Business listings',
    description: 'Structured listings for services, brands, and operators you can compare with confidence.',
  },
  classified: {
    title: 'Classifieds and offers',
    description: 'Time-sensitive deals, roles, and notices alongside the main directory.',
  },
  image: {
    title: 'Visual stories',
    description: 'Image-led posts and galleries that complement listings and articles.',
  },
  profile: {
    title: 'Profiles and brands',
    description: 'Identity pages for businesses, teams, and creators linked across the platform.',
  },
  sbm: {
    title: 'Saved links and shelves',
    description: 'Curated bookmarks and reference collections for deeper research.',
  },
  pdf: {
    title: 'Documents and downloads',
    description: 'PDFs, reports, and files that support evaluation and onboarding.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual posts, and story-led content where imagery carries the experience.',
      'These posts connect with articles, listings, and other sections so visuals can act as entry points into deeper content.',
      'Browse the latest visual updates, then continue into related stories or supporting pages for more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles capture the identity behind a business, creator, brand, or project and help visitors understand who is behind the content they are exploring.',
      'These pages work as trust anchors across the site and connect naturally with stories, listings, documents, and other post types.',
      'Browse profiles to understand people and brands more clearly, then continue into related content from the same source.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'Browse images', href: '/images' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
