# Halo RESTful API Documentation

Halo 2.x 的 RESTful API 在线文档，使用文档可参考：[Halo 文档 / RESTful API](https://docs.halo.run/category/restful-api)。

## 维护

此项目基于 Halo 生成的 [OpenAPI Spec](https://github.com/halo-dev/halo/tree/main/api-docs/openapi/v3_0) 文件，使用 [Swagger UI](https://swagger.io/tools/swagger-ui/) 渲染。

添加新版本的 API 文档时，只需将新版本的 OpenAPI Spec 文件放置在 `src/assets/{version}` 目录下即可，具体步骤：

```bash
cd path/to/halo

./gradlew generateOpenapiDoc
```

执行完成之后，将 `api-docs/openapi/v3_0` 目录下的所有 JSON 文件复制到 `src/assets/{version}` 目录下即可，推送到此仓库之后，会使用 [Cloudflare Pages](https://pages.cloudflare.com/) 自动部署。
