const { PrismaClient } = require("@prisma/client");

let db = null;

var globalDb;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
  db.$connect();
} else {
  if (!globalDb) {
    globalDb = new PrismaClient();
    globalDb.$connect();
  }
  db = globalDb;
}

export { db };
