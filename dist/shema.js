"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-middleware/node_modules/graphql-tools");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const path_1 = __importDefault(require("path"));
const allTypes = (0, merge_graphql_schemas_1.fileLoader)(path_1.default.join(__dirname, "./api/**/*.graphql"));
const allResolvers = (0, merge_graphql_schemas_1.fileLoader)(path_1.default.join(__dirname, "./api/**/*.resolvers.*"));
const mergedTypes = (0, merge_graphql_schemas_1.mergeTypes)(allTypes);
const mergedResolvers = (0, merge_graphql_schemas_1.mergeResolvers)(allResolvers);
const schema = (0, graphql_tools_1.makeExecutableSchema)({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
});
exports.default = schema;
//# sourceMappingURL=shema.js.map