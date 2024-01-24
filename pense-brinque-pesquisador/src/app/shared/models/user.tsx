export type UserRole = 'Researcher' | 'Teacher' | 'Manager' | 'Contributor';

export type UserProfile = 'Admin' | 'User';

export type UserData = {
  // User Name
  name: string;
  // User role
  role: UserRole;
  // User email
  email: string;
  // User BirthDate
  birthDate: Date;
  // User Profile;
  profile: UserProfile;
};
