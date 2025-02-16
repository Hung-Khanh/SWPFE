import { PublicLayout } from "@/layout/PublicLayout";
import { Registration } from "@components/Registration/Registration";
import { Subscribe } from "@components/shared/Subscribe/Subscribe";

const breadcrumbsData = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Check in",
    path: "/registration",
  },
];
const RegistrationPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="Registration">
      <Registration />
      <Subscribe />
    </PublicLayout>
  );
};

export default RegistrationPage;
