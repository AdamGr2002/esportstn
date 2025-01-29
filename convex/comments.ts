import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const add = mutation({
  args: {
    content: v.string(),
    postId: v.string(),
    postType: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    authorImage: v.string(),
  },
  handler: async (ctx, args) => {
    const commentId = await ctx.db.insert("comments", {
      ...args,
      createdAt: Date.now(),
    });
    return commentId;
  },
});

export const list = query({
  args: {
    postId: v.string(),
    postType: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("comments")
      .filter((q) => q.eq(q.field("postId"), args.postId))
      .filter((q) => q.eq(q.field("postType"), args.postType))
      .order("desc")
      .collect();
  },
}); 