export enum SectionEnum {
  todo = "ToDo",
  inprogress = "inProgress",
  postponed = "Postponed",
  testing = "Testing",
  completed = "Completed",
  cancelled = "Cancelled",
}

export function viewSectionEnum(section: string) {
  switch (section) {
    case SectionEnum.completed:
      return "Completed";
    case SectionEnum.inprogress:
      return "In Progress";
    case SectionEnum.testing:
      return "Testing";
    case SectionEnum.cancelled:
      return "Cancelled";
    case SectionEnum.postponed:
      return "Postponed";
    case SectionEnum.todo:
      return "To Do";
    default:
      return "Unknown";
  }
}

export interface SectionData {
  id: string;
  assigned_to: string[];
  description: string;
  due_date: string;
  priority: string;
  project_id: string;
  tags: string[];
  title: string;
  status: SectionEnum;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  surname: string;
  role: string;
}

export interface TitleDataI {
  id: string;
  name: string;
}
