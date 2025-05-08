import { faker } from "@faker-js/faker";
import { factory, oneOf, primaryKey } from "@mswjs/data";
import { http, HttpResponse } from "msw";

faker.seed(100);

const database = factory({
    post: {
        id: primaryKey(() => faker.number.int()),
        title: () => faker.lorem.lines({ min: 1, max: 3 }),
        body: () => faker.lorem.lines({ min: 2, max: 20 }),
        views: () => faker.number.int(),
        tags: () => ["sas"],
        reactions: {
            likes: () => faker.number.int({ min: -100, max: 100 }),
            dislikes: () => faker.number.int({ min: -100, max: 100 }),
        },
        author: oneOf("user"),
    },
    user: {
        id: primaryKey(() => faker.number.int()),
        firstName: () => faker.person.firstName(),
        lastName: () => faker.person.lastName(),
        email: () => faker.internet.email(),
        image: () => faker.image.avatar(),
    },
});

function preseedDatabase() {
    const userEntries = [...Array.from({ length: 20 }).keys()].map(() => {
        return database.user.create();
    });

    for (let index = 0; index < 100; index += 1) {
        const randomUserIndex = Math.floor(Math.random() * userEntries.length);

        database.post.create({
            author: userEntries[randomUserIndex],
        });
    }
}

preseedDatabase();

const apiRoot = "https://dummyjson.com";

export const handlers = [
    http.get(`${apiRoot}/posts`, ({ request }) => {
        const url = new URL(request.url);

        const limit = url.searchParams.get("limit");
        const skip = url.searchParams.get("skip");

        const posts = database.post
            .findMany({
                take: Number(limit),
                skip: Number(skip),
            })
            .map((post) => ({
                id: post.id,
                title: post.title,
                body: post.body,
                views: post.views,
                tags: post.tags,
                reactions: {
                    likes: post.reactions.likes,
                    dislikes: post.reactions.dislikes,
                },
                userId: post.author?.id,
            }));

        return HttpResponse.json(
            {
                posts,
                total: database.post.count(),
                skip: Number(skip),
                limit: Number(limit),
            },
            { status: 200 }
        );
    }),
    http.get<{ id: string }>(`${apiRoot}/posts/:id`, ({ params }) => {
        const post = database.post.findFirst({
            where: {
                id: {
                    equals: Number(params.id),
                },
            },
        });

        if (!post) {
            return HttpResponse.json(undefined, { status: 404 });
        }

        const resolvedPost = {
            id: post.id,
            title: post.title,
            body: post.body,
            views: post.views,
            tags: post.tags,
            reactions: {
                likes: post.reactions.likes,
                dislikes: post.reactions.dislikes,
            },
            userId: post.author?.id,
        };

        return HttpResponse.json(resolvedPost, { status: 200 });
    }),

    http.get<{ id: string }>(`${apiRoot}/users/:id`, ({ params }) => {
        const user = database.user.findFirst({
            where: {
                id: {
                    equals: Number(params.id),
                },
            },
        });

        if (!user) {
            return HttpResponse.json(undefined, { status: 404 });
        }

        return HttpResponse.json(user, { status: 200 });
    }),
];
