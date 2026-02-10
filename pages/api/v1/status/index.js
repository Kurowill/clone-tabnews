function status(request, response) {
    response.status(200).json({ chave: "Status ok" });
    //    response.status(200).send("Status ok");
}

export default status;