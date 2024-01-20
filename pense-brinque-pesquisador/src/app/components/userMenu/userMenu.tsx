import { PersonCircle } from 'react-bootstrap-icons';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export type UserMenuProps = { name: string };

export default function UserMenu(props: UserMenuProps) {
    return (
        <DropdownButton
            as={ButtonGroup}
            id={'user-menu'}
            key={'user-menu-outline-secondary'}
            variant={'outline-secondary'}
            title={props.name}
        >
            <DropdownItem eventKey="user-profile"> <PersonCircle /> Profile</DropdownItem>
        </DropdownButton>
    );
}