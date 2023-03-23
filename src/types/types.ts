export type searchProperties = {
    data: any,
    status: string,
    query : string
};

export type MyKnownError = {
    errorMessage: string
}

export type TuneData = {
    data: []
}

export type TuneDataState = {
    iTuneData: TuneData[]
}

export interface SearchTune{
    query: string
}

export interface SearchTunesState{
    SearchTunes: SearchTune[]
}