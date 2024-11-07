import ManagerLayout from "@/layouts/manager/ManagerLayout.vue";
import Certify from "@/views/manager/Certify.vue";
import ChangePassword from "@/views/manager/ChangePassword.vue";
import InterviewSchedule from "@/views/manager/InterviewSchedule.vue";
import ManageCV from "@/views/manager/ManageCV.vue";
import ProfileManager from "@/views/manager/ProfileManager.vue";

const managerRouters = [
  {
    path: "/user",
    redirect: "user/profile",
    component: ManagerLayout,
    children: [
      { path: "profile", component: ProfileManager },
      { path: "manage", component: ManageCV },
      { path: "certify", component: Certify },
      { path: "interview", component: InterviewSchedule },
      { path: "password", component: ChangePassword },
    ],
  },
];
export default managerRouters;
