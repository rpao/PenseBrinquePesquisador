import './AppBrand.css';
import { Locators } from '@/app/shared/constants/locator';

export default function AppBrand() {
  const logoPath = '/logo.png';

  return (
    <div className="app-brand">
      <img
        src={logoPath}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo"
      />
      <div className="app-brand-text-info">
        <span className="app-brand-title-light"> {Locators.appName} </span>
        <span className="app-brand-subtitle-light">
          {' '}
          {Locators.appDescription}{' '}
        </span>
      </div>
    </div>
  );
}
