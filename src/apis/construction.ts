import instance from '.';

export interface ConstructionListDataModel {
  constructionId: number;
  constructionName: string;
  constructionCode: string;
  usage: number;
  regDate: string;
  memberCode: string;
  memberImgUrls: string[];
  creator: boolean;
  liked: boolean;
}

// 현장 목록 조회
export const constructionListRequest = async (memberId: string) => {
  return instance.get(
    `${import.meta.env.VITE_SERVER_URL}/construction/constructions`,
    {
      params: {
        memberId,
      },
    }
  );
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

// 현장 추가
export const addConstructionRequest = async (data: any) => {
  return instance.post(
    `${import.meta.env.VITE_SERVER_URL}/construction`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};
