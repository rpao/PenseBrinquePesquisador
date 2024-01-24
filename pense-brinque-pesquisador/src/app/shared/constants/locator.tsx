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

export class UserRoleLocators {
  static Researcher = 'Pesquisador';
  static Teacher = 'Professor';
  static Manager = 'Gerente';
  static Contributor = 'Colaborador Externo';
  static Undefined = 'Papel não definido';
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

export const findUserRoleLocatorForString = (
  text: string | undefined,
): string | undefined => {
  if (!text) return UserRoleLocators.Undefined;

  const sanitizedText = text.toLowerCase();

  switch (text) {
    case 'Researcher':
      return UserRoleLocators.Researcher;
    case 'Teacher':
      return UserRoleLocators.Teacher;
    case 'Manager':
      return UserRoleLocators.Manager;
    case 'Contributor':
      return UserRoleLocators.Contributor;
    case 'Undefined':
    default:
      return UserRoleLocators.Undefined;
  }
};
