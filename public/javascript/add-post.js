async function newFormHandler(event) {
    event.preventDefault();
    console.log("button????")
  
    const title = document.querySelector('input[name="post-title"]').value;
    const contents = document.querySelector('textarea[name="contents"]').value;
    console.log("title here", title)
  
    if (title && contents) {
      const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        contents
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);