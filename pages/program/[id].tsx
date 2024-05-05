import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { MatchesTable } from "@/components/MatchesTable";
import { MyCouponCard } from "@/components/MyCouponCard";
import { NavMenu } from "@/components/NavMenu";


export default function Program() {
  return (
    <>
      <Header />
      <NavMenu />
      <MainContent>
        <MatchesTable />
        <MyCouponCard />
      </MainContent>
    </>
  );
}
