import { BlogCard } from '../components/BlogCard';
import { Appbar } from "../components/Appbar";

export const Blogs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Appbar />
            <div className="pt-16 px-4"> {/* Adjust the top padding to ensure no overlap */}
                <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <BlogCard
                        authorName="Sameeha Mubeen"
                        title="How an ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
                        content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for many"
                        publishedDate="20th May 2024"
                    />
                    <BlogCard
                        authorName="John Doe"
                        title="The Ultimate Guide to Building a Personal Brand Online"
                        content="Building a personal brand online is essential in today’s digital world. It allows you to stand out and attract opportunities."
                        publishedDate="15th June 2024"
                    />
                    <BlogCard
                        authorName="Adani Gill"
                        title="The resume that got a software engineer a $300,000 job at Google."
                        content="My name is Alex Nguyen and I previously worked as a software engineer at Amazon and Microsoft before joining Google. Above is the resume I used to apply to Google and land an exciting $300,000 offer."
                        publishedDate="15th July 2024"
                    />
                </div>
            </div>
        </div>
    );
}
