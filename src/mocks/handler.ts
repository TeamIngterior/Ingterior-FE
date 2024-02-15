import { HttpResponse, http } from 'msw';

const generateRemodelingData = (id: number, isOwner: boolean) => {
  return {
    id,
    category: ['하자체크', '공사관리'],
    title: '영통구 인계동 5동 912호 전체공사 진행중',
    createdAt: '2024.01.19',
    user: {
      usercode: '1GA001',
      profileImg: 'https://via.placeholder.com/150',
    },
    remodelingSiteCode: '1GA001A01',
    isOwner,
  };
};

export const handlers = [
  // 현장 목록 리스트
  http.get('/api/remodeling/list', () => {
    const remodelingList = Array.from({ length: 10 }, (_, index) => {
      const id = index + 1;
      const isOwner = index === 0;
      return generateRemodelingData(id, isOwner);
    });

    return HttpResponse.json(remodelingList);
  }),
];
