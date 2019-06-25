const getDataFromResponse = ({ data }) => data;
const getFirstTenItems = data => data.slice(0, 10);
const getItemsList = firstTenPosts =>
  firstTenPosts.map(
    ({ name, email }, i) =>
      `<li> Num.${i + 1} Name is: ${name} - E-mail is: ${email} </li>`
  );
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
