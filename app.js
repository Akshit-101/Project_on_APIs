document.addEventListener('DOMContentLoaded', function () {
  let arr = [];

  function getData() {
    const getBlog = document.getElementById('blog');

    axios
      .get(
        'https://gnews.io/api/v4/search?q=example&token=bc7421cc83b2d6f6a5afac867a87d87c&lang=en'
      )
      .then((res) => {
        const listOfArticles = res.data.articles;

        listOfArticles.forEach((article) => {
          const getArticle = document.createElement('div');
          getArticle.setAttribute('class', 'article');

          const title = document.createElement('h3');
          const content = document.createElement('p');
          const img = document.createElement('img');

          title.innerText = article.title || 'Untitled';
          content.innerText = article.content || 'No content available';
          img.setAttribute('src', article.image || '');

          getArticle.appendChild(title);
          getArticle.appendChild(img);
          getArticle.appendChild(content);

          arr.push(getArticle);
        });

        arr.forEach((ele) => {
          getBlog.appendChild(ele);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  getData();
});
