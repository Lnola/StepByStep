const TABLE_NAME = 'recipes';

const createRecipe = (name, isPublished = false, imageUrl) => {
  return {
    name,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    isPublished,
    publishedAt: isPublished ? new Date() : null,
    createdAt: new Date(),
    imageUrl,
    userId: 1,
  };
};

module.exports = {
  up(queryInterface) {
    const recipes = [
      createRecipe(
        'Varivo',
        false,
        'https://image.dnevnik.hr/media/images/1920x1080/Feb2021/62032174-varivo-leca-rucak.jpg',
      ),
      createRecipe(
        'Spaghetti Carbonara',
        true,
        'https://images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg',
      ),
      createRecipe(
        'Hamburger',
        true,
        'https://cdn.vox-cdn.com/thumbor/fIkgtG0ZrwPYf3MI_flSGiLTv9M=/0x50:960x590/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50320797/13419042_1359144147435857_8887026700437396746_n.0.jpg',
      ),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, recipes);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
