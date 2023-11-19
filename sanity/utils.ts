interface buildQueryParams {
    type: string
    query:string
    category:string
    page:number
    perPage?:number

}

export function buildQuery(params : buildQueryParams){
    const {type , query , category , page , perPage} = params

    const conditions = [`*[_type=="${type}"]`]

    if(query) conditions.push(`title match "*${query}*" `)

    if(category && category!=='all')  conditions.push(`category == "${category}" `);

}