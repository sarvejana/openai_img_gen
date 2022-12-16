function onSubmit(e) {
    e.preventDefault();

    //Initialize
    document.querySelector('#image').src='';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;
    
    if (prompt === '') {
        alert('Please add some text');
        return;
    }
    //console.log(prompt,size);
    generateImageRequest(prompt,size);
}
async function generateImageRequest(prompt,size) {
    try {
        const response = await fetch('/openai/generateimage', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });
        if (!response.ok) {
            throw new Error ('that image cannot be generated');
        }
      
        const data = await response.json();
        console.log(data);

        const imageURL = data.data;
        document.querySelector('#image').src='imageURL';

    } catch(error) {
        console.log(error);
    }
}

document.querySelector('#image-form').addEventListener('submit',onSubmit);