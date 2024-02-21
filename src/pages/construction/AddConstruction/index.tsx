import * as S from './styles';
import * as CS from '@components/template/styles';

const ADD_CONSTRUCTION_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '현장 목록',
    path: '/construction/list',
  },
  {
    title: '새 현장 추가',
    path: '/construction/add',
  },
];

function AddConstruction() {
  return (
    <>
      <S.AddConstructionContainer className="addConstructionContainer">
        <CS.TemplateTitle>새 현장 추가</CS.TemplateTitle>
      </S.AddConstructionContainer>
    </>
  );
}

export default AddConstruction;
