
export interface JOBS {
    id: number;
    companyName: string;
    title: string;
    companyLogo: string;
    reference: string;
}


export interface JOBS_DETAIL {
    id: number;
    companyName: string;
    title: string;
    companyLogo: string;
    reference: string;
    location: string;
    industries: string[];
    types: string[];
    description: string;
}