import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};
const SampleLayout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SampleLayout;
