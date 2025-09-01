import { PostgrestClient } from "@supabase/postgrest-js";

// 直接从环境变量读取配置
const POSTGREST_URL = process.env.POSTGREST_URL || "http://localhost:3000";
const POSTGREST_SCHEMA = process.env.POSTGREST_SCHEMA || "public";
const POSTGREST_API_KEY = process.env.POSTGREST_API_KEY || "";

// Edge Runtime 兼容的 fetch 函数
const edgeCompatibleFetch: typeof fetch = async (input, options = {}) => {
  // 检查并修复 URL 中的 columns 参数
  let finalUrl = input;
  if (input instanceof URL || typeof input === "string") {
    const urlObj = input instanceof URL ? input : new URL(input);
    const columns = urlObj.searchParams.get("columns");

    if (columns && columns.includes('"')) {
      // 移除所有双引号
      const fixedColumns = columns.replace(/"/g, "");
      urlObj.searchParams.set("columns", fixedColumns);
      finalUrl = urlObj.toString();
    }
  }

  // 确保请求头包含认证信息
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${POSTGREST_API_KEY}`,
    ...options.headers,
  };

  return fetch(finalUrl, {
    ...options,
    headers,
  });
};

// 此客户端仅在服务器端（API 路由）使用
export const postgrestClient = new PostgrestClient(POSTGREST_URL, {
  schema: POSTGREST_SCHEMA,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${POSTGREST_API_KEY}`,
  },
  fetch: edgeCompatibleFetch,
});
