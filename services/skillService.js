export default function useSkillService() {
  const { $axios } = useNuxtApp();

  const getSkills = async () => {
    try {
      const response = await $axios.get('/skills');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching skills');
    }
  };

  const getSkillById = async (id) => {
    try {
      const response = await $axios.get(`/skills/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching skill');
    }
  };

  const createSkill = async (skillData) => {
    try {
      const response = await $axios.post('/skills', skillData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating skill');
    }
  };

  const updateSkill = async (id, skillData) => {
    try {
      const response = await $axios.put(`/skills/${id}`, skillData);
      return response.data;
    } catch (error) {
      throw new Error('Error updating skill');
    }
  };

  const deleteSkill = async (id) => {
    try {
      await $axios.delete(`/skills/${id}`);
    } catch (error) {
      throw new Error('Error deleting skill');
    }
  };

  return {
    getSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
  };
}
