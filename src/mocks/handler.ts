import { HttpResponse, http } from 'msw';
import { PathParams } from 'msw';

const generateConstructionData = (id: number, isOwner: boolean) => {
  return {
    id,
    category: ['하자체크', '공사관리'],
    title: '영통구 인계동 5동 912호 전체공사 진행중',
    createdAt: '2024.01.19',
    user: {
      usercode: '1GA001',
      profileImg: 'https://via.placeholder.com/150',
    },
    constructionSiteCode: '1GA001A0' + id,
    isOwner,
  };
};

// 현장 목록 리스트
const constructionList = Array.from({ length: 10 }, (_, index) => {
  const id = index + 1;
  const isOwner = index === 0;
  return generateConstructionData(id, isOwner);
});

// 개인 현장 목록 리스트는 현장 목록 리스트에서 5개만 가져옴
const personalConstructionList = constructionList.slice(0, 5);

export const handlers = [
  // 현장 목록 리스트
  http.get('/api/construction/list', () => {
    return HttpResponse.json(personalConstructionList);
  }),

  // 현장 목록을 현장 코드로 조회해서 있는지 검증
  http.get<{ code: string }>('/api/construction/list/code', ({ request }) => {
    const url = new URL(request.url);
    const productId = url.searchParams.get('code');

    const isExist = constructionList.some(
      (construction) => construction.constructionSiteCode === productId
    );

    const isPersonalExist = personalConstructionList.some(
      (construction) => construction.constructionSiteCode === productId
    );

    if (isExist) {
      if (isPersonalExist) {
        return HttpResponse.json({
          status: 409,
          message: '이미 추가된 현장입니다.',
          data: personalConstructionList.find(
            (construction) => construction.constructionSiteCode === productId
          ),
        });
      } else {
        return HttpResponse.json({
          status: 200,
          data: constructionList.find(
            (construction) => construction.constructionSiteCode === productId
          ),
        });
      }
    } else {
      return HttpResponse.json({
        status: 404,
        message: '존재하지 않는 현장입니다.',
      });
    }
  }),

  // 현장 목록을 현장 코드로 조회해서 추가 요청
  http.post('/api/construction/join', async ({ request }: any) => {
    const constructionSiteBody = await request.json();
    const { constructionSiteCode } = constructionSiteBody;

    const construction = constructionList.find(
      (construction) =>
        construction.constructionSiteCode === constructionSiteCode
    );

    // 이미 추가된 현장인지 확인
    const isExist = personalConstructionList.some(
      (construction) =>
        construction.constructionSiteCode === constructionSiteCode
    );

    if (construction && !isExist) {
      personalConstructionList.unshift(construction);
      return HttpResponse.json({
        status: 200,
        message: '현장 추가 성공',
      });
    } else if (isExist) {
      return HttpResponse.json({
        status: 409,
        message: '이미 추가된 현장입니다.',
      });
    } else {
      return HttpResponse.json({
        status: 404,
        message: '존재하지 않는 현장입니다.',
      });
    }
  }),
];
