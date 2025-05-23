import AuthBarBottom from "@/components/AuthBarBottom";
import Header from "@/components/Header";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <AuthBarBottom />
    </div>
  );
};

export default AppLayout;
