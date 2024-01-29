import { Skeleton } from "~/styles/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex space-x-20 max-w-screen-xl py-10 mx-auto items-center">
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[225px] w-[350px] rounded-md" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[225px] w-[350px] rounded-md" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[225px] w-[350px] rounded-md" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    </div>
  )
}
