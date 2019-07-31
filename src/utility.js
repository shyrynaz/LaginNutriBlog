export const getIdsAndDocs = doc => {
  return {id: doc.id, ...doc.data() };
};