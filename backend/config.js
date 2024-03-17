export const PORT = 5555;
import dotenv from 'dotenv';

dotenv.config();
export const mongoDBURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.opl5roo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

