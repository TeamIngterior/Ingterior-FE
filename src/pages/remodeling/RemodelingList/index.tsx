import useMobileHeader from '@/hooks/useMobileHeader';

import { useRemodelingList } from './useRemodelingList';
import { RemodelingListDataModel } from '@/apis/remodeling';

import RemodelingListCard from '@/components/remodeling/list/RemodlingListCard';

import * as S from './styles';

function RemodelingList() {
  useMobileHeader('/', '현장 목록');

  const { remodelingListData } = useRemodelingList();

  return (
    <>
      <S.RemodelingListContainer>
        {remodelingListData?.map(
          (item: RemodelingListDataModel, index: number) => (
            <RemodelingListCard cardData={item} key={index} />
          )
        )}
      </S.RemodelingListContainer>
    </>
  );
}

export default RemodelingList;
