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

    const offset = (page-1) * perPage
    const limit = perPage

    if(conditions.length >1){
        return `${conditions[0]} && (${conditions.slice(1).join('&&')} [${offset}...${limit}]) `
    }else{
        return `${conditions[0]}[${offset}...${limit}]`;
    }

}