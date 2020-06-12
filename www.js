//서버를 실행하는 역할

"use strict";

const { createServer } = require("./app.js");
/**
 * option에 담길 내용
 * 서버의 포트
 * ssl == https 443
 * 아마존 key
 * PG 상점 key
 */
const option = {
  port: 80,
};

const www = async (config = {}) => {
  const server = await createServer(config);
  const port = config.port;
  server.listen(port, () => {
    console.log(`서버 돌아갑니다:::${port}`);
  });
};

www(option);
