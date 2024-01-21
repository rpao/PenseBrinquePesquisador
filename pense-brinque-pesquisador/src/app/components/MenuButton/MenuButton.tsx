import Link from 'next/link';
import { Button } from 'react-bootstrap';

export type MenuButtonProps = {
  linkHref: string;
  label: string;
  icon?: JSX.Element;
};

export default function MenuButton({ linkHref, icon, label }: MenuButtonProps) {
  return (
    <Link href={linkHref} className="simple-link" id={`row-menu-${label}`}>
      <Button className="large-square-button-light">
        {icon}
        {label}
      </Button>
    </Link>
  );
}
