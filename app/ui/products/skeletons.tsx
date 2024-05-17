// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ProductSkeleton({
    itemPerPage
}: {
    itemPerPage: number
}) {
    return (
        Array(itemPerPage).fill(0).map((el, index) => (
            <div className={`${shimmer} relative overflow-hidden rounded-lg p-[16px] flex flex-row gap-[16px] items-center justify-center border border-slate-300 w-full`}>
                <div className="w-[120px] h-[120px] rounded-lg bg-gray-200"></div>

                <div>
                    <div className="w-[64px] h-[18px] text-[#696969] text-[12px] font-semibold bg-gray-200 mb-2"></div>

                    <div className="w-[64px] h-[42px] text-[#333] text-[14px] mb-[8px] font-semibold bg-gray-200 mb-[8px]"></div>

                    <div className="w-[64px] h-[24px] text-[#BF0000] text-[14px] font-bold bg-gray-200 mb-2"></div>

                    <div className="w-[64px] h-[24px] text-[#333] text-[14px] bg-gray-200 mb-2"></div>
                </div>
            </div>
        ))
    );
}

export function ProductSkeletonWrapper({
    itemPerPage
}: {
    itemPerPage: number
}) {
    return (
        <>
            <div className="w-full grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <ProductSkeleton itemPerPage={itemPerPage} />
            </div>
        </>
    );
}