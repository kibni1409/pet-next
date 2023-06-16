type Props = {
    params: {
        id: string
    }
}
export default function Post({params: {id}}: Props) {
    return <h2>Post {id}</h2>
}