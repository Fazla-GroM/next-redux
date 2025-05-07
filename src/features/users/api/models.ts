import * as v from "valibot";

const addressSchema = v.object({
    address: v.string(),
    city: v.string(),
    state: v.string(),
    stateCode: v.string(),
    postalCode: v.string(),
    country: v.string(),
    coordinates: v.object({
        lat: v.number(),
        lng: v.number(),
    }),
});

export const userSchema = v.object({
    id: v.number(),
    firstName: v.string(),
    lastName: v.string(),
    maidenName: v.string(),
    age: v.number(),
    gender: v.string(),
    email: v.string(),
    phone: v.string(),
    username: v.string(),
    password: v.string(),
    birthDate: v.string(),
    image: v.string(),
    bloodGroup: v.string(),
    height: v.number(),
    weight: v.number(),
    eyeColor: v.string(),
    ip: v.string(),
    macAddress: v.string(),
    university: v.string(),
    ein: v.string(),
    ssn: v.string(),
    role: v.string(),
    userAgent: v.string(),
    address: addressSchema,
    hair: v.object({
        color: v.string(),
        type: v.string(),
    }),
    bank: v.object({
        cardExpire: v.string(),
        cardNumber: v.string(),
        cardType: v.string(),
        currency: v.string(),
        iban: v.string(),
    }),
    company: v.object({
        department: v.string(),
        name: v.string(),
        title: v.string(),
        address: addressSchema,
    }),
    crypto: v.object({
        coin: v.string(),
        wallet: v.string(),
        network: v.string(),
    }),
});

export const getUserDetailsArgumentsSchema = v.object({
    id: v.number(),
});
