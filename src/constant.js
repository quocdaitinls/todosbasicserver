export const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb+srv://admin:admin@cluster0.aodx4.mongodb.net/basic_todos?retryWrites=true&w=majority";
export const JWT_KEY =
    process.env.JWT_KEY ||
    "7b0d99935b4874dd524c0d7aa6b13faa9b4c9186e385156b4c7699c57194de9165dc422955a0dd42374422e63ea4ae91f5ab54aeed3f46e8545948978ca4cc7e";
export const PORT = process.env.PORT || 4000;

export const ACCESS_TOKEN = "token";
