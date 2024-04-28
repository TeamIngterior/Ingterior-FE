import instance from '.';

export interface ConstructionListDataModel {
  constructionId: number;
  constructionName?: string;
  name?: string;
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

// 현장 개별 조회
export const constructionDetailRequest = async (constructionId: string) => {
  return instance.get(`${import.meta.env.VITE_SERVER_URL}/construction`, {
    params: {
      constructionId,
    },
  });
};

// 현장 목록을 현장 코드로 조회해서 있는지 검증
export const constructionListByCodeRequest = async (constructionId: string) => {
  return instance.get(`${import.meta.env.VITE_SERVER_URL}/construction`, {
    params: {
      constructionId,
    },
  });
};

// 코드로 현장 참여
export const joinConstructionRequest = async (constructionId: string) => {
  return instance.post(`${import.meta.env.VITE_SERVER_URL}/construction/join`, {
    memberId: '111',
    constructionId,
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

// 현장 삭제
export const deleteConstructionRequest = async (constructionId: string) => {
  return instance.delete(`${import.meta.env.VITE_SERVER_URL}/construction`, {
    data: {
      memberId: '111',
      constructionId: constructionId,
    },
  });
};

// 현장 좋아요
export const likeConstructionRequest = async (constructionId: string) => {
  return instance.post(`${import.meta.env.VITE_SERVER_URL}/construction/like`, {
    memberId: '111',
    constructionId,
  });
};

// 현장 나가기
export const leaveConstructionRequest = async (constructionId: string) => {
  return instance.delete(
    `${import.meta.env.VITE_SERVER_URL}/construction/leave`,
    {
      data: {
        memberId: '111',
        constructionId,
      },
    }
  );
};
