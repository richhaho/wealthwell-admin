import ECommerce from "@/app/admin/_components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/app/admin/_components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
   "Dashboard",
  description: "Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
      <ECommerce />
      </DefaultLayout>
    </>
  );
}
