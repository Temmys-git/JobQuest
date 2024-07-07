import { jobs } from "./jobStatic";

export const myAccountData = [
    {
        id:1,
        tab:'my jobs',
        data:jobs
    },
    {
        id:2,
        tab:'my application',
        data:jobs.slice(5)
    }
]

