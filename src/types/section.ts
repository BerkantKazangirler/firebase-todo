export enum TagEnum {
  OFFLINE = "Offline",
  BACKEND = "Backend",
  UI = "UI",
  TRAINING = "Training",
  DOCUMENTATION = "Documentation",
  RELEASE = "Release",
  APP_STORE = "App Store",
  INFRASTRUCTURE = "Infrastructure",
  INTEGRATION = "Integration",
  SOCIAL_MEDIA = "Social Media",
  BACKUP = "Backup",
  DATABASE = "Database",
  FORM = "Form",
  REPORTING = "Reporting",
  DATA_ANALYSIS = "Data Analysis",
  DESIGN = "Design",
  SECURITY = "Security",
  QA = "QA",
  LOCALIZATION = "Localization",
  DEBUGGING = "Debugging",
  MIGRATION = "Migration",
  FEEDBACK = "Feedback",
  CONTENT = "Content",
  WEB = "Web",
  OPTIMIZATION = "Optimization",
  NOTIFICATION = "Notification",
  BUG_FIX = "Bug Fix",
  TESTING = "Testing",
  COMMUNICATION = "Communication",
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
  todo = "TODO",
  inprogress = "IN_PROGRESS",
  postponed = "POSTPONED",
  testing = "TESTING",
  completed = "COMPLETED",
  cancelled = "CANCELLED",
}

export function viewSectionEnum(section: string) {
  switch (section) {
    case SectionEnum.completed:
      return "Tamamlandı";
    case SectionEnum.inprogress:
      return "Yapım Aşamasında";
    case SectionEnum.testing:
      return "Test Aşamasında";
    case SectionEnum.cancelled:
      return "İptal Edildi";
    case SectionEnum.postponed:
      return "Gönderildi";
    case SectionEnum.todo:
      return "Yapılacak";
    default:
      return "Unknown";
  }
}

export enum PriorityEnum {
  high = "High",
  low = "Low",
  medium = "Medium",
}

export function viewPriorityEnum(priority: string) {
  switch (priority) {
    case PriorityEnum.high:
      return "Yüksek";
    case PriorityEnum.medium:
      return "Orta";
    case PriorityEnum.low:
      return "Düşük";
  }
}

export interface SectionData {
  id: string;
  assigned_to: string[];
  description: string;
  due_date: string;
  priority: string;
  project_id: string;
  tags: TagEnum[];
  title: string;
  status: SectionEnum;
}