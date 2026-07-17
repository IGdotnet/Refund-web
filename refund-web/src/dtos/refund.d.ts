type refundAPIResponse = {
    id: string,
    userId: string
    name: string
    category: categoiresAPIEnum
    amount: number
    filename: string
    user: {
        name: string
    }
}

type refundsPaginationAPIResponse = {
    refunds: refundAPIResponse[],
    pagination: {
        page: number
        perPage: number
        totalRecords: number
        totalPages: number
    }
}