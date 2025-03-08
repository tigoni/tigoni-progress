import { cn } from "@/lib/utils"
import { useState } from "react"
import { ArticleItem } from "./article-item"
import type { Article } from "@/lib/types"

type ArticleCategoriesProps = {
    articles: Article[]
}

export const ArticleCategories = ({ articles }: ArticleCategoriesProps) => {
    const [selected, setSelected] = useState<string>('all')

    const filteredArticles = selected === 'all' ? articles : articles.filter(article => article.category.toLocaleLowerCase() === selected.toLocaleLowerCase())

    return (
        <section className="space-y-3">
            <h3>Categories</h3>
            <ul className="w-full flex justify-start items-center gap-x-1">
                {
                    [...new Set(['all', ...articles.map(article => article.category)])].map(category => (
                        <li key={category} className={cn("hover:bg-accent rounded-md py-1 px-6 cursor-pointer duration-150", category === selected && 'bg-accent')} onClick={() => setSelected(category)}>{`${category.charAt(0).toUpperCase()}${category.slice(1)}`}</li>
                    ))
                }
            </ul>
            <div className="flex w-full flex-col justify-start items-start gap-6 mt-8">
                {filteredArticles.map((article) => <ArticleItem key={article.id} article={article} />)}
            </div>
        </section>

    )

}
