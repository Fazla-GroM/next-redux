import * as v from "valibot";

export const userSchema = v.object({
    id: v.number(),
    firstName: v.string(),
    lastName: v.string(),
    image: v.string(),
    email: v.string(),
});

export const getUserDetailsArgumentsSchema = v.object({
    id: v.number(),
});
