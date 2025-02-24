// src/auth/hook/useUpdateProfile.js

import { ACTIONS } from "@lib/api-client/constant";
import { APIClient } from "@lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { showToast } from "@utils/toast";

export function useUpdateProfile() {
  const { mutateAsync: updateProfile, isPending } = useMutation({
    mutationFn: async (params) => {
      const { data, status_code } = await APIClient.invoke({
        action: ACTIONS.GET_SELF,
        data: params,
      });

      if (status_code === 200) {
        showToast.success("Profile updated successfully!");
      } else {
        showToast.error("Failed to update profile. Please try again.");
      }
    },
  });

  return { updateProfile, isPending };
}
