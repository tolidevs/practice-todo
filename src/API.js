const baseURL = "https://reqres.in/api";

// get request
const get = (path) => {
    return (
        fetch(`${ baseURL }${ path }`)
            .then(resp => resp.json())
    )
}

// post request
const post = (path, data) => {
    const configObj = {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return (fetch(`${baseURL}${path}`, configObj)
        .then(resp => resp.json())
        .then(console.log)
    )
}

export default {
    get,
    post
}

// users response:
// {page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
// ad: {company: "StatusCode Weekly", url: "http://statuscode.org/", text: "A weekly newsletter focusing on software developme…server, performance, and the stack end of things."}
// data: Array(6)
// 0: {id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}
// 1: {id: 2, email: "janet.weaver@reqres.in", first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}
// 2: {id: 3, email: "emma.wong@reqres.in", first_name: "Emma", last_name: "Wong", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}
// 3: {id: 4, email: "eve.holt@reqres.in", first_name: "Eve", last_name: "Holt", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"}
// 4: {id: 5, email: "charles.morris@reqres.in", first_name: "Charles", last_name: "Morris", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"}
// 5: {id: 6, email: "tracey.ramos@reqres.in", first_name: "Tracey", last_name: "Ramos", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}
// length: 6
// __proto__: Array(0)
// page: 1
// per_page: 6
// total: 12
// total_pages: 2
// __proto__: Object