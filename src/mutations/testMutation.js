import { useMutation } from "@tanstack/react-query";
import { updateNameApi } from "../apis/testApi";

export const useTestMutation = () => useMutation({
    mutationKey: ["useTestMutation"],
    mutationFn: updateNameApi,
    retry: 0,   // 요청이 실패했을 때 재시도하지 않도록 설정
});