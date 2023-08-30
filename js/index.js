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
        <a class="tab text-lg font-medium hover:tab-active hover:text-3xl hover:text-red-600">${category.category_name}</a> 
        `
        tabContainer.appendChild(div);
    });
}


handleCategory();


