export enum TagEnum {
  OFFLINE = "OFFLINE",
  BACKEND = "BACKEND",
  UI = "UI",
  TRAINING = "TRAINING",
  DOCUMENTATION = "DOCUMENTATION",
  RELEASE = "RELEASE",
  APP_STORE = "APP_STORE",
  INFRASTRUCTURE = "INFRASTRUCTURE",
  INTEGRATION = "INTEGRATION",
  SOCIAL_MEDIA = "SOCIAL_MEDIA",
  BACKUP = "BACKUP",
  DATABASE = "DATABASE",
  FORM = "FORM",
  REPORTING = "REPORTING",
  DATA_ANALYSIS = "DATA_ANALYSIS",
  DESIGN = "DESIGN",
  SECURITY = "SECURITY",
  QA = "QA",
  LOCALIZATION = "LOCALIZATION",
  DEBUGGING = "DEBUGGING",
  MIGRATION = "MIGRATION",
  FEEDBACK = "FEEDBACK",
  CONTENT = "CONTENT",
  WEB = "WEB",
  OPTIMIZATION = "OPTIMIZATION",
  NOTIFICATION = "NOTIFICATION",
  BUG_FIX = "BUG_FIX",
  TESTING = "TESTING",
  COMMUNICATION = "COMMUNICATION",
  SEO = "SEO",
}

export enum SectionEnum {
  TODO = "Yapılacak",
  IN_PROGRESS = "Yapım Aşamasında",
  POSTPONED = "Gönderildi",
  TESTING = "Test Aşamasında",
  COMPLETED = "Tamamlandı",
  CANCELLED = "İptal Edildi",
}

export enum PriorityEnum {
  HIGH = "Yüksek",
  MEDIUM = "Orta",
  LOW = "Düşük",
}

export interface SectionData {
  id: string;
  description: string;
  priority: string;
  tags: TagEnum[];
  title: string;
  status: SectionEnum;
  user: {
    name: string;
    surname: string;
    email: string;
    role: string;
  }
}