import { gql } from "@apollo/client"

export function getFaqQuery() {
    return gql`
        query {
            faqs(where: { isDeleted: { eq: false } }, order: { order: ASC }) {
                id
                order
                answer
                question
                createdBy
            }
        }
    `
}
