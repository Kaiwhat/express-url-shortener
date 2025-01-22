import { index } from "drizzle-orm/mysql-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const urls = pgTable(
	"urls",
	{
		short: varchar(10).primaryKey(),
		origin: varchar(256).notNull(),
	},
	(table) => {
		return {
			originIdx: index("origin_idx").on(table.origin),
		};
	},
);
