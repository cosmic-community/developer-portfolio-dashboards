// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name: string;
    description: string;
    technologies?: string[];
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    screenshots?: Array<{
      url: string;
      imgix_url: string;
    }>;
    live_url?: string;
    repo_url?: string;
    featured: boolean;
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name: string;
    category: {
      key: string;
      value: string;
    };
    proficiency?: {
      key: string;
      value: string;
    };
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Work Experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title: string;
    company_name: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    start_date: string;
    end_date?: string;
    current: boolean;
    description?: string;
    achievements?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_role?: string;
    company?: string;
    testimonial_text: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: {
      key: string;
      value: string;
    };
    featured: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Category types
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type Rating = '3' | '4' | '5';