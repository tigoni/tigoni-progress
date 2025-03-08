import { cn } from "@/lib/utils"
import { useState } from "react"
import { ArticleItem } from "./article-item"
import type { Article } from "@/lib/types"
import { ChevronRight } from "lucide-react"

type ArticleCategoriesProps = {
    articles: Article[]
}

export const ArticleCategories = ({ articles }: ArticleCategoriesProps) => {
    const [selected, setSelected] = useState<string>('all')

    const filteredArticles = selected === 'all' ? articles : articles.filter(article => article.category.toLocaleLowerCase() === selected.toLocaleLowerCase())

    return (
        <section className="space-y-3 w-full">
            <h3 className="text-lg">All articles</h3>
            <ul className="flex justify-start items-center gap-1 flex-wrap">
                {
                    [...new Set(['all', ...articles.map(article => article.category)])].map(category => (
                        <li key={category} className={cn("hover:bg-primary hover:text-primary-foreground text-sm rounded-md py-1 px-4 cursor-pointer duration-150", category === selected && 'bg-primary text-primary-foreground')} onClick={() => setSelected(category)}>{`${category.charAt(0).toUpperCase()}${category.slice(1)}`}</li>
                    ))
                }
            </ul>
            <div className="flex w-full flex-col justify-start items-start gap-6">
                {filteredArticles.map((article) => <ArticleItem key={article.id} article={article} />)}
            </div>
        </section>

    )

}
