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

export const remodelingListRequest = async () => {
  return instance.get(`${import.meta.env.VITE_SERVER_URL}/remodeling/list`);
};
