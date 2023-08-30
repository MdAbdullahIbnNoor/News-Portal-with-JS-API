const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data = await response.json();

    categoryTab(data.data.news_category);
}

const categoryTab = (data) => {
    const tabContainer = document.getElementById('tab-container');


    data.slice(0, 3).forEach((category) => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="tab text-lg font-medium hover:tab-active hover:text-3xl hover:text-red-600" onclick = "handleClickonCategory('${category.category_id}')">${category.category_name}</a> 
        `
        tabContainer.appendChild(div);
    });
}

const handleClickonCategory = async (id = '01') => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);

    const data = await response.json();
    showNews(data.data);
}

const showNews = (news) => {
    const newsContainer = document.getElementById('news-container');

    newsContainer.innerHTML = '';

    news.forEach((card) => {
        console.log(card);

        const div = document.createElement('div');
        div.innerHTML = `
        
                      <div class="overflow-hidden bg-white space-y-4 rounded-xl  h-[520px]">
                        <img src=${card.image_url} class="object-cover w-full bg-contain h-64 px-4 py-3 rounded-xl" alt="" />
                        <div class="p-5 border border-t-0">
                          <div class="flex items-center justify-between mb-5 gap-4">
                            <a href="/" aria-label="Category" title="Visit the East" class="inline-block text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mb-5 -mt-5">${card.title.slice(0, 50)}</a>
                            <button class="bg-sky-700 px-2 py-2 -mt-8 rounded-lg text-lg font-medium text-white hover:bg-sky-900">${card?.rating?.badge}</button>
                          </div>
                          <p class="mb-5 text-gray-700">
                            ${card.details.slice(0,100)}
                          </p>  
                          
                          <!---- author info here ----->
                          <div class="flex items-center justify-between">
                            <div class="flex w-1/2 items-center">
                                <a href="/" aria-label="Author" title="Author" class="mr-3">
                                    <img src=${card?.author?.img} alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                                  </a>
                                  <div>
                                    <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">${card?.author?.name}</a>
                                    <p class="text-sm font-sm leading-4 text-gray-700">${card?.author?.published_date.slice(0,11)}</p>
                                  </div>
                            </div>
                            <button class="btn btn-active btn-neutral">Details</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        `

        newsContainer.appendChild(div);
    })
}


handleCategory();


