export enum TagEnum {
  Offline = "Offline",
  Backend = "Backend",
  UI = "UI",
  Training = "Training",
  Documentation = "Documentation",
  Release = "Release",
  AppStore = "App Store",
  Infrastructure = "Infrastructure",
  Integration = "Integration",
  SocialMedia = "Social Media",
  Backup = "Backup",
  Database = "Database",
  Form = "Form",
  Reporting = "Reporting",
  DataAnalysis = "Data Analysis",
  Design = "Design",
  Security = "Security",
  QA = "QA",
  Localization = "Localization",
  Debugging = "Debugging",
  Migration = "Migration",
  Feedback = "Feedback",
  Content = "Content",
  Web = "Web",
  Optimization = "Optimization",
  Notification = "Notification",
  BugFix = "Bug Fix",
  Testing = "Testing",
  Communication = "Communication",
  SEO = "SEO",
}

export function viewMapper(tag: TagEnum): string {
  switch (tag) {
    case TagEnum.Offline:
      return "Offline";
    case TagEnum.Backend:
      return "Backend";
    case TagEnum.UI:
      return "UI";
    case TagEnum.Training:
      return "Training";
    case TagEnum.Documentation:
      return "Documentation";
    case TagEnum.Release:
      return "Release";
    case TagEnum.AppStore:
      return "AppStore";
    case TagEnum.Infrastructure:
      return "Infrastructure";
    case TagEnum.Integration:
      return "Integration";
    case TagEnum.SocialMedia:
      return "SocialMedia";
    case TagEnum.Backup:
      return "Backup";
    case TagEnum.Database:
      return "Database";
    case TagEnum.Form:
      return "Form";
    case TagEnum.Reporting:
      return "Reporting";
    case TagEnum.DataAnalysis:
      return "DataAnalysis";
    case TagEnum.Design:
      return "Design";
    case TagEnum.Security:
      return "Security";
    case TagEnum.QA:
      return "QA";
    case TagEnum.Localization:
      return "Localization";
    case TagEnum.Debugging:
      return "Debugging";
    case TagEnum.Migration:
      return "Migration";
    case TagEnum.Feedback:
      return "Feedback";
    case TagEnum.Content:
      return "Content";
    case TagEnum.Web:
      return "Web";
    case TagEnum.Optimization:
      return "Optimization";
    case TagEnum.Notification:
      return "Notification";
    case TagEnum.BugFix:
      return "BugFix";
    case TagEnum.Testing:
      return "Testing";
    case TagEnum.Communication:
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