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

export function viewMapper(tag: TagEnum): string {
  switch (tag) {
    case TagEnum.OFFLINE:
      return "Offline";
    case TagEnum.BACKEND:
      return "Backend";
    case TagEnum.UI:
      return "UI";
    case TagEnum.TRAINING:
      return "Training";
    case TagEnum.DOCUMENTATION:
      return "Documentation";
    case TagEnum.RELEASE:
      return "Release";
    case TagEnum.APP_STORE:
      return "AppStore";
    case TagEnum.INFRASTRUCTURE:
      return "Infrastructure";
    case TagEnum.INTEGRATION:
      return "Integration";
    case TagEnum.SOCIAL_MEDIA:
      return "SocialMedia";
    case TagEnum.BACKUP:
      return "Backup";
    case TagEnum.DATABASE:
      return "Database";
    case TagEnum.FORM:
      return "Form";
    case TagEnum.REPORTING:
      return "Reporting";
    case TagEnum.DATA_ANALYSIS:
      return "DataAnalysis";
    case TagEnum.DESIGN:
      return "Design";
    case TagEnum.SECURITY:
      return "Security";
    case TagEnum.QA:
      return "QA";
    case TagEnum.LOCALIZATION:
      return "Localization";
    case TagEnum.DEBUGGING:
      return "Debugging";
    case TagEnum.MIGRATION:
      return "Migration";
    case TagEnum.FEEDBACK:
      return "Feedback";
    case TagEnum.CONTENT:
      return "Content";
    case TagEnum.WEB:
      return "Web";
    case TagEnum.OPTIMIZATION:
      return "Optimization";
    case TagEnum.NOTIFICATION:
      return "Notification";
    case TagEnum.BUG_FIX:
      return "BugFix";
    case TagEnum.TESTING:
      return "Testing";
    case TagEnum.COMMUNICATION:
      return "Communication";
    case TagEnum.SEO:
      return "SEO";
    default:
      return "Unknown Tag";
  }
}

export enum SectionEnum {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  POSTPONED = "POSTPONED",
  TESTING = "TESTING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export function viewSectionEnum(section: string) {
  switch (section) {
    case SectionEnum.COMPLETED:
      return "Tamamlandı";
    case SectionEnum.IN_PROGRESS:
      return "Yapım Aşamasında";
    case SectionEnum.TESTING:
      return "Test Aşamasında";
    case SectionEnum.CANCELLED:
      return "İptal Edildi";
    case SectionEnum.POSTPONED:
      return "Gönderildi";
    case SectionEnum.TODO:
      return "Yapılacak";
    default:
      return "Unknown";
  }
}

export enum PriorityEnum {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export function viewPriorityEnum(priority: string) {
  switch (priority) {
    case PriorityEnum.HIGH:
      return "Yüksek";
    case PriorityEnum.MEDIUM:
      return "Orta";
    case PriorityEnum.LOW:
      return "Düşük";
  }
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