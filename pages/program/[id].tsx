import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { MatchesTable } from "@/components/MatchesTable";
import { MyCouponCard } from "@/components/MyCouponCard";
import { NavMenu } from "@/components/NavMenu";
import type { SportProgram } from "@/types";
import type { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { initSportProgram } from "@/features/sportProgram/sportProgramSlice";

type Props = {
  data: SportProgram;
};

export default function Program({ data }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initSportProgram(data));
  }, [data]);

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.id;

  const programType: Record<string, number> = {
    futbol: 1,
    basketbol: 2,
    tenis: 5,
  };

  if (typeof slug !== "string") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `${process.env.API_URL}/SportProgram/${programType[slug]}`
  );

  const data: SportProgram = await res.json();
  if (!data.isSuccess) {
    return {
      notFound: true,
    };
  }

  // const filteredData = {
  //   isSuccess: data.isSuccess,
  //   data: {
  //     events: data.data.events.map((event) => ({
  //       bid: event.bid,
  //       mb: event.mb,
  //       edh: event.edh,
  //       en: event.en,
  //       iskbet: event.iskbet,
  //       live: event.live,
  //       m: {

  //       }
  //     })),
  //   },
  // };

  return {
    props: {
      data,
    },
  };
};
