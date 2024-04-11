const CreateCard = async (values,token) => {
    console.log(values);
    let data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            card: values,
            token:token,
        }),
    };
    const resposnse = await fetch("/server/server-postadd.php", data)
    const responseJson = await resposnse.json();
    console.log(responseJson);

}
export default CreateCard;