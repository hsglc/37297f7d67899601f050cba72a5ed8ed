import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { MatchTable } from "@/components/MatchTable";
import { MyCouponCard } from "@/components/MyCouponCard";
import { NavMenu } from "@/components/NavMenu";


export default function Program() {
  return (
    <>
      <Header />
      <NavMenu />
      <MainContent>
        <MatchTable />
        <MyCouponCard />
      </MainContent>
    </>
  );
}
