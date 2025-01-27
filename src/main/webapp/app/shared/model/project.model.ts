import dayjs from 'dayjs';
import { ProjectStatus } from 'app/shared/model/enumerations/project-status.model';

export interface IProject {
  id?: number;
  name?: string;
  description?: string | null;
  startDate?: dayjs.Dayjs;
  endDate?: dayjs.Dayjs | null;
  status?: keyof typeof ProjectStatus;
}

export const defaultValue: Readonly<IProject> = {};
