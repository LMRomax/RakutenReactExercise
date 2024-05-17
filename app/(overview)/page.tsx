import { Suspense } from "react";
import { CardsStatsSkeletonWrapper } from '@/app/ui/home/skeletons';
import { CardHomeLinks, HomeCardsDataWrapper } from "../ui/home/cards";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
};

export default async function Page() {
    return (
        <main>
            <div className="w-full">
                <h1 className="text-black text-3xl font-bold mt-3 leading-relaxed text-center mb-12 md:text-left md:mt-0 md:mb-12">
                    Welcome on the (over)simplified Rakuten Dashboard
                </h1>

                <div className="h-full flex flex-col items-center gap-2 mb-12 md:flex-row">
                    <Suspense fallback={<CardsStatsSkeletonWrapper />}>
                        <HomeCardsDataWrapper />
                    </Suspense>
                </div>
            </div>

            <div className="h-full flex flex-col items-center md:justify-center md:flex-row md:gap-2">
                <CardHomeLinks />
            </div>
        </main>
    );
}