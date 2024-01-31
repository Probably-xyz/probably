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

export function SkeletonSlugTitle(){
    return (
        <>
            <Skeleton className="h-4 w-[270px]"/>
        </>
    )
}

export function SkeletonSlugImage(){
    return (
        <>
            <Skeleton className="h-16 w-16 rounded-md"/>
        </>
    )
}

export function SkeletonLong(){
    return (
        <>
            <Skeleton className="h-6 w-[500px]"/>
        </>
    )
}

export function SkeletonParagraph(){
    return (
        <>
            <div className="flex flex-col space-y-4">
                <Skeleton className="h-4 w-[550px]"/>
                <Skeleton className="h-4 w-[530px]"/>
                <Skeleton className="h-4 w-[500px]"/>
                <Skeleton className="h-4 w-[460px]"/>
            </div>
        </>
    )
}
