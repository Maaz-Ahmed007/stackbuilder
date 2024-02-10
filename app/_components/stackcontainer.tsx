type StackContainerProps = {
    stackHeading?: string
}

export const StackContainer = ({
    stackHeading= "Stack Heading",
}: StackContainerProps ) => {
    return (
        <>
            <div className="relative group">
                <div className="flex flex-col w-[200px] border border-gray-600 rounded-lg shadow-md hover:border-red-500 hover:shadow-red-500 active:shadow-red-500 cursor-pointer box-animation">

                    {/* Stack Heading Section */}
                    <div className="flex items-center justify-start px-2 py-1 text-gray-600 group-active:text-red-500 font-normal uppercase text-base text-ellipsis bg-gray-200 rounded-t-lg overflow-hidden border-b border-b-gray-600">{stackHeading}</div>

                    {/* Stack Content Section */}
                    <div className="flex items-center justify-center py-2">
                        <p className="text-xl text-gray-700 font-semibold">Stack Content</p>
                    </div>
                </div>
            </div>
        </>
    )
}