import instance from '.';

export interface ConstructionListDataModel {
  id: number;
  title: string;
  category: string[];
  createdAt: string;
  user: {
    usercode: string;
    profileImg: string;
  };
  constructionSiteCode: string;
  isOwner: boolean;
}

// 현장 목록 조회
export const constructionListRequest = async () => {
  return instance.get(`${import.meta.env.VITE_SERVER_URL}/construction/list`);
};

// 현장 목록을 현장 코드로 조회해서 있는지 검증
export const constructionListByCodeRequest = async (
  constructionSiteCode: string
) => {
  return instance.get(
    `${import.meta.env.VITE_SERVER_URL}/construction/list/code`,
    {
      params: {
        code: constructionSiteCode,
      },
    }
  );
};

// 코드로 현장 참여
export const joinConstructionRequest = async (constructionSiteCode: string) => {
  return instance.post(`${import.meta.env.VITE_SERVER_URL}/construction/join`, {
    constructionSiteCode,
  });
};
