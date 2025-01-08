import { RootState } from "@/shared/store/hooks";

export const isDisabled = ({ people }: RootState) => people.isDisabled;
export const isLoading = ({ people }: RootState) => people.isLoading;
export const btnLoadingMore = ({ people }: RootState) => people.btnLoadingMore;
