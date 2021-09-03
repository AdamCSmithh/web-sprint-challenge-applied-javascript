const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span')

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);

  headerDiv.className = 'header';
  dateSpan.className = 'date';
  tempSpan.className = 'temp';

  dateSpan.textContent = `${date}`;
  titleH1.textContent = `${title}`;
  tempSpan.textContent = `${temp}`;

 
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  return headerDiv;

}

const headerAppender = (selector) => {
  const parentElem = document.querySelector(`${selector}`)
  parentElem.appendChild(Header("Climate Change Ruining Lives?", 2021, 120));


  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
