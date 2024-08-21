export const transformContactResourse = (resourse) => {
  const {
    email: emailArr = [],
    'first name': firstNameArr = [],
    'last name': lastNameArr = [],
  } = resourse.fields || {};
  const resourseFirstName = firstNameArr[0] || {};
  const resourseLastName = lastNameArr[0] || {};
  const resourseEmail = emailArr[0] || {};
  const tags = Array.isArray(resourse.tags) ? resourse.tags : [];

  return {
    id: resourse.id,
    avatarUrl: resourse.avatar_url,
    firstName: resourseFirstName.value,
    lastName: resourseLastName.value,
    email: resourseEmail.value,
    tags,
  };
};
