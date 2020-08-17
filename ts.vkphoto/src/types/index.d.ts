type TUser = {
    name: string,
    surname?: string,
    age?: number,
};

type TPage = {
    year: number,
    photos: any[],
    isFetching: boolean,
}

type TRootState = {
    page: TPage,
    user: TUser,
};