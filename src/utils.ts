import { getCollection } from "astro:content";

export const getWorkExperience = async () => {
  let collection = await getCollection("work");
  collection = collection.sort(
    (a, b) =>
      new Date(b.data.startDate).valueOf() - new Date(a.data.startDate).valueOf(),
  );

  const work = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  return work;
}


export const getProjects = async () => {
  let collection = await getCollection("project");
  collection = collection.sort(
    (a, b) =>
      new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  const project = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );

  return project;
}

export const getBlogs = async () => {
  let collection = await getCollection("blog");
  collection = collection.sort(
    (a, b) =>
      new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  ).filter((b) => !b.data.draft )

  const blogs = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );

  return blogs;
}
