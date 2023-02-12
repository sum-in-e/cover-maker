import { colors } from "@/styles/colors";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main
      style={{ backgroundColor: colors.primary.lightest, minHeight: "100vh" }}
    >
      {children}
    </main>
  );
}

export default Layout;
