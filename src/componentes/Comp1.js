function Comp1(props) {
    const estilo = {
        color: props.color,
        backgroundColor: props.bc,
    };

    let msgPapa = () => {
        props.msgXpapa( " hola papa..." ) ;
    }

    return (
        <>
            <table style={estilo} border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>postID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.obj.id}</td>
                        <td>{props.obj.postId}</td>
                        <td>{props.obj.name}</td>
                        <td>{props.obj.email}</td>
                        <td>{props.obj.body}</td>
                    </tr>
                    <tr>
                        <td colSpan="5">
                            <button onClick={msgPapa}>enviar Msg</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    );
}

export default Comp1;