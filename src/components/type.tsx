export interface SectionData {
  assigned_to: string[];
  description: string;
  due_date: string;
  priority: string;
  project_id: string;
  tags: string[];
  title: string;
}

export interface UserData {
  email: string;
  name: string;
  surname: string;
  role: string;
}

export interface TitlesData {
  name: string;
  tasks?: string[];
}
