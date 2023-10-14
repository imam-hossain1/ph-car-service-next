/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { IsUserLoggedIn } from "@/services/auth.service";
import { Layout, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const loggedUser = IsUserLoggedIn();
  console.log(loggedUser);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!loggedUser) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <p>Loading......</p>;
  }


  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
