var ip = "ENTER_YOUR_IP_ADDRESS_WITH_PROTOCOL" // Ex: http://127.0.0.1
var port = "ENTER_YOUR_PORT" // Ex: 8080
var path = "ENTER_YOUR_PATH" // Ex: /data
// Enter here your ip address, port (only numbers) and path, where you will save, take and remove files (path should be available by ip (Ex: http://127.0.0.1:8080/data/file.txt - I can open file.txt by browser (here path will be /data)))

function create_response (data){ // Creating button with response
    var response_button = document.createElement("input")
    response_button.type = "button"
    response_button.id = "response"
    response_button.value = data
    response_button.onclick = function () {remove_response()}
    document.body.appendChild(response_button)
}

function remove_response(){ // Removing button with response
    document.getElementById("response").remove()
    location.reload();
}

async function sendfile () // Save chosen file
{
    const formData = new FormData();
    formData.append('file', document.getElementById("get_file").files[0]);

    const res = fetch(`${ip}:${port}/upload-file`, {method: "POST", body: formData, mode: "cors"}).then(response => response.text()).then(data => {create_response(data)}) // Sending file to the API server
} 


async function getfiles() // Get all files
{
    const res = fetch(`${ip}:${port}/get-files`, {method: "GET",mode: "cors"}).then(response => response.text()).then(data =>{ // Getting list of files from API server
        files_list = data.split(";")
        files_list.pop()
        if (files_list.length === 0){
            create_response("No files found")
        }
        return files_list
    })
    return await res
}

async function deletefile(filename) // Remove chosen file
{
    const res = fetch(`${ip}:${port}/remove-file/${filename}`, {method: "POST", mode: "cors"}).then(response => response.text()).then(data => {create_response(data)}) // Sending remove request to the API server
}

function addOnClick(element, file_name) { // Adding a unique remove event to button
    element.onclick = function () {
       deletefile(file_name)
  };
};   

getfiles().then(files_list =>  // Display all files
{
    for(i = 0; i < files_list.length; i++)
    {
        var file = document.createElement("li")
        var div1 = document.createElement("div")
        var div2 = document.createElement("div")
        var link = document.createElement("a")
        var button = document.createElement("input")

        button.type = "button"
        div2.id = "url"
        link.href = `${ip}${path}/${files_list[i]}`
        link.download = files_list[i]
        link.innerText = files_list[i]
        button.className = "trashbox"
        button.id = files_list[i]
        div1.className = "outer_div"
        addOnClick(button, files_list[i])

        div2.appendChild(link)
        div1.appendChild(div2)
        div1.appendChild(button)
        file.appendChild(div1)
        document.getElementById("file_list").appendChild(file)
    }
})
