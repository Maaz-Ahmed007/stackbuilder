type StackArrowsProps = {
    singleArrow?: boolean
    doubleArrow?: boolean
    multipleConnections?: boolean
}

export const StackArrows = ({
    singleArrow,
    doubleArrow,
    multipleConnections
}: StackArrowsProps) => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-0.5 bg-black"></div>
            <div className="absolute w-3 h-3 bg-white border border-black transform rotate-45 -mt-1 left-0"></div>
            <div className="absolute w-3 h-3 bg-white border border-black transform -rotate-45 -mt-1 right-0"></div>
            <div className="absolute w-4 h-4 bg-white border border-black"></div>
        </div>
    )
}