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

const remodelingList = Array.from({ length: 10 }, (_, index) => {
  const id = index + 1;
  const isOwner = index === 0;
  return generateRemodelingData(id, isOwner);
});

export const handlers = [
  // 현장 목록 리스트
  http.get('/api/remodeling/list', () => {
    return HttpResponse.json(remodelingList);
  }),

  // 현장 목록을 현장 코드로 조회해서 있는지 검증
  http.get<{ code: string }>('/api/remodeling/list/code', ({ request }) => {
    const url = new URL(request.url);
    const productId = url.searchParams.get('code');

    const isExist = remodelingList.some(
      (remodeling) => remodeling.remodelingSiteCode === productId
    );

    if (isExist) {
      return HttpResponse.json(
        remodelingList.find(
          (remodeling) => remodeling.remodelingSiteCode === productId
        )
      );
    } else {
      return HttpResponse.json({
        status: 404,
        message: '존재하지 않는 현장입니다.',
      });
    }
  }),
];
