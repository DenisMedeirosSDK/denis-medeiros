import { GraphQLClient } from 'graphql-request'

const URL_ENDPOINT = "https://api-sa-east-1.hygraph.com/v2/clhzfst6j2qd901uphapv00oh/master"

export const client = new GraphQLClient(URL_ENDPOINT)