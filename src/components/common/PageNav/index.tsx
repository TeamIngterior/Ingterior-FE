import { useNavigate } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import * as S from './styles';

function PageNav({ navList }: { navList: { title: string; path: string }[] }) {
  const navigate = useNavigate();

  return (
    <>
      <S.PageNavContainer>
        <S.PageNavList>
          {navList.map((nav, index) => (
            <li key={index}>
              <S.PageNavItem
                style={{
                  cursor: index !== navList.length - 1 ? 'pointer' : 'default',
                }}
                onClick={() => {
                  index !== navList.length - 1 ? navigate(nav.path) : null;
                }}
              >
                {nav.title}
              </S.PageNavItem>
              {index !== navList.length - 1 && (
                <S.PageNavArrow aria-hidden="true">
                  <IoIosArrowForward />
                </S.PageNavArrow>
              )}
            </li>
          ))}
        </S.PageNavList>
      </S.PageNavContainer>
    </>
  );
}

export default PageNav;
