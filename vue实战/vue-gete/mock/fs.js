function read(cd) {
    fs.readFile('./list.json', "utf8", function (err, data) {
        if (err) cd([])
        cd(data)
    })
}
read(function (data) {
    console.log(data)
})