import instance from '.';

export interface RemodelingListDataModel {
  id: number;
  title: string;
  category: string[];
  createdAt: string;
  user: {
    usercode: string;
    profileImg: string;
  };
  remodelingSiteCode: string;
  isOwner: boolean;
}

// 현장 목록 조회
export const remodelingListRequest = async () => {
  return instance.get(`${import.meta.env.VITE_SERVER_URL}/remodeling/list`);
};

// 현장 목록을 현장 코드로 조회해서 있는지 검증
export const remodelingListByCodeRequest = async (
  remodelingSiteCode: string
) => {
  return instance.get(
    `${import.meta.env.VITE_SERVER_URL}/remodeling/list/code`,
    {
      params: {
        code: remodelingSiteCode,
      },
    }
  );
};

// 코드로 현장 참여
export const joinRemodelingRequest = async (remodelingSiteCode: string) => {
  return instance.post(`${import.meta.env.VITE_SERVER_URL}/remodeling/join`, {
    remodelingSiteCode,
  });
};
