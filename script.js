const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result=document.getElementById('result')
const sound=document.getElementById('sound')
const btn=document.getElementById('search-btn')



btn.addEventListener("click",()=>{
    let inword=document.getElementById('inp-word').value
    fetch(`${url}${inword}`)
        .then(respose => respose.json())
        .then(data => {
            result.innerHTML=`
            <div class="word">
                <h3>${inword}</h3>
                <button onclick="playsound()" class="vol-up">
                <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[1].text}</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-examples">
                ${data[0].meanings[0].definitions[0].example}
            </p>`
            sound.setAttribute("src",`${data[0].phonetics[0].audio}`)

            console.log(sound)
        })

        .catch(()=>{
            result.innerHTML=`<h3 class="error">Could't find the result<h3/>`
        })

})
function playsound(){
    sound.play()
}