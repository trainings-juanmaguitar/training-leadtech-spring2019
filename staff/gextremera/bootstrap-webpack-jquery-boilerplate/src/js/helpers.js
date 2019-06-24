const getDataFromResponse = ({ data }) => data;
const getFirstTenItems = data => data.slice(0, 10);
const getItemsList = firstTenPosts => firstTenPosts.map(({ id, name, email }) => `<li>Para el post con id: ${id}, tiene un usuario con nombre: <strong>"${name}"</strong> y email: <strong><a href="mailto:${email}">${email}</a></strong></li>`);
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
