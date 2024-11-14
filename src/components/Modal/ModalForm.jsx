
const ModalForm = (props) => {
    const handleRequest = async () => {
        const options = {
            method: "PUT",
            headers: { accept: "application/json" },
        }

        fetch(
            `https://jsonplaceholder.typicode.com/${props.apiStructure.source}?` +
                `_id=${props.data.id}`,
            options,
        ).catch((err) => {
            console.error(err)
        })
    }

    return <div style={{ width: `${props.width}` }}>{props.children(handleRequest)}</div>
}

export default ModalForm
