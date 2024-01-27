export class Locators {
  static appName: string = 'Pense e Brinque - Pesquisador';
  static appDescription: string = 'Pense e Brinque Pesquisador';
  static home = 'Home';
  static dashboard = 'Dashboards';
  static reports = 'Relatórios';
  static settings = 'Configurações';
  static profile = 'Perfil';
  static nameLabel = 'Nome';
  static emailLabel = 'E-Mail';
  static roleLabel = 'Função';
  static profileLabel = 'Perfil';
  static birthDateLabel = 'Data de Nascimento';
}

/**
 * Receives a string, checks if there is a Locator for it.
 *
 * @param string - Text used to find a locator.
 * @returns The respective locator or undefined.
 */
export const findLocatorForString = (text: string): string | undefined => {
  const sanitizedText = text.toLowerCase();
  switch (sanitizedText) {
    case 'appname':
      return Locators.appName;
    case 'appdescription':
      return Locators.appDescription;
    case 'home':
      return Locators.home;
    case 'dashboards':
      return Locators.dashboard;
    case 'reports':
      return Locators.reports;
    case 'settings':
      return Locators.settings;
    case 'profile':
      return Locators.profile;
    case 'name':
      return Locators.nameLabel;
    case 'role':
      return Locators.roleLabel;
    case 'birthdate':
      return Locators.birthDateLabel;
    default:
      return undefined;
  }
};

export class RoleLocators {
  static Researcher = 'Pesquisador';
  static Teacher = 'Professor';
  static Manager = 'Coordenador';
  static Contributor = 'Colaborador';
  static UndefinedRole = 'Papel não definido';
}

export class ProfileLocators {
  static Admin = 'Admin';
  static User = 'User';
  static UndefinedProfile = 'Perfil não definido';
}

/**
 * Finds the correct role locator for the received text.
 *
 * @param text
 * @returns Role Locator.
 */
export const getRoleLocator = (text: string) => {
  switch (text) {
    case 'Researcher':
      return RoleLocators.Researcher;
    case 'Teacher':
      return RoleLocators.Teacher;
    case 'Manager':
      return RoleLocators.Manager;
    case 'Contributor':
      return RoleLocators.Contributor;
    default:
      return RoleLocators.UndefinedRole;
  }
};

/**
 * Finds the correct profile locator for the received text.
 *
 * @param text
 * @returns Profile Locator
 */
export const getProfileLocator = (text: string) => {
  switch (text) {
    case 'Admin':
      return ProfileLocators.Admin;
    case 'User':
      return ProfileLocators.User;
    default:
      return ProfileLocators.UndefinedProfile;
  }
};
