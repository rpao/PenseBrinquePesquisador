import MenuButton, { MenuButtonProps } from '../MenuButton/MenuButton';
import './RowMenu.css';

export type RowMenuType = MenuButtonProps[];

export type RowMenuProps = { rowsData: RowMenuType[]; id: string };

export default function RowMenu({ rowsData, id }: RowMenuProps) {
  const mapPropsToMenuButtom = (row: MenuButtonProps[], index: number) =>
    row.map((button: MenuButtonProps, innerIndex: number) => (
      <MenuButton {...button} key={`menu-button-${index}-${innerIndex}`} />
    ));

  return (
    <div className="menu-row-container" id={id}>
      {rowsData.map(mapPropsToMenuButtom)}
    </div>
  );
}
