export type UserRole =
  | 'Researcher'
  | 'Teacher'
  | 'Manager'
  | 'Contributor'
  | undefined;

export type UserProfile = 'Admin' | 'User' | undefined;

export type UserData = {
  // User Name
  name: string;
  // User role
  role: UserRole;
  // User email
  email: string;
  // User BirthDate
  birthDate: Date | undefined;
  // User Profile;
  profile: UserProfile;
};

export type UserLoginCredentials = { email: string; password: string };
