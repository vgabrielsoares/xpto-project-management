import { IProject } from 'app/shared/model/project.model';
import { TaskStatus } from 'app/shared/model/enumerations/task-status.model';

export interface ITask {
  id?: number;
  title?: string;
  description?: string | null;
  deadline?: number;
  status?: keyof typeof TaskStatus;
  project?: IProject | null;
}

export const defaultValue: Readonly<ITask> = {};
