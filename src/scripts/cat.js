const catBtn = document.querySelectorAll(".catSelector");
const blogPosts = document.querySelector("#blogPosts");

//CHECK IF WE ARE ON A BLOG PAGE
if(blogPosts && catBtn){
  //HANDLE THE FILTERING BASED ON CAT BTN
  catBtn.forEach(btn => {
    btn.addEventListener("click", (event)=>{
      const targetCat = event.target.innerHTML;
      blogPosts.dataset.filter = targetCat;
      const articles = document.querySelectorAll("article.story");
      articles.forEach((art)=>{
        const listOfCatBtn = [...art.querySelectorAll(".catSelector")];
        const listOfTags = listOfCatBtn.map(el=>{return el.innerHTML});
        if(!listOfTags.includes(targetCat)){
          art.classList.add('hidden');
        }
      })
    })
  })

  //HANDLE THE FILTERING OF THE NEW CONTENT
  let infiniteScroll = document.getElementsByClassName('js-infinite-scroll')[0];
  infiniteScroll.addEventListener('content-loaded', function(event){
    // new content has been loaded
    // event.detail -> url of the file that was loaded
    const targetCat = blogPosts.dataset.filter;
    if(targetCat){
      const articles = document.querySelectorAll("article.story");
      articles.forEach((art)=>{
        const listOfCatBtn = [...art.querySelectorAll(".catSelector")];
        const listOfTags = listOfCatBtn.map(el=>{return el.innerHTML});
        if(!listOfTags.includes(targetCat)){
          art.classList.add('hidden');
        }
      })
    }
  });

  //HANDLE THE FILTER PASSED VIA URL PARAM
  const urlObj = new URLSearchParams(window.location.search);
  const targetCat = urlObj.get('filter');
  if(targetCat){
    blogPosts.dataset.filter = targetCat;
    const articles = document.querySelectorAll("article.story");
    articles.forEach((art)=>{
      const listOfCatBtn = [...art.querySelectorAll(".catSelector")];
      const listOfTags = listOfCatBtn.map(el=>{return el.innerHTML});
      if(!listOfTags.includes(targetCat)){
        art.classList.add('hidden');
      }
    })
  }
}
