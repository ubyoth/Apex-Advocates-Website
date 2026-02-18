
import { PracticeArea, SuccessStory, BlogPost, TeamMember } from './types';

export const FOUNDER_BIO: TeamMember = {
  name: 'Yahaya Oruma Othman, Esq.',
  role: 'Founder & Principal Partner',
  imageUrl: 'https://res.cloudinary.com/dq7vjblwd/image/upload/v1771278933/1740250408076_jnhl5j.jpg',
  bio: `Yahaya Oruma Othman is the Founder and Principal Partner of Apex Advocates & Solicitors. He holds an LL.B from the University of Jos and was called to the Nigerian Bar in 2015 as a Barrister and Solicitor of the Supreme Court of Nigeria. He is a member of the Nigerian Bar Association (NBA) and an Associate of the Chartered Institute of Arbitrators (United Kingdom).

With ten years of experience in private practice, Yahaya has advised clients on corporate transactions, arbitration, contract law, labour and employment disputes, garnishee proceedings, and commercial litigation. His track record includes successfully representing parties in high-stakes disputes, navigating complex regulatory environments, and delivering pragmatic solutions to commercial challenges.

He played a key role in the Gombe State House of Assembly Election Petition (2019), where his advocacy contributed to a favorable judgment and earned professional commendation from senior counsel. His intellectual property practice has grown through work with businesses and creators on trademark protection, copyright enforcement, and licensing structures aligned with Nigeria's IP regime and international best practices.

Yahaya's professional interests include corporate restructuring, commercial arbitration, football law, intellectual property, debt recovery, and advanced legal drafting. He established Apex Advocates & Solicitors to provide clients with the technical expertise and strategic counsel of senior practitioners—delivered with the agility, transparency, and cost-efficiency of a specialist boutique firm.`,
  qualifications: [
    'LL.B, University of Jos',
    'Barrister & Solicitor of the Supreme Court of Nigeria (2015)',
    'Member, Nigerian Bar Association (NBA)',
    'Associate, Chartered Institute of Arbitrators (UK)'
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'sports',
    title: 'Sports Law & Athlete Representation',
    description: 'Specialized legal management for the modern sports professional.',
    icon: 'sports_soccer',
    services: [
      'Athlete contracts and negotiations',
      'Image rights and licensing',
      'Endorsement and sponsorship agreements',
      'Regulatory compliance for sports orgs'
    ]
  },
  {
    id: 'corporate-advisory',
    title: 'Corporate & Commercial Advisory',
    description: 'Strategic guidance for businesses at every stage of growth.',
    icon: 'business',
    services: [
      'Corporate restructuring and CAC filings',
      'Business incorporation (LLC, Ltd/Gte)',
      'Commercial contract drafting and review',
      'Risk assessment and governance'
    ]
  },
  {
    id: 'labour',
    title: 'Employment & Labour Disputes',
    description: 'Protecting rights and interests in the professional workspace.',
    icon: 'gavel',
    services: [
      'Employment contract negotiation',
      'Workplace dispute resolution',
      'Disciplinary and termination advisory',
      'Labour law regulatory compliance'
    ]
  },
  {
    id: 'ip',
    title: 'Intellectual Property & Brand Protection',
    description: 'Securing the value of your creative and industrial assets.',
    icon: 'verified_user',
    services: [
      'Trademark registration',
      'Copyright protection and licensing',
      'Intellectual property enforcement',
      'Brand management and protection'
    ]
  },
  {
    id: 'arbitration',
    title: 'Dispute Resolution & ADR',
    description: 'Resolving conflicts through strategic litigation and alternative means.',
    icon: 'balance',
    services: [
      'Debt recovery and enforcement',
      'Mediation and Arbitration',
      'Civil and Commercial Litigation',
      'Alternative Dispute Resolution (ADR)'
    ]
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'ss1',
    category: 'Corporate & Commercial',
    title: 'Strategic Restructuring & CAC Compliance',
    challenge: 'Businesses required complex corporate structuring, governance realignment, and regulatory compliance across multiple entities.',
    result: 'Successfully completed nine (9) corporate restructuring matters before the CAC, including post-incorporation amendments and shareholding realignments.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'ss2',
    category: 'Labour Law',
    title: 'Recovery of ₦1M+ in Employment Disputes',
    challenge: 'A high-level employee faced wrongful denial of salary arrears and earned bonuses in a complex workplace conflict.',
    result: 'Secured the successful recovery of arrears exceeding ₦1,000,000 and negotiated over a dozen employment agreements for diverse clients.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ss3',
    category: 'Intellectual Property',
    title: 'Athlete Image Rights & Brand Protection',
    challenge: 'Athletes in creative industries faced challenges in trademark registration and commercial exploitation of their digital likeness.',
    result: 'Successfully reviewed and negotiated image rights and copyright provisions in athlete contracts, aligning them with international standards.',
    imageUrl: 'https://images.unsplash.com/photo-1453941403708-3c32160971fd?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 'ss4',
    category: 'Sports Law',
    title: 'Ballers Support & LawInSport Mentorship',
    challenge: 'Amateur athletes transitioning to professional sports lacked adequate legal protection and contract navigation expertise.',
    result: 'Established partnership with Ballers Support for pro bono services; Partner participated in LawInSport Global Mentoring Scheme (2023).',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bp1',
    title: "Bridge Transfers in Football: What you need to know",
    excerpt: "Exploring the regulatory complexities and FIFA's stance on bridge transfers in domestic and international football. A critical analysis of player mobility and club obligations.",
    author: 'Yahaya Othman',
    date: 'Nov 12, 2024',
    readTime: '6 min read',
    category: 'Sports Law',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'bp2',
    title: 'The Legal Framework of Player Contracts in the NPFL',
    excerpt: 'Understanding the complexities of domestic football employment contracts and FIFA regulations in the local context.',
    author: 'Yahaya Othman',
    date: 'Oct 24, 2024',
    readTime: '5 min read',
    category: 'Sports Law',
    imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'bp3',
    title: '5 Reasons to Choose Arbitration Over Litigation',
    excerpt: 'In commercial disputes, speed and confidentiality are paramount. We explore why ADR is becoming preferred for SMEs.',
    author: 'Yahaya Othman',
    date: 'Oct 22, 2024',
    readTime: '4 min read',
    category: 'ADR Tips',
    imageUrl: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=2070&auto=format&fit=crop'
  }
];
