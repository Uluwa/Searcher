
export const searchComments = (comments, searchString) => {
    return comments.filter((el) => {
      return el.email.toUpperCase().includes(searchString.toUpperCase()) || el.body.toUpperCase().includes(searchString.toUpperCase()) || el.name.toUpperCase().includes(searchString.toUpperCase())})
  }

export const renderCards = (comments,commentsContainer) => {
    commentsContainer.innerHTML = comments.reduce((acc,el) => {
    return acc + `<div class="card">
       <div class="card-header">
        ${el.email}
       </div>
      <div class="card-body">
        <h5 class="card-title">
        ${el.name}
        </h5>
        <p class="card-text">
        ${el.body}
        </p>
        <a href="detail_comment/detail_comment.html?id=${el.id}"  class="btn btn-primary">Go somewhere</a>
       </div>
     </div>` 
  },'' )
  }

  export const renderEmailOptions = (comments,select) => {
      const emailOptions = comments.reduce((acc,el) => {
      return acc + `<option value="${el.email}">
      ${el.email}</option>` 
    },'' ) 
    select.innerHTML = '<option selected>Select your e-mail</option>' + emailOptions; 
  }
  
 