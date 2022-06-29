// https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
import { initSqliteBridge } from "@trong-orm/electron-better-sqlite3-backend/preload";

initSqliteBridge();
