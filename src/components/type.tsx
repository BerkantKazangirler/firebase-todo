export interface SectionData {
  id: string;
  assigned_to: string[];
  description: string;
  due_date: string;
  priority: string;
  project_id: string;
  tags: string[];
  title: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  surname: string;
  role: string;
}

export interface TitlesData {
  id: string;
  name?: string;
  tasks?: string[];
}
