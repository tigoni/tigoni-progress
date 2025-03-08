import type { Article } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export const ArticleItem = ({ article }: { article: Article }) => {

    return (
        <a
            href={`/articles/${article.id}`}
            className="group w-full flex gap-6 justify-start items-center duration-75 p-4 rounded-md hover:bg-accent/40 cursor-pointer"
        >
            <img
                src={article.image}
                alt={article.title}
                className="w-[18%] rounded-md hidden lg:block"
            />
            <div className="flex flex-col justify-center gap-3 items-start">
                <ul className="flex gap-x-4 justify-start items-center">
                    <li
                        className="px-3 py-[2px] font-bold rounded-sm bg-secondary text-secondary-foreground text-xs"
                    >
                        {
                            `${article.category.charAt(0).toUpperCase()}${article.category.slice(1)}`
                        }
                    </li>
                    {
                        article.tags.map((tag) => (
                            <li key={tag} className="text-sm font-medium">{tag}</li>
                        ))
                    }
                </ul>
                <div className="space-y-1">
                    <h3
                        className="group-hover:underline underline-offset-4 text-xl font-semibold"
                    >
                        {article.title}
                    </h3>
                    <p className="line-clamp-2 mr-4">{article.description}</p>
                </div>
                <div className="space-y-2 text-xs font-medium">
                    <p className="text-muted-foreground">
                        {article.date} • {article.readTime}
                    </p>
                    <span className="items-center flex gap-1">
                        Read more
                        <ArrowRight
                            className="size-3 group-hover:translate-x-0.5 duration-75"
                        />
                    </span>
                </div>
            </div>
        </a>

    )
}



export const FeaturedArticle = ({ featruedArticle }: { featruedArticle: Article }) => {

    return (
        <a
            href={`/articles/${featruedArticle.id}`}
            className="group w-full flex gap-6 justify-start items-center duration-75 p-4 rounded-md hover:bg-accent/40 cursor-pointer"
        >

            <div className="flex flex-col justify-center gap-4 items-start">
                <ul className="flex gap-x-4 justify-start items-center">
                    <li
                        className="px-3 py-[2px] font-bold rounded-sm bg-secondary text-secondary-foreground text-xs"
                    >
                        {
                            `${featruedArticle.category.charAt(0).toUpperCase()}${featruedArticle.category.slice(1)}`
                        }
                    </li>
                    {
                        featruedArticle.tags.map((tag) => (
                            <li key={tag} className="text-sm font-medium">{tag}</li>
                        ))
                    }
                </ul>
                <div className="space-y-1">
                    <h3
                        className="group-hover:underline underline-offset-4 text-2xl font-semibold"
                    >
                        {featruedArticle.title}
                    </h3>
                    <p className="line-clamp-2 mr-4 text-lg">{featruedArticle.description}</p>
                </div>
                <div className="space-y-2 text-xs font-medium">
                    <p className="text-muted-foreground">
                        {featruedArticle.date} • {featruedArticle.readTime}
                    </p>
                    <span className="items-center flex gap-1">
                        Read more
                        <ArrowRight
                            className="size-3 group-hover:translate-x-0.5 duration-75"
                        />
                    </span>
                </div>
            </div>
            <img
                src={featruedArticle.image}
                alt={featruedArticle.title}
                className=" w-[25%]  rounded-md hidden lg:block"
            />
        </a>

    )
}