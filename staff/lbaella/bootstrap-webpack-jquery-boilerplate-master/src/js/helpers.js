const getDataFromResponse = ({ data }) => data;
const getFirstTenItems = data => data.slice(0, 10);
const getItemsList = firstTenPosts =>
  //firstTenPosts.map(({ title }) => `<li>${title}</li>`);
  firstTenPosts.map(
    ({ name, email }, i) =>
      `<li> ${i + 1} Name: ${name} - E-mail: ${email} </li>`
  );
const getItemsListString = firstTenItemsList => firstTenItemsList.join('');
const writeHtmlListPosts = htmlListFirstTenPosts => {
  $('#list_posts').html(htmlListFirstTenPosts);
};


export {
  getDataFromResponse,
  getFirstTenItems,
  getItemsList,
  getItemsListString,z
  writeHtmlListPosts,
};
