import { useEffect, useState } from 'react';

import { getTermsRequest } from '@/apis/terms';

import DefaultModal from '../DefaultModal';

import * as CS from '@/components/modal/styles';

function TermsModal() {
  const [terms, setTerms] = useState('');

  useEffect(() => {
    //instance로 terms를 가져와서 innerHTML로 이용약관을 넣어준다.
    const getTerms = async () => {
      const response = await getTermsRequest();
      const terms = response.data.data;
      setTerms(terms);
    };
    getTerms();
  }, []);

  return (
    <DefaultModal name="terms" className="terms">
      <CS.ModalContentContainer>
        <CS.ModalHeader>이용약관</CS.ModalHeader>
        <CS.ModalContent>
          <div dangerouslySetInnerHTML={{ __html: terms }} />
          이용약관이 들어가는 자리입니다.
        </CS.ModalContent>
      </CS.ModalContentContainer>
    </DefaultModal>
  );
}

export default TermsModal;
