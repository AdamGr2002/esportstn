import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    category: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    authorImage: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("forums", {
      ...args,
      replyCount: 0,
    })
  },
})

export const listByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("forums")
      .filter((q) => q.eq(q.field("category"), args.category))
      .order("desc")
      .collect()
  },
}) 