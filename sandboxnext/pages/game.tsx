import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "https://www.dnd5eapi.co/graphql";
const index: string = "acid";
const query = gql`
    {
        damageTypes {
            index
            name
            desc
        }
    }
`;
// const query = gql`
//     {
//         damageType(index: "${index}") {
//             index
//             name
//             desc
//         }
//     }
// `;

export default function Game() {
    const { data, isLoading, error } = useQuery("launches", () => {
        return request(endpoint, query);
    });
    console.log(data);
    if (isLoading) return <>{"Loading..."}</>;
    if (error) return <>{`${error}`}</>;

    return (
        <div>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
}
