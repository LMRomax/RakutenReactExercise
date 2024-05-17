// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardStatsSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded bg-[#f4f4f4] p-2 shadow-sm w-full md:w-4/12`}
        >
            <div className="flex p-4">
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex items-center justify-center truncate rounded bg-white px-4 py-8">
                <div className="h-7 w-20 rounded-md bg-gray-200" />
            </div>
        </div>
    );
}

export function CardsStatsSkeletonWrapper() {
    return (
        <>
            <CardStatsSkeleton />
            <CardStatsSkeleton />
            <CardStatsSkeleton />
        </>
    );
}