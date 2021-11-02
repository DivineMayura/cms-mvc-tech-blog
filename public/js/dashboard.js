
const newFormHandler = async (event) => {
  event.preventDefault();

  const blog_name = document.querySelector('#project-name').value.trim();
//   const user_id = res.session.user_id
  const description = document.querySelector('#project-desc').value.trim();

  if (blog_name && description) {
    const response = await fetch(`/api/dashboard`, {
      method: 'POST',
      body: JSON.stringify({ blog_name, description, }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dashboard/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

if(document.querySelector('.project-list') !== null){document.querySelector('.project-list').addEventListener('click', delButtonHandler);}

