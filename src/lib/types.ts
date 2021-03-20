export interface IScrapedSection {
  crn: string;
  subject: string;
  crse: string;
  section: string;
  cmp: string;
  creditRange: number[];
  title: string;
  days: string;
  timeRange: string[] | null;
  seats: number;
  seatsTaken: number;
  seatsAvailable: number;
  instructors: string;
  dateRange: string[];
  location: string | null;
  fee: number;
}

export interface ISection {
  crn: string;
  section: string;
  cmp: string;
  creditRange: number[];
  days: string;
  timeRange: string[] | null;
  seats: number;
  seatsTaken: number;
  seatsAvailable: number;
  instructors: string[];
  dateRange: string[];
  location: string | null;
  fee: number;
}

export interface ICourseOverview {
  subject: string;
  crse: string;
  title: string;
  sections: ISection[];
}

export enum ESemester {
  fall = 'Fall',
  spring = 'Spring',
  summer = 'Summer'
}

export interface ISectionDetails {
  title: string;
  description: string;
  instructors: string[];
  semestersOffered: ESemester[];
  prereqs: string | null;
  location: string;
}

export interface IFaculty {
  name: string;
  departments: string[];
  occupations: string[];
  email: string | null;
  phone: string | null;
  office: string | null;
  websiteURL: string | null;
  photoURL: string | null;
  interests: string[];
}
