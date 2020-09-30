const URL = "https://api.myidea.fr/v1/"

export function getNotes(){
    return new Promise((resolve, reject) => {

        fetch(URL+'notes')
        .then(response => response.json())
        .then(result => {
            console.log('Reponse api getNotes', result)
            resolve(result)
        })
        .catch(error => {
            console.error(error)
            reject(error)
        })
    })
}

export function createNote (note) {
   
   return new Promise ((resolve, reject) => {

    if(note.title && note.description){

        var body = {
            title: note.title,
            description: note.description
        }

        var params = {
            method: "POST",
            cache: 'default',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        }

        fetch(URL+'notes', params)
        .then(response => {
            console.log(response)
            resolve()
            setTimeout(window.location.reload(), 5000)
        })
        .catch(error => reject(error))
    


    }else{
        reject('Informations manquantes')
    }
    
   })
   
   


}

export function deleteNote (id) {
    return new Promise ((resolve, reject) => {
        fetch((URL+'notes/'+id), {method: 'DELETE'})
        .then(response => {
            console.log(response)
            resolve()
            setTimeout(window.location.reload(), 5000)
        })
        .catch(error => reject(error))
    })

}

export function editNote (note) {
    return new Promise ((resolve, reject) => {

    if(note.title && note.description){

        var body = {
            title: note.title,
            description: note.description
        }

        var params = {
            method: "PATCH",
            cache: 'default',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        }

        fetch(URL+'notes/'+note.id, params)
        .then(response => {
            console.log(response)
            resolve()
            setTimeout(window.location.reload(), 5000)
        })
        .catch(error => reject(error))
    


    }else{
        reject('Informations manquantes')
    }
    
   })
   
   


}




