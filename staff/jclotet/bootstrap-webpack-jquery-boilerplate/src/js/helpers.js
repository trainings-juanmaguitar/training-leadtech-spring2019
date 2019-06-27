const getDataFromResponse = ({ data }) => data;
const getFirstTenItems = data => data.slice(0, 10);
const getItemsList = firstTenPosts =>
  firstTenPosts.map(({ title }) => `<li>${title}</li>`);
const getItemsListString = firstTenItemsList => firstTenItemsList.join('');
const writeHtmlListPosts = htmlListFirstTenPosts => {
  $('#list_posts').html(htmlListFirstTenPosts);
};

export {
  getDataFromResponse,
  getFirstTenItems,
  getItemsList,
  getItemsListString,
  writeHtmlListPosts,
};
