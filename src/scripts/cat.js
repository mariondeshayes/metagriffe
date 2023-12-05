const catBtn = document.querySelectorAll(".catSelector");
const blogPosts = document.querySelector("#blogPosts");
const filterDisplay = document.querySelector("#filter");
const filterBtn = filterDisplay.querySelector("button");

//CHECK IF WE ARE ON A BLOG PAGE
if(blogPosts && catBtn){
  //HANDLE THE FILTERING BASED ON CAT BTN
  catBtn.forEach(btn => {
    btn.addEventListener("click", (event)=>{
      const targetCat = event.target.innerHTML;
      blogPosts.dataset.filter = targetCat;
      filterDisplay.classList.remove('opacity-0');
      filterBtn.innerHTML = "x "+ targetCat;
      const articles = document.querySelectorAll("article.story");
      articles.forEach((art,index)=>{
        const listOfCatBtn = [...art.querySelectorAll(".catSelector")];
        const listOfTags = listOfCatBtn.map(el=>{return el.innerHTML});
        if(!listOfTags.includes(targetCat)){
          if(index){
            art.classList.add('hide');
          }
        }
      })
    })
  })

  //HANDLE THE FILTERING WHEN NEW CONTENT ARRIVES
  let infiniteScroll = document.getElementsByClassName('js-infinite-scroll')[0];
  infiniteScroll.addEventListener('content-loaded', function(event){
    // new content has been loaded
    // event.detail -> url of the file that was loaded
    const targetCat = blogPosts.dataset.filter;
    if(targetCat){
      const articles = document.querySelectorAll("article.story");
      articles.forEach((art,index)=>{
        const listOfCatBtn = [...art.querySelectorAll(".catSelector")];
        const listOfTags = listOfCatBtn.map(el=>{return el.innerHTML});
        if(!listOfTags.includes(targetCat)){
          if(index){
            art.classList.add('hide');
          }
        }
      })
    }
  });

  //HANDLE THE FILTER PASSED VIA URL PARAM
  const urlObj = new URLSearchParams(window.location.search);
  const targetCat = urlObj.get('filter');
  if(targetCat){
    blogPosts.dataset.filter = targetCat;
    filterDisplay.classList.remove('opacity-0');
    filterBtn.innerHTML = "x "+ targetCat;
    const articles = document.querySelectorAll("article.story");
    articles.forEach((art,index)=>{
      const listOfCatBtn = [...art.querySelectorAll(".catSelector")];
      const listOfTags = listOfCatBtn.map(el=>{return el.innerHTML});
      if(!listOfTags.includes(targetCat)){
        if(index){
          art.classList.add('hide');
        }
      }
    })
  }

  //REMOVE THE FILTER IF BTN PRESSED
  filterBtn.addEventListener('click',(event)=>{
    filterDisplay.classList.add('opacity-0');
    blogPosts.removeAttribute("filter");
    window.history.replaceState({}, document.title, "/blog");
    const articles = document.querySelectorAll("article.story");
    articles.forEach((art, index)=>{
      if(index){
        art.classList.remove('hide');
      }
    })
  })
}
