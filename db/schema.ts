import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const config = pgTable("config", {
    key: text("key").primaryKey(),
    value: text("value").notNull(),
});

export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    keywords: text("keywords"),
    details: text("details"),
});
