export type UserLoginCredentials = { email: string; password: string };

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
  birthDate?: Date;
  // User Profile;
  profile: UserProfile;
};

/**
 * Finds the correct role for the received text.
 *
 * @param text
 * @returns Role.
 */
export const getRoleFromText = (text: string): UserRole => {
  const sanitizedText = text.toLowerCase().trim();

  switch (sanitizedText) {
    case 'researcher':
      return 'Researcher';
    case 'teacher':
      return 'Teacher';
    case 'manager':
      return 'Manager';
    case 'contributor':
      return 'Contributor';
    default:
      return undefined;
  }
};

/**
 * Finds the correct profile for the received text.
 *
 * @param text
 * @returns Profile.
 */
export const getProfileFromText = (text: string): UserProfile => {
  const sanitizedText = text.toLowerCase().trim();

  switch (sanitizedText) {
    case 'admin':
      return 'Admin';
    case 'user':
      return 'User';
    default:
      return undefined;
  }
};

export const userDataToString = (user: UserData | undefined | null): string => {
  if (!user) return '[error] no user data found.';
  return `{
    'name':'${user.name}',
    'email':'${user.email}',
    'role':'${user.role}',
    'birthDate':'${user.birthDate}',
    'profile':'${user.profile}',
  }`;
};
