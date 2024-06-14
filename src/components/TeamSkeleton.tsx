const TeamSkeleton = () => {
    function Skeleton({ className }: { className: string }) {
        return <div className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`} />;
    }
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 max-screen md:grid-cols-3 gap-7 lg:gap-y-24 md:gap-y-16 my-10 mt-5  animate-pulse">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="space-y-6">
                    <div className="space-y-2">
                        <Skeleton className="w-full h-[200px] md:h-[300px] lg:h-[400px] bg-gray-300 rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="w-[12ch] md:w-[20ch] lg:w-[30ch] h-[1rem] bg-gray-300 rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="w-[12ch] md:w-[20ch] lg:w-[30ch] h-[1rem] bg-gray-300 rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TeamSkeleton;