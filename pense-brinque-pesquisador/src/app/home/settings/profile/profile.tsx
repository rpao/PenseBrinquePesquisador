import LabeledData from '@/app/components/LabeledData/LabeledData';
import { Locators } from '@/app/shared/constants/locator';
import { UserData } from '@/app/shared/models/user';
import { getMockedUser, getStringDateDDMMYYYY } from '@/app/utils';

export const ProfileHref = '/home/settings/profile';

export default function Profile() {
  const user: UserData = getMockedUser();

  return (
    <div>
      <LabeledData label={Locators.nameLabel} data={user.name} />
      <LabeledData label={Locators.roleLabel} data={user.role} />
      <LabeledData label={Locators.profileLabel} data={user.profile} />
      <LabeledData label={Locators.emailLabel} data={user.email} />
      <LabeledData
        label={Locators.birthDateLabel}
        data={getStringDateDDMMYYYY(user.birthDate)}
      />
    </div>
  );
}
