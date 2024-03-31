import { SETTING_LINK } from '@/constants/link';

import LogoutBox from '@/components/setting/LogoutBox';
import SettingMenu from '@/components/setting/SettingMenu';

import * as S from './styles';

function Setting() {
  return (
    <S.SettingContainer>
      <S.SettingHeader>
        <LogoutBox />
      </S.SettingHeader>

      {SETTING_LINK.map((link, index) => (
        <SettingMenu key={index} name={link.name} path={link.path} />
      ))}
    </S.SettingContainer>
  );
}

export default Setting;
