
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
}

export interface SuccessStory {
  id: string;
  category: string;
  title: string;
  challenge: string;
  result: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  qualifications: string[];
}