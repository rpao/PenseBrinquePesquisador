import { Locators } from "@/app/constants/locator";
import "./appBrand.css";

export default function AppBrand() {
    const logoPath = 'logo.png';

    return (
        <div className="app-brand">
            <img
                src={logoPath}
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt='Logo'
            />
            <div className='app-brand-text-info'>
                <span className='app-brand-title'> {Locators.AppName} </span>
                <span className='app-brand-subtitle'> {Locators.AppDescription} </span>
            </div>
        </div>
    );
}
