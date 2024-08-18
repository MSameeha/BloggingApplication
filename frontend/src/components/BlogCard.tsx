interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
                <Avatar name={authorName} /> 
                <div className="ml-4">
                    <div className="text-gray-800 font-semibold">{authorName}</div>
                    <div className="text-gray-500 text-sm">{publishedDate}</div>
                </div>
            </div>
            <div className="mb-2">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="mb-4 text-gray-700">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-gray-500 text-sm mb-4">
                {`${Math.ceil(content.length / 100)} minute read`}
            </div>
            <div className="bg-gray-200 h-1 w-full rounded-full"></div>
        </div>
    )
}

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
            <span className="text-lg font-medium text-gray-600">{name[0]}</span>
        </div>
    )
}
