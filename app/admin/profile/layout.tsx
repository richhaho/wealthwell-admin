import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Admin Profile ${config.appName}`,
  canonicalUrlRelative: "/admin/profile",
});

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
