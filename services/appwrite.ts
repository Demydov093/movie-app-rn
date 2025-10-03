import { Movie } from "@/types";
import { Client, Databases, ID, Query } from "react-native-appwrite";

interface MetricDocument {
    $id: string;
    searchTerm: string;
    movieId: string;
    count: number;
}

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform("com.demids.movieapp");


export const database = new Databases(client);
export const DATABASE_ID = process.env.EXPO_PUBLIC_DATABASE_ID!;
export const METRICS_COLLECTION_ID = "metrics";

export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const res = await database.listDocuments<MetricDocument>(DATABASE_ID, METRICS_COLLECTION_ID, [
            Query.equal("searchTerm", query)
        ]);

        if (res.documents.length > 0) {
            const doc = res.documents[0];
            await database.updateDocument<MetricDocument>({
                databaseId: DATABASE_ID,
                collectionId: METRICS_COLLECTION_ID,
                documentId: doc.$id,
                data: { count: doc.count + 1 },
            });
        } else {
            await database.createDocument<MetricDocument>({
                databaseId: DATABASE_ID,
                collectionId: METRICS_COLLECTION_ID,
                documentId: ID.unique(),
                data: {
                    searchTerm: query,
                    movie_id: movie.id,
                    count: 1,
                    title: movie.title,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                },
            });
        }
    } catch (err) {
        console.error("Error updating search count:", err);
    }
};

export const getTrendingMovies = async (): Promise<T> => {
    try {
        const res = await database.listDocuments<MetricDocument>(DATABASE_ID, METRICS_COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count'),
        ])

        return res.documents as unknown;
    } catch (error) {
        console.log(error);
    }
}