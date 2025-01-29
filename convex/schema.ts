import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  comments: defineTable({
    content: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    authorImage: v.string(),
    postId: v.string(),
    postType: v.string(),
    createdAt: v.number(),
  }),
  
  forumPosts: defineTable({
    title: v.string(),
    content: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    authorImage: v.string(),
    category: v.string(),
    createdAt: v.number(),
  }),

  forums: defineTable({
    title: v.string(),
    content: v.string(),
    category: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    authorImage: v.string(),
    replyCount: v.number(),
    _creationTime: v.number(),
  }),
});
